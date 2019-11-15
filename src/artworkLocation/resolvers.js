import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_ARTWORKLOCATIONS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryArtWorkLocation = queryFactory(TABLE_ARTWORKLOCATIONS, keymap);

const listArtWorkLocations = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryArtWorkLocation(null, db, false),
        keymap
    });

const getArtWorkLocation = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ArtWorkLocationID: id }
    };
    const [artWorkLocation = null] = await queryArtWorkLocation(params, db);
    return artWorkLocation;
};

const resolvers = {
    Query: {
        listArtWorkLocations,
        getArtWorkLocation
    }
};

export { resolvers as default, resolvers as artWorkLocationResolvers };
