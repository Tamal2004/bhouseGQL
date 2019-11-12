import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDepartments: [Department]
        getDepartment(id: Int!): Department
    }

    type Department {
        id: Int!
        department: String
        code: String
        buyerId: Int
        buyer: String
        dispatch: String
        departmentNumber: String
        isActive: Boolean
        isDispatch: Boolean
        isRetailer: Boolean
    }
`;

export { typeDef as default, typeDef as Department };
