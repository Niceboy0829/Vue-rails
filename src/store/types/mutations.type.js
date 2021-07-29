//auth-------------------------------------------
export const SET_AUTH = "setUser";
export const PURGE_AUTH = "logOut";
//common------------------------------------------
export const SET_ERROR = "setError";
export const mut_setting = {
  theme: 'MStheme',
}
//admin-------------------------------------------
export const mut_admin = {
  viewsearch: 'MAUsersViewSearch',
  users: {
    editID: 'MAUsersEditID',
    set: 'MAUsersSet',
    query: 'MAUsersQuery',
  },
  groups: {
    editID: 'MAGroupsEditID',
    getall: 'MAGroupsGetAll',
    getone: 'MAGroupsGetOne',
  },
  fields: {
    selectCatename: 'MAFieldsSelectCatename',
    setCEGroupID: 'MAFieldsSetCEgroupID',
    setCEFieldData: 'MAFieldsSetCEFieldData',
    setCategories: 'MAFieldsSetCategories',
    editGroup: 'MAFieldsEditGroup',
    editField: 'MAFieldsEditField',
    // field: {
    //   getone: 'MAFieldsFieldGetone',
    //   create: 'MAFieldsFieldCreate',
    //   update: 'MAFieldsFieldUpdate',
    //   delete: 'MAFieldsFieldDelete',
    // }
  },
  tags: {
    editID: 'MATagsEditID',
    get: 'MATagsGet',
  }
}
/////////////////////////////////////////////////////