import React, {  useState } from 'react'
import {
    CButton,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormFeedback,
    CFormLabel,
    CFormSelect,
  } from '@coreui/react'
  import {
    CCard,
    CCardBody,
    CCardHeader,
    CFormTextarea,
  } from '@coreui/react'
  import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'



function ScheduleAudit(){
  const [validated, setValidated] = useState(false);
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [selectedScheduleType, setSelectedScheduleType] = useState('onTime');

  const handleScheduleTypeChange = (type) => {
    setSelectedScheduleType(type);
  };


  const fields = [
    { label: 'Location', controlId: 'validationCustom01', feedback: 'Please provide a valid Location.' },
    { label: 'Category', controlId: 'validationCustom02', feedback: 'Please provide a valid Category.' },
    { label: 'Sub Category', controlId: 'validationCustom03', feedback: 'Please provide a valid Sub Category.' },
    { label: 'Auditee', controlId: 'validationCustom04', feedback: 'Please provide a valid Auditee.' },
    { label: 'Auditor', controlId: 'validationCustom05', feedback: 'Please provide a valid Auditor.' },
  ];

  const checklistItems = [
    { id: 1, label: 'Checklist 1', color: 'green' },
    { id: 2, label: 'Ckecklist 2', color: 'blue' },
    { id: 3, label: 'Checklist 3', color: 'blue' },
  ];


  const handleCheckboxChange = (itemId) => {
    const updatedSelectedItems = [...selectedItemIds];
    if (updatedSelectedItems.includes(itemId)) {
      updatedSelectedItems.splice(updatedSelectedItems.indexOf(itemId), 1);
    } else {
      updatedSelectedItems.push(itemId);
    }
    setSelectedItemIds(updatedSelectedItems);
  };

  const subCheckboxLabels1 = ['Sub Checkbox 1', 'Sub Checkbox 2', 'Sub Checkbox 3', 'Sub Checkbox 4'];
  const subCheckboxLabels2 = ['Sub Checkbox 1', 'Sub Checkbox 2', 'Sub Checkbox 3', 'Sub Checkbox 4', 'Sub Checkbox 5', 'Sub Checkbox 6'];

  

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
        <>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader style={{color:'white'}} className="bg-primary">
                <strong>Schedule Audit</strong> <small>Form</small>
              </CCardHeader>
              <CCardBody>
                <CForm  className="row g-3 needs-validation"  noValidate  validated={validated}  onSubmit={handleSubmit}>
                  {/* schedule audit form input fields  */}
                    {fields.map((field, index) => (
                      <CCol md={4} key={index}>
                        <CFormLabel htmlFor={field.controlId}>{field.label}</CFormLabel>
                        <CFormSelect id={field.controlId} required>
                          <option disabled>Choose...</option>
                          <option>...</option>
                        </CFormSelect>
                        <CFormFeedback invalid>{field.feedback}</CFormFeedback>
                      </CCol>
                    ))}
                    <CCol md={4}>
                      <CFormLabel htmlFor="validationCustom05">Audit ID</CFormLabel>
                      <CFormInput type="text" id="validationCustom05" required />
                      <CFormFeedback invalid>Please provide a valid Audit ID.</CFormFeedback>
                    </CCol>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1"> Audit Purpose</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                    </div>
                    <CCol xs={12}>
                    <CCol xs={12}>
                <CCard className="mb-4">
                  <CCardHeader style={{ color: 'white' }} className="bg-primary">
                    <strong>Schedule Type</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CFormCheck
                      type="radio"
                      name="flexRadioDisabled"
                      id="flexRadioDisabled"
                      label="Recurring"
                      onChange={() => handleScheduleTypeChange('recurring')}
                      checked={selectedScheduleType === 'recurring'}
                    />
                    <CFormCheck
                      type="radio"
                      name="flexRadioDisabled"
                      id="flexRadioCheckedDisabled"
                      label="On-Time"
                      onChange={() => handleScheduleTypeChange('onTime')}
                      checked={selectedScheduleType === 'onTime'}
                    />
                    {selectedScheduleType === 'recurring' && (
                      <CCol md={4}>
                        <CFormLabel htmlFor="validationCustom04">Schedule Periodicity</CFormLabel>
                        <CFormSelect id="validationCustom04">
                          <option>Choose...</option>
                          <option>Monthly</option>
                          <option>Weekly</option>
                          <option>Daily</option>
                        </CFormSelect>
                        <CFormFeedback invalid>Please provide a valid Category.</CFormFeedback>
                      </CCol>
                    )}
                    {selectedScheduleType === 'onTime' && (
                      <>
                      <CCol md={4} >
                        <CFormLabel htmlFor="validationCustom04">First Schedule Date</CFormLabel>
                        <CFormInput type="date" id="validationCustom04" required />
                        <CFormFeedback invalid>Please provide a valid Category.</CFormFeedback>
                        <CFormLabel htmlFor="validationCustom05">Last Schedule Date</CFormLabel>
                        <CFormInput type="date" id="validationCustom05" required />
                        <CFormFeedback invalid>Please provide a valid Category.</CFormFeedback>
                      </CCol>
                    </>
                    )}
                  </CCardBody>
                </CCard>
              </CCol>
                    </CCol>
                </CForm>
                <CCard className="mb-4" style={{ marginTop: '20px' }}>
                  <CCardHeader style={{ color: 'white' }} className="bg-primary">
                    <strong>Check List</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CTable>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">Standard</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Measure Group</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {checklistItems.map((item) => (
                          <React.Fragment key={item.id}>
                            <CTableRow color={item.color}>
                              <CTableDataCell>
                                <CFormCheck
                                  id={`flexCheck${item.id}`}
                                  label={item.label}
                                  onChange={() => handleCheckboxChange(item.id)}
                                  checked={selectedItemIds.includes(item.id)}
                                />
                              </CTableDataCell>
                              <CTableDataCell>
                                <CFormCheck id={`flexCheckDefault`} label="Select All" />
                                {selectedItemIds.includes(item.id) && (
                                  <CTableRow>
                                    <CTableDataCell colSpan="2">
                                      {item.id === 1
                                        ? subCheckboxLabels1.map((subLabel, index) => (
                                            <CFormCheck key={index} id={`flexCheckDefault`} label={subLabel} />
                                          ))
                                        : item.id === 2 &&
                                          subCheckboxLabels2.map((subLabel, index) => (
                                            <CFormCheck key={index} id={`flexCheckDefault`} label={subLabel} />
                                          ))}
                                    </CTableDataCell>
                                  </CTableRow>
                                )}
                              </CTableDataCell>
                            </CTableRow>
                          </React.Fragment>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CCardBody>
                </CCard>
                <CCol xs={12}>
                  <CButton color="primary" type="submit">
                    Submit form
                  </CButton>
                </CCol>
              </CCardBody>
            </CCard>
          </CCol>
        </> 
      )
}

export default ScheduleAudit;