import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_FINISHGSM } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryGsm = queryFactory(TABLE_FINISHGSM, keymap);

const listGsm = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryGsm(null, db, false),
        keymap
    });

const getGsm = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { GSMId: id }
    };
    const [gsm = null] = await queryGsm(params, db);
    return gsm;
};

const resolvers = {
    Query: {
        listGsm,
        getGsm
    }
};

export { resolvers as default, resolvers as gsmResolvers };
