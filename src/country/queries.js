import { typeFactory } from '../libs';
import { TABLE_COUNTRIES } from './constants';
import keymap from './keymap';

const queries = typeFactory(TABLE_COUNTRIES, keymap);

export { queries as default, queries as countryQueries };
