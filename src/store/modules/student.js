const student = {
    namespaced: true,
    state: {
       addVisible: false,
       editVisible: false,
       selectStudentVisible: false
    },
    getters: {
    },
    mutations: {
      showAdd (state) {
        state.addVisible = true
      },
      hideAdd (state) {
        state.addVisible = false
      },
      showEdit (state) {
        state.editVisible = true
      },
      hideEdit (state) {
        state.editVisible = false
      },
      showSelectStudent (state) {
        state.selectStudentVisible = true
      },
      hideSelectStudent (state) {
        state.selectStudentVisible = false
      }
    },
    actions: { 
    }
}
export default student
