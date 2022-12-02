//HEADER SECTION
export const getSectionHeader = state => state.localesReducer.section.header
export const getHeaderNameText = state => state.localesReducer.headerTexts.nameText
export const getHeaderDiscriptiontext= state => state.localesReducer.headerTexts.discriptionText

//INSTRUCTION SECTION
export const getInstructionTexts = state => state.localesReducer.instructionTexts
export const getSectionInstruction = state => state.localesReducer.section.instruction

//MAIN FORM SECTION
export const getSectionMainForm = state => state.localesReducer.section.mainForm
export const getChosenSiteTextSelector = state => state.localesReducer.mainFormTexts.choseSiteText
export const getChildText = state => state.localesReducer.mainFormTexts.childDataText
export const getParentText = state => state.localesReducer.mainFormTexts.parrentDataText
export const getContactDataText = state => state.localesReducer.mainFormTexts.contactDataText
export const getCheckFormText = state => state.localesReducer.mainFormTexts.checkFormText

//AGREEMENT READY SECTION
export const getAgreementReadySection = state => state.localesReducer.section.agreementReady
export const getAgreementReadyText = state => state.localesReducer.agreementReadyTexts

//DOWNLOAD SECTION
export const getDownloadText = state => state.localesReducer.downloadTexts
export const getDownloadSection = state => state.localesReducer.section.download

//SEND PAGE SECTION
export const getSendingSection = state => state.localesReducer.section.sending
export const getSendingText = state => state.localesReducer.sendingTexts
export const getSendingButtonText = state => state.localesReducer.sendingButtonText
export const getErrorText = state => state.localesReducer.errorSendingText

//STEPS
export const getStep1Text = state => state.localesReducer.stepTexts.step1Texts
export const getStep2Text = state => state.localesReducer.stepTexts.step2Texts
export const getStep3Text = state => state.localesReducer.stepTexts.step3Texts
export const getStep4Text = state => state.localesReducer.stepTexts.step4Texts
