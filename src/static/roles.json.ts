const rolesJSON = [
  {
    code: 'employee',
    name: 'Employee',
    permissions:
      'leave.delete,leave.update,leave.create,leave.view,project.update,project.create,project.view,project.delete,task.view,task.delete,task.update,task.create,taskboard.view,leaves.create,leaves.update,leaves.view,taskboards.view,tasks.view,tasks.update,projects.view,tasks.create,leaves.delete,tasks.favourite,ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,workreport.create,workreport.view,workreport.update,workreport.delete,remote_work.create,remote_work.view,remote_work.update,remote_work.delete',
  },
  {
    code: 'agency_owner',
    name: 'Agency Owner',
    permissions:
      'projects.delete,projects.view,tasks.view,tasks.delete,tasks.update,projects.update,subscriptions.view,tasks.create,projects.create,customers.view,customers.update,customers.delete,customers.create,tasks.favourite,agency_users.delete,agency_users.update,agency_users.create,agency_users.view,bucketlist.view,bucketreport.view,devreport.view',
  },
  {
    code: 'pc',
    name: 'Project Coordinator',
    permissions:
      'leaves.create,leaves.update,leaves.delete,leaves.view,projects.update,projects.create,projects.delete,projects.view,taskboards.view,taskboards.delete,taskboards.update,taskboards.create,tasks.view,tasks.delete,tasks.update,tasks.create,ratings.view,tasks.favourite,meetings.create,meetings.view,meetings.update,meetings.delete,ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,workreport.create,workreport.view,workreport.update,workreport.delete,resource_allocation.delete,resource_allocation.update,resource_allocation.create,resource_allocation.view,remote_work.delete,remote_work.update,remote_work.view,remote_work.create,devreport.view,bucketreport.view',
  },
  {
    code: 'bde',
    name: 'BDE',
    permissions:
      'ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,workreport.create,workreport.view,workreport.update,workreport.delete,remote_work.delete,remote_work.update,remote_work.view,remote_work.create',
  },
  {
    code: 'team_lead',
    name: 'Team Lead',
    permissions:
      'leaves.create,leaves.update,leaves.delete,leaves.view,projects.update,projects.delete,projects.view,projects.create,taskboards.create,taskboards.update,taskboards.delete,taskboards.view,tasks.view,tasks.favourite,tasks.delete,tasks.update,tasks.create,ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,workreport.create,workreport.view,workreport.update,workreport.delete,workreport.delay_task_report,remote_work.delete,remote_work.update,remote_work.view,remote_work.create',
  },
  {
    code: 'accountant',
    name: 'Account Manager',
    permissions:
      'leaves.create,leaves.update,leaves.delete,leaves.view,projects.update,projects.delete,projects.view,projects.create,ratings.view,taskboards.create,taskboards.update,taskboards.delete,taskboards.view,tasks.view,tasks.favourite,tasks.delete,tasks.update,tasks.create,meetings.create,meetings.view,meetings.update,meetings.delete,tasks.unattended,ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,bucketreport.view,agency_users.view,agency_users.update,agency_users.create,workreport.create,workreport.view,workreport.update,workreport.delete,agencysites.view,notice.create,notice.view,notice.delete,notice.update,roles.view,remote_work.delete,remote_work.update,remote_work.view,remote_work.create',
  },
  {
    code: 'agency_member',
    name: 'Agency Member',
    permissions:
      'projects.update,projects.create,projects.view,customers.create,tasks.view,tasks.update,tasks.create,customers.view,customers.update,tasks.favourite',
  },
  {
    code: 'hr',
    name: 'HR',
    permissions:
      'leaves.create,leaves.update,leaves.delete,leaves.view,projects.view,projects.update,projects.create,tasks.update,tasks.create,tasks.favourite,tasks.view,ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,taskboards.view,workreport.create,workreport.view,workreport.update,workreport.delete,leaves.calendar_view,remote_work.delete,remote_work.update,remote_work.view,remote_work.create',
  },
  {
    code: 'admin',
    name: 'Admin',
    permissions:
      'tasks.view,tasks.create,tasks.update,tasks.delete,tasks.view,projects.create,projects.update,projects.delete,projects.view,users.view,users.create,users.update,users.delete,roles.view,roles.create,roles.update,roles.delete,subscriptions.create,subscriptions.update,subscriptions.delete,subscriptionlist.view,leaves.view,taskboards.view,agencysites.view,ratings.view,customers.view,customers.update,customers.delete,customers.create,leaves.create,leaves.update,leaves.delete,taskboards.delete,taskboards.update,taskboards.create,tasks.favourite,logs.view,leavebucket.update,leavebucket.create,leavebucket.view,tasks.unattended,designations.delete,designations.view,designations.create,designations.update,meetings.create,meetings.view,meetings.update,meetings.delete,agency_users.delete,agency_users.update,agency_users.create,agency_users.view,bucketreport.view,ticket_system.view,ticket_system.create,ticket_system.update,ticket_system.delete,devreport.view,leave_status.update,bucketlist.view,custom_taskboard.delete,custom_taskboard.update,custom_taskboard.view,custom_taskboard.create,workreport.create,workreport.view,workreport.update,workreport.delete,workreport.not_send_report,leaves.today_approved_list,notice.delete,notice.view,notice.create,notice.update,threshold_leave.delete,threshold_leave.update,threshold_leave.create,threshold_leave.view,resource_allocation.delete,resource_allocation.update,resource_allocation.create,resource_allocation.view,workreport.delay_task_report,leaves.calendar_view,remote_work.update_status,remote_work.create,remote_work.delete,remote_work.update,remote_work.view,ai_taskboard.delete,ai_taskboard.update,ai_taskboard.create,ai_taskboard.view',
  },
  {
    code: 'client',
    name: 'Client',
    permissions:
      'tasks.page,tasks.view,projects.view,tasks.create,tasks.update,tasks.delete',
  },
  {
    code: 'office_assistant',
    name: 'Office Assistant',
    permissions:
      'leaves.view,leaves.delete,leaves.update,leaves.create,remote_work.delete,remote_work.update,remote_work.view,remote_work.create',
  },
  {
    code: 'project_manager_ai',
    name: 'Project Manager (AI)',
    permissions:
      'ai_taskboard.delete,ai_taskboard.update,ai_taskboard.create,ai_taskboard.view,leaves.create,leaves.delete,leaves.update,leaves.view,projects.update,projects.view,projects.create,remote_work.create,remote_work.view,remote_work.update,remote_work.delete,tasks.create,tasks.update,tasks.view,tasks.favourite,tasks.delete,ticket_system.delete,ticket_system.view,ticket_system.create,ticket_system.update,workreport.delete,workreport.update,workreport.view,workreport.create',
  },
];

export default rolesJSON;
