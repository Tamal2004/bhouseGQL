
import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listTrimCards(first: Int, after: Int): TrimCardConnection
        getTrimCard(id: Int!): TrimCard
    }

    type TrimCard {
        id: Int!
        trimRef: String
        trimTypeId:String
        trimType: String
        trimForRetailerId:String
        trimForRetailer: String
        trimFrom: String
        trimCopyFrom: String
        trimManualRef:String
        sl: Int
        isDiscontinued:Boolean
        devNo:String
        dev: String
        description: String
        size: String
        composition:String
        application:String
        position: String
        supplierId:String
        supplier: String
        supplierRef: String
        cost: Float
        costCurrencyId: String
        costCurrencyName: String
        costCurrencySymbol: String
        remarks: String
        createdId: String
        createdBy: String
        modifiedId: String
        modifiedBy: String
        createdDate: String
        modifiedDate:String
        units: String
    }

    type TrimCardConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [TrimCardEdge]
    }

    type TrimCardEdge {
        cursor: Int
        node: TrimCard
    }
`;

export { typeDef as default, typeDef as TrimCard };