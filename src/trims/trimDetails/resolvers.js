import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_TRIMDETAILS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryTrimDetails = queryFactory(TABLE_TRIMDETAILS, keymap);

const listTrimDetails = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryTrimDetails(null, db, false),
        keymap
    });

const getTrimDetails = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { TrimsID: id }
    };
    const [trimDetails = null] = await queryTrimDetails(params, db);
    return trimDetails;
};

const resolvers = {
    Query: {
        listTrimDetails,
        getTrimDetails
    }
};

export { resolvers as default, resolvers as trimDetailsResolvers };

