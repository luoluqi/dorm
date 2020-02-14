<template>
    <div class="box">
        <div style="text-align:right">
            时间范围：
            <el-date-picker
                v-model="timevalue"
                type="daterange"
                value-format="timestamp"
                @change="sele"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>

            <el-button type="primary" size="mini">确定</el-button>
        </div>
        <div class="bar">
            <div class="bar-p">
                <pie :data="barData"></pie>
            </div>

            <div class="bar-p">
                <bar :data="barData"></bar>
            </div>
        </div>
        <div class="tablesize">
            <div>
                昨日异常学生
            </div>
           <div class="home-body" style="margin-top:15px">
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
                    <template slot-scope="scope" slot="newsTitle" style="">
                        <!-- <el-button @click="handleLook(scope.row)" type="text">{{scope.row.newsTitle}}</el-button> -->
                        <div  @click="handleLook(scope.row)" style="color:#409EFF;cursor:pointer;">{{scope.row.newsTitle}}</div>
                    </template>

                    <template slot-scope="scope" slot="viewNumber" style="">
                        <el-button @click="handleRead(scope.row)" type="text">{{scope.row.viewNumber}}</el-button>
                    </template>
                    <template slot-scope="scope" slot="createDate">
                        <div>{{scope.row.createDate}}</div>
                    </template>
                    <template slot-scope="scope" slot="updateDate">
                        <div>{{scope.row.updateDate}}</div>
                    </template>
                    <!-- 操作按钮 -->
                    <el-table-column
                        fixed="right"
                        slot="actionMenu"
                        label="操作"
                        align="center"
                        header-align="center"
                    >
                        <template slot-scope="scope">
                            <el-button @click="lookDetail(scope.row)" type="text">查看</el-button>
                        </template>
                    </el-table-column>
                </cvue-table>
            </div>
        </div>

        <el-dialog
            :visible.sync="dialogVisible"
            width="80%"
            >
            <div style="text-align:center">
                <span style="margin-right:150px;">学生姓名：王者</span>
                时间范围：
                <el-date-picker
                    v-model="detailTimevalue"
                    type="daterange"
                    value-format="timestamp"
                    @change="sele"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>

                <el-button type="primary" size="mini">确定</el-button>
            </div>

            <div class="home-body" style="margin-top:15px">
                <cvue-table
                :option="detailTableOption"
                :data="detailTableData"
                ref="tbl"
                :isShowAdd="false"
                :page="detailpage"
                :tablePage="detailTablePage"
                :pageSize="detailpage.pageSize"
                :loading="detailTableLoading"
                @current-change="handleCurrentChangeTable"
                @size-change="handleSizeChangeTable"
                :isShowPage="true"
                >
                    <template slot-scope="scope" slot="newsTitle" style="">
                        <!-- <el-button @click="handleLook(scope.row)" type="text">{{scope.row.newsTitle}}</el-button> -->
                        <div  @click="handleLook(scope.row)" style="color:#409EFF;cursor:pointer;">{{scope.row.newsTitle}}</div>
                    </template>
                    <template slot-scope="scope" slot="viewNumber" style="">
                        <el-button @click="handleRead(scope.row)" type="text">{{scope.row.viewNumber}}</el-button>
                    </template>
                    <template slot-scope="scope" slot="createDate">
                        <div>{{scope.row.createDate}}</div>
                    </template>
                    <template slot-scope="scope" slot="updateDate">
                        <div>{{scope.row.updateDate}}</div>
                    </template>
                </cvue-table>
            </div>
            <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span> -->
        </el-dialog>
    </div>
</template>
<script>
import cvueTable from '@/components/cvue-table'
import bar from '@/components/echarts/bar'
import pie from '@/components/echarts/pie'
export default {
    components: {
        bar, pie, cvueTable
    },
    data () {
        return {
            dialogVisible: false,
            timevalue: '',
            detailTimevalue: '',
            barData: [{name: '哈哈', color: '#ff0000', value: 100}, {name: '呵呵', color: '#0000ff', value: 200}, {name: '大帅哥', color: '#cccccc', value: 300}],
            tableLoading: false,
            tablePage: 1,
            page: {
                total: 1, // 总页数
                currentPage: 1, // 当前页数
                pageSize: 10, // 每页显示多少条
                pageSizes: [10, 20, 50]
            },
            tableOption: {
                stripe: true,
                width: '100%',
                border: true,
                index: false,
                cloumn: [
                    { prop: 'id', label: '学生姓名', align: 'center' },
                    { prop: 'newsTitle', label: '楼号', align: 'center', slotStatus: true },
                    { prop: 'createDate', label: '宿舍号', align: 'center', slotStatus: true },
                    { prop: 'updateDate', label: '所属班级', align: 'center', slotStatus: true }
                ]
            },
            tableData: [{id: 1, newsTitle: '703', createDate: '123', updateDate: '2班'}, {id: 1, newsTitle: '703', createDate: '123', updateDate: '2班'}],
            detailTableLoading: false,
            detailTablePage: 1,
            detailpage: {
                total: 2, // 总页数
                currentPage: 1, // 当前页数
                pageSize: 1, // 每页显示多少条
                pageSizes: [1, 20, 50]
            },
            detailTableOption: {
                stripe: true,
                width: '100%',
                border: true,
                index: false,
                cloumn: [
                    { prop: 'id', label: '时间', align: 'center' },
                    { prop: 'newsTitle', label: '考勤设备', align: 'center', slotStatus: true },
                    { prop: 'createDate', label: '状态', align: 'center', slotStatus: true }
                ]
            },
            detailTableData: [{id: 1, newsTitle: '703', createDate: '123'}, {id: 1, newsTitle: '703', createDate: '123'}]
        }
    },
    methods: {
         // 改变pagesize
        handleSizeChange (val) {
            this.page.pageSize = val
             console.log(1)
        },
        // 改变页码
        handleCurrentChange (val) {
            this.tablePage = val
             console.log(1)
        },

         // 改变pagesize
        handleSizeChangeTable (val) {
            this.detailpage.pageSize = val
            console.log(2)
        },
        // 改变页码
        handleCurrentChangeTable (val) {
            this.detailTablePage = val
             console.log(2)
        },
        sele () {
            console.log(this.timevalue)
            console.log(this.detailTimevalue)
        },
        lookDetail (row) {
            this.dialogVisible = true
        }
    }
}
</script>
<style scoped>
    .box{
        padding: 0px 50px!important;
    }
    .bar{
        display: flex;
        justify-content: space-between
    }
    .bar-p{width:650px;height: 300px;}
    .tablesize{
        margin-top: 30px;
    }
</style>
