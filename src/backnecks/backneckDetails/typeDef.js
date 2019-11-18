import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listBackNeckDetails(first: Int, after: Int): BackNeckDetailsConnection
        getBackNeckDetails(id: Int!): BackNeckDetails
    }

    type BackNeckDetails {
        id: Int!
        sampleRef: String
        graphicRef: String
        patchHeight: String
        patchWidth: String
        fabricDetails: String
        printHeight: String
        printWidth: String
        ink1: String
        ink2: String
        devNo: String
        sl: Int
        preBackNeckId: String
    }

    type BackNeckDetailsConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [BackNeckDetailsEdge]
    }

    type BackNeckDetailsEdge {
        cursor: Int
        node: BackNeckDetails
    }
`;

export { typeDef as default, typeDef as BackNeckDetails };

