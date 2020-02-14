<template>
    <div class="editWifi">
        <cvue-dialog  :dialogVisible='dialogVisible'
                    title='编辑'
                    :isShowFoot = true
                    dialogWidth='50%'
                    @handleOpen='getDetail'
                    @closeDialog='closeDialog'
                    @confirmDialog='confirmDialog'
                    @handleClose='handleClose'>
            <div class='dialog-body' slot='dialogBody' >
                <el-form label-width="80px">
                    <el-form-item label="WIFI名称">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                    <el-form-item label="MAC名称">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                    <el-form-item label="所在位置">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                </el-form>
            </div>            
        </cvue-dialog>
    </div>
</template>
<script>
import cvueDialog from '@/components/cvue-dialog'
import cvueTable from '@/components/cvue-table'
export default {
    name: 'editWifi',
    components: {
        cvueDialog,
        cvueTable
    },
    data () {
        return {
            name: ''
        }
    },
    methods: {
         // 获取详情
        getDetail () {
        },
        // 触发事件
        handleClose () {
            this.$emit('handleClose')
        },
        closeDialog () {
            this.$emit('closeDialog')
        },
         // 创建
        confirmDialog () {
        }
    },
     props: {
        dialogVisible: {
            type: Boolean,
            default: false
        }
    }
}
</script>
