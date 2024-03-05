import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableRow,
  } from '@coreui/react'
  import {
    CAccordion,
    CAccordionBody,
    CAccordionHeader,
    CAccordionItem,
  } from '@coreui/react'
import AuditCockpit from '../AuditCockpit/AuditCockpit';


function Audits(){
    return(
        <>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
          <CCard className="mb-4">
              <CAccordion >
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>PLANNED</CAccordionHeader>
                  <CAccordionBody>
                  <CTable>
                <CTableBody>
                  <CTableRow color="success">
                    <CTableDataCell >Schedule An Audit</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="danger">
                    <CTableDataCell >View All Audits</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="warning">
                    <CTableDataCell >Cancel an Audit</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>ACTIVE</CAccordionHeader>
                  <CAccordionBody>
                  <CTable>
                <CTableBody>
                  <CTableRow color="success">
                    <CTableDataCell >Fill Auditee Data</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="danger">
                    <CTableDataCell >Submit to Auditor</CTableDataCell>
                  </CTableRow>
                  <CTableRow color="warning">
                    <CTableDataCell >Fill Auditor Data</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>CLOSED</CAccordionHeader>
                  <CAccordionBody>
                  <CTable>
                <CTableBody>
                  <CTableRow color="success">
                    <CTableDataCell >View Closed Audits</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
        </CCard>
          </CCardHeader>
          <CCardBody>
              <CCard>
               <AuditCockpit />
              </CCard>
          </CCardBody>
        </CCard>
        </CCol>
        </>
    )
}
export default Audits;