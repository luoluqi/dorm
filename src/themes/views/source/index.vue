<template>
    <div>
        <el-card>
            <el-form label-width="120px">
                <el-form-item label="考勤数据来源：">
                    <el-checkbox-group v-model="sourse">
                        <el-checkbox label="智能学生证" name="1"></el-checkbox>
                        <el-checkbox label="速通门门禁" name="2"></el-checkbox>
                        <el-checkbox label="刷卡门禁" name="3"></el-checkbox>
                        <el-checkbox label="人脸抓拍摄像头" name="4"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="检测状态：">
                    <el-checkbox-group v-model="state">
                        <el-checkbox label="正常归寝" name="1"></el-checkbox>
                        <div>
                            <el-checkbox label="晚归" name="2"></el-checkbox>
                            <span class="remark">熄灯后才回宿舍，则视为晚归</span>
                        </div>
                        <div>
                            <el-checkbox label="未归" name="3"></el-checkbox>
                            <span class="remark">熄灯至未归时间如无考勤记录</span>
                        </div>
                        <div>
                            <el-checkbox label="晚出" name="4"></el-checkbox>
                            <span class="remark">熄灯后外出，则视为晚出</span>
                        </div>
                        <el-checkbox label="上课时间留寝" name="5"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div class="btn">
                <el-button type="primary">编辑</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  mounted () {
      
  },
  data () {
      return {
        sourse: [],
        state: []
      }
  }
}
</script>
<style scoped>
.remark{
    font-size: 12px;
    color: #999;
    margin-left: 16px;
}
.btn{
    text-align: center
}
</style>
