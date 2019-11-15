import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_BUYERSIZES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryBuyerSize = queryFactory(TABLE_BUYERSIZES, keymap);

const listBuyerSizes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryBuyerSize(null, db, false),
        keymap
    });

const getBuyerSize = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { SendtoNewlookID: id }
    };
    const [buyerSize = null] = await queryBuyerSize(params, db);
    return buyerSize;
};

const resolvers = {
    Query: {
        listBuyerSizes,
        getBuyerSize
    }
};

export { resolvers as default, resolvers as buyerSizeResolvers };
