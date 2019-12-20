import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCadAvailabilities(first: Int, after: Int): CadAvailabilityConnection
        getCadAvailability(id: Int!): CadAvailability
    }

    type CadAvailability {
        id: Int!
        availability: String
    }

    type CadAvailabilityConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CadAvailabilityEdge]
    }

    type CadAvailabilityEdge {
        cursor: Int
        node: CadAvailability
    }
`;

export { typeDef as default, typeDef as CadAvailability };
