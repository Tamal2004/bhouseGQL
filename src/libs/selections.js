const findSelections = (fieldNodes, isRecursive = true) => {
    const selections = fieldNodes.selectionSet.selections;
    return isRecursive
        ? selections
        : selections.filter(selection => !selection.selectionSet);
};

const filterSelections = (fieldNode, fieldName) =>
    findSelections(fieldNode)
        .filter(selection => selection.name.value === fieldName)
        .reduce((acm, selection) => selection, null);

const findNodeSelections = ({ fieldNodes: [fieldNode] }, keymap, key) => {
    const edges = filterSelections(fieldNode, 'edges');

    // Escape if edges not specified
    if (!edges) return [key];

    const node = filterSelections(edges, 'node');

    return findSelections(node, false).map(
        selection => keymap[selection.name.value]
    );
};

export {
    findNodeSelections as default,
    findNodeSelections,
    findSelections,
    filterSelections
};
