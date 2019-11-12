import { SQLDataSource } from 'datasource-sql';

class SQLDatabase extends SQLDataSource {
    cacheTimeout = 60;

    query = ({ columns = '*', table, where = undefined }) => {
        let query = this.db.select(columns).from(table);

        if (typeof where !== 'undefined') {
            query = query.where(where);
        }
        return query.cache(this.cacheTimeout);
    };
}

export { SQLDatabase as default, SQLDatabase };
