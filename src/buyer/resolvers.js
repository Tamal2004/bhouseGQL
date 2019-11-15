import { composeNode, composeList } from '../libs';

// Local
import queries from './queries';

// Global
import { departmentQueries } from '../department';
import { countryQueries } from '../country';

const generateDepartmentsParams = ({ id }, { buyerId }) => ({
    where: { [buyerId]: id }
});

const generateCountryParams = ({ countryId }) => countryId;

const resolvers = {
    Query: {
        listBuyers: composeList(queries),
        getBuyer: composeNode(queries)
    },
    Buyer: {
        country: composeNode(countryQueries, generateCountryParams),
        departments: composeList(departmentQueries, generateDepartmentsParams)
    }
};

export { resolvers as default, resolvers as buyerResolvers };
