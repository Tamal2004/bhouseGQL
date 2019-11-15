import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDepartments(first: Int, after: Int): DepartmentConnection
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
        cursor: Int
        node: Department
    }

    type PageInfo {
        lastCursor: Int
        hasNextPage: Boolean
    }
`;

export { typeDef as default, typeDef as Department };
