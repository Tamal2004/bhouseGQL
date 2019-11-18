import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_CURRENCIES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryCurrency = queryFactory(TABLE_CURRENCIES, keymap);

const listCurrencies = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryCurrency(null, db, false),
        keymap
    });

const getCurrency = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { CURSYMID: id }
    };
    const [currency = null] = await queryCurrency(params, db);
    return currency;
};

const resolvers = {
    Query: {
        listCurrencies,
        getCurrency
    }
};

export { resolvers as default, resolvers as currencyResolvers };
