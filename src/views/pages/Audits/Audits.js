import React from 'react'
import { CCard, CCardBody, CCol, } from '@coreui/react';
import AuditCockpit from '../AuditCockpit/AuditCockpit';


function QMS(){
    return(
        <>
        <CCol xs={12}>
          <CCardBody>
              <CCard>
               <AuditCockpit />
              </CCard>
          </CCardBody>
        </CCol>
        </>
    )
}
export default QMS;