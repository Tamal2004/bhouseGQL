import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_INKDETAILS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryInkDetails = queryFactory(TABLE_INKDETAILS, keymap);

const listInkDetails = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryInkDetails(null, db, false),
        keymap
    });

const getInkDetails = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { InksID: id }
    };
    const [inkDetails = null] = await queryInkDetails(params, db);
    return inkDetails;
};

const resolvers = {
    Query: {
        listInkDetails,
        getInkDetails
    }
};

export { resolvers as default, resolvers as inkDetailsResolvers };

