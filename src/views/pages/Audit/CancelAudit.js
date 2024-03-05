import React from 'react';
import { CCard, CCol, CCardHeader, CCardBody, CForm, CTable, CTableHead, CTableBody, CTableRow, CTableDataCell } from '@coreui/react';

function CancelAudit() {
  // Sample dynamic data
  const audits = [
    {
      auditId: 1,
      location: 'Branch 1',
      periodicity: 'Weekly',
      auditDate: '2024-02-29',
      auditor: 'Auditor 1',
      auditee: 'Auditee 1',
      auditStatus: 'Completed'
    },
    {
      auditId: 2,
      location: 'Branch 2',
      periodicity: 'Monthly',
      auditDate: '2024-03-15',
      auditor: 'Auditor 2',
      auditee: 'Auditee 2',
      auditStatus: 'In Progress'
    }
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
                <CTableDataCell>Location</CTableDataCell>
                <CTableDataCell>Periodicity</CTableDataCell>
                <CTableDataCell>Audit date</CTableDataCell>
                <CTableDataCell>Auditor</CTableDataCell>
                <CTableDataCell>Auditee</CTableDataCell>
                <CTableDataCell>Audit Status</CTableDataCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {audits.map(audit => (
                <CTableRow key={audit.auditId} color="success">
                 <CTableDataCell>
                  <a href={`./fillauditeedata`}>
                        {audit.auditId}
                      </a>
                 </CTableDataCell>
                  <CTableDataCell>{audit.location}</CTableDataCell>
                  <CTableDataCell>{audit.periodicity}</CTableDataCell>
                  <CTableDataCell>{audit.auditDate}</CTableDataCell>
                  <CTableDataCell>{audit.auditor}</CTableDataCell>
                  <CTableDataCell>{audit.auditee}</CTableDataCell>
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

export default CancelAudit;
