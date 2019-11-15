import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_PRINTPOSITIONS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryPrintPosition = queryFactory(TABLE_PRINTPOSITIONS, keymap);

const listPrintPositions = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryPrintPosition(null, db, false),
        keymap
    });

const getPrintPosition = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { PrintPositionId: id }
    };
    const [printPosition = null] = await queryPrintPosition(params, db);
    return printPosition;
};

const resolvers = {
    Query: {
        listPrintPositions,
        getPrintPosition
    }
};

export { resolvers as default, resolvers as printPositionResolvers };
