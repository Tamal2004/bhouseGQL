import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listSampleFactories(first: Int, after: ID): SampleFactoryConnection
        getSampleFactory(id: Int!): SampleFactory
    }

    type SampleFactory {
        id: Int!
        factory: String
        code: String
        supplierNo: String
        country: Country
    }

    type SampleFactoryConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [SampleFactoryEdge]
    }

    type SampleFactoryEdge {
        cursor: ID
        node: SampleFactory
    }
`;

export { typeDef as default, typeDef as SampleFactory };
