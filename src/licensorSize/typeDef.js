import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listLicensorSizes(first: Int, after: Int): LicensorSizeConnection
        getLicensorSize(id: Int!): LicensorSize
    }

    type LicensorSize {
        id: Int!
        size: String
    }

    type LicensorSizeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [LicensorSizeEdge]
    }

    type LicensorSizeEdge {
        cursor: Int
        node: LicensorSize
    }
`;

export { typeDef as default, typeDef as LicensorSize };
