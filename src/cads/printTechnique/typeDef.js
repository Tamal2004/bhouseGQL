import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listPrintTechniques(first: Int, after: Int): PrintTechniqueConnection
        getPrintTechnique(id: Int!): PrintTechnique
    }

    type PrintTechnique {
        id: Int!
        printTechnique: String
    }

    type PrintTechniqueConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [PrintTechniqueEdge]
    }

    type PrintTechniqueEdge {
        cursor: Int
        node: PrintTechnique
    }
`;

export { typeDef as default, typeDef as PrintTechnique };
