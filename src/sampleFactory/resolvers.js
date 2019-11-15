import { composeNode, composeList } from '../libs';

// Local
import queries from './queries';

// Global
import { countryQueries } from '../country';

const generateCountryParams = ({ countryId }) => countryId;

const resolvers = {
    Query: {
        listSampleFactories: composeList(queries),
        getSampleFactory: composeNode(queries)
    },
    SampleFactory: {
        country: composeNode(countryQueries, generateCountryParams)
    }
};

export { resolvers as default, resolvers as sampleFactoryResolvers };
