
import { AgreementReadyContainer } from '../agreement_ready/agreement_ready_container';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Step3Container } from '../downloading/step_3_container';
import { SendingContainer } from '../sending/sending_container';
import store from '../../BLL/store'
import MainForm from '../main_form/main_form'



const Routers = (props) => {
    return (
        <>
        <Routes>
          <Route path='/' element={<MainForm/>}/>
          <Route path={props.agreementRoute} element={<AgreementReadyContainer/>}/>
          <Route path={props.downloadRoute} element={<Step3Container/>}/>
          <Route path="/sending" element={<SendingContainer/>}/>
          <Route path='*' element={<Navigate to="/" replace/>}/>
        </Routes>
        </>
    )
}

export default Routers