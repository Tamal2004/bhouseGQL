import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listTrimTypes(first: Int, after: Int): TrimTypeConnection
        getTrimType(id: Int!): TrimType
    }

    type TrimType {
        id: Int!
        trimType: String
        code: String
        category: String
    }

    type TrimTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [TrimTypeEdge]
    }

    type TrimTypeEdge {
        cursor: Int
        node: TrimType
    }
`;

export { typeDef as default, typeDef as TrimType };
