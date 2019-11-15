import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listArtworkScales(first: Int, after: Int): ArtworkScaleConnection
        getArtworkScale(id: Int!): ArtworkScale
    }

    type ArtworkScale {
        id: Int!
        scale: String
    }

    type ArtworkScaleConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [ArtworkScaleEdge]
    }

    type ArtworkScaleEdge {
        cursor: Int
        node: ArtworkScale
    }
`;

export { typeDef as default, typeDef as ArtworkScale };
