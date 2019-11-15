import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_DEVTYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryDevelopmentType = queryFactory(TABLE_DEVTYPES, keymap);

const listDevelopmentTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryDevelopmentType(null, db, false),
        keymap
    });

const getDevelopmentType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DevTypeId: id }
    };
    const [developmentType = null] = await queryDevelopmentType(params, db);
    return developmentType;
};

const resolvers = {
    Query: {
        listDevelopmentTypes,
        getDevelopmentType
    }
};

export { resolvers as default, resolvers as developmentTypeResolvers };
