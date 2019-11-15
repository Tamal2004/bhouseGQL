import { parseList } from '../parseItem';
import { composeConnection } from './compose';

const listFactory = (table, keymap) => async (
    params = {},
    db,
    parse = true
) => {
    const loadedParams = { table, ...params };
    const buyers = await db.query(loadedParams);
    return parse ? parseList(buyers, keymap) : buyers;
};

const nodeFactory = (query, dbKey) => async (id, db) => {
    const params = { where: { [dbKey]: id } };
    const [node = null] = await query(params, db);
    return node;
};

const connectionFactory = (keymap, key) => params =>
    composeConnection({ keymap, key: keymap[key], ...params });

const typeFactory = (table, keymap, key = 'id') => {
    const list = listFactory(table, keymap);
    return {
        list,
        connection: connectionFactory(keymap, key),
        node: nodeFactory(list, keymap[key]),
        keymap
    };
};

export {
    typeFactory as default,
    typeFactory,
    listFactory,
    nodeFactory,
    connectionFactory
};
