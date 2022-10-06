import okPicture from '../../images/Ok.png'
import styles from './end_page.module.css'


const EndPage = (props) => {
    return (
        <div className={props.lastPage ? `${styles.container}` : `${styles.visibleDiv}`}>
            <img className={styles.image} src={okPicture}/>
            <p> Udało się! Umowa zawarta!</p> 
            <p className={styles.warning}>Za chwilę otrymasz mailowe potwierdzenie zawarcia umowy.</p> 
            <p className={styles.warning}>Pamiętaj, aby ją aktywować - wpłać wpisowe (CJK)!</p> 
            <span>Teraz możesz zamknąć to okno.</span>
        </div>
    )
}

export default EndPage
