import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_FABRICFOR } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryFabricFor = queryFactory(TABLE_FABRICFOR, keymap);

const listFabricFor = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryFabricFor(null, db, false),
        keymap
    });

const getFabricFor = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DyeTypeId: id }
    };
    const [fabricFor = null] = await queryFabricFor(params, db);
    return fabricFor;
};

const resolvers = {
    Query: {
        listFabricFor,
        getFabricFor
    }
};

export { resolvers as default, resolvers as fabricForResolvers };
