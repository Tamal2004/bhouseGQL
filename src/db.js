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

        const debugQuery = this.db
            .with(
                'cte',
                this.db.raw(
                    'select *, row_number() over (order by TrimsId) as rowNumber from TrimsDetails'
                )
            )
            .with(
                'current',
                this.db
                    .select('rowNumber')
                    .from('cte')
                    .where({ TrimsId: 195 })
            )
            .select('cte.rowNumber')
            .from('cte')
            .innerJoin('current', function() {
                // this.on('current.rowNumber', '>', 'cte.rowNumber')
                this.on.raw('abs(current.rowNumber - cte.rowNumber) < 2')
            })
            // .whereRaw('[cte].rowNumber > [current].rowNumber')
            // .where('rowNumber', '>', 'current.rowNumber');
        // const debugQuery = this.db.raw(`
        //     with [cte] as (select *, row_number() over (order by TrimsId) as rowNumber from TrimsDetails),
        //     [current] as (select [rowNumber] from [cte] where [TrimsId] = 195) select [cte].TrimsId from [cte], [current]
        //     where abs([cte].rowNumber - [current].rowNumber) <= 2
        //     order by [cte].rowNumber
        //
        //     `);

        console.log(debugQuery.toString());

        // console.log(await debugQuery);

        return query;
    };
}

export { SQLDatabase as default, SQLDatabase };
