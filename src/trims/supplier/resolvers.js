import { composeConnection, queryFactory } from '../../libs';

// Local
import keymap from './keymap';
import { TABLE_SUPPLIERS } from './constants';

// Global
//import { querySampleFactory } from '../sampleFactory';

const queryTrimSupplier = queryFactory(TABLE_SUPPLIERS, keymap);

const listTrimSuppliers = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryTrimSupplier(null, db, false),
        keymap
    });

const getTrimSupplier = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { TrimSupplierId: id }
    };
    const [trimSupplier = null] = await queryTrimSupplier(params, db);
    return trimSupplier;
};

const resolvers = {
    Query: {
        listTrimSuppliers,
        getTrimSupplier
    }
};

export { resolvers as default, resolvers as trimSupplierResolvers };

