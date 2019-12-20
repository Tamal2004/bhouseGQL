import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_PRINTTECHNIQUES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryPrintTechnique = queryFactory(TABLE_PRINTTECHNIQUES, keymap);

const listPrintTechniques = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryPrintTechnique(null, db, false),
        keymap
    });

const getPrintTechnique = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ID: id }
    };
    const [printTechnique = null] = await queryPrintTechnique(params, db);
    return printTechnique;
};

const resolvers = {
    Query: {
        listPrintTechniques,
        getPrintTechnique
    }
};

export { resolvers as default, resolvers as printTechniqueResolvers };
