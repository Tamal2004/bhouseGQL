import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_COLLECTIONS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryCollection = queryFactory(TABLE_COLLECTIONS, keymap);

const listCollections = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryCollection(null, db, false),
        keymap
    });

const getCollection = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [collection = null] = await queryCollection(params, db);
    return collection;
};

const resolvers = {
    Query: {
        listCollections,
        getCollection
    }
};

export { resolvers as default, resolvers as collectionResolvers };
