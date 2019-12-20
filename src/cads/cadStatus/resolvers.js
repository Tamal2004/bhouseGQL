import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_CADSTATUS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryCadStatus = queryFactory(TABLE_CADSTATUS, keymap);

const listCadStatus = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryCadStatus(null, db, false),
        keymap
    });

const getCadStatus = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { CadStatusId: id }
    };
    const [cadStatus = null] = await queryCadStatus(params, db);
    return cadStatus;
};

const resolvers = {
    Query: {
        listCadStatus,
        getCadStatus
    }
};

export { resolvers as default, resolvers as cadStatusResolvers };
