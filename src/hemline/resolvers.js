import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_HEMLINES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryHemline = queryFactory(TABLE_HEMLINES, keymap);

const listHemlines = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryHemline(null, db, false),
        keymap
    });

const getHemline = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { HemlineId: id }
    };
    const [hemline = null] = await queryHemline(params, db);
    return hemline;
};

const resolvers = {
    Query: {
        listHemlines,
        getHemline
    }
};

export { resolvers as default, resolvers as hemlineResolvers };
