import { parseList } from '../parseItem';
import { composeConnection, newComposeConnection } from './compose';
import cursorFactory from './cursorFactory';

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

const connectionFactory = (keymap, key) => params =>
    composeConnection({ keymap, key: keymap[key], nodeList: [], ...params });

const newConnectionFactory = (table, keymap, rawKey) => async (
    params,
    parent,
    inputArgs,
    { dataSources: { db } },
    ast
) => {
    console.log(
        ast.fieldNodes[0].selectionSet.selections[0].name
    );
    const key = keymap[rawKey] || 'id';
    const cursors = cursorFactory(key);
    const loadedParams = {
        table,
        key,
        ...inputArgs,
        ...params,
        ...cursors
    };
    const nodeList = await db.queryConnection(loadedParams);

    // console.log({
    //     keymap,
    //     key,
    //     nodeList,
    //     ...inputArgs,
    //     ...loadedParams
    // });

    return newComposeConnection({
        keymap,
        key,
        nodeList,
        ...cursors
    });
};

const typeFactory = (table, keymap, key = 'id') => {
    const list = listFactory(table, keymap);
    return {
        list,
        connection: connectionFactory(keymap, key),
        newConnection: newConnectionFactory(table, keymap, key),
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
