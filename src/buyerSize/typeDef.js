import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listBuyerSizes(first: Int, after: Int): BuyerSizeConnection
        getBuyerSize(id: Int!): BuyerSize
    }

    type BuyerSize {
        id: Int!
        size: String
    }

    type BuyerSizeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [BuyerSizeEdge]
    }

    type BuyerSizeEdge {
        cursor: Int
        node: BuyerSize
    }
`;

export { typeDef as default, typeDef as BuyerSize };
