import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_SAMPLESTATUS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const querySampleStatus = queryFactory(TABLE_SAMPLESTATUS, keymap);

const listSampleStatus = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await querySampleStatus(null, db, false),
        keymap
    });

const getSampleStatus = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { SampleStatusId: id }
    };
    const [sampleStatus = null] = await querySampleStatus(params, db);
    return sampleStatus;
};

const resolvers = {
    Query: {
        listSampleStatus,
        getSampleStatus
    }
};

export { resolvers as default, resolvers as sampleStatusResolvers };
