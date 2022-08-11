import styles from "./agreement_section.module.css"
import React from "react"
import Step2 from "../step_2_div"
import { NavLink } from "react-router-dom"

const Agreement = (props) => {

        const onLocalDownloadRoute = () => {
                props.onDownloadRoute()
        }
        return (
                <div>
                        <Step2 />
                        <div className={styles.container}>
                                {/* --- Dane firmy --- */}
                                <h2>CENTRUM GIMNASTYCZNE OLIMPIC</h2>
                                <h3>UMOWA PROWADZENIA ZAJĘĆ DODATKOWYCH Z GIMNASTYKI ARTYSTYCZNEJ</h3>
                                <h3>{`${props.chosenPackage}, ${props.chosenFrequency}`}</h3>
                                <div className={styles.separator}></div>
                                <p>{`Zawarta w dniu ${props.forecastDate.getDate()}.${props.forecastDate.getMonth() + 1}.${props.forecastDate.getFullYear()}, pomiędzy:`}</p>
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
                                <p>2. Umowa zostaje zawarta na czas określony tj. <b>do ostatniego dnia roku szkolnego {props.chosenSchoolYear}</b>.</p>

                                {/* --- §2 --- */}
                                <p className={styles.paragraph}>§2</p>
                                <p>1. Wybrany pakiet oraz czas trwania kadego z zajęć: <b>{props.chosenPackage}</b> z częstotliwośćą: <b>{props.chosenFrequency}</b>.</p>
                                <p>2. Jeżeli termin zajęcia dodatkowego przypadnie na dzień wolny od pracy opłata za zajęcia nie podlega zmniejszeniu.</p>
                                <p>3. Podczas ferii zimowych zajęcia dodatkowe nie odbywają się.</p>
                                <p>4. Wykonawca zobowiązuje się do wykonania odpowiedniej ilości zajęć w roku szkolnym zgodnie z tabelą zajęć umieszczonej
                                        pod adresem internetowym: <a href="https://cg-olimpic.pl/gimnastyka_artystyczna" target="_blank" rel="noreferrer">https://cg-olimpic.pl/gimnastyka_artystyczna</a>.</p>
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
                                <p>2. Klient zobowiązany jest zapoznać się z regulaminem znajdującym się na stronie <a href="https://cg-olimpic.pl/regulamin/" target="_blank" rel="noreferrer">https://cg-olimpic.pl/regulamin/</a> i przestrzeganie jego reguł.</p>

                                {/* --- §7 --- */}
                                <p className={styles.paragraph}>§7</p>
                                <p>1. Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron.</p>

                                {/* --- podpisy stron --- */}
                                <p className={styles.signatures}><span className={styles.clientSignature}><i>tutaj będzie twój podpis</i></span><span className={styles.ownerSignature}><i>{props.ownerName}</i></span></p>
                                <p className={styles.signaturesDiscription}><span className={styles.clientSignature}>Podpis Klienta</span><span className={styles.ownerSignature}>Podpis Wykonawcy</span></p>
                        </div>
                        <div className={styles.container}>

                                {/* --- zgody i RODO: --- */}
                                <h4>{!props.childCheckbox ? 'nie ' : ''}wyrażam zgod{!props.childCheckbox ? 'y' : 'ę'} na:</h4>
                                <p>1. Przetwarzanie moich/mojego dziecka danych osobowych (do celów statutowych i organizacyjnych) przez <b>{props.companyName}</b> (dotyczące prowadzonej działalności rekreacyjno-sportowej <strong>Centrum Gimnastycznego Olimpic</strong>) dla
                                        utrwalania zajęć lub ich fragmentów, a także form współzawodnictwa sportowego za pomocą urządzeń rejestrujących.</p>
                                <p>2. Nieodpłatne wykorzystanie mojego wizerunku/wizerunku mojego dziecka w publikacjach w formie tradycyjnej (np.
                                        katalogi, foldery, notatki prasowe) i elektronicznej, związane z prowadzoną działalnością rekreacyjno-sportową <strong>Centrum Gimnastyczne Olimpic</strong>.</p>
                                <h4>przyjmuję do wiadomości, że:</h4>
                                <p>1. Administratorem Pana/Pani danych osobowych jest <b>{props.companyName}</b> z siedzibą: {props.companyAdress}. Może Pan/Pani skontaktować się z Inspektorem Danych Osobowych w
                                        sprawie ochrony danych pod adresem: <u>kontakt@cg-olimpic.pl</u>.</p>
                                <p>2. Pana/Pani dane osobowe będą przetwarzane zgodnie z RODO w celach związanych z: realizowaniem i wykonaniem zawartej z Panem/Panią umowy; statutową działalnością sportową; organizowania i przeprowadzania konkursów, zawodów, obozów, konsultacji; promocji i marketingu usług (związanych z prowadzoną działalnością rekreacyjno-sportową).</p>
                                <p>3. W niektórych sytuacjach Administrator ma prawo przekazywać Pana/Pani dane osobowe innym odbiorcom,
                                        jeżeli będzie to niezbędne do wykonania zawartej z Panem/Panią umowy lub do zrealizowania obowiązków
                                        ciążących na Administratorze: pracownikom i współpracownikom, którzy muszą mieć dostęp do danych osobowych w celu wykonywania
                                        swoich obowiązków; organom upoważnionym na podstawie przepisów prawa.</p>
                                <p>4. Pana/Pani dane osobowe będą przechowywane: przez okres trwania zawartej umowy; przez okres wynikający z przepisów dotyczących archiwizowania dokumentacji.</p>
                                <p>5. Przysługuje Panu/Pani prawo żądania od Administratora dostępu do danych osobowych Pana/Pani dotyczących ich
                                        sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych, a zgoda na przetwarzanie danych może
                                        zostać cofnięta w każdym momencie (cofnięcie zgody - tylko w formie pisemnej, nie wpływa na zgodność z prawem
                                        przetwarzania, którego dokonano na podstawie udzielonej zgody przed jej wycofaniem).</p>
                                <p>6. Przysługuje Panu/Pani prawo do złożenia skargi w zakresie przetwarzania danych osobowych przez Administratora do
                                        organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</p>
                                <p>7. Podanie danych osobowych jest dobrowolne, lecz niezbędne do realizacji zawartej z Panem/Panią umowy, a ich
                                        niepodanie uniemożliwi realizację zawartej umowy.</p>

                                {/* --- podpis rodzica / opiekuna prawnego --- */}
                                <p className={styles.signatures}><span className={styles.clientSignature}><i>{`Wrocław, ${props.forecastDate.getDate()}.${props.forecastDate.getMonth() + 1}.${props.forecastDate.getFullYear()}`}</i></span><span className={styles.ownerSignature}><i>tutaj będzie twój podpis</i></span></p>
                                <p className={styles.signaturesDiscription}><span className={styles.clientSignature}>Miejscowość, Data</span><span className={styles.ownerSignature}>Podpis Klienta</span></p>
                        </div>
                        <input type="checkbox" onClick={onLocalDownloadRoute}/><span>Zaznacz jeśli wszystko się zgadza</span>
                        <NavLink to={props.acceptAgreement ? props.downloadRoute : ''} className={styles.linkActive}>PODPISUJĘ :)</NavLink>
                </div>
        )
}

export default Agreement