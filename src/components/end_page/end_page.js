import okPicture from '../../images/Ok.png'
import styles from './end_page.module.scss'


const EndPage = (props) => {
    return (
        <div className={props.lastPage ? `${styles.container}` : `${styles.visibleDiv}`}>
            <img src={okPicture} alt='umowa zawarta'/>
            <p>{props.texts.endPagetextLine1}</p> 
            <p className={styles.warning}>{props.texts.endPagetextLine2}</p> 
            <p className={styles.warning}>{props.texts.endPagetextLine3}</p> 
            <span>{props.texts.endPagetextSpan}</span>
        </div>
    )
}

export default EndPage
