<template>
    <div>
        <cvue-dialog
            :dialogVisible="editRoomVisible"
            title="修改宿舍"
            :isShowFoot="true"
            @handleOpen="openDialog"
            @closeDialog="closeDialog"
            @confirmDialog="confirmDialog"
            @handleClose="closeDialog"
            >
            <div  slot="dialogBody">
                <el-form label-width="120px">
                    <el-form-item label="宿舍名称">
                        <el-input maxlength="30"></el-input>
                    </el-form-item>
                     <el-form-item label="楼层">
                        <el-input-number v-model="a" :min="1" :max="1000" ></el-input-number>
                    </el-form-item>
                     <el-form-item label="床位">
                         <el-input-number  :min="1" :max="1000" ></el-input-number>
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
        editRoomVisible () {
            return this.$store.state.lou.editRoomVisible
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
            this.$store.commit('lou/hideEditRoom')
        }
    }
}
</script>
<style scoped>

</style>
