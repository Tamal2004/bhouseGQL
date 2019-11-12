import { parseList } from './parseItem';

const queryFactory = (table, keymap) => async (
    params = {},
    db,
    parse = true
) => {
    const loadedParams = { table, ...params };
    const buyers = await db.query(loadedParams);
    return parse ? parseList(buyers, keymap) : buyers;
};

export { queryFactory as default, queryFactory };
