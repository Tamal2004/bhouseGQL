import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_REQUESTTYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryRequestType = queryFactory(TABLE_REQUESTTYPES, keymap);

const listRequestTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryRequestType(null, db, false),
        keymap
    });

const getRequestType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { RequestTypeId: id }
    };
    const [requestType = null] = await queryRequestType(params, db);
    return requestType;
};

const resolvers = {
    Query: {
        listRequestTypes,
        getRequestType
    }
};

export { resolvers as default, resolvers as RequestTypeResolvers };
