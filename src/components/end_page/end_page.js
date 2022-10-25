import okPicture from '../../images/Ok.png'
import styles from './end_page.module.scss'


const EndPage = (props) => {
    return (
        <div className={props.lastPage ? `${styles.container}` : `${styles.visibleDiv}`}>
            <img src={okPicture} alt='umowa zawarta'/>
            <p> Udało się! Umowa zawarta!</p> 
            <p className={styles.warning}>Za chwilę otrymasz mailowe potwierdzenie zawarcia umowy.</p> 
            <p className={styles.warning}>Pamiętaj, aby ją aktywować - wpłać wpisowe (CJK)!</p> 
            <span>Teraz możesz zamknąć to okno.</span>
        </div>
    )
}

export default EndPage
