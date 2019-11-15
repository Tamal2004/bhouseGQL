import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_FINISHWASH } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryFinishWash = queryFactory(TABLE_FINISHWASH, keymap);

const listFinishWash = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryFinishWash(null, db, false),
        keymap
    });

const getFinishWash = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DyeTypeId: id }
    };
    const [finishWash = null] = await queryFinishWash(params, db);
    return finishWash;
};

const resolvers = {
    Query: {
        listFinishWash,
        getFinishWash
    }
};

export { resolvers as default, resolvers as finishWashResolvers };
