import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_FABRICTYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryFabricType = queryFactory(TABLE_FABRICTYPES, keymap);

const listFabricTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryFabricType(null, db, false),
        keymap
    });

const getFabricType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DyeTypeId: id }
    };
    const [fabricType = null] = await queryFabricType(params, db);
    return fabricType;
};

const resolvers = {
    Query: {
        listFabricTypes,
        getFabricType
    }
};

export { resolvers as default, resolvers as fabricTypeResolvers };
