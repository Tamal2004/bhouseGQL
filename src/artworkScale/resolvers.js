import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_ARTWORKSCALES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryArtworkScale = queryFactory(TABLE_ARTWORKSCALES, keymap);

const listArtworkScales = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryArtworkScale(null, db, false),
        keymap
    });

const getArtworkScale = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ArtworkScaleId: id }
    };
    const [artworkScale = null] = await queryArtworkScale(params, db);
    return artworkScale;
};

const resolvers = {
    Query: {
        listArtworkScales,
        getArtworkScale
    }
};

export { resolvers as default, resolvers as artworkScaleResolvers };
