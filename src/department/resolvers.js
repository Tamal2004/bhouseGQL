import { composeNode, composeList } from '../libs';

// Local
import queries from './queries';

const resolvers = {
    Query: {
        listDepartments: composeList(queries),
        getDepartment: composeNode(queries)
    }
};

export { resolvers as default, resolvers as departmentResolvers };
