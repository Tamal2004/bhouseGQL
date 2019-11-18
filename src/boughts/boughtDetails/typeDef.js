import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listBoughtDetails(first: Int, after: Int): BoughtDetailsConnection
        getBoughtDetails(id: Int!): BoughtDetails
    }

    type BoughtDetails {
        id: Int!
        boughtRef: String
        sampleRef:String
        sl: Int
        devNo:String
        preBoughtId:String
    }

    type BoughtDetailsConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [BoughtDetailsEdge]
    }

    type BoughtDetailsEdge {
        cursor: Int
        node: BoughtDetails
    }
`;

export { typeDef as default, typeDef as BoughtDetails };
