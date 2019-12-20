import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listDesigners(first: Int, after: Int): DesignerConnection
        getDesigner(id: Int!): Designer
    }

    type Designer {
        id: Int!
        name: String
        location: Int
    }

    type DesignerConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [DesignerEdge]
    }

    type DesignerEdge {
        cursor: Int
        node: Designer
    }
`;

export { typeDef as default, typeDef as Designer };
