import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_UKSIZES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryUkSize = queryFactory(TABLE_UKSIZES, keymap);

const listUkSizes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryUkSize(null, db, false),
        keymap
    });

const getUkSize = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { SendtoNabilID: id }
    };
    const [ukSize = null] = await queryUkSize(params, db);
    return ukSize;
};

const resolvers = {
    Query: {
        listUkSizes,
        getUkSize
    }
};

export { resolvers as default, resolvers as ukSizeResolvers };
