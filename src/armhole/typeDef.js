import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listArmHoles(first: Int, after: Int): ArmHoleConnection
        getArmHole(id: Int!): ArmHole
    }

    type ArmHole {
        id: Int!
        armhole: String
    }

    type ArmHoleConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [ArmHoleEdge]
    }

    type ArmHoleEdge {
        cursor: Int
        node: ArmHole
    }
`;

export { typeDef as default, typeDef as ArmHole };
