//HEADER SECTION

export const getSectionHeader = state => state.localesReducer.section.header
export const getHeaderText = state => state.localesReducer.headerTexts

//INSTRUCTION SECTION
export const getInstructionTexts = state => state.localesReducer.instructionTexts
export const getSectionInstruction = state => state.localesReducer.section.instruction

//MAIN FORM SECTION
export const getSectionMainForm = state => state.localesReducer.section.mainForm
export const getChosenSiteTextSelector = state => state.localesReducer.choseSiteText
export const getChildText = state => state.localesReducer.childDataText
export const getParentText = state => state.localesReducer.parrentDataText
export const getContactDataText = state => state.localesReducer.contactDataText
export const getCheckFormText = state => state.localesReducer.checkFormText

//AGREEMENT READY SECTION
export const getAgreementReadySection = state => state.localesReducer.section.agreementReady
export const getAgreementReadyText = state => state.localesReducer.agreementReadyTexts

//DOWNLOAD SECTION
export const getDownloadText = state => state.localesReducer.downloadText
export const getDownloadSection = state => state.localesReducer.section.download

//SEND PAGE SECTION
export const getSendingSection = state => state.localesReducer.section.sending
export const getSendingText = state => state.localesReducer.sendingTexts
export const getSendingButtonText = state => state.localesReducer.sendingButtonText
export const getErrorText = state => state.localesReducer.errorSendingText

//STEPS
export const getStep1Text = state => state.localesReducer.step1Texts
export const getStep2Text = state => state.localesReducer.step2Texts
export const getStep3Text = state => state.localesReducer.step3Texts
export const getStep4Text = state => state.localesReducer.step4Texts
