import { composeConnection, queryFactory } from '../libs';

// Local
import keymap from './keymap';
import { TABLE_COUNTRIES } from './constants';

// Global
import { querySampleFactory } from '../sampleFactory';

const queryCountry = queryFactory(TABLE_COUNTRIES, keymap);

const listCountries = async (_, { first, after }, { dataSources: { db } }) =>
    composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await queryCountry(null, db, false),
        keymap
    });

const getCountry = async (_, { id }, { dataSources: { db } }) => {
    const params = {
        where: { Country_id: id }
    };
    const [country = null] = await queryCountry(params, db);
    return country;
};

const listSampleFactoriesByCountry = async (
    { id },
    { first, after },
    { dataSources: { db } }
) => {
    const params = {
        where: { COUNTRYID: id }
    };
    return composeConnection({
        first,
        after,
        key: keymap.id,
        nodeList: await querySampleFactory(params, db, false),
        keymap
    });
};

const resolvers = {
    Query: {
        listCountries,
        getCountry
    },
    Country: {
        sampleFactories: listSampleFactoriesByCountry
    }
};

export { resolvers as default, resolvers as countryResolvers };
