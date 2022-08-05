import styles from "./agreement_section.module.css"
import React from "react"
import Step2 from "../step_2_div"

const Agreement = (props) => {
  return (
   <div>
     <Step2/>
     <div className={styles.container}>
       {/* --- Dane firmy --- */}
        <h2>CENTRUM GIMNASTYCZNE OLIMPIC</h2>
        <h3>UMOWA PROWADZENIA ZAJĘĆ DODATKOWYCH Z GIMNASTYKI ARTYSTYCZNEJ</h3>
        <h3>{`${props.chosenPackage}, ${props.chosenFrequency}`}</h3>
        <div className={styles.separator}></div>
        <p>{`Zawarta w dniu ${props.forecastDate.getDate()}.${props.forecastDate.getMonth()+1}.${props.forecastDate.getFullYear()}, pomiędzy:`}</p>
        <h4>Dane kontrahentów:</h4>
        <p>Firmą <b>{props.companyName}, {props.companyAdress}, REGON: {props.companyRegon}, NIP: {props.companyNip}, </b>reprezentowaną przez {props.ownerName} - właściciel, zwanym dalej <b>"Wykonawca"</b></p>
        <p>a</p>

        {/* --- Dane klienta --- */}
        <p>Panem/Panią <b>{props.parrentName}</b>, legitymującą się dowodem osobistym / paszportem / kartą pobytu nr <b>{props.parrentIdCard}</b>, zamieszkałym/ą pod adresem <b>{props.parrentAddress}, {props.parrentZipCode} {props.parrentCity}</b>, zwanym dalej <b>Klient.</b></p>
        
        {/* --- Dane kontaktowe --- */}
        <h4>Dane kontatowe Klienta:</h4>
        <p>Telefon matki / opiekuna prawnego: <b>{props.motherPhoneNumber === '' ? 'brak numeru' : props.motherPhoneNumber}</b></p>
        <p>Telefon ojca / opiekuna prawnego: <b>{props.fatherPhoneNumber === '' ? 'brak numeru' : props.fatherPhoneNumber}</b></p>
        <p>Email do kontaktu: <b>{props.parrentEmail}</b></p>
        
        {/* --- Dane dziecka --- */}
        <h4>Dane uczestnika zajęć:</h4>
        <p>Imię i Nazwisko dziecka: <b>{props.childName}</b></p>
        <p>Data urodzenia dziecka: <b>{props.childDayOfBirth}</b></p>

        {/* --- §1 --- */}
        <p className={styles.paragraph}>§1</p>
        <p>1. Wykonawca zobowiązuję się do realizacji na rzecz Klienta usług w zakresie prowadzenia zajęć dodatkowych z gimnastyki
              artystycznej.</p>
        <p>2. Umowa zostaje zawarta na czas określony tj. do dnia <b>30-go czerwca roku szkolnego {props.chosenSchoolYear}</b>.</p>

        {/* --- §2 --- */}
        <p className={styles.paragraph}>§2</p>
        <p>1. Wybrany pakiet oraz czas trwania kadego z zajęć: <b>{props.chosenPackage}</b> z częstotliwośćą: <b>{props.chosenFrequency}</b>.</p>
        <p>2. Jeżeli termin zajęcia dodatkowego przypadnie na dzień wolny od pracy opłata za zajęcia nie podlega zmniejszeniu.</p>
        <p>3. Podczas ferii zimowych zajęcia dodatkowe nie odbywają się.</p>
        <p>4. Wykonawca zobowiązuje się do wykonania odpowiedniej ilości zajęć w roku szkolnym zgodnie z tabelą zajęć umieszczonej
              pod adresem internetowym: <a href="https://cg-olimpic.pl/gimnastyka_artystyczna" target="_blank">https://cg-olimpic.pl/gimnastyka_artystyczna</a>.</p>
        <p>5. Wykonawca zobowiązuje się do zachowania stałej odpłatności za zajęcia przez cały rok szkolny w wysokości <b>{props.calculatePrice},00 zł ({props.calculatePriceInWords}) BRUTTO</b> za miesiąc zajęć z wyjątkiem miesiąca na który przypadają ferie zimowe. <b>W miesiącu na który przypadają ferie zimowe koszt zajęć wyniesie połowę od miesięcznej kwoty</b>. Jednocześnie Klient zobowiązuje się do wpłacenia corocznej
        jednorazowej kwoty (CJK) w wysokości <b>{props.priceCjk},00 zł ({props.priceCjkWord}) BRUTTO, <u>(wpłata CJK to warunek konieczny dla aktywacji umowy na wybrany rok szkolny)</u></b>.</p>
        <p>6. W przypadku choroby nauczyciela lub innych zdarzeń losowych uniemożliwiających odbycie się zajęć dodatkowych w
              ustalonym dniu Wykonawca zastrzega sobie prawo do odrobienia zajęć w innym terminie.</p>

        {/* --- §3 --- */}
        <p className={styles.paragraph}>§3</p>
        <p>1. Za świadczenie usług prowadzenia zajęć dodatkowych Klient ponoszą odpłatność miesięcznie z góry <b>do dnia 5-go każdego
miesiąca</b>.</p>
        <p>2. CJK wpłacane są przed pierwszą opłatą za miesiąc zajęć bądź wraz z nią.</p>
        <p>3. Opłaty należy realizować przelewem na rachunek bankowy Wykonawcy: <b>{props.bankAccount}</b> (w tytule
prosimy o podanie: imię i nazwisko dziecka, placówka, miesiąc, za który dokonywana jest opłata).</p>
        
        {/* --- §4 --- */}
        <p className={styles.paragraph}>§4</p>
        <p>1. Rozwiązanie umowy przez każdą ze stron może nastąpić z zachowaniem jednomiesięcznego okresu wypowiedzenia ze
skutkiem na koniec miesiąca.</p>
        <p>2. Klient zobowiązany jest pisemnie oświadczyć rezygnację z zajęć i dostarczyć drogą mailową na adres: <b><u>kontakt@cg-olimpic.pl</u></b></p>

        {/* --- §5 --- */}
        <p className={styles.paragraph}>§5</p>
        <p>1. Wszelkie zmiany do umowy, w tym wypowiedzenie niniejszej umowy dla swej ważności wymagają formy pisemnej.</p>
        <p>2. Ewentualne spory mogące wyniknąć na tle stosowania niniejszej umowy, strony poddają pod rozstrzygnięcie właściwego
rzeczowo sądu ze względu na siedzibę firmy Wykonawcy.</p>
        
        {/* --- §6 --- */}
        <p className={styles.paragraph}>§6</p>
        <p>1. Klient prawny oświadcza, że dziecko nie ma żadnych przeciwskazań zdrowotnych do brania udziału w zajęciach sportów.</p>
        <p>2. Klient zobowiązany jest zapoznać się z regulaminem znajdującym się na stronie <a href="https://cg-olimpic.pl/regulamin/" target="_blank">https://cg-olimpic.pl/regulamin/</a> i przestrzeganie jego reguł.</p>
        
        {/* --- §7 --- */}
        <p className={styles.paragraph}>§7</p>
        <p>1. Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron.</p>

        {/* --- podpisy stron --- */}
        <p className={styles.signatures}><span className={styles.clientSignature}><i>{props.parrentName}</i></span><span className={styles.ownerSignature}><i>{props.ownerName}</i></span></p>
        <p className={styles.signaturesDiscription}><span className={styles.clientSignature}>Podpis Klienta</span><span className={styles.ownerSignature}>Podpis Wykonawcy</span></p>
     </div>
   </div>
    )
}

export default Agreement