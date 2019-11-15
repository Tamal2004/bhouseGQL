import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listProductStatus(first: Int, after: Int): ProductStatusConnection
        getProductStatus(id: Int!): ProductStatus
    }

    type ProductStatus {
        id: Int!
        status: String
    }

    type ProductStatusConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [ProductStatusEdge]
    }

    type ProductStatusEdge {
        cursor: Int
        node: ProductStatus
    }
`;

export { typeDef as default, typeDef as ProductStatus };
