import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_SAMPLESMAIN } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const querySample = queryFactory(TABLE_SAMPLESMAIN, keymap);

const listSamples = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await querySample(null, db, false),
        keymap
    });

const getSample = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { SampleRequestMainid: id }
    };
    const [sample = null] = await querySample(params, db);
    return sample;
};

const resolvers = {
    Query: {
        listSamples,
        getSample
    }
};

export { resolvers as default, resolvers as sampleResolvers };
