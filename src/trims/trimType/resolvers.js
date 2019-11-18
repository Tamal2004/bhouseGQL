import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_TRIMTYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryTrimType = queryFactory(TABLE_TRIMTYPES, keymap);

const listTrimTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryTrimType(null, db, false),
        keymap
    });

const getTrimType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { TrimTypeID: id }
    };
    const [trimType = null] = await queryTrimType(params, db);
    return trimType;
};

const resolvers = {
    Query: {
        listTrimTypes,
        getTrimType
    }
};

export { resolvers as default, resolvers as trimTypeResolvers };
