import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listInkDetails(first: Int, after: Int): InkDetailsConnection
        getInkDetails(id: Int!): InkDetails
    }

    type InkDetails {
        id: Int!
        sampleRef: String
        colour: String
        colourRef: String
        inkType: Int
        sl: Int
        devNo: String
        preInkId: String
    }

    type InkDetailsConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [InkDetailsEdge]
    }

    type InkDetailsEdge {
        cursor: Int
        node: InkDetails
    }
`;

export { typeDef as default, typeDef as InkDetails };

