import { AppStateType } from './../store';
//HEADER SECTION

export const getSectionHeader = (state: AppStateType) => state.localesReducer.section.header
export const getHeaderText = (state: AppStateType) => state.localesReducer.headerTexts

//INSTRUCTION SECTION
export const getInstructionTexts = (state: AppStateType) => state.localesReducer.instructionTexts
export const getSectionInstruction = (state: AppStateType) => state.localesReducer.section.instruction

//MAIN FORM SECTION
export const getSectionMainForm = (state: AppStateType) => state.localesReducer.section.mainForm
export const getChosenSiteTextSelector = (state: AppStateType) => state.localesReducer.choseSiteText
export const getChildText = (state: AppStateType) => state.localesReducer.childDataText
export const getParentText = (state: AppStateType) => state.localesReducer.parrentDataText
export const getContactDataText = (state: AppStateType) => state.localesReducer.contactDataText
export const getCheckFormText = (state: AppStateType) => state.localesReducer.checkFormText

//AGREEMENT READY SECTION
export const getAgreementReadySection = (state: AppStateType) => state.localesReducer.section.agreementReady
export const getAgreementReadyText = (state: AppStateType) => state.localesReducer.agreementReadyTexts

//DOWNLOAD SECTION
export const getDownloadText = (state: AppStateType) => state.localesReducer.downloadText
export const getDownloadSection = (state: AppStateType) => state.localesReducer.section.download

//SEND PAGE SECTION
export const getSendingSection = (state: AppStateType) => state.localesReducer.section.sending
export const getSendingText = (state: AppStateType) => state.localesReducer.sendingTexts
export const getSendingButtonText = (state: AppStateType) => state.localesReducer.sendingButtonText
export const getErrorText = (state: AppStateType) => state.localesReducer.errorSendingText

//STEPS
export const getStep1Text = (state: AppStateType) => state.localesReducer.step1Texts
export const getStep2Text = (state: AppStateType) => state.localesReducer.step2Texts
export const getStep3Text = (state: AppStateType) => state.localesReducer.step3Texts
export const getStep4Text = (state: AppStateType) => state.localesReducer.step4Texts
export const getStepSection = (state: AppStateType) => state.localesReducer.section.steps
