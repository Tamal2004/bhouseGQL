import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_LICENSORSIZES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryLicensorSize = queryFactory(TABLE_LICENSORSIZES, keymap);

const listLicensorSizes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryLicensorSize(null, db, false),
        keymap
    });

const getLicensorSize = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { SendtoLicenceID: id }
    };
    const [licensorSize = null] = await queryLicensorSize(params, db);
    return licensorSize;
};

const resolvers = {
    Query: {
        listLicensorSizes,
        getLicensorSize
    }
};

export { resolvers as default, resolvers as licensorSizeResolvers };
