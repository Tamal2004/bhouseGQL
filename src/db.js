import { SQLDataSource } from 'datasource-sql';
import DataLoader from 'dataloader';
import { uniq } from 'lodash';

class SQLDatabase extends SQLDataSource {
    cacheTimeout = 60;

    loaders = [];

    getLoader = ({ column, table, where }) => {
        const whereKey = Object.keys(where)[0];
        return this.loaders.find(
            loader =>
                loader.table === table &&
                loader.column === column &&
                loader.where === whereKey
        ).loader;
    };

    setLoader = params => {
        const { table, where } = params;
        const whereKey = Object.keys(where)[0];
        const loader = new DataLoader(async whereIds => {
            const ids = whereIds.map(x => x[whereKey]);

            const rows = await this.db
                .table(table)
                .whereIn(whereKey, uniq(ids))
                .select()
                .cache(this.cacheTimeout);

            return ids.map(id => rows.filter(node => node[whereKey] === id));
        });

        this.loaders.push({ ...params, where: whereKey, loader });
    };

    checkLoader = ({ column, table, where }) => {
        const whereKey = Object.keys(where)[0];
        return this.loaders.some(loader => {
            return (
                loader.table === table &&
                loader.column === column &&
                loader.where === whereKey
            );
        });
    };

    query = async params => {
        const { columns = '*', table, where = undefined } = params;
        let query = this.db.select(columns).from(table);

        if (typeof where !== 'undefined') {
            // Check with tables
            if (this.checkLoader(params)) {
                const loader = this.getLoader(params);
                return loader.load(where);
            } else {
                this.setLoader(params);
            }
            query = query.where(where);
        }

        const tblName = 'TrimsDetails';
        const idxName = 'TrimsId';

        const tableQuery = this.db
            .select([
                '*',
                this.db.raw(
                    `row_number() over (order by ${idxName}) as rowNumber`
                )
            ])
            .from(tblName);

        const indexQuery = this.db
            .select('rowNumber')
            .from('tableQuery')
            .where(idxName, 195);

        // Swap variables for 'before' pagination
        const joinQueryIndex =
            '([tableQuery].[rowNumber] - [indexQuery].[rowNumber])';
        const joinQuery = this.db.raw(
            `${joinQueryIndex} >= 0 and ${joinQueryIndex} < ?`,
            10
        );

        const debugQuery = this.db
            .with('tableQuery', tableQuery)
            .with('indexQuery', indexQuery)
            .select(['tableQuery.rowNumber', `tableQuery.${idxName}`])
            .from('tableQuery')
            .join('indexQuery', joinQuery)
            .orderBy(idxName);

        // console.log(debugQuery.toString());

        // console.log((await debugQuery).length);
        // console.log(await debugQuery);

        return query.cache(this.cacheTimeout);
    };
}

export { SQLDatabase as default, SQLDatabase };
