import { FC } from 'react'
import okPicture from '../../images/Ok.png'
import styles from './end_page.module.scss'

type PropsType = {
    lastPage: boolean
    endPagetextLine1: string
    endPagetextLine2: string
    endPagetextLine3: string
    endPagetextSpan: string
}

const EndPage: FC<PropsType> = (props) => {
    return (
        <div className={props.lastPage ? `${styles.container}` : `${styles.visibleDiv}`}>
            <img src={okPicture} alt='umowa zawarta'/>
            <p>{props.endPagetextLine1}</p> 
            <p className={styles.warning}>{props.endPagetextLine2}</p> 
            <p className={styles.warning}>{props.endPagetextLine3}</p> 
            <span>{props.endPagetextSpan}</span>
        </div>
    )
}

export default EndPage
