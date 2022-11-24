import styles from './steps.module.scss'

const Step1 = (props) => {
    return (
        <div className={styles.discription}>
            <h1>{props.step1Texts.step1Text}</h1> 
            <h2>{props.step1Texts.h2Text}</h2>
            <p>{props.step1Texts.pText}</p>
        </div>
    )
}

export default Step1
