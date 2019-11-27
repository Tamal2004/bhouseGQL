import { resolveNode, resolveConnection } from '../libs';

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
        listBuyers: resolveConnection(queries),
        getBuyer: resolveNode(queries)
    },
    Buyer: {
        country: resolveNode(countryQueries, generateCountryParams),
        departments: resolveConnection(departmentQueries, generateDepartmentsParams)
    }
};

export { resolvers as default, resolvers as buyerResolvers };
