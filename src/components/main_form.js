import styles from "./main_form.module.css"

const MainForm = (props) => {
    //-------------select site-----------------
    const localonChangeSite = ({ target: { value } }) => {
        props.onChosenSite(value)
    }

    //-------------select packege--------------
    const localonChangePackage = ({ target: { value } }) => {
        props.onChosenPackage(value)
    }

    //------------select frequency------------
    const localonChangeFrequency = ({ target: { value } }) => {
        props.onChosenFrequency(value)
    }
    
    //------------select school year------------
    const localonChangeSchoolYear = ({ target: { value } }) => {
        props.onChosenSchoolYear(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.discription}>
                <h2>Krok 1: Wypełnij pola poniej</h2>
                <p>Pamiętaj! Przy wypełnieniu danych osobowych zgazasz się na przetwarzanie ich przez CG Olimpic w celu stworzenia oraz przechowywabia umowy do momentu jej wygaśnięcia!</p>
            </div>
            <div className={styles.sectionForm}>
                <div className={styles.sectionForm__Form}>
                    <h3>Placówka i pakiet</h3>
                    <div className={styles.sectionForm__Form__Alone}>
                        <label>Wybierz placówkę:</label>
                        <select className={styles.selectSite} onChange={localonChangeSite} value={props.chosenSite} key={props.chosenSiteId}>
                            <option value="" selected disabled hidden>Nie wybrano</option>
                            {props.sites.map(site => {
                                return (
                                    <option value={site.siteName} key={site.key}>{site.siteName}</option>
                                )
                            })}

                        </select>
                    </div>
                    <div className={`${styles.sectionForm__Form__Triple} ${styles.sectionForm__Form__Alone}`}>
                        <div>
                            <label>Wybierz grupę:</label>
                            {
                                !props.package
                                ? <select onChange={localonChangePackage} value={props.chosenPackage}>
                                    <option value="" selected disabled hidden>najpierw placówkę :)</option>
                                </select>
                                : <select onChange={localonChangePackage} value={props.chosenPackage}>
                                <option value="" selected disabled hidden>wybierz grupę</option>
                                {props.package.map(packageName => {
                                return (
                                    <option value={packageName}>{packageName}</option>
                                )
                            })}
                            </select>
                            }
                        </div>
                        <div>
                            <label>Częstotliwość:</label>
                            {
                                !props.frequency
                                ? <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                    <option value="" selected disabled hidden>najpierw grupę :)</option>
                                </select>
                                : <select onChange={localonChangeFrequency} value={props.chosenFrequency}>
                                <option value="" selected disabled hidden>wybierz</option>
                                {props.frequency.map(frequencyItem => {
                                return (
                                    <option value={frequencyItem}>{frequencyItem}</option>
                                )
                            })}
                            </select>
                            }
                        </div>
                        <div>
                            <label>Rok szkolny:</label>
                            <select onChange={localonChangeSchoolYear} value={props.chosenSchoolYear}>
                                {
                                    props.schoolYear.map(year => <option value={year}>{year}</option>)
                                }
                                {/* <option value="1">2022/2023</option> */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionForm__Form}>
                    <h3>Dane dziecka</h3>
                    <div className={`${styles.sectionForm__Form__Double} ${styles.sectionForm__Form__Alone}`}>
                        <div>
                            <label>Imię Nazwisko dziecka:</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>Data urodzenia:</label>
                            <input type='date' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionForm}>
                <div className={styles.sectionForm__Form}>
                    <h3>Dane rodzica / opiekuna prawnego</h3>
                    <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__Double}`}>
                        <div>
                            <label>Imię Nazwisko:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Nr dokumentu tożsamości</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__Double}`}>
                        <div>
                            <label>Miejscowość:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Kod pocztowy:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.sectionForm__Form__Alone}>
                        <label>Ulica, nr domu / nr mieszkania:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.sectionForm__Form}>
                    <h3>Dane kontaktowe</h3>
                    <div className={`${styles.sectionForm__Form__DoubleSame} ${styles.sectionForm__Form__Alone}`}>
                        <div>
                            <label>tel. matki / opiekuna prawnego:</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>tel. matki / opiekuna prawnego:</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.sectionForm__Form__Alone}>
                        <label>Adres e-mail do kontaktu:</label>
                        <input type="email" />
                    </div>
                    <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__DoubleSame}`}>
                        <div>
                            <p>Czesne: {props.priceNumber} zł</p>
                        </div>
                        <div>

                            <input className={styles.buttonActive} type="button" value="GENERUJ UMOWĘ" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default MainForm