import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listLabelTypes(first: Int, after: Int): LabelTypeConnection
        getLabelType(id: Int!): LabelType
    }

    type LabelType {
        id: Int!
        type: String
    }

    type LabelTypeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [LabelTypeEdge]
    }

    type LabelTypeEdge {
        cursor: Int
        node: LabelType
    }
`;

export { typeDef as default, typeDef as LabelType };
