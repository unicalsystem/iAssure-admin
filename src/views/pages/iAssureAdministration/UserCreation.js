import React, { useState } from "react";
import {CCard, CCardHeader, CCardBody, CButton, CTableHead, CTableHeaderCell, CTableDataCell, } from "@coreui/react";
import ActiveUsers from "./ActiveUsers";
import LockedUsers from "./LockedUsers";
import InactiveUsers from "./InactiveUsers";
import AddNewUer from "./AddNewUser";

function UserCreation(){
    const [activeTab, setActiveTab] = useState("active"); // Initial active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return(
        <>
        <CCard style={{ borderRadius: "15px" }}>
        <CCardHeader
          className="text-center"
          style={{
            background: "#5856d8",
            color: "#fff",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <strong>User Creation</strong>
        </CCardHeader>
            <CCardBody
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                
            }}
            >
            <div  style={{ display:'flex', flexDirection: 'row'}}>
            <CButton
                color={activeTab === "active" ? "success" : "primary"}
                style={{ width: "fit-content", marginRight: 10 }}
                onClick={() => handleTabChange("active")}
                >
                Active Users
            </CButton>
            <CButton
                color={activeTab === "locked" ? "danger" : "primary"}
                style={{ width: "fit-content", marginRight: 10 }}
                onClick={() => handleTabChange("locked")}
                >
                Locked Users
            </CButton>
            <CButton
                color={activeTab === "inactive" ? "secondary" : "primary"}
                style={{ width: "fit-content", marginRight: 10 }}
                onClick={() => handleTabChange("inactive")}
                >
                Inactive Users
            </CButton>
            <CButton color="info" style={{ width: "fit-content" }} onClick={() => handleTabChange("addnewuser")}>
                Add New
            </CButton>
            </div>
            <div style={{ marginTop: "20px", width: "100%"  }}>
        {activeTab === "active" && (
          <div >
            <ActiveUsers  />
          </div>
        )}
        {activeTab === "locked" && (
          <div>
            <LockedUsers />
          </div>
        )}
        {activeTab === "inactive" && (
          <div>
            <InactiveUsers />
          </div>
        )}
        {activeTab === "addnewuser" && (
          <div>
            <AddNewUer />
          </div>
        )}
      </div>               
            </CCardBody>
        </CCard>
        </>
    )
}
export default UserCreation;