import { SQLDataSource } from 'datasource-sql';

const MINUTE = 60;

class SQLDatabase extends SQLDataSource {
    getBuyers() {
        return this.db
            .select('*')
            .from('buyerMST')
            .cache(MINUTE);
    }
    getBuyer({ id }) {
        return this.db
            .select('*')
            .from('buyerMST')
            .where({ BuyerID: id })
            .cache(MINUTE);
    }
}

export { SQLDatabase as default, SQLDatabase };
