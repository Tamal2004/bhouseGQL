import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_DESIGNERS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryDesigner = queryFactory(TABLE_DESIGNERS, keymap);

const listDesigners = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryDesigner(null, db, false),
        keymap
    });

const getDesigner = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DesignerID: id }
    };
    const [designer = null] = await queryDesigner(params, db);
    return designer;
};

const resolvers = {
    Query: {
        listDesigners,
        getDesigner
    }
};

export { resolvers as default, resolvers as designerResolvers };
