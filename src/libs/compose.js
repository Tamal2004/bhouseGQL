import parseItem from './parseItem';

const composeConnection = ({
    key = 'id',
    nodeList,
    startIndex,
    endIndex,
    totalCount,
    toCursor,
    keymap
}) => {
    // Escape for no items
    if (!totalCount) return null;

    // Edges
    const edges = nodeList.map(node => ({
        cursor: toCursor(node[key]),
        node: parseItem(node, keymap)
    }));

    // Page Info
    const pageInfo = {
        lastCursor: edges[edges.length - 1].cursor,
        hasPreviousPage: startIndex > 1,
        hasNextPage: endIndex < totalCount
    };
    return { totalCount, edges, pageInfo };
};

export {
    composeConnection as default,
    composeConnection,
};
