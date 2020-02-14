<template>
    <div>
        <cvue-dialog
            :dialogVisible="addVisible"
            title="添加住宿生"
            :isShowFoot="true"
            @handleOpen="openDialog"
            @closeDialog="closeDialog"
            @confirmDialog="confirmDialog"
            @handleClose="closeDialog"
            >
            <div  slot="dialogBody">
                <el-form label-width="120px">
                    <el-form-item label="学生姓名">
                        <el-button @click="selectStudent" type="primary" icon="el-icon-plus">选择学生</el-button>
                    </el-form-item>
                     <el-form-item label="楼号">
                        <el-input-number  :min="1" :max="1000" ></el-input-number>
                    </el-form-item>
                     <el-form-item label="宿舍号">
                         <el-input-number  :min="1" :max="1000" ></el-input-number>
                    </el-form-item>
                     <el-form-item label="所属班级">
                         <el-input-number  :min="1" :max="1000" ></el-input-number>
                    </el-form-item>
                     <el-form-item label="考勤方式">
                         {{checkList}}
                         <el-checkbox-group v-model="checkList">
                            <el-checkbox label="1">学生证</el-checkbox>
                            <el-checkbox label="2">门禁卡</el-checkbox>
                            <el-checkbox label="3">人脸识别</el-checkbox>
                           
                        </el-checkbox-group>
                    </el-form-item>
                     <el-form-item label="是否周末住校">
                         {{a}}
                          <el-checkbox v-model="a"></el-checkbox>
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
        addVisible () {
            return this.$store.state.student.addVisible
        }
    },
    data () {
        return {
          a: false,
          checkList: []
        }
    },
    methods: {
       
        openDialog () {
            
        },
        confirmDialog () {

        },
        closeDialog () {
            this.$store.commit('student/hideAdd')
        },
        selectStudent () {
             this.$store.commit('student/showSelectStudent')
        }
    }
}
</script>
<style scoped>

</style>
