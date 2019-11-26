import parseItem from '../parseItem';
import cursorFactory from './cursorFactory';

const composeList = (
    { connection, list, keymap },
    generateParams = () => null
) => async (parent, inputArgs, { dataSources: { db } }) => {
    return connection({
        ...inputArgs,
        nodeList: await list(generateParams(parent, keymap), db, false)
    });
};

const resolveConnection = (
    { newConnection, keymap },
    generateParams = () => null
) => async (...resolverArgs) => {
    const [parent] = resolverArgs;
    return newConnection(generateParams(parent, keymap), ...resolverArgs);
};

const composeNode = ({ node }, generateParams = null) => async (
    parent,
    { id },
    { dataSources: { db } }
) => {
    const params = generateParams ? generateParams(parent) : id;
    return node(params, db);
};

const composeConnection = ({
    first = 10,
    after = null,
    key,
    nodeList = [],
    keymap
}) => {
    const totalCount = nodeList.length;
    // Escape for no items
    if (!totalCount) return null;

    const { toCursor, fromCursor } = cursorFactory(key);

    const nodeKeys = nodeList.map(node => node[key].toString());
    const index =
        after === null ? 0 : nodeKeys.indexOf(fromCursor(after.toString())) + 1;

    // Edges
    const edges = nodeList.slice(index, index + first).map(node => ({
        cursor: toCursor(node[key]),
        node: parseItem(node, keymap)
    }));

    // Page Info
    const lastCursor = edges[edges.length - 1].cursor;
    const hasNextPage =
        nodeKeys.indexOf(fromCursor(lastCursor)) + 1 < totalCount;
    const pageInfo = {
        lastCursor,
        hasNextPage
    };
    return { totalCount, edges, pageInfo };
};

const newComposeConnection = ({
    key = 'id',
    nodeList = [],
    keymap,
    toCursor,
    fromCursor
}) => {
    const totalCount = nodeList.length;
    // Escape for no items
    if (!totalCount) return null;

    const nodeKeys = nodeList.map(node => node[key].toString());

    // Edges
    const edges = nodeList.map(node => ({
        cursor: toCursor(node[key]),
        node: parseItem(node, keymap)
    }));

    // Page Info
    const lastCursor = edges[edges.length - 1].cursor;
    const hasNextPage =
        nodeKeys.indexOf(fromCursor(lastCursor)) + 1 < totalCount;
    const pageInfo = {
        lastCursor,
        hasNextPage
    };
    return { totalCount, edges, pageInfo };
};

export {
    composeConnection as default,
    composeList,
    composeNode,
    composeConnection,
    resolveConnection,
    newComposeConnection
};
