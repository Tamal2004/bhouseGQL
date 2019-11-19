const generateFieldSalt = field => `@@fieldName--${field};`;

const toHash = string => Buffer.from(string).toString('base64');

const fromHash = string => Buffer.from(string, 'base64').toString('ascii');

const toCursorFactory = field => string =>
    toHash(`${generateFieldSalt(field)}${string}`);

const fromCursorFactory = field => string =>
    fromHash(string)
        .split(generateFieldSalt(field))
        .pop();

const cursorFactory = field => ({
    fromCursor: fromCursorFactory(field),
    toCursor: toCursorFactory(field)
});

export {
    cursorFactory as default,
    cursorFactory,
    toCursorFactory,
    fromCursorFactory
};
