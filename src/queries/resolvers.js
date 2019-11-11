import books from '../data';

const resolvers = {
    Query: {
        // book: (_, { id }) =>
        //     books.reduce((acm, book) => (book.id == id ? book : acm), undefined)
    }
};

export { resolvers as default, resolvers as queryResolvers };
