import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_CADAVAILABILITIES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryCadAvailability = queryFactory(TABLE_CADAVAILABILITIES, keymap);

const listCadAvailabilities = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryCadAvailability(null, db, false),
        keymap
    });

const getCadAvailability = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [cadAvailability = null] = await queryCadAvailability(params, db);
    return cadAvailability;
};

const resolvers = {
    Query: {
        listCadAvailabilities,
        getCadAvailability
    }
};

export { resolvers as default, resolvers as cadAvailabilityResolvers };
