import okPicture from '../../images/Ok.png'
import styles from './end_page.module.css'


const EndPage = (props) => {
    return (
        <div className={props.lastPage ? `${styles.container}` : `${styles.visibleDiv}`}>
            <img src={okPicture}/>
            <p> Udało się! Umowa zawarta!</p> 
            <p className={styles.warning}>Pamiętaj, aby ję aktywować - wpłać wpisowe (CJK)!</p> 
            <span>Teraz możesz zamknąć to okno.</span>
        </div>
    )
}

export default EndPage
