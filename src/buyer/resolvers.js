import { parseList, parseItem } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_BUYERS } from './constants';

// Global
import { queryDepartment } from "../department";


const listBuyers = async (_, __, { dataSources: { db } }) => {
    const params = {
        table: TABLE_BUYERS
    };
    const buyers = await db.query(params);
    return parseList(buyers, keymap);
};

const getBuyer = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        table: TABLE_BUYERS,
        where: { BuyerID: id }
    };
    const [buyer = null] = await db.query(params);
    return parseItem(buyer, keymap);
};

const listDepartmentsByBuyer = async ({ id }, _, { dataSources: { db } }) => {
    const params = {
        where: { BuyerID: id}
    };
    return await queryDepartment(params, db);
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
