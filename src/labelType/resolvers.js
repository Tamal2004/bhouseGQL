import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_LABELTYPES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryLabelType = queryFactory(TABLE_LABELTYPES, keymap);

const listLabelTypes = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryLabelType(null, db, false),
        keymap
    });

const getLabelType = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { LabelTypeId: id }
    };
    const [labelType = null] = await queryLabelType(params, db);
    return labelType;
};

const resolvers = {
    Query: {
        listLabelTypes,
        getLabelType
    }
};

export { resolvers as default, resolvers as labelTypeResolvers };
