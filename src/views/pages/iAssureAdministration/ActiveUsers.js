import React from 'react';
import {
    CTableHead,
    CTableHeaderCell,
    CTableDataCell,
  } from "@coreui/react";
import { CTable, CTableRow, CTableBody } from "@coreui/react";


function ActiveUsers() {
    const tableData = [
        {
          thead: ["Role Name", "Category Name", "Creation Date", "Edit", "Delete"],
        },
        {
          tbody: [
            ["ChiefAuditor", "HeadOffice", "Date", "Edit", "Delete"],
            ["Auditee", "BranchOffice", "Date", "Edit", "Delete"],
            ["Sparshadmin", "HeadOffice", "Date", "Edit", "Delete"],
            ["Sparshteam", "BranchOffice", "Date", "Edit", "Delete"],
            ["Auditor", "BranchOffice", "Date", "Edit", "Delete"],
          ],
        },
      ];
    
      return (
        <>
        <div>
            <p style={{backgroundColor:'#e8e8e8', padding: 5}}><strong>Active users list</strong></p>
              {/* Your content here */}
              {tableData.map((table, index) => (
                <CTable key={index}>
                  {table.thead && (
                    <CTableHead>
                      <CTableRow>
                        {table.thead.map((header, headerIndex) => (
                          <CTableHeaderCell
                            key={headerIndex}
                            style={{
                              width: `${100 / table.thead.length}%`,
                              textAlign: "center",
                              padding: "10px", 
                              margin: "0",
                            }}
                          >
                            {header}
                          </CTableHeaderCell>
                        ))}
                      </CTableRow>
                    </CTableHead>
                  )}
                  {table.tbody && (
                    <CTableBody>
                      {table.tbody.map((row, rowIndex) => (
                        <CTableRow key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <CTableDataCell
                              key={cellIndex}
                              style={{
                                width: `${100 / row.length}%`,
                                textAlign: "center",
                                padding: "10px", 
                                margin: "0",
                              }}
                            >
                              {cell}
                            </CTableDataCell>
                          ))}
                        </CTableRow>
                      ))}
                    </CTableBody>
                  )}
                </CTable>
              ))}</div>
        </>
      );
}

export default ActiveUsers;