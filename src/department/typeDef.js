import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDepartments(first: Int, after: ID): DepartmentConnection
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

    type DepartmentConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [DepartmentEdge]
    }

    type DepartmentEdge {
        cursor: ID
        node: Department
    }

`;

export { typeDef as default, typeDef as Department };
