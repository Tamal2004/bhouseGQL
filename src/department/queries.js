import { typeFactory } from '../libs/factories';
import { TABLE_DEPARTMENTS } from './constants';
import keymap from './keymap';

const queries = typeFactory(TABLE_DEPARTMENTS, keymap);

export { queries as default, queries as departmentQueries };
