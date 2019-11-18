import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

// Databases
import SQLDatabase from './db';

// Domains
import { Buyer, buyerResolvers } from './buyer';
import { Department, departmentResolvers } from './department';
import { SampleFactory, sampleFactoryResolvers } from './sampleFactory';
import { Country, countryResolvers } from './country';
import { LicensorSize, licensorSizeResolvers } from './licensorSize';
import { PrintType, printTypeResolvers } from './printType';
import { ProductStatus, productStatusResolvers } from './productStatus';
import { RequestType, RequestTypeResolvers } from './requestType';
import { DevelopmentType, developmentTypeResolvers } from './developmentType';
import { BuyerSize, buyerSizeResolvers } from './buyerSize';
import { UkSize, ukSizeResolvers } from './ukSize';
import { SampleStatus, sampleStatusResolvers } from './sampleStatus';
import { DyeType, dyeTypeResolvers } from './fabrics/dyeType';
import { FabricComposition, fabricCompositionResolvers } from './fabrics/fabricComposition';
import { FabricFor, fabricForResolvers } from './fabrics/fabricFor';
import { Gsm, gsmResolvers } from './fabrics/finishGsm';
import { FinishWash, finishWashResolvers } from './fabrics/finishWash';
import { FabricType, fabricTypeResolvers } from './fabrics/fabricType';
import { ArmHole, armHoleResolvers } from './armhole';
import { Hemline, hemlineResolvers } from './hemline';
import { LabelType, labelTypeResolvers } from './labelType';
import { Neckline, necklineResolvers } from './neckline';
import { Orientation, orientationResolvers } from './orientation';
import { PrintPosition, printPositionResolvers } from './printPosition';
import { ArtWorkLocation, artWorkLocationResolvers } from './artworkLocation';
import { ArtworkScale, artworkScaleResolvers } from './artworkScale';
import { BoughtDetails, boughtDetailsResolvers } from './boughts/boughtDetails';
import { Currency, currencyResolvers } from './currency';
import { TrimSupplier, trimSupplierResolvers } from './trims/supplier';
import { TrimCard, trimCardResolvers } from './trims/trimCard';
import { TrimType, trimTypeResolvers } from './trims/trimType';
import { TrimDetails, trimDetailsResolvers } from './trims/trimDetails';
import { BackNeckDetails, backNeckDetailsResolvers } from './backnecks/backneckDetails';
import { InkDetails, inkDetailsResolvers } from './inks/inkDetails';
import { Query, queryResolvers } from './query';

const knexConfig = {
    client: 'mssql',
    connection: {
        user: 'SA',
        password: 'echo@tex@1',
        server: '185.38.37.19',
        database: 'EchoUK'
    }
};

const db = new SQLDatabase(knexConfig);

// Root resolver
const resolvers = merge(
    queryResolvers,
    buyerResolvers,
    departmentResolvers,
    sampleFactoryResolvers,
    countryResolvers,
    licensorSizeResolvers,
    printTypeResolvers,
    productStatusResolvers,
    RequestTypeResolvers,
    developmentTypeResolvers,
    buyerSizeResolvers,
    ukSizeResolvers,
    sampleStatusResolvers,
    dyeTypeResolvers,
    fabricCompositionResolvers,
    fabricForResolvers,
    gsmResolvers,
    finishWashResolvers,
    fabricTypeResolvers,
    armHoleResolvers,
    hemlineResolvers,
    labelTypeResolvers,
    necklineResolvers,
    orientationResolvers,
    printPositionResolvers,
    artWorkLocationResolvers,
    artworkScaleResolvers,
    boughtDetailsResolvers,
    currencyResolvers,
    trimSupplierResolvers,
    trimCardResolvers,
    trimTypeResolvers,
    backNeckDetailsResolvers,
    inkDetailsResolvers,
    trimDetailsResolvers
);

const schema = makeExecutableSchema({
    typeDefs: [
                Query, 
                Buyer, 
                Department, 
                SampleFactory, 
                Country,
                LicensorSize,
                PrintType,
                ProductStatus,
                RequestType,
                DevelopmentType,
                BuyerSize,
                UkSize,
                SampleStatus,
                DyeType,
                FabricComposition,
                FabricFor,
                Gsm,
                FinishWash,
                FabricType,
                ArmHole,
                Hemline,
                LabelType,
                Neckline,
                Orientation,
                PrintPosition,
                ArtWorkLocation,
                ArtworkScale,
                BoughtDetails,
                Currency,
                TrimSupplier,
                TrimCard,
                TrimType,
                BackNeckDetails,
                InkDetails,
                TrimDetails
            ],
    resolvers
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    dataSources: () => ({ db })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
