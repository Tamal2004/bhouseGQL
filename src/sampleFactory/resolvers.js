import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_SAMPLEFACTORIES } from './constants';

// Global
//import { queryDepartment } from '../department';

const querySampleFactory = queryFactory(TABLE_SAMPLEFACTORIES, keymap);

const listSampleFactories = async (
    _,
    { first, after },
    { dataSources: { db } }
) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await querySampleFactory(null, db, false),
        keymap
    });

const getSampleFactory = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { SampleFactoryID: id }
    };
    const [sampleFactory = null] = await querySampleFactory(params, db);
    return sampleFactory;
};

/* const listDepartmentsByBuyer = async ({ id }, { first, after}, { dataSources: { db } }) => {
    const params = {
        where: { BuyerID: id }
    };
    return composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryDepartment(params, db, false),
        keymap
    });
}; */

const resolvers = {
    Query: {
        listSampleFactories,
        getSampleFactory
    }
};

export {
    resolvers as default,
    resolvers as sampleFactoryResolvers,
    querySampleFactory
};
