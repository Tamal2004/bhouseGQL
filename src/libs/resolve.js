const resolveConnection = (
    { connection, keymap },
    generateParams = () => null
) => async (...resolverArgs) => {
    const [parent] = resolverArgs;
    return connection(generateParams(parent, keymap), ...resolverArgs);
};

const resolveNode = ({ node }, generateParams = null) => async (
    parent,
    { id },
    { dataSources: { db } }
) => {
    const params = generateParams ? generateParams(parent) : id;
    return node(params, db);
};

export { resolveConnection, resolveNode };
