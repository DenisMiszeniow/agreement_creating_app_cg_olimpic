
import { NavLink } from 'react-router-dom'
import styles from './instruction.module.scss'
import step1 from '..//..//images/step1.gif'
import step2 from '..//..//images/step2.gif'
import step3 from '..//..//images/step3.gif'
import step4 from '..//..//images/step4.gif'
import { useEffect } from 'react'

const Instruction = (props) => {
    useEffect (() => {props.initialInsructionLocalesThunk(props.language, props.section)}, [props.language])
    return (
        <div className={styles.discription}>
            <h1>{props.instructionText.shortInstruction}</h1>
            <h2>{props.instructionText.easySteps}</h2>
            <section>
                <h3>{props.instructionText.instructionStep1.step1}</h3>
                <p>{props.instructionText.instructionStep1.step1Line1}</p>
                <p>{props.instructionText.instructionStep1.step1Line2}</p>
                <p>{props.instructionText.instructionStep1.step1Line3} <span>{props.instructionText.checkData}</span></p>
                <p>{props.instructionText.instructionStep1.step1Line4} <span>{props.instructionText.nextStep}</span></p>
                <img width={800} src={step1} alt='krok 1'/>
                <p className={styles.warning}>{props.instructionText.instructionStep1.checkKontaktData}</p>
            </section>
            <section>
                <h3>{props.instructionText.instructionStep2.step2}</h3>
                <p>{props.instructionText.instructionStep2.step2Line1}</p>
                <p>{props.instructionText.instructionStep2.step2Line2} <span>{props.instructionText.nextStep}</span></p>
                <img width={800} src={step2} alt='krok 2'/>
            </section>
            <section>
                <h3>{props.instructionText.instructionStep3.step3}</h3>
                <p>{props.instructionText.instructionStep3.step3Click} <span>{`${props.instructionText.downloadText} ${props.instructionText.nextStep}`}</span> {props.instructionText.instructionStep3.step3Line1}</p>
                <p>{props.instructionText.instructionStep3.step3Line2}</p>
                <p className={styles.warning}>{props.instructionText.instructionStep3.step3Remember}</p>
                <img width={800} src={step3} alt='krok 3'/>
            </section>
            <section>
                <h3>{props.instructionText.instructionStep4.step4}</h3>
                <p>{props.instructionText.instructionStep4.step4Line1}</p>
                <p>{props.instructionText.instructionStep4.step4Line2} <span>{props.instructionText.signAgree}</span></p>
                <img width={800} src={step4} alt='krok 4'/>
                <p>{props.instructionText.instructionStep4.step4Line3}</p>
                <p>{props.instructionText.instructionStep4.step4Line4}</p>
            </section>
            <section className={styles.rodo}>
                <h3>{props.instructionText.instructionWarning.warningText}</h3>
                <p>{props.instructionText.instructionWarning.warningLine1}</p>
                <p>{props.instructionText.instructionWarning.warningLine2}</p>
            </section>
            <NavLink to="/main-form" className={styles.linkActive}>{props.instructionText.letIsGo}</NavLink>
            </div>
    )
}

export default Instruction
