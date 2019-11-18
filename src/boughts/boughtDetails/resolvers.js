import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_BOUGHTDETAILS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryBoughtDetails = queryFactory(TABLE_BOUGHTDETAILS, keymap);

const listBoughtDetails = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryBoughtDetails(null, db, false),
        keymap
    });

const getBoughtDetails = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { BoughtDetailsID: id }
    };
    const [boughtDetails = null] = await queryBoughtDetails(params, db);
    return boughtDetails;
};

const resolvers = {
    Query: {
        listBoughtDetails,
        getBoughtDetails
    }
};

export { resolvers as default, resolvers as boughtDetailsResolvers };
