import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { CRow, CCol, CWidgetStatsA,} from '@coreui/react'
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow,} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'

import {CListGroup,CListGroupItem,} from '@coreui/react'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseOver = () => {
    setIsHovered(true);
  };


  const handleMouseOut = () => {
    setIsHovered(false);
  };
  
  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={6} xxl={4}>
        <CWidgetStatsA
          color="primary"
          title="Assigned tasks"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '10px' }}
            />
          }          
        />
          <CTable>
            <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Task Description</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Raj</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Samid</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell >Vamshi</CTableDataCell>
                  </CTableRow>
            </CTableBody>
          </CTable>
      </CCol>
      <CCol sm={6} xl={6} xxl={4}>
        <CWidgetStatsA
          color="info"
          title="Announcements"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '10px' }}
              
            />
          }
        />
        <CTable>
            <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Announcements</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Raj</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Samid</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell >Vamshi</CTableDataCell>
                  </CTableRow>
            </CTableBody>
        </CTable>
      </CCol>
      <CCol sm={6} xl={6} xxl={4}>
        <CWidgetStatsA
          color="warning"
          title="Global Activities"
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '10px' }}
              
            />
          }
        />
        <CTable>
          <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">S.no</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Activities</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>News</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Release Notes</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell >Fests</CTableDataCell>
                  </CTableRow>
          </CTableBody>
        </CTable>
      </CCol>
      <CCol sm={6} xl={6} xxl={4}>
        <CWidgetStatsA
          color="danger"
          title="Quick Links"
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '10px' }}  
            />
          }
        />
      <CListGroup>
        <CListGroupItem>
          {isHovered ? (
            <div style={{ width: "60%", height: "100px", overflow: "hidden" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
              This is a sample scrolling text that scrolls in the upper direction.
            </div>
          ) : (
            <marquee width="60%" direction="up" height="100px" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
              This is a sample scrolling text that scrolls in the upper direction.
            </marquee>
          )}
        </CListGroupItem>
      </CListGroup>
      </CCol>
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
