import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_NECKLINES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryNeckline = queryFactory(TABLE_NECKLINES, keymap);

const listNecklines = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryNeckline(null, db, false),
        keymap
    });

const getNeckline = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { NecklineId: id }
    };
    const [neckline = null] = await queryNeckline(params, db);
    return neckline;
};

const resolvers = {
    Query: {
        listNecklines,
        getNeckline
    }
};

export { resolvers as default, resolvers as necklineResolvers };
