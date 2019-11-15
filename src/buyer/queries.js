import { typeFactory } from '../libs/factories';
import { TABLE_BUYERS } from './constants';
import keymap from './keymap';

const queries = typeFactory(TABLE_BUYERS, keymap);

export { queries as default, queries as buyerQueries };
