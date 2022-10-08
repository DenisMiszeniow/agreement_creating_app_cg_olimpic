import { NavLink } from 'react-router-dom'
import styles from './instruction.module.css'
import step1 from '..//..//images/step1.gif'
import step2 from '..//..//images/step2.gif'
import step3 from '..//..//images/step3.gif'
import step4 from '..//..//images/step4.gif'

const Instruction = (props) => {
    return (
        <div className={styles.discription}>
            <h1>Krótka Instrukcja</h1>
            <h2>Proste 4 kroki i umowa jest podpisana on-line. Prygotuj swój dowód osobisty i do dzieła :)</h2>
            <section>
                <h3>KROK 1 - Wypełnij wszystkie pola i zweryfikuj dane</h3>
                <p> - Na tym kroku wybierasz placówkę, grupę, częstotliwość zajęć oraz wypełniasz wszystkie pola.</p>
                <p> - Większość tych danych będą widnieć w umowie.</p>
                <p> - Po wypełnieniu wszystkich pól kliknij <span>SPRAWDŹ DANE</span></p>
                <p> - Jeśli wstępna weryfikacja powiedzie się, kliknij <span>NASTĘPNY KROK</span></p>
                <img width={800} src={step1}/>
                <p className={styles.warning}>Bardzo prosimy o dokładne sprawdzenie danych kontaktowych!</p>
            </section>
            <section>
                <h3>KROK 2 - Zapoznaj się z projektem umowy. Jeszcze raz sprawdź dane</h3>
                <p>Na tym kroku dokładnie zapoznaj się z warunkami umowy oraz sprawdź wszystkie dane twoje oraz dziecka.</p>
                <p>Jeśli wszystko się zgadza, odchać odpowiednie pole pod projektem umowy i kliknij <span>NASTĘPNY KROK</span></p>
                <img width={800} src={step2}/>
            </section>
            <section>
                <h3>KROK 3 - Ściągnij wygenerowaną umowę i zachowaj w wybranym miejscu na komputerze</h3>
                <p> Kliknij <span>ŚCIĄGAM / NASTĘPNY KROK</span> i zachowaj umowę w wybranym miejscu na swoim komputerze.</p>
                <p>Nie modyfikuj nazwy a nie zwiększaj rozmiaru pliku.</p>
                <p className={styles.warning}>Pamiętaj, Umowa jeszcze nie jest zawarta!</p>
                <img width={800} src={step3}/>
            </section>
            <section>
                <h3>KROK 4 - Zawarcie Umowy</h3>
                <p>Na tym kroku zawierasz umowę z CG-Olimpic. Ten krok jest konieczny, musimy mieć pewność, że świadomie zawierasz umowę.</p>
                <p>Kliknij w odpowiednie pole w formularzu i załącz ściągniętą umowę po czym kliknij <span>ZAWIERAM UMOWĘ</span></p>
                <img width={800} src={step4}/>
                <p>Za chwilę otrzymasz maila z potwierdzeniem zawarcia umowy oraz warunkami jej aktywacji.</p>
                <p>To wszystko! Zapraszamy na zajęcia! :)</p>
            </section>
            <section className={styles.rodo}>
                <h3>!! WAŻNE !!</h3>
                <p>Aż do momentu zawarcia umowy wszystkie wprawodzone przez Ciebie dane przechowywane są w twojej przeglądarce internetowej, nie mamy dostępu do nich (RODO).</p>
                <p>Dlatego NIE restartuj a NIE zamykaj okna przeglądarki, wtedy unikniesz powtórnego wprowadzania danych!</p>
            </section>
            <NavLink to="/main-form" className={styles.linkActive}>ZACZYNAMY!</NavLink>
            </div>
    )
}

export default Instruction
