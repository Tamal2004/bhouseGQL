import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_FABRICDETAILS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryFabricDetails = queryFactory(TABLE_FABRICDETAILS, keymap);

const listFabricDetails = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryFabricDetails(null, db, false),
        keymap
    });

const getFabricDetails = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { FabricID: id }
    };
    const [fabricDetails = null] = await queryFabricDetails(params, db);
    return fabricDetails;
};

const resolvers = {
    Query: {
        listFabricDetails,
        getFabricDetails
    }
};

export { resolvers as default, resolvers as fabricDetailsResolvers };
