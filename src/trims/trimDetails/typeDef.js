import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listTrimDetails(first: Int, after: Int): TrimDetailsConnection
        getTrimDetails(id: Int!): TrimDetails
    }

    type TrimDetails {
        id: Int!
        sampleRef: String
        trimType: String
        supplierRef: String
        description: String
        quantity: Int
        colour: String
        position: String
        application: String
        supplier: String
        price: Float
        trimCardRef: String
        trimDevNo: String
        devNo: String
        sl: Int
        consumption: String
        preTrimId: String
        modifiedBy: String
        modifiedDate: String
    }

    type TrimDetailsConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [TrimDetailsEdge]
    }

    type TrimDetailsEdge {
        cursor: Int
        node: TrimDetails
    }
`;

export { typeDef as default, typeDef as TrimDetails };

