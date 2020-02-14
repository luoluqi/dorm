<template>
    <div>
        <el-card class="box-card">
          
           <div @click="addLou" class="lou-item add-lou">
                <i class="el-icon-plus avatar-uploader-icon"></i>
           </div>
            <div @click="toRoomList"  class="lou-item">
                <div class="lou-name">1号楼</div>
                <div class="lou-data">宿舍数：20/24</div>
                <div class="lou-data">住宿生数：20/24</div>
                <div class="lou-data">
                    <el-button @click.stop="editLou" type="text">编辑</el-button>
                    <el-button type="text">删除</el-button>
                </div>
            </div>
            <div class="page-p">
                <el-pagination
                background
                layout="prev, pager, next"
                :page-size="10"
                :current-page="1"
                :total="1000">
                </el-pagination>
            </div>
        </el-card>
        <addLou></addLou>
        <editLou></editLou>
        <adminer></adminer>
        <wifi></wifi>
    </div>
</template>
<script>

import cvueDialog from '@/components/cvue-dialog'
import addLou from './addLou'
import editLou from './editLou'
import adminer from './adminer'
import wifi from './wifi'
export default {
    components: {
        cvueDialog, addLou, editLou, adminer, wifi
    },
    data () {
        return {
           
        }
    },
    methods: {
       addLou () {
            this.$store.commit('lou/showAddLou')
        },
        editLou () {
            this.$store.commit('lou/showEditLou')
        },
        toRoomList () {
            this.$router.push('roomList')
        }
    }
}
</script>
<style scoped>
.lou-item{
    display: inline-block;
    margin: 0 20px 20px 0;
     width: 150px;
    height: 150px;
   
    border: 1px solid #ccc;
    vertical-align: middle;
    cursor: pointer;
    transition: 0.2s;
}
.lou-item:hover{
    box-shadow: 0 0 10px 0 rgba(64, 158, 255,0.5);
}
.add-lou{font-size: 2rem;
line-height: 150px;
text-align: center;
color: #409EFF;
}
.lou-data{
    padding: 10px 10px 0px 10px;
}
.lou-name{
    text-align: center;
    padding: 10px 0;
    font-size: 24px;
    color: #409EFF;
    font-style: italic;
}
.page-p{
    padding: 20px;
    text-align: right;
}
</style>
