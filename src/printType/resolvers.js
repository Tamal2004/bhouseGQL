import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_PRINTTYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryPrintType = queryFactory(TABLE_PRINTTYPES, keymap);

const listPrintTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryPrintType(null, db, false),
        keymap
    });

const getPrintType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { PrintTypeID: id }
    };
    const [printType = null] = await queryPrintType(params, db);
    return printType;
};

const resolvers = {
    Query: {
        listPrintTypes,
        getPrintType
    }
};

export { resolvers as default, resolvers as printTypeResolvers };
