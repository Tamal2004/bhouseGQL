import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_DESIGNERLOCATIONS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryDesignerLocation = queryFactory(TABLE_DESIGNERLOCATIONS, keymap);

const listDesignerLocations = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryDesignerLocation(null, db, false),
        keymap
    });

const getDesignerLocation = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { GraphicDesignerID: id }
    };
    const [designerLocation = null] = await queryDesignerLocation(params, db);
    return designerLocation;
};

const resolvers = {
    Query: {
        listDesignerLocations,
        getDesignerLocation
    }
};

export { resolvers as default, resolvers as designerLocationResolvers };
