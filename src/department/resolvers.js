import { resolveNode, resolveConnection } from '../libs';

// Local
import queries from './queries';

const resolvers = {
    Query: {
        listDepartments: resolveConnection(queries),
        getDepartment: resolveNode(queries)
    }
};

export { resolvers as default, resolvers as departmentResolvers };
