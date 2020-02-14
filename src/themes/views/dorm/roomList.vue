<template>
    <div>
        <el-card class="box-card">
            <div>
                <el-form :inline="true"  class="demo-form-inline"> 
                    <el-form-item>
                        <el-button @click="addRoom" type="primary" icon="el-icon-plus">添加宿舍</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-upload">批量导入住宿学生信息</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" >批量导入模版下载</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
            border
             :stripe='true'
                :data="tableData"
                @sort-change="sortChange"
               >
                <el-table-column
                prop="name"
                label="宿舍名称"
                
                align="center" >
                </el-table-column>
                <el-table-column
                prop="lou"
                label="楼层"
                sortable="custom"
              
                 align="center">
                </el-table-column>
                <el-table-column
                prop="bed"
                label="床位" 
                 align="center">
                </el-table-column>
                 <el-table-column
                prop="num"
                label="已分配人数" 
                 align="center">
                </el-table-column>
                <el-table-column label="操作"  align="center">
                    <template slot-scope="scope">
                        <el-button @click="editRoom" type="text">编辑</el-button>
                        <el-button  type="text" >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
             <div class="page-p">
                <el-pagination
                    :current-page="1"
                    background
                    :page-size="10"
                    layout="total,prev,pager,next,jumper"
                    :total="1000"
                  >
                </el-pagination>
            </div>
        </el-card>

        <add-room></add-room>
        <edit-room></edit-room>
    </div>
</template>
<script>
import addRoom from './addRoom'
import editRoom from './editRoom'
export default {
    components: {
        addRoom, editRoom
    },
    data () {
        return {
            tableData: [
                {
                    lou: '2016-05-02',
                    name: '王小虎',
                    bed: 1,
                    num: 9
                }, 
                {
                    lou: '2016-05-02',
                    name: '王小虎',
                    bed: 1,
                    num: 9
                }, 
                {
                    lou: '2016-05-02',
                    name: '王小虎',
                    bed: 1,
                    num: 9
                }, 
                {
                   lou: '2016-05-02',
                    name: '王小虎',
                    bed: 1,
                    num: 9
                }
            ]
           
        }
    },
    methods: {
        sortChange (d) {
            console.log(d)
        },
        addRoom () {
            this.$store.commit('lou/showAddRoom')
        },
        editRoom () {
            this.$store.commit('lou/showEditRoom')
        }
    }
}
</script>
<style scoped>
.page-p{
    padding: 20px;
    text-align: right;
}
</style>
