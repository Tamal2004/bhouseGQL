import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listFabricDetails(first: Int, after: Int): FabricDetailsConnection
        getFabricDetails(id: Int!): FabricDetails
    }

    type FabricDetails {
        id: Int!
        sampleId: Int
        sampleRef: String
        fabricType: String
        composition: String
        gsm: String
        dyeType: String
        specialFabricRef: String
        finishWash: String
        colour: String
        eld: String
        fabricParts: String
        devNo: String
        sl: Int
        fabricFrom: String
        preFabricId: String
        isTc: Boolean
        tc: String
    }

    type FabricDetailsConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [FabricDetailsEdge]
    }

    type FabricDetailsEdge {
        cursor: Int
        node: FabricDetails
    }
`;

export { typeDef as default, typeDef as FabricDetails };
