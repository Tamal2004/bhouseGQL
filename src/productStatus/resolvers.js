import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_PRODUCTSTATUS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryProductStatus = queryFactory(TABLE_PRODUCTSTATUS, keymap);

const listProductStatus = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryProductStatus(null, db, false),
        keymap
    });

const getProductStatus = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [productStatus = null] = await queryProductStatus(params, db);
    return productStatus;
};

const resolvers = {
    Query: {
        listProductStatus,
        getProductStatus
    }
};

export { resolvers as default, resolvers as productStatusResolvers };
