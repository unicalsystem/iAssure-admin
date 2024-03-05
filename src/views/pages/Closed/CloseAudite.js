import React from 'react';
import { CCard, CCol, CCardHeader, CCardBody, CForm, CTable, CTableHead, CTableBody, CTableRow, CTableDataCell } from '@coreui/react';

function CloseAudite() {
  // Sample dynamic data
  const audits = [
    {
      auditId: 1,
      totalmeasures: '1',
      location: 'Branch 1',
      auditDate: '2024-02-29',
      auditor: 'Auditor 1',
      auditee: 'Auditee 1',
      auditStatus: 'Closed'
    },
    {
        auditId: 1,
        totalmeasures: '21',
        location: 'Branch 2',
        auditDate: '2024-02-29',
        auditor: 'Auditor 1',
        auditee: 'Auditee 1',
        auditStatus: 'Closed'
      },
  ];

// const handleAuditClick = (auditId) => {
//     window.open(`/editAudit/${auditId}`, '_blank');
//   };
  

  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader className="bg-primary" style={{ color: 'white' }}>Audit Cockpit</CCardHeader>
      </CCard>
      <CCardBody>
        <CForm className="row g-3">

        </CForm>
        <CForm className="row g-3">
        </CForm>

        <CForm>
          <CTable>
            <CTableHead>
              <CTableRow color="success">
                <CTableDataCell>AuditID</CTableDataCell>
                <CTableDataCell>Total Measures</CTableDataCell>
                <CTableDataCell>Location</CTableDataCell>
                <CTableDataCell>Audit date</CTableDataCell>
                <CTableDataCell>Auditor</CTableDataCell>
                <CTableDataCell>Auditee</CTableDataCell>
                <CTableDataCell>NCs Count</CTableDataCell>
                <CTableDataCell>Audit Status</CTableDataCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {audits.map(audit => (
                <CTableRow key={audit.auditId} color="success">
                 <CTableDataCell>
                  <a href={`./`}>
                        {audit.auditId}
                      </a>
                 </CTableDataCell>
                  <CTableDataCell>{audit.totalmeasures}</CTableDataCell>
                  <CTableDataCell>{audit.location}</CTableDataCell>
                  <CTableDataCell>{audit.auditDate}</CTableDataCell>
                  <CTableDataCell>{audit.auditor}</CTableDataCell>
                  <CTableDataCell>{audit.auditee}</CTableDataCell>
                  <CTableDataCell>{audit.ncscount}</CTableDataCell>
                  <CTableDataCell>{audit.auditStatus}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CForm>
      </CCardBody>
    </CCol>
  );
}

export default CloseAudite;
