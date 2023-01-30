import { AppStateType } from './../store'


export const getParentNameSelector = (state: AppStateType) => state.parrentData.parrentName
export const getParentIdCardSelector = (state: AppStateType) => state.parrentData.parrentIdCard
export const getParentCitySelector = (state: AppStateType) => state.parrentData.parrentCity
export const getParentZipCodeSelector = (state: AppStateType) => state.parrentData.parrentZipCode
export const getParentAddressSelector = (state: AppStateType) => state.parrentData.parrentAddress

export const getMotherNumberSelector = (state: AppStateType) => state.parrentData.motherPhoneNumber
export const getFatherNumberSelector = (state: AppStateType) => state.parrentData.fatherPhoneNumber
export const getParentEmailSelector = (state: AppStateType) => state.parrentData.parrentEmail
