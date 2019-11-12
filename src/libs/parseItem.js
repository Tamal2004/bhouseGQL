export const parseItem = (item = null, keymap) => {
    const localKeys = Object.keys(keymap);
    const dbKeys = Object.values(keymap);

    return (
        item &&
        Object.entries(item).reduce((acm, [key, value]) => {
            const keyIndex = dbKeys.indexOf(key);
            return keyIndex > -1
                ? { ...acm, [localKeys[keyIndex]]: value }
                : acm;
        }, {})
    );
};

// Parses a list of items
export const parseList = (list, keyMap) =>
    list.map(item => parseItem(item, keyMap));
