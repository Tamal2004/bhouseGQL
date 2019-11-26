import { composeNode, composeList, resolveConnection } from '../libs';

// Local
import queries from './queries';

// Global
import { sampleFactoryQueries } from '../sampleFactory';

const generateSampleFactoriesParams = ({ id }, { countryId }) => ({
    where: { [countryId]: id }
});

const resolvers = {
    Query: {
        // listCountries: composeList(queries),
        listCountries: resolveConnection(queries),
        getCountry: composeNode(queries)
    },
    Country: {
        sampleFactories: composeList(sampleFactoryQueries, generateSampleFactoriesParams)
    }
};

export {
    resolvers as default,
    resolvers as countryResolvers,
};
