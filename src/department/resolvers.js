import { parseList, parseItem } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_DEPARTMENTS } from './constants';

const queryDepartment = async (params = {}, db) => {
    const loadedParams = { table: TABLE_DEPARTMENTS, ...params };
    const department = await db.query(loadedParams);
    return parseList(department, keymap);
};

const listDepartments = async (_, __, { dataSources: { db } }) => {
    return await queryDepartment(null, db);
};

const getDepartment = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { DepartmentId: id }
    };
    const [department] = await queryDepartment(params, db);
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
