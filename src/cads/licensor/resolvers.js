import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_LICENSORS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryLicensor = queryFactory(TABLE_LICENSORS, keymap);

const listLicensors = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryLicensor(null, db, false),
        keymap
    });

const getLicensor = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [licensor = null] = await queryLicensor(params, db);
    return licensor;
};

const resolvers = {
    Query: {
        listLicensors,
        getLicensor
    }
};

export { resolvers as default, resolvers as licensorResolvers };
