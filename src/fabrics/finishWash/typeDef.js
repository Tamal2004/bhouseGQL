import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listFinishWash(first: Int, after: Int): FinishWashConnection
        getFinishWash(id: Int!): FinishWash
    }

    type FinishWash {
        id: Int!
        finishWash: String
    }

    type FinishWashConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [FinishWashEdge]
    }

    type FinishWashEdge {
        cursor: Int
        node: FinishWash
    }
`;

export { typeDef as default, typeDef as FinishWash };
