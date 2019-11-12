export const parseItem = (item = null, keyMap) => {
    const isValidKey = key => !!keyMap.hasOwnProperty(key);

    // Returns null if item doesn't exist
    // Else returns an object mapped with updated keys
    return item && Object.entries(item).reduce(
        (acm, [key, value]) =>
            isValidKey ? { ...acm, [keyMap[key]]: value } : acm,
        {}
    );
};

// Parses a list of items
export const parseList = (list, keyMap) => list.map(item => parseItem(item, keyMap));
