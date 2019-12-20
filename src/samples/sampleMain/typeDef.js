import { gql } from 'apollo-server';

const typeDef = gql`
    extend type Query {
        listSamples(first: Int, after: Int): SampleConnection
        getSample(id: Int!): Sample
    }

    type Sample {
        id: Int!
        sampleRef: String
        devNo: String
        basedOn: String
        department: String
        retailer: String
        contactPerson: String
        sampleStatus: String
        copySample: String
        specRef: String
        garmentDescription: String
        specialFabricRef: String
        labelType: String
        additionalRemarks: String
        graphicRef: String
        graphicDescription: String
        printType: String
        graphicDesigner: String
        artworkLocation: String
        artworkScale: String
        artworkHeight: String
        artworkWidth: String
        position: Int
        positionMeasurement: String
        orientation: String
        designer: String
        isBrdp: Boolean
        isFlock: Boolean
        isFoil: Boolean
        isSublimation: Boolean
        isBurnout: Boolean
        createdDate: String
        createdBy: String
        modifiedDate: String
        modifiedBy: String
        isDiscontinued: Boolean
        version: Int
        photoApproval: Boolean
        dateRequested: String
        neckline: String
        armhole: String
        hemline: String
        isZip: Boolean
        isStuds: Boolean
        ukSize: String
        buyerSize: String
        sampleSendDate: String
        sampleETA: String
        dateRcvdinUk: String
        sampleType: String
        requestType: String
        sl: String
        designFrom: String
        sampleExtend: String
        oldRefNo: String
        isSealed: Boolean
        specDesignRef: String
        specRefFrom: String
        fabBookRef: String
        fabBookDate: String
        fabRcvDate: String
        printFactory: String
        actualSentDate: String
        actualApprovedDate: String
        remarks: String
        photoSentDate: String
        departmentCode: String
        nonPrintFit: String
        internalComments: String
        fabRcvByPh: String
        sampleRcvDate: String
        actualSealDate: String
        sealBy: String
        cadRefference: String
        isCad: Boolean
        productStatus: String
        isAvaibility: Boolean
        actSentColour: String
        actSentEld: String
        changeNotes: String
        targetSentDate: String
        sampleActionStatus: String
        approvedByDate: String
        printEta: String
        actPrintDate: String
        sampleFactoryId: String
        weightPound: String
        sampleStorageId: String
        updateByLog: String
        seperation: String
        fitDate: String
        isHandover: Boolean
        handoverDate: String
        handoverBy: String
        isTbc: Boolean
        isPendingPrint: Boolean
        seasonId: String
        sampleRequiredDate: String
        licensorSize: String
        samSealGivenDt: String
        samReSealGivenDt: String
        validStatus: String
        sampleCategoryId: String
        sizeRangeId: String
    }

    type SampleConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges: [SampleEdge]
    }

    type SampleEdge {
        cursor: Int
        node: Sample
    }
`;

export { typeDef as default, typeDef as Sample };
