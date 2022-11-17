import axios from 'axios'
import emailjs from '@emailjs/browser';

const instance = axios.create({
    withCredentials: true,
    baseURL: './asset/',
    headers: {}, 
})
export const MainDataApi = {
    // getSitesOlga () {
    //     return instance.get('olga_sites')
    //     .then (response => response.data)
    // },
    // getSitesLiza () {
    //     return instance.get('liza_sites')
    //     .then (response => response.data)
    //  },
    
    setLocales (locales) {
        return instance.get(`/locales/${locales}/translation.json`)
        .then (response => response.data)
    }
}



// export const sendEmailJs = (form) => {
//     return emailjs.sendForm('service_weofkil', 'template_jpopojg', form.current, 'rB9N2zoV8qvOchXfR')    
// }

export const sendEmailJs = (form) => {
    return emailjs.sendForm('service_weofkil', 'template_44oeoxb', form.current, 'rB9N2zoV8qvOchXfR')    
}