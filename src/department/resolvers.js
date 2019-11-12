import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_DEPARTMENTS } from './constants';

const queryDepartment = queryFactory(TABLE_DEPARTMENTS, keymap);

const listDepartments = async (_, { first, after}, { dataSources: { db } }) => composeConnection({
    first,
    after,
    key: keymap.id,
    nodeList: await queryDepartment(null, db, false),
    keymap
});

const getDepartment = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DepartmentId: id }
    };
    const [department = null] = await queryDepartment(params, db);
    return department;
};

const resolvers = {
    Query: {
        listDepartments,
        getDepartment
    }
};

export {
    resolvers as default,
    resolvers as departmentResolvers,
    queryDepartment
};
