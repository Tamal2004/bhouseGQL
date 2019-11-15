import {gql} from 'apollo-server';

const typeDef=gql`
    extend type Query{
        listSampleFactories(first: Int after: Int):SampleFactoryConnection
        getSampleFactory(id: Int!):SampleFactory
    }

    type SampleFactory{
        id:Int!
	    factory: String
	    code:String
	    supplierNo:String
	    countryId:String
    }

    type SampleFactoryConnection{
        totalCount: Int
        pageInfo: PageInfo
        edges: [SampleFactoryEdge]
    }

    type SampleFactoryEdge{
        cursor: Int
        node: SampleFactory
    }
    
    
`;

export { typeDef as default, typeDef as SampleFactory };
