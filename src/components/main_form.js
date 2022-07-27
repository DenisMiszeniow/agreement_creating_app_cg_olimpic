import styles from "./main_form.module.css"

const MainForm = (props) => {
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
                        <select className={styles.selectSite}>
                            <option value="" selected disabled hidden></option>
                            <option value="1">OKiDZ Edukacja Sp. z o.o. - Krakowska 56-62, 50-425 Wrocław</option>

                        </select>
                    </div>
                    <div className={`${styles.sectionForm__Form__Triple} ${styles.sectionForm__Form__Alone}`}>
                        <div>
                            <label>Wybierz pakiet:</label>
                            <select>
                                <option value="" selected disabled hidden></option>
                                <option value="1">GRUPA POCZĄTKUJĄCA (60 min)</option>

                            </select>
                        </div>
                        <div>
                            <label>Częstotliwość:</label>
                            <select>
                                <option value="" selected disabled hidden></option>
                                <option value="1">1-x w tygodniu</option>
                            </select>
                        </div>
                        <div>
                            <label>Rok szkolny:</label>
                            <select>
                                <option value="" selected disabled hidden></option>
                                <option value="1">2022/2023</option>
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
                        <input type="text"/>
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
                        <input type="email"/>
                    </div>
                    <div className={`${styles.sectionForm__Form__Alone} ${styles.sectionForm__Form__DoubleSame}`}>
                        <div>
                            
                        </div>
                        <div>
                            
                            <input className={styles.buttonActive}type="button" value="GENERUJ UMOWĘ"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default MainForm