import books from '../data';

const getId = ({ id }) => id;
const getTitle = ({ title }) => `This is the title of the book: ${title}`;

const resolvers = {
    Book: {
        id: getId,
        title: getTitle,
        author: ({ author }) => author
    }
};

export { resolvers as default, resolvers as bookResolvers };
