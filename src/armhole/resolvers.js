import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_ARMHOLES } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryArmHole = queryFactory(TABLE_ARMHOLES, keymap);

const listArmHoles = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryArmHole(null, db, false),
        keymap
    });

const getArmHole = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { ArmholesID: id }
    };
    const [armHole = null] = await queryArmHole(params, db);
    return armHole;
};

const resolvers = {
    Query: {
        listArmHoles,
        getArmHole
    }
};

export { resolvers as default, resolvers as armHoleResolvers };
