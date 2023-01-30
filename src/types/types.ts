export type GroupOptionType = {
    group: string,
    freq: string[]
}

export type ChosenSiteFullDataType = {
    owner: string,
    site: string,
    groupOption: GroupOptionType[]
}

export type CompanyDataType = {
    companyName?: string,
    bankAccount?: string,
    companyNip?: string,
    companyRegon?: string,
    companyAdress?: string,
    ownerName?: string
}

export type PackageOptionsType = {
    gp60: string,
    gp90: string,
    gk60: string,
    gk90: string,
    gz: string
}

export type FrequenciesType = {
    x1: string,
    x2: string,
    x3: string,
    x4: string,
}

// Locales Reducer Types

type HeaderTextsType = {
    nameText?: string
    discriptionText?: string
}

type InstructionStep1Type = {
    step1: string
    step1Line1: string
    step1Line2: string
    step1Line3: string
    step1Line4: string
    checkKontaktData: string
}

type InstructionStep2Type = {
    step2: string
    step2Line1: string
    step2Line2: string
}

type InstructionStep3Type = {
    step3: string
    step3Click: string
    step3Line1: string
    step3Line2: string
    step3Remember: string
}

type InstructionStep4Type = {
    step4: string
    step4Line1: string
    step4Line2: string
    step4Line3: string
    step4Line4: string
}

type InstructionWarningType = {
    warningText: string
    warningLine1: string
    warningLine2: string
}

type InstructionTextsType = {
    shortInstruction: string
    easySteps: string
    checkData: string
    nextStep: string
    downloadText: string
    signAgree: string
    letIsGo: string
    instructionStep1: InstructionStep1Type
    instructionStep2: InstructionStep2Type
    instructionStep3: InstructionStep3Type
    instructionStep4: InstructionStep4Type
    instructionWarning: InstructionWarningType
}

type ChoseSiteTextType = {
    h3Text: string
    site: string
    siteChosenText: string
    package: string
    siteFirst: string
    chosePackage: string
    frequency: string
    packageFirst: string
    choseFrequency: string
    schoolYear: string
}

type ChildDataTextType = {
    h3Text: string
    nameText: string
    dateText: string
    agreeText: string
    lineText: string
}

type ParrentDataTextType = {
    h3Text: string
    nameText: string
    idText: string
    cityText: string
    zipText: string
    addressText: string
}

type ContactDataTextType = {
    h3Text: string
    motherTelText: string
    fatherTelText: string
    mailText: string
    checkDataText: string
    nextStepText: string
}

type CheckFormTextType = {
    siteText: string
    packageText: string
    frequencyText: string
    schoolYearText: string
    childNameText: string
    childDateText: string
    parrentNameText: string
    parrentIdText: string
    parrentCityText: string
    parrentZipText: string
    parrentAddressText: string
    telText: string
    mailText: string
    checkMailText: string
    allRightText: string
}

type AgreementReadyTextsType = {
    acceptAgreementText: string
    nextStepText: string
}

type DownloadTextType = {
    downloadText: string
}

type Step1TextsType = {
    step1Text: string
    h2Text: string
    pText: string
}

type Step2TextsType = {
    step2Text: string
    h2Text: string
    pText: string
}

type Step3TextsType = {
    step3Text: string
    h2TextLine1: string
    h2TextLine2: string
    pTextLine1: string
    pTextLine2: string
}

type Step4TextsType = {
    step4Text:string
    h2Text: string
    pTextLine1: string
    pTextLine2: string
}

export type InitialStateType = {
    localize: boolean
    language: string
    asyncFnRunCounter: number
    errorSendingText: string
    sendingButtonText: string
    buttonDisable: boolean
    sendingTexts: {
        limitText: string | null
        errorText: string | null
        bottonText: string | null
    },
    section: {
        header: string
        instruction: string
        mainForm: string
        agreementReady: string
        download: string
        sending: string
        osTest: string
        steps: string
    },
    headerTexts?: HeaderTextsType
    instructionTexts?: InstructionTextsType
    choseSiteText?: ChoseSiteTextType
    childDataText?: ChildDataTextType
    parrentDataText?: ParrentDataTextType
    contactDataText?: ContactDataTextType
    checkFormText?: CheckFormTextType
    agreementReadyTexts?: AgreementReadyTextsType
    downloadText?: DownloadTextType
    step1Texts?: Step1TextsType
    step2Texts?: Step2TextsType
    step3Texts?: Step3TextsType
    step4Texts?: Step4TextsType
}