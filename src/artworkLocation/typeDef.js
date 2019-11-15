import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listArtWorkLocations(first: Int, after: Int): ArtWorkLocationConnection
        getArtWorkLocation(id: Int!): ArtWorkLocation
    }

    type ArtWorkLocation {
        id: Int!
        location: String
    }

    type ArtWorkLocationConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [ArtWorkLocationEdge]
    }

    type ArtWorkLocationEdge {
        cursor: Int
        node: ArtWorkLocation
    }
`;

export { typeDef as default, typeDef as ArtWorkLocation };
