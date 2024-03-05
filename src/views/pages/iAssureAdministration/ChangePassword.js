import React from 'react';
import {
  CCol,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CForm,
  CFormLabel,
  CInputGroup,
  CFormInput,
} from '@coreui/react';

function ChangePassword() {
  return (
    <>
      <CCard className="w-75 mx-auto mt-4">
        <CCardHeader className="bg-primary text-center" style={{ color: 'white' }}>
          <CCardTitle>Change Password</CCardTitle>
        </CCardHeader>
        <CCardBody>
          <CCol md={10} className="mx-auto">
            <CForm className="row g-3">
              <CFormLabel htmlFor="validationServerUsername" className="col-md-3 col-form-label">
                <strong>Username:</strong>
              </CFormLabel>
              <CCol md={9}>
                <CInputGroup className="has-validation">
                  <CFormInput
                    type="text"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrependFeedback"
                    required
                  />
                </CInputGroup>
              </CCol>

              <CFormLabel htmlFor="validationServerUsername" className="col-md-3 col-form-label">
                <strong>Old Password:</strong>
              </CFormLabel>
              <CCol md={9}>
                <CInputGroup className="has-validation">
                  <CFormInput
                    type="password"
                    id="validationCustomOldPassword"
                    aria-describedby="inputGroupPrependFeedback"
                    required
                  />
                </CInputGroup>
              </CCol>

              <CFormLabel htmlFor="validationServerUsername" className="col-md-3 col-form-label">
                <strong>New Password:</strong>
              </CFormLabel>
              <CCol md={9}>
                <CInputGroup className="has-validation">
                  <CFormInput
                    type="password"
                    id="validationCustomNewPassword"
                    aria-describedby="inputGroupPrependFeedback"
                    required
                  />
                </CInputGroup>
              </CCol>

              <CFormLabel htmlFor="validationServerUsername" className="col-md-3 col-form-label">
                <strong>Confirm Password:</strong>
              </CFormLabel>
              <CCol md={9}>
                <CInputGroup className="has-validation">
                  <CFormInput
                    type="password"
                    id="validationCustomConfirmPassword"
                    aria-describedby="inputGroupPrependFeedback"
                    required
                  />
                </CInputGroup>
              </CCol>
            </CForm>

            <div className="d-flex justify-content-end mt-3">
              <CButton className="btn btn-primary mx-2" href="#">
                <strong>Update</strong>
              </CButton>
              <CButton className="btn btn-secondary mx-2" href="#">
                <strong>Cancel</strong>
              </CButton>
            </div>
          </CCol>
        </CCardBody>
      </CCard>
    </>
  );
}

export default ChangePassword;
