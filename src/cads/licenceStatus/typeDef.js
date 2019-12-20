import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listLicenceStatus(first: Int, after: Int): LicenceStatusConnection
        getLicenceStatus(id: Int!): LicenceStatus
    }

    type LicenceStatus {
        id: Int!
        licenceStatus: String
    }

    type LicenceStatusConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [LicenceStatusEdge]
    }

    type LicenceStatusEdge {
        cursor: Int
        node: LicenceStatus
    }
`;

export { typeDef as default, typeDef as LicenceStatus };
