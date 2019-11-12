import { composeConnection, queryFactory} from '../libs';

// Local
import keymap from './keymap';
import { TABLE_BUYERS } from './constants';

// Global
import { queryDepartment } from '../department';

const queryBuyer = queryFactory(TABLE_BUYERS, keymap);

const listBuyers = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryBuyer(null, db, false),
        keymap
    });

const getBuyer = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { BuyerID: id }
    };
    const [buyer = null] = await queryBuyer(params, db);
    return buyer;
};

const listDepartmentsByBuyer = async ({ id }, { first, after}, { dataSources: { db } }) => {
    const params = {
        where: { BuyerID: id }
    };
    return composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryDepartment(params, db, false),
        keymap
    });
};

const resolvers = {
    Query: {
        listBuyers,
        getBuyer
    },
    Buyer: {
        departments: listDepartmentsByBuyer
    }
};

export { resolvers as default, resolvers as buyerResolvers };
