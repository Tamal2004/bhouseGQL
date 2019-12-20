import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_SOURCES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const querySource = queryFactory(TABLE_SOURCES, keymap);

const listSources = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await querySource(null, db, false),
        keymap
    });

const getSource = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [source = null] = await querySource(params, db);
    return source;
};

const resolvers = {
    Query: {
        listSources,
        getSource
    }
};

export { resolvers as default, resolvers as sourceResolvers };
