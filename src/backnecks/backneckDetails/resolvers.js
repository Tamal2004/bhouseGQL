import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_BACKNECKDETAILS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryBackNeckDetails = queryFactory(TABLE_BACKNECKDETAILS, keymap);

const listBackNeckDetails = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryBackNeckDetails(null, db, false),
        keymap
    });

const getBackNeckDetails = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { BackneckID: id }
    };
    const [backNeckDetails = null] = await queryBackNeckDetails(params, db);
    return backNeckDetails;
};

const resolvers = {
    Query: {
        listBackNeckDetails,
        getBackNeckDetails
    }
};

export { resolvers as default, resolvers as backNeckDetailsResolvers };

