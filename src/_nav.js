import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilBalanceScale,cilStar, cilCalendar, cilSpeedometer, } from '@coreui/icons'
import { CNavItem, CNavGroup, CNavTitle} from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    onClick: () => window.location.assign("/home"),
    to: '/home',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ScheduleAudit',
    onClick: () => window.location.assign("scheduleaudit"),
    to: '/scheduleaudit',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   onClick: () => window.location.assign("charts"),
  //   icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
  //   name: 'Knowledge Portal',
  //   to: '/charts',
  // },
  {
    component: CNavTitle,
    name: 'Audit',
  },
  {
    component: CNavItem,
    icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
    name: 'Audit Dashboard',
    onClick: () => window.location.assign("/Audits"),
    to: '/Audits',
  },
  {
    component: CNavGroup,
    name: 'Planned',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Schedule an Audit',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'View All Audits',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Cancel An Audit',
        to: '/404',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Active',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Fill Auditee Data',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Submit to Auditor',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Fill Auditor Data',
        to: '/404',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Closed',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'View Closed Audits',
        to: '/login',
      },
    ],
  },

  // {
  //   component: CNavGroup,
  //   name: 'QMS',
  //   icon:<CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavGroup,
  //       name: 'Planned',
  //       items:[
  //         {
  //           component: CNavItem,
  //           name: 'Schedule an Audit'
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'View all Audits'
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'cancel all audits'
  //         },
  //       ]
  //     },
  //     {
  //       component: CNavGroup,
  //       name: 'Active',
  //       items:[
  //         {
  //           component: CNavItem,
  //           name: 'Fill Audit Data'
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Submit to Auditor'
  //         },
  //         {
  //           component: CNavItem,
  //           name: 'Fill Auditor Data'
  //         },
  //       ]
  //     },
  //     {
  //       component: CNavGroup,
  //       name: 'Closed',
  //       items:[
  //         {
  //           component: CNavItem,
  //           name: 'View Closed Audits'
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   icon:<CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   name: 'Audits',
  //   onClick: () => window.location.assign("/Audits"),
  //   to: '/Audits',
  // },

  {
    component: CNavTitle,
    name: 'Activities',
  },
  {
    component: CNavItem,
    icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
    name: 'Activities Dashboard',
    onClick: () => window.location.assign("/activitiescockpit"),
    to: '/Audits',
  },
  {
    component: CNavGroup,
    name: 'Day Book',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New Task',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'My Task',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Assigned Task',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'New Meeting',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'My Task Status',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Team Availability',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Import Task Excel',
        to: '/404',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'Reports',
  },
  {
    component: CNavItem,
    icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
    name: 'Reports Dashboard',
    onClick: () => window.location.assign("/cockpitreport"),
    to: '/Audits',
  },
  {
    component: CNavGroup,
    name: 'Day Book',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My Tasks/Assigned Tasks',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Employee wise Day Book',
        to: '/register',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'iAssure',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Schedule Audits',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Audits CheckList',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Auditee CheckList',
        to: '/register',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'iAssure Administration',
  },
  {
    component: CNavItem,
    icon:<CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
    name: 'Admin Cockpit',
    onClick: () => window.location.assign("/admincockpit"),
    to: '/Audits',
  },
  {
    component: CNavGroup,
    name: 'My Profile',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Change Password',
        onClick: () => window.location.assign("/changepassword"),
        to: '/changepassword',
      },
      {
        component: CNavItem,
        name: 'My Privileges',
        onClick: () => window.location.assign("/myprivileges"),
        to: '/myprivileges',
      },
      {
        component: CNavItem,
        name: 'Quick Links',
        onClick: () => window.location.assign("/quicklinks"),
        to: '/quicklinks',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Admin',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Role Creation',
        onClick: () => window.location.assign("/rolecreation"),
        to: '/rolecreation',
      },
      {
        component: CNavItem,
        name: 'User Creation & Assign',
        onClick: () => window.location.assign("/usercreation"),
        to: '/usercreation',
      },
      {
        component: CNavItem,
        name: 'Add Privileges to Templates',
        onClick: () => window.location.assign("/addprivileges"),
        to: '/addprivileges',
      },
      {
        component: CNavItem,
        name: 'Session expiry config',
        onClick: () => window.location.assign("/sessionconfig"),
        to: '/sessionconfig',
      },
      {
        component: CNavItem,
        name: 'Add Parameter',
        onClick: () => window.location.assign("/addparameters"),
        to: '/addparameters',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Org.Locations',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Head Office',
        onClick: () => window.location.assign("/headoffice"),
        to: '/headoffice',
      },
      {
        component: CNavItem,
        name: 'Branch Office',
        onClick: () => window.location.assign("/branchoffice"),
        to: '/branchoffice',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Look Up Masters',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'State and District',
        onClick: () => window.location.assign("/stateanddistrict"),
        to: '/stateanddistrict',
      },
      {
        component: CNavItem,
        name: 'Designation',
        onClick: () => window.location.assign("/designation"),
        to: '/designation',
      },
      {
        component: CNavItem,
        name: 'Department',
        onClick: () => window.location.assign("/department"),
        to: '/department',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Announcements',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Announcements',
        onClick: () => window.location.assign("/stateanddistrict"),
        to: '/login',
      },
    ],
  },



  // {
  //   component: CNavItem,
  //   icon:<CIcon icon={cilListRich} customClassName="nav-icon" />,
  //   name: 'Activities',
  //   to: '/500',
  // },
  // {
  //   component: CNavItem,
  //   icon:<CIcon icon={cilDescription} customClassName="nav-icon" />,
  //   name: 'Reports',
  //   to: '/500',
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras'
  // },
  // {
  //   component: CNavGroup,
  //   icon:<CIcon icon={cilSettings} customClassName="nav-icon" />,
  //   name: 'iAssure',
  //   items :[
  //     {
  //       component: CNavItem,
  //       name: 'Vams'
  //     }
  //   ]
  // },
  // {
  //   component: CNavItem,
  //   icon:<CIcon icon={cilSettings} customClassName="nav-icon" />,
  //   onClick: () => window.location.assign('/iAssureAdministration'),
  //   name: 'iAssure Administration',
  //   to: '/iAssureAdministration',
  // },
  

]


export default _nav
