import React from 'react';
import {
    CCard,
    CCol,
    CCardHeader,
    CCardBody,
    CFormLabel,
    CForm,
    CFormInput,
    CButton,
    CTable,
    CTableHead,
    CTableBody,
    CTableDataCell,
    CTableRow,
    CContainer,
    CRow,
    CFormSelect // Import CFormSelect for dropdown functionality
} from '@coreui/react';

class AuditeeDataComponent extends React.Component {
    // Placeholder function for handleAuditClick to resolve unused variable warning
    handleAuditClick = () => {
        // Placeholder function, can be left empty for now
    }

    render() {
        // Static JSON data
        const auditData = [
            {
                id: 'B00-02/27/2024-004',
                total: 1,
                completed: 0,
                pending: 1,
                location: 'Branch 1',
                auditDate: '02/29/2024',
                auditor: 'Auditor Chief',
                ncCount: 0,
                auditStatus: 'Scheduled',
            },
            {
                id: 'B01-02/27/2024-004',
                total: 1,
                completed: 0,
                pending: 1,
                location: 'Branch 2',
                auditDate: '02/29/2024',
                auditor: 'Auditor Chief',
                ncCount: 0,
                auditStatus: 'For Review',
            },
            // Add more data objects as needed
        ];

        return (
            <CContainer>
                <CCard>
                    <CCardHeader>
                        Fill Auditee Data
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol md="3">
                                    <CFormLabel htmlFor="fromDate">From:<CFormInput type="date" id="fromDate" /></CFormLabel>
                                </CCol>
                                <CCol md="3">
                                    <CFormLabel htmlFor="toDate">To:<CFormInput type="date" id="toDate" /></CFormLabel> 
                                </CCol>
                                <CCol md="3" className='pt-4'>
                                    {/* Dropdown for location */}
                                    <CFormSelect>
                                        <option>Branch 1</option>
                                        <option>Branch 2</option>
                                        {/* Add more options as needed */}
                                    </CFormSelect>
                                </CCol>
                                <CCol md="3" className='pt-4'>
                                    <CButton color="primary" onClick={this.handleAuditClick}>View</CButton>
                                </CCol>
                            </CRow>
                        </CForm>
                        <CTable className='mt-3'>
                            <CTableHead>
                            <CTableRow color="success">
                                       <CTableDataCell className='mt-4 pt-6'>
                                       <span>Measures</span>
                                       </CTableDataCell>
                                    </CTableRow>
                            </CTableHead>
                            <CTableHead>
                                <CTableRow  color="success">
                                    <CTableDataCell>Audit ID</CTableDataCell>
                                    <CTableDataCell>Total</CTableDataCell>
                                    <CTableDataCell>Completed</CTableDataCell>
                                    <CTableDataCell>Pending</CTableDataCell>
                                    <CTableDataCell>Location</CTableDataCell>
                                    <CTableDataCell>Audit Date</CTableDataCell>
                                    <CTableDataCell>Auditor</CTableDataCell>
                                    <CTableDataCell>NCs Count</CTableDataCell>
                                    <CTableDataCell>Audit Status</CTableDataCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {auditData.map((audit) => (
                                    <CTableRow key={audit.id}>
                                        <CTableDataCell>{audit.id}</CTableDataCell>
                                        <CTableDataCell>{audit.total}</CTableDataCell>
                                        <CTableDataCell>{audit.completed}</CTableDataCell>
                                        <CTableDataCell>{audit.pending}</CTableDataCell>
                                        <CTableDataCell>{audit.location}</CTableDataCell>
                                        <CTableDataCell>{audit.auditDate}</CTableDataCell>
                                        <CTableDataCell>{audit.auditor}</CTableDataCell>
                                        <CTableDataCell>{audit.ncCount}</CTableDataCell>
                                        <CTableDataCell>{audit.auditStatus}</CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CContainer>
        );
    }
}

export default AuditeeDataComponent;
