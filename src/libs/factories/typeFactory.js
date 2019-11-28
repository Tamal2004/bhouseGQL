import { parseList } from '../parseItem';
import { composeConnection } from '../compose';
import cursorFactory from './cursorFactory';
import { findNodeSelections } from '../selections';

const listFactory = (table, keymap) => async (
    params = {},
    db,
    parse = true
) => {
    const loadedParams = { table, ...params };
    const nodeList = await db.query(loadedParams);
    return parse ? parseList(nodeList, keymap) : nodeList;
};

const nodeFactory = (query, dbKey) => async (id, db) => {
    const params = { where: { [dbKey]: id } };
    const [node = null] = await query(params, db);
    return node;
};

const connectionFactory = (table, keymap, key) => async (
    params,
    parent,
    inputArgs,
    { dataSources: { db } },
    ast
) => {
    const { toCursor, fromCursor } = cursorFactory(key);
    const loadedParams = {
        table,
        key,
        nodeFields: findNodeSelections(ast, keymap, key),
        fromCursor,
        ...inputArgs,
        ...params
    };

    const nodeConnection = await db.queryConnection(loadedParams);

    return composeConnection({
        key,
        toCursor,
        keymap,
        ...nodeConnection
    });
};

const typeFactory = (table, keymap, rawKey = 'id') => {
    const key = keymap[rawKey];
    const list = listFactory(table, keymap);
    return {
        list,
        connection: connectionFactory(table, keymap, key),
        node: nodeFactory(list, key),
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
