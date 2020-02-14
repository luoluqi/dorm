<template>
    <div>
        <el-card class="box-card">
            <div>
                <el-form :inline="true"  class="demo-form-inline"> 
                    <el-form-item>
                        <el-button @click="addStudent" type="primary" icon="el-icon-plus">添加住宿生</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>
            
            <el-table
            border
                :data="tableData"
                :stripe='true'
               >
                <el-table-column
                prop="name"
                label="学生姓名"
                
                align="center" >
                </el-table-column>
                <el-table-column
                prop="lou"
                label="楼号"
                 align="center">
                </el-table-column>
                <el-table-column
                prop="bed"
                label="宿舍号" 
                 align="center">
                </el-table-column>
                 <el-table-column
                prop="num"
                label="所属班级" 
                 align="center">
                </el-table-column>
                <el-table-column label="操作"  align="center">
                    <template slot-scope="scope">
                        <el-button @click="editStudent" type="text">编辑</el-button>
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

        <add></add>   
        <selectStudent></selectStudent>
    </div>
</template>
<script>
import add from './add'
import selectStudent from './selectStudent'
export default {
    components: {
       add, selectStudent
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
        addStudent () {
            this.$store.commit('student/showAdd')
        },
        editStudent () {

        },
        test () {
            this.closeTagTo('/dorm/dorm')
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
