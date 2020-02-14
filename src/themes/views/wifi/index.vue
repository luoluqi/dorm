<template>
    <div>
        <el-card class="box-card mt-15">
           <div class="home-form">
                <el-form label-width="80px" @submit.native.prevent>
                    <el-row :gutter="10">
                        <el-col :span="3">
                            <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd" class="search-btn">添加WIFI</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-card>
        <el-card class="box-card mt-15">
            <div class="home-body">
            <cvue-table
              :option="tableOption"
              :data="tableData"
              ref="tbl1"
              :isShowAdd="false"
              :page="page"
              :tablePage="tablePage"
              :pageSize="page.pageSize"
              :loading="tableLoading"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
              :isShowPage="true"
            >
              <!-- 操作按钮 -->
              <el-table-column
                fixed="right"
                slot="actionMenu"
                label="操作"
                align="center"
                header-align="center"
                width="120"
              >
                <template slot-scope="scope">
                  <div class="operation">
                    <i @click="handleEdit(scope.row)" title="编辑" class="el-icon-edit"></i>
                    <i @click="handleLook(scope.row)" title="查看" class="fa fa-eye"></i>
                    <i @click="handleDel(scope.row)" title="删除" class="el-icon-delete"></i>
                  </div>

                  <!-- <el-button type="text" size="small" @click="handleReset(scope.row)" v-hasPermission="permission.edit">密码重置</el-button>
                  <el-button type="text" size="small" @click="handleLook(scope.row)" >查看</el-button>-->
                </template>
              </el-table-column>
            </cvue-table>
          </div>
        </el-card>
        <!-- 创建 -->
        <add-wifi 
        @closeDialog="closeDialog('add')"
        @confirmDialog="confirmDialog('add')"
        @handleClose="closeDialog('add')"
        :dialogVisible="dialogVisibleAdd"
        ></add-wifi>
        <!-- 编辑 -->
        <edit-wifi 
        @closeDialog="closeDialog('edit')"
        @confirmDialog="confirmDialog('edit')"
        @handleClose="closeDialog('edit')"
        :dialogVisible="dialogVisibleEdit"
        ></edit-wifi>
    </div>
</template>
<script>
import cvueTable from '@/components/cvue-table'
import cvueDialog from '@/components/cvue-dialog'
import addWifi from './addWifi'
import editWifi from './editWifi'
export default {
     components: {
    cvueTable,
    cvueDialog,
    addWifi,
    editWifi
  },
  mounted () {
      
  },
  data () {
      return {
           tableLoading: false,
           dialogVisibleAdd: false,
           dialogVisibleEdit: false,
           tablePage: 1,
            page: {
                total: 1, // 总页数
                currentPage: 1, // 当前页数
                pageSize: 10, // 每页显示多少条
                pageSizes: [10, 50, 100]
            },
            tableOption: {
                stripe: true,
                width: '100%',
                border: true,
                index: false,
                cloumn: [
                { prop: 'UpdateDate', label: 'WIFI名称', align: 'center', width: 180 },
                 { prop: 'NewContent', label: 'MAC地址', align: 'center', width: 180 },
                { prop: 'NewTitle', label: '所在位置', align: 'center' }
                ]
            },
            tableData: [
            ]
      }
  },
  methods: {
        // 改变pagesize
        handleSizeChange (val) {
        this.page.pageSize = val
        this.handleList()
        },
        // 改变页码
        handleCurrentChange (val) {
        this.tablePage = val
        // alert(this.tablePage)
        this.handleList()
        },
        // 添加
         handleAdd () {
            this.dialogVisibleAdd = true
        },
         // 编辑
         handleEdit () {
            this.dialogVisibleEdit = true
        },
         // 关闭弹窗
        closeDialog (params) {
            if (params == 'add') {
                this.dialogVisibleAdd = false
            }
            if (params == 'edit') {
                this.dialogVisibleEdit = false
            }
        },
        // 确认
        confirmDialog (params) {
            if (params == 'add') {
                this.dialogVisibleAdd = false
                this.keyword = ''
                this.tablePage = 1
                this.handleList()
            }
            if (params == 'edit') {
                this.dialogVisibleEdit = false
                this.keyword = ''
                this.tablePage = 1
                this.handleList()
            }
        },
        // 数据列表
        handleList () {

        }
  }
}
</script>
<style scoped>

</style>
