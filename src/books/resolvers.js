import books from '../data';

const getTitle = async (item, _, { dataSources: { db } }) => {
    return item.Buyer;
};

const keyMap = {
    BuyerID: 'id',
    Buyer: 'buyer',
    Buyer_Code: 'code',
    Address: 'address',
    State: 'state',
    City: 'city',
    Country_id: 'countryId',
    Telephone: 'telephone',
    Mobile: 'mobile',
    ContactPerson: 'contactPerson',
    PinCode: 'pinCode',
    Fax: 'fax',
    Email: 'email',
    Website: 'website',
    CreatedBy: 'createdBy',
    CreatedOn: 'createdOn',
    ModifiedBy: 'modifiedBy',
    ModifiedOn: 'modifiedOn',
    IsActive: 'isActive',
    IsDispatch: 'isDispatch',
    IsRetailer: 'isRetailer'
};

const parseKeys = (item, keyMap) => {
    return Object.entries(item).reduce((acm, [key, value]) => {
        return { ...acm, [keyMap[key]]: value };
    }, {});
};

const parseList = (list, keyMap) => list.map(item => parseKeys(item, keyMap));

const getBooks = async (id, _, { dataSources: { db } }) => {
    const res = await db.getBuyers();

    return parseList(res, keyMap);
};

const resolvers = {
    Query: {
        books: getBooks
    },
    Book: {}
};

export { resolvers as default, resolvers as bookResolvers };
