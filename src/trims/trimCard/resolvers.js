
import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_TRIMCARDS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryTrimCard = queryFactory(TABLE_TRIMCARDS, keymap);

const listTrimCards = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryTrimCard(null, db, false),
        keymap
    });

const getTrimCard = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { TrimCardId: id }
    };
    const [trimCard = null] = await queryTrimCard(params, db);
    return trimCard;
};

const resolvers = {
    Query: {
        listTrimCards,
        getTrimCard
    }
};

export { resolvers as default, resolvers as trimCardResolvers };