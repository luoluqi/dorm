<template>
    <div>
        <cvue-dialog
            :dialogVisible="addLouVisible"
            title="添加宿舍楼"
            :isShowFoot="true"
            @handleOpen="openDialog"
            @closeDialog="closeDialog"
            @confirmDialog="confirmDialog"
            @handleClose="closeDialog"
            >
            <div  slot="dialogBody">
                <el-form label-width="120px">
                    <el-form-item label="宿舍楼名称">
                        <el-input maxlength="30"></el-input>
                    </el-form-item>
                     <el-form-item label="楼层数">
                        <el-input-number v-model="a" :min="1" :max="1000" ></el-input-number>
                    </el-form-item>
                     <el-form-item label="房间数">
                         <el-input-number  :min="1" :max="1000" ></el-input-number>
                    </el-form-item>
                     <el-form-item label="楼管">
                        <el-button @click="selectAdminer" type="primary" icon="el-icon-plus">添加楼管</el-button>
                    </el-form-item>
                     <el-form-item label="wifi">
                        <el-button @click="selectWifi" type="primary" icon="el-icon-plus">添加wifi</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </cvue-dialog>
    </div>
</template>
<script>
import cvueDialog from '@/components/cvue-dialog'
export default {
    components: {
        cvueDialog
    },
    computed: {
        addLouVisible () {
            return this.$store.state.lou.addLouVisible
        }
    },
    data () {
        return {
            a: 1
        }
    },
    methods: {
       
        openDialog () {
            
        },
        confirmDialog () {

        },
        closeDialog () {
            this.$store.commit('lou/hideAddLou')
        },
        selectAdminer () {
             this.$store.commit('lou/showAdminer')
        },
        selectWifi () {
             this.$store.commit('lou/showWifi')
        }
    }
}
</script>
<style scoped>

</style>
