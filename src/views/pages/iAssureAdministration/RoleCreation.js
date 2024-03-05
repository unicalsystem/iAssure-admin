import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CTableHead,
  CTableHeaderCell,
  CTableDataCell,
} from "@coreui/react";
import { CTable, CTableRow, CTableBody } from "@coreui/react";

function RoleCreation() {
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
      <CCard className="my-4 mx-auto" style={{ borderRadius: "15px" }}>
        <CCardHeader
          className="text-center"
          style={{
            background: "#5856d8",
            color: "#fff",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <strong>Fill to add icon from User links</strong>
        </CCardHeader>
        <CCardBody
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* Your content here */}
          <CButton color="primary" style={{ width: "fit-content" }}>
            Add Role
          </CButton>
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
          ))}
        </CCardBody>
      </CCard>
    </>
  );
}

export default RoleCreation;
