import { parseItem } from './parseItem';

const composeConnection = ({
    first = 10,
    after = null,
    key = 'id',
    nodeList = [],
    keymap
}) => {
    const nodeKeys = nodeList.map(node => node[key]);
    const index = after === null ? 0 : nodeKeys.indexOf(after) + 1;
    const totalCount = nodeList.length;

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

export { composeConnection as default, composeConnection };
