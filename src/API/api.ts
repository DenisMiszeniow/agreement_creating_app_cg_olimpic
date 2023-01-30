import axios from 'axios';
import emailjs from '@emailjs/browser';


const instance = axios.create({
    withCredentials: true,
    baseURL: './assets/',
    headers: {}, 
})
export const MainDataApi = {
    getSites () {
        return instance.get('sites.json')
        .then (response => response.data)
    },

    getPackages () {
        return instance.get('packages.json')
        .then (response => response.data)
    },

    getFrequences () {
        return instance.get('frequences.json')
        .then (response => response.data)
    },

    getPrices () {
        return instance.get('prices.json')
        .then(response => response.data)
    },

    getCompanyData (owner: string) {
        return instance.get(`owner/${owner}.json`)
        .then (response => response.data)
    },

    getSchoolYerars () {
        return instance.get('school-years.json')
        .then (response => response.data)
    },

    setLocales (locales: string, section: string) {
        return instance.get(`locales/${locales}/${section}.json`)
        .then (response => response.data)        
    },
}


export const sendEmailJs = (form) => {
    return emailjs.sendForm('service_weofkil', 'template_jpopojg', form.current, 'rB9N2zoV8qvOchXfR')    
}

// export const sendEmailJs = (form) => {
//     return emailjs.sendForm('service_weofkil', 'template_44oeoxb', form.current, 'rB9N2zoV8qvOchXfR')    
// }