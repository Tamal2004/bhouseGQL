import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listTrimSuppliers(first: Int, after: Int): TrimSupplierConnection
        getTrimSupplier(id: Int!): TrimSupplier
    }

    type TrimSupplier {
        id: Int!
        supplierName: String
    }

    type TrimSupplierConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [TrimSupplierEdge]
    }

    type TrimSupplierEdge {
        cursor: Int
        node: TrimSupplier
    }
`;

export { typeDef as default, typeDef as TrimSupplier };

