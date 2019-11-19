import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listBuyers(first: Int, after: ID): BuyerConnection
        getBuyer(id: Int!): Buyer
    }

    type Buyer {
        id: Int!
        buyer: String
        code: String
        address: String
        state: String
        city: String
        country: Country
        telephone: String
        mobile: String
        contactPerson: String
        pinCode: String
        fax: String
        email: String
        website: String
        createdBy: String
        createdOn: String
        modifiedBy: String
        modifiedOn: String
        isActive: Boolean
        isDispatch: Boolean
        isRetailer: Boolean
        departments(first: Int, after: ID): DepartmentConnection
    }

    type BuyerConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [BuyerEdge]
    }

    type BuyerEdge {
        cursor: ID
        node: Buyer
    }
`;

export { typeDef as default, typeDef as Buyer };
