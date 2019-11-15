import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCountries(first: Int, after: Int): CountryConnection
        getCountry(id: Int!): Country
    }

    type Country {
        id: Int!
        name: String
        code: String
        digit: String
        description: String
        isActive: Boolean
        sampleFactories(first: Int, after: Int): SampleFactoryConnection
    }

    type CountryConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CountryEdge]
    }

    type CountryEdge {
        cursor: Int
        node: Country
    }
`;

export { typeDef as default, typeDef as Country };
