import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listBuyers: [Buyer]
        getBuyer(id: Int!): Buyer
    }

    type Buyer {
        id: Int!
        buyer: String
        code: String
        address: String
        state: String
        city: String
        countryId: String
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
        departments: [Department]
    }
`;

export { typeDef as default, typeDef as Buyer };