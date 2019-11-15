import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listSampleStatus(first: Int, after: Int): SampleStatusConnection
        getSampleStatus(id: Int!): SampleStatus
    }

    type SampleStatus {
        id: Int!
        status: String
    }

    type SampleStatusConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [SampleStatusEdge]
    }

    type SampleStatusEdge {
        cursor: Int
        node: SampleStatus
    }
`;

export { typeDef as default, typeDef as SampleStatus };
