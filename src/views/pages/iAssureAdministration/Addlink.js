import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormLabel,
  CFormSelect,
  CFormCheck,
  CFormInput,
  CButton,
} from '@coreui/react';

function Addlink() {
  return (
    <>
      <CCard className="my-4 mx-auto" style={{ maxWidth: '600px', borderRadius: '15px' }}>
        <CCardHeader className="text-center" style={{ background: '#5856d8', color: '#fff', borderRadius: '15px 15px 0 0' }}>
          <strong>Fill to add icon from User links</strong>
        </CCardHeader>
        <CCardBody style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              Username:
            </CFormLabel>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              Application open type:
            </CFormLabel>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              QuickLink Display Name
            </CFormLabel>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              Url
            </CFormLabel>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              Url Description
            </CFormLabel>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              Status
            </CFormLabel>
            <CFormLabel htmlFor="validationServerUsername" className="mt-2">
              Icon
            </CFormLabel>
          </div>
          <div>
            <CFormCheck label="User" className="mt-2"></CFormCheck>
            <CFormSelect className="mt-2">
              <option>--Select--</option>
              <option>SameWindow</option>
              <option>NewWindow</option>
            </CFormSelect>
            <CFormInput type="text" className="mt-2" required />
            <CFormInput type="text" className="mt-2" required />
            <CFormInput type="text" className="mt-2" required />
            <CFormSelect className="mt-4">
              <option>Active</option>
              <option>InActive</option>
            </CFormSelect>
            <div className="d-flex justify-content-end mt-4">
              <CButton  className="btn-primary mx-2">
                Save
              </CButton>
              <CButton className="btn-secondary mx-2">
                Cancel
              </CButton>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
}

export default Addlink;
