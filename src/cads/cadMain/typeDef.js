import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCadMains(first: Int, after: Int): CadMainConnection
        getCadMain(id: Int!): CadMain
    }

    type CadMain {
        id: Int!
        cadRef: String
        designer: Int
        description: String
        buyerId: Int
        contactPerson: String
        isCadSample: Boolean
        cadStatus: String
        isDiscontinue: Boolean
        cadVersion: Int
        cadType: String
        createdBy: String
        createdDate: String
        modifiedBy: String
        modifiedDate: String
        sl: Int
        devNo: String
        department: String
        requestOption: String
        oldRef: String
        shape: String
        shapeDes: String
        baseColour: String
        printTec: String
        licensor: String
        cadApproval: String
        cadCollection: String
        remarks: String
        cadAvailability: String
        isOrder: Boolean
        isCancel: Boolean
        cadUploadTypeText: String
        cadUploadTypeId: Int
        boughtRef: String
    }

    type CadMainConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CadMainEdge]
    }

    type CadMainEdge {
        cursor: Int
        node: CadMain
    }
`;

export { typeDef as default, typeDef as CadMain };
