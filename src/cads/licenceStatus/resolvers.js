import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_LICENCESTATUS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryLicenceStatus = queryFactory(TABLE_LICENCESTATUS, keymap);

const listLicenceStatus = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryLicenceStatus(null, db, false),
        keymap
    });

const getLicenceStatus = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [licenceStatus = null] = await queryLicenceStatus(params, db);
    return licenceStatus;
};

const resolvers = {
    Query: {
        listLicenceStatus,
        getLicenceStatus
    }
};

export { resolvers as default, resolvers as licenceStatusResolvers };
