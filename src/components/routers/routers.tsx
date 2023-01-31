import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
//@ts-ignore
import { AgreementReadyContainer } from '../agreement_ready/agreement_ready_container.ts';
//@ts-ignore
import { DownloadingContainer } from '../downloading/downloading_container.ts';
//@ts-ignore
import { SendingContainer } from '../sending/sending_container.ts';
//@ts-ignore
import { InstructionContainer } from '../instruction/instruction_container.ts';
//@ts-ignore
import { MainFormContainer } from '../main_form/main_form_container.ts';
//@ts-ignore
import { OsTesterContainer } from '../os_tester/os_tester_container.ts';


type PropsType = {
  agreementRoute: string
  downloadRoute: string
}

const Routers: FC<PropsType> = (props) => {
    return (
        <div className='content-container'>
        <Routes>
          <Route path="/" element={<InstructionContainer/>} />
          <Route path="/main-form" element={<MainFormContainer/>}/>
          <Route path={props.agreementRoute} element={<AgreementReadyContainer/>}/>
          <Route path={props.downloadRoute} element={<DownloadingContainer/>}/>
          <Route path="/sending" element={<SendingContainer/>}/>
          <Route path='*' element={<Navigate to="/main-form" replace/>}/>
          <Route path='/phone' element={<OsTesterContainer/>}/>
        </Routes>
        </div>
    )
}

export default Routers