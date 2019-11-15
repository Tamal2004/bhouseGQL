import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_ORIENTATIONS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryOrientation = queryFactory(TABLE_ORIENTATIONS, keymap);

const listOrientations = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryOrientation(null, db, false),
        keymap
    });

const getOrientation = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { OrientationID: id }
    };
    const [orientation = null] = await queryOrientation(params, db);
    return orientation;
};

const resolvers = {
    Query: {
        listOrientations,
        getOrientation
    }
};

export { resolvers as default, resolvers as orientationResolvers };
