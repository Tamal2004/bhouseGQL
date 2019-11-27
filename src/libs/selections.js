const findSelections = fieldNode => fieldNode.selectionSet.selections;
const filterSelections = (fieldNode, fieldName) =>
    findSelections(fieldNode)
        .filter(selection => selection.name.value === fieldName)
        .reduce((acm, selection) => selection, null);

const findNodeSelections = ({ fieldNodes: [fieldNode] }, keymap) => {
    const edges = filterSelections(fieldNode, 'edges');
    const node = filterSelections(edges, 'node');

    return findSelections(node).map(selection => keymap[selection.name.value]);
};

export {
    findNodeSelections as default,
    findNodeSelections,
    findSelections,
    filterSelections
};
