import React from 'react'
import { CCard, CCol, CCardHeader, CCardBody, CFormLabel, CForm, CFormInput,CButton, CTableHead, CFormSelect } from '@coreui/react'
import { CChartPie} from '@coreui/react-chartjs'
import {CTable, CTableBody, CTableDataCell, CTableRow} from '@coreui/react'



function AuditCockpit(){

    // date field Constant
    const date = [
        {
            label: ['From', 'To'],
        }
    ]

    // Piecharts constant
    const pieChartOptions = [
        {
          title: 'Audit',
          labels: ['Closed on Time', 'Missed Deadline'],
          data: [50, 100],
          backgroundColor: ['#36A2EB', '#FFCE56'],
        },
        {
          title: 'Audit Summary',
          labels: ['Not having NCs', 'Having NCs'],
          data: [50, 100],
          backgroundColor: ['#36A2EB', '#FFCE56'],
        },
        {
          title: 'Audit Status',
          labels: ['In Progress', 'Scheduled'],
          data: [50, 100],
          backgroundColor: ['#36A2EB', '#FFCE56'],
        },
      ];

    //   table constant
    const tableData = [
        {
            thead: ['Audit ID', 'Location', 'Periodicity', 'Audit date', 'Auditor', 'Auditee', 'Audit Status'],
            tbody: [
                {
                    tbodyElement: ['123', 'hyderabad', '120', '12 feb 2024', 'samid', 'raj', 'complete']
                },
                {
                    tbodyElement: ['123', 'hyderabad', '120', '12 feb 2024', 'samid', 'raj', 'complete']
                }

            ]
        }
    ]



    const schedule =() =>{
        window.location.assign("/scheduleaudit")
    }

    return(
        <>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader className="bg-primary" style={{color:'white'}}>Audit Cockpit</CCardHeader>
                </CCard>
                <CCardBody>
                    {/*  date field */}
                        <CForm className="row g-3">
                                {date.map((field, index) => (
                                    <CCol key={index} style={{display:'flex'}} md={5}>
                                        {field.label.map((label, labelIndex) => (
                                            <div key={labelIndex} style={{marginRight:10}}>
                                            <CFormLabel htmlFor="formFile"><strong>{label}</strong></CFormLabel>
                                            <CFormInput type="date" id="formFile" />
                                            </div>
                                        ))}
                                    </CCol>
                                ))}
                            <CCol className='row g-4 mb-3' md={3} >
                                <CFormSelect >
                                    <option >Location</option>
                                    <option></option>
                                </CFormSelect>
                            </CCol>
                            <CCol style={{marginTop:'46px', color:'white'}} >
                                <CButton type="submit" style={{color:'white', marginRight:'15px'}} className="bg-primary mb-3">View Audits</CButton>
                                <CButton style={{color:'white'}}  onClick={schedule} className="bg-primary mb-3">Schedule Audit</CButton>
                            </CCol>
                        </CForm>
                        
                    {/*  Pie charts */}
                        <CForm className="row g-3">
                            {pieChartOptions.map((chart, index) => (
                            <CCol key={index} md={4}>
                                <CCard className="mb-4">
                                    <CCardHeader>
                                        <strong>{chart.title}</strong>
                                    </CCardHeader>
                                    <CCardBody>
                                        <CChartPie
                                            data={{
                                                labels: chart.labels,
                                                datasets: [
                                                {
                                                    data: chart.data,
                                                    backgroundColor: chart.backgroundColor,
                                                    hoverBackgroundColor: chart.backgroundColor,
                                                },
                                                ],
                                            }}
                                        />
                                    </CCardBody>
                                </CCard>
                            </CCol>
                            ))}
                        </CForm>
                        {/*  table */}
                        <CForm>
                            {tableData.map((table, index) => (
                                <CTable key={index}>
                                    <CTableHead>
                                        <CTableRow color="info">
                                        {table.thead.map((header, headerIndex) => (
                                            <CTableDataCell key={headerIndex}>{header}</CTableDataCell>
                                        ))}
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        {table.tbody.map((row, rowIndex) => (
                                        <CTableRow key={rowIndex} color="success">
                                            {/* Render your table body here */}
                                            {row.tbodyElement.map((body, bodyIndex) => (
                                            <CTableDataCell key={bodyIndex}>
                                                {bodyIndex === 0 ? (
                                                <a href="/gh">{body}</a>
                                                ) : (
                                                body
                                                )}
                                            </CTableDataCell>
                                            ))}
                                        </CTableRow>
                                        ))}
                                    </CTableBody>
                                </CTable>
                            ))}
                        </CForm>
                </CCardBody>
            </CCol>
        </>
    )
}

export default AuditCockpit;