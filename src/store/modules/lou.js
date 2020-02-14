const lou = {
    namespaced: true,
    state: {
        addLouVisible: false,
        editLouVisible: false,
        adminerVisible: false,
        wifiVisible: false,
        addRoomVisible: false,
        editRoomVisible: false
    },
    getters: {
    },
    mutations: {
        showAddLou (state) {
            state.addLouVisible = true
        },
        hideAddLou (state) {
            state.addLouVisible = false
        },
        showEditLou (state) {
            state.editLouVisible = true
        },
        hideEditLou (state) {
            state.editLouVisible = false
        },
        showAdminer (state) {
            state.adminerVisible = true
        },
        hideAdminer (state) {
            state.adminerVisible = false
        },
        showWifi (state) {
            state.wifiVisible = true
        },
        hideWifi (state) {
            state.wifiVisible = false
        },
        showAddRoom (state) {
            state.addRoomVisible = true
        },
        hideAddRoom (state) {
            state.addRoomVisible = false
        },
        showEditRoom (state) {
            state.editRoomVisible = true
        },
        hideEditRoom (state) {
            state.editRoomVisible = false
        }
    },
    actions: { 
    }
}
export default lou
