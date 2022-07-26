import styles from "./main_form.module.css"

const MainForm = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.discription}>
                <h2>Krok 1: Wypełnij pola poniej</h2>
                <p>Pamiętaj! Przy wypełnieniu danych osobowych zdazasz się na przetywarzanie ich przez CG Olimpic w celu stworzeniu oraz przechowywabiu umowy do momentu jej wygaśnięcia!</p>
            </div>

            <div className={styles.sectionForm}>
                <div>
                    <h3>Placówka i pakiet</h3>
                    <label>Wybierz placówkę:</label>
                    <select className={styles.selectSite}>
                        <option value="1">Синий</option>
                        <option value="2">Зеленый</option>
                        <option value="3">Желтый</option>
                        <option value="4">Красный</option>
                        <option value="5">Оранжевый</option>
                        <option value="6">Черный</option>
                    </select>
                    <label>Wybierz pakiet:</label>
                    <select>
                        <option value="1">Синий</option>
                        <option value="2">Зеленый</option>
                        <option value="3">Желтый</option>
                        <option value="4">Красный</option>
                        <option value="5">Оранжевый</option>
                        <option value="6">Черный</option>
                    </select>
                    <label>Wybierz rok szkolny:</label>
                    <select>
                        <option value="1">Синий</option>
                        <option value="2">Зеленый</option>
                        <option value="3">Желтый</option>
                        <option value="4">Красный</option>
                        <option value="5">Оранжевый</option>
                        <option value="6">Черный</option>
                    </select>

                </div>
                <div>
                    <h3>Dane dziecka</h3>
                    <label>Imię Nazwisko dziecka:</label>
                    <input type='text'/>
                    <label>Data urodzenia:</label>
                    <input type='date' />
                </div>
            </div>
            <div className={styles.sectionForm}>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
export default MainForm