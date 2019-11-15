import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_FABRICCOMPOSITIONS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryFabricComposition = queryFactory(TABLE_FABRICCOMPOSITIONS, keymap);

const listFabricCompositions = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryFabricComposition(null, db, false),
        keymap
    });

const getFabricComposition = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { FabricComId: id }
    };
    const [dyeType = null] = await queryFabricComposition(params, db);
    return dyeType;
};

const resolvers = {
    Query: {
        listFabricCompositions,
        getFabricComposition
    }
};

export { resolvers as default, resolvers as fabricCompositionResolvers };
