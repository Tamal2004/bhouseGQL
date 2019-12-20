import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listLicensors(first: Int, after: Int): LicensorConnection
        getLicensor(id: Int!): Licensor
    }

    type Licensor {
        id: Int!
        licensor: String
        code:String
    }

    type LicensorConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [LicensorEdge]
    }

    type LicensorEdge {
        cursor: Int
        node: Licensor
    }
`;

export { typeDef as default, typeDef as Licensor };
