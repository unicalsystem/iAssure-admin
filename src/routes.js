import React from 'react'
import AdminCockpit from './views/pages/iAssureAdministration/AdminCockpit'
import CockpitReport from './views/pages/Reports/CockpitReport'

//samid
import CancelAutid from './views/pages/Audit/CancelAudit'
import CancelAutidPage from './views/pages/Audit/CancelAuditPage'
import FillAuditeeData from './views/pages/Active/FillAuditeeData'
import FillAuditorData from './views/pages/Active/FillAuditorData'
import CloseAudite from './views/pages/Closed/CloseAudite'
import QuickLinks from './views/pages/iAssureAdministration/QuickLinks'
import MyPrivileges from './views/pages/iAssureAdministration/MyPrivileges'
import ActivitiesCockpit from './views/pages/Activities/ActivitiesCockPit'


//samid


import Dashboard from './views/dashboard/Dashboard'
import ActiveUsers from './views/pages/iAssureAdministration/ActiveUsers'
import LockedUsers from './views/pages/iAssureAdministration/LockedUsers'
import InactiveUsers from './views/pages/iAssureAdministration/InactiveUsers'
import AddNewUer from './views/pages/iAssureAdministration/AddNewUser'




// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const ScheduleAudit = React.lazy(() => import('./views/pages/ScheduleAudit/ScheduleAudit'))
const Audits = React.lazy(() => import('./views/pages/Audits/Audits.js'))
const AuditCockpit = React.lazy(() => import('./views/pages/AuditCockpit/AuditCockpit') )
const ChangePassword = React.lazy(() => import('./views/pages/iAssureAdministration/ChangePassword'))
const RoleCreation = React.lazy(()=> import('./views/pages/iAssureAdministration/RoleCreation'))
const UserCreation = React.lazy(()=> import('./views/pages/iAssureAdministration/UserCreation'))
const AddPrivileges = React.lazy(()=> import('./views/pages/iAssureAdministration/AddPrivileges')) 
const SessionConfig = React.lazy(() => import('./views/pages/iAssureAdministration/SessionConfig'))
const AddParameters = React.lazy(() => import('./views/pages/iAssureAdministration/AddParameters'))
const HeadOffice = React.lazy(() => import('./views/pages/iAssureAdministration/HeadOffice'))
const BranchOffice = React.lazy(() => import('./views/pages/iAssureAdministration/BranchOffice'))
const StateAndDistrict = React.lazy(() => import('./views/pages/iAssureAdministration/StateAndDistrict'))
const Designation = React.lazy(() => import('./views/pages/iAssureAdministration/Designation'))
const Department = React.lazy(() => import('./views/pages/iAssureAdministration/Department'))
const Announcements = React.lazy(() => import('./views/pages/iAssureAdministration/Announcements'))
const AddLink = React.lazy(() => import('./views/pages/iAssureAdministration/Addlink'))




const Widgets = React.lazy(() => import('./views/widgets/Widgets'))



const routes = [
  { path: '/', exact: true, name: 'Login', element: Login},
  { path: '*', exact: true, name: 'Home' },
  { path: '/register', exact: true, name: 'Register', element: Register},
  { path: '/home', name: 'Home', element: Dashboard },
  { path: '/scheduleaudit', name: 'Audit', element: ScheduleAudit },
  { path: '/Audits', name: 'Audits', element: Audits },
  { path: '/Audticockpit', name: 'Audit Cockpit', element: AuditCockpit },
  { path : '/cockpitreport', name: 'CockpitReport', element: CockpitReport},

  { path: '/admincockpit', name: 'AdminCockpit', element: AdminCockpit},
  { path: '/changepassword', name: 'ChangePassword', element: ChangePassword},
  { path: '/myprivileges', name: 'MyPrivilieges', element: MyPrivileges},
  { path: '/quicklinks', name: 'QuickLinks', element: QuickLinks},
  { path: '/rolecreation', name: 'RoleCreation', element: RoleCreation},
  { path: '/usercreation', name: 'UserCreation', element: UserCreation},
  { path: '/addprivileges', name: 'AddPrivileges', element: AddPrivileges},
  { path: '/sessionconfig', name: 'SessionConfig', element: SessionConfig},
  { path: '/addparameters', name: 'AddParameters', element: AddParameters},
  { path: '/headoffice', name: 'HeadOffice', element: HeadOffice},
  { path: '/branchoffice', name: 'BranchOffice', element: BranchOffice},
  { path: '/stateanddistrict', name: 'StateAndDistrice', element: StateAndDistrict},
  { path: '/designation', name: 'Designation', element: Designation},
  { path: '/department', name: 'Department', element: Department},
  { path: '/announcements', name: 'Announcements', element: Announcements},
  { path: '/addlink', name: 'AddLink', element: AddLink},
  { name: 'Active Users', element: ActiveUsers},
  { name: 'Locked Users', element: LockedUsers},
  { name: 'Inactive Users', element: InactiveUsers},
  { name: 'Add New User', element: AddNewUer},

  //Samid route
  {path: '/cancelaudit', exact: true, name: 'CancelAudit', element: CancelAutid},
  {path: '/cancelauditpage', exact: true, name: 'CancelAuditPage', element: CancelAutidPage},
  {path: '/fillauditeedata', exact: true, name: 'FillAuditeeData', element: FillAuditeeData},
  {path: '/fillauditordata', exact: true, name: 'FillAuditorData', element: FillAuditorData},
  {path: '/closeaudite', exact: true, name: 'CloseAudite', element: CloseAudite},
  {path: '/activitiescockpit', exact: true , name: 'ActivitiesCockpit', element: ActivitiesCockpit},

  //samid

  
  { path: '/widgets', name: 'Widgets', element: Widgets },
]


export default routes
