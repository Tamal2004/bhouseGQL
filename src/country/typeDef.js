import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCountries(first: Int, after: ID offset: Int): CountryConnection
        getCountry(id: Int!): Country
    }
    
    type Country {
        id: ID!
        country: String
        code: String
        numDigits: String
        description: String
        isActive: Boolean
        sampleFactories(first: Int, after: ID): SampleFactoryConnection
    }

    type CountryConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CountryEdge]
    }

    type CountryEdge {
        cursor: ID
        node: Country
    }
`;

export { typeDef as default, typeDef as Country };
