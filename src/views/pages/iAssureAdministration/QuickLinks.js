import React from "react";
import { useNavigate } from "react-router-dom";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormCheck, CButton} from '@coreui/react'

function QuickLinks(){
    const navigate = useNavigate();

    const tableData = [
        {
            thead: ['#', 'Select', 'Edit/Delete', 'Type of link', 'Icon/Image', 'Quciklinks Display name', 'Url Desription', 'Modified By', 'Icon Priority'],
            tbody: ['1',  <CFormCheck key="selectCheckbox" />, ' ', 'Application(SameWindow)', 'Icon', 'Uploaded', 'Quick lins description', 'Modified By', 'Icon Priority box']
        }
    ]

    const AddLink = () => {
        navigate('/addlink')
    }



    return(
        <>
        <CButton className="bg-primary" onClick={AddLink} style={{color:'white'}}>Add New</CButton>
        {tableData.map((table, index) =>(
        <CTable key={index} class="table">
            <CTableHead>
                <CTableRow>
                    {table.thead.map((header, headerIndex)=>(
                    <CTableHeaderCell key={headerIndex}>{header}</CTableHeaderCell>))}
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow>
                    {table.tbody.map((body, bodyIndex) => (
                    <CTableDataCell key={bodyIndex}>{body}</CTableDataCell>))}
                </CTableRow>
            </CTableBody>
        </CTable>
        ))}
        </>
    )
}
export default QuickLinks;