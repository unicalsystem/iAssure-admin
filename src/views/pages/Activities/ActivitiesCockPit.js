import React from 'react';
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CFormSelect,
  CFormLabel, // Import CFormSelect instead of CSelect
} from '@coreui/react';

const taskData = [
  { category: 'TASK', new: 1, opened: 0, closed: 0, reopened: 0, escalated: 0 },

];
const detailData = [
    { category: 'Data', sno: 1 , subject:"Subject 1", startdate: "01/03/2024",
     enddate: "30/03/2024", assignto:"Auditor 1", assignby:"Chief Auditor", status: "Open" },
  
  ];
const userList = ["ChiefAuditor", "Auditor1", "Auditor2", "Auditor 3"]; 
  const statusList = ["New", "Open", "Close", "Reopen", "Escalate"]; 

function ActivitiesCockpit() {
  

  return (
    <div style={{ padding: '5px', marginLeft: '5px' }}>
      <div
        style={{
          width: '100%',
          height: '31px',
          backgroundColor: 'lightgray',
          marginBottom: '12px'
        }}
      >
        <span
          style={{
            padding: '0px',
            float: 'left',
            color: 'black',
            fontSize: '24px',
            fontFamily: 'Monotype Corsiva',
            marginLeft: '5px'
          }}
        >
          Cockpit Activities
        </span>
      </div>
      <div
        style={{
          width: '100%',
          marginLeft: '0px',
          marginRight: '10px'
        }}
      >
        <CTable striped responsive="md">
          <CTableHead>
            <CTableRow>
              <CTableDataCell scope="col">Category</CTableDataCell>
              <CTableDataCell scope="col">New</CTableDataCell>
              <CTableDataCell scope="col">Opened</CTableDataCell>
              <CTableDataCell scope="col">Closed</CTableDataCell>
              <CTableDataCell scope="col">Re-opened</CTableDataCell>
              <CTableDataCell scope="col">Escalated</CTableDataCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {taskData.map((task, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{task.category}</CTableDataCell>
                <CTableDataCell>{task.new}</CTableDataCell>
                <CTableDataCell>{task.opened}</CTableDataCell>
                <CTableDataCell>{task.closed}</CTableDataCell>
                <CTableDataCell>{task.reopened}</CTableDataCell>
                <CTableDataCell>{task.escalated}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableDataCell scope="col">S. No.</CTableDataCell>
              <CTableDataCell scope="col">Subject</CTableDataCell>
              <CTableDataCell scope="col">Task Start Date</CTableDataCell>
              <CTableDataCell scope="col">Task End Date</CTableDataCell>
              <CTableDataCell scope="col">
              <CFormLabel>Assign To User</CFormLabel>
                <CFormSelect> 
                  <option>--Select--</option>
                  {userList.map((user, index) => (
                    <option key={index} value={user}>{user}</option>
                  ))}
                </CFormSelect>
              </CTableDataCell>
              <CTableDataCell scope="col">
                <CFormLabel>Assign By User</CFormLabel>
                <CFormSelect> 
                  <option>--Select--</option>
                  {userList.map((user, index) => (
                    <option key={index} value={user}>{user}</option>
                  ))}
                </CFormSelect>
              </CTableDataCell>
              <CTableDataCell scope="col">
              <CFormLabel>Task Status</CFormLabel>
                <CFormSelect> 
                  <option>--Select--</option>
                  {statusList.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}   
                </CFormSelect>
              </CTableDataCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {detailData.map((data, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{data.sno}</CTableDataCell>
                <CTableDataCell>{data.subject}</CTableDataCell>
                <CTableDataCell>{data.startdate}</CTableDataCell>
                <CTableDataCell>{data.enddate}</CTableDataCell>
                <CTableDataCell>{data.assignto}</CTableDataCell>
                <CTableDataCell>{data.assignby}</CTableDataCell>
                <CTableDataCell>{data.status}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}

export default ActivitiesCockpit;
