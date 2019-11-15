import { parseItem } from '../parseItem';

const composeList = (
    { connection, list, keymap },
    generateParams = () => null
) => async (parent, inputArgs, { dataSources: { db } }) => {
    return connection({
        ...inputArgs,
        nodeList: await list(generateParams(parent, keymap), db, false)
    });
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
    key = 'id',
    nodeList = [],
    keymap
}) => {
    const totalCount = nodeList.length;
    // Escape for no items
    if (!totalCount) return null;

    const nodeKeys = nodeList.map(node => node[key].toString());
    const index = after === null ? 0 : nodeKeys.indexOf(after.toString()) + 1;

    // Edges
    const edges = nodeList.slice(index, index + first).map(node => ({
        cursor: node[key],
        node: parseItem(node, keymap)
    }));

    // Page Info
    const lastCursor = edges[edges.length - 1].cursor;
    const hasNextPage = nodeKeys.indexOf(lastCursor) + 1 < totalCount;
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
    composeConnection
};
