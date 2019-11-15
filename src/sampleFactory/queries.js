import { typeFactory } from '../libs';
import { TABLE_SAMPLEFACTORIES } from './constants';
import keymap from './keymap';

const queries = typeFactory(TABLE_SAMPLEFACTORIES, keymap);

export { queries as default, queries as sampleFactoryQueries };
