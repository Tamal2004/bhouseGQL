import { resolveNode, resolveConnection } from '../libs';

// Local
import queries from './queries';

// Global
import { countryQueries } from '../country';

const generateCountryParams = ({ countryId }) => countryId;

const resolvers = {
    Query: {
        listSampleFactories: resolveConnection(queries),
        getSampleFactory: resolveNode(queries)
    },
    SampleFactory: {
        country: resolveNode(countryQueries, generateCountryParams)
    }
};

export { resolvers as default, resolvers as sampleFactoryResolvers };
