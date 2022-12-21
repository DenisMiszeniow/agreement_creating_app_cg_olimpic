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