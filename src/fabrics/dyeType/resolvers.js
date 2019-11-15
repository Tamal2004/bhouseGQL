import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_DYETYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryDyeType = queryFactory(TABLE_DYETYPES, keymap);

const listDyeTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryDyeType(null, db, false),
        keymap
    });

const getDyeType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DyeTypeId: id }
    };
    const [dyeType = null] = await queryDyeType(params, db);
    return dyeType;
};

const resolvers = {
    Query: {
        listDyeTypes,
        getDyeType
    }
};

export { resolvers as default, resolvers as dyeTypeResolvers };
