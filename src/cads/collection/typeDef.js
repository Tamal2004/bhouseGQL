import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCollections(first: Int, after: Int): CollectionConnection
        getCollection(id: Int!): Collection
    }

    type Collection {
        id: Int!
        collection: String
    }

    type CollectionConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CollectionEdge]
    }

    type CollectionEdge {
        cursor: Int
        node: Collection
    }
`;

export { typeDef as default, typeDef as Collection };
