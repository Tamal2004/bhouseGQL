import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_CADMAINS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryCadMain = queryFactory(TABLE_CADMAINS, keymap);

const listCadMains = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryCadMain(null, db, false),
        keymap
    });

const getCadMain = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DyeTypeId: id }
    };
    const [cadMain = null] = await queryCadMain(params, db);
    return cadMain;
};

const resolvers = {
    Query: {
        listCadMains,
        getCadMain
    }
};

export { resolvers as default, resolvers as cadMainResolvers };
