import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listSources(first: Int, after: Int): SourceConnection
        getSource(id: Int!): Source
    }

    type Source {
        id: Int!
        source: String
    }

    type SourceConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [SourceEdge]
    }

    type SourceEdge {
        cursor: Int
        node: Source
    }
`;

export { typeDef as default, typeDef as Source };
