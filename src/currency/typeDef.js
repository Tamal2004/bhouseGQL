import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listCurrencies(first: Int, after: Int): CurrencyConnection
        getCurrency(id: Int!): Currency
    }

    type Currency {
        id: Int!
        symbol: String
        rate: String
        date: String
        name: String
        sl:Int
    }

    type CurrencyConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [CurrencyEdge]
    }

    type CurrencyEdge {
        cursor: Int
        node: Currency
    }
`;

export { typeDef as default, typeDef as Currency };
