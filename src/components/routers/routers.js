import { AgreementReadyContainer } from '../agreement_ready/agreement_ready_container';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DownloadingContainer } from '../downloading/downloading_container';
import { SendingContainer } from '../sending/sending_container';
import { InstructionContainer } from '../instruction/instruction_container';
import { MainFormContainer } from '../main_form/main_form_container';
import { OsTesterContainer } from '../os_tester/os_tester_container';



const Routers = (props) => {
    return (
        <>
        <Routes>
          <Route path="/" element={<InstructionContainer/>} />
          <Route path="/main-form" element={<MainFormContainer/>}/>
          <Route path={props.agreementRoute} element={<AgreementReadyContainer/>}/>
          <Route path={props.downloadRoute} element={<DownloadingContainer/>}/>
          <Route path="/sending" element={<SendingContainer/>}/>
          <Route path='*' element={<Navigate to="/main-form" replace/>}/>
          <Route path='/phone' element={<OsTesterContainer/>}/>
        </Routes>
        </>
    )
}

export default Routers