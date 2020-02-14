<template>
    <div class="box">
        <div class="input-suffix">
            <el-form :inline="true">
                <el-form-item>早上出寝时间：</el-form-item>
                <el-form-item label="锁门">
                    <el-input  :readonly="canFlag" v-model="morningTime"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <div class="input-suffix">
            <el-form :inline="true">
                <el-form-item>中午归寝时间：</el-form-item>
                <el-form-item label="开门">
                    <el-input :readonly="canFlag" v-model="noonBackOpenTime"></el-input>
                </el-form-item>
                <el-form-item label="锁门">
                    <el-input :readonly="canFlag" v-model="noonBackCloseTime"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <div class="input-suffix">
            <el-form :inline="true">
                <el-form-item>中午出寝时间：</el-form-item>
                <el-form-item label="开门">
                    <el-input :readonly="canFlag" v-model="noonOutOpenTime"></el-input>
                </el-form-item>
                <el-form-item label="锁门">
                    <el-input :readonly="canFlag" v-model="noonOutCloseTime"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <div class="input-suffix">
            <el-form :inline="true">
                <el-form-item>傍晚归寝时间：</el-form-item>
                <el-form-item label="开门">
                    <el-input :readonly="canFlag" v-model="afternoonBackOpenTime"></el-input>
                </el-form-item>
                <el-form-item label="锁门">
                    <el-input :readonly="canFlag" v-model="afternoonBackOpenTime"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <div class="input-suffix">
            <el-form :inline="true">
                <el-form-item>晚上归寝时间：</el-form-item>
                <el-form-item label="开门">
                    <el-input :readonly="canFlag" v-model="nightBackOpenTime"></el-input>
                </el-form-item>
                <el-form-item label="锁门">
                    <el-input :readonly="canFlag" v-model="nightBackCloseTime"></el-input>
                </el-form-item>
                <el-form-item label="熄灯">
                    <el-input :readonly="canFlag" v-model="nightCloseLights"></el-input>
                </el-form-item>
            </el-form>
        </div>

         <div class="input-suffix">
            <el-form :inline="true">
                <el-form-item>未归检测时间：</el-form-item>
                <el-form-item label="锁门">
                    <el-input :readonly="canFlag" v-model="noBackTime"></el-input>
                </el-form-item>
                <el-form-item>
                   <span class="mark">熄灯至未归时间如无考勤记录，则视为未归</span>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-form :inline="true">
                <el-form-item>
                    <el-checkbox :disabled="canFlag" v-model="checked">周末是否允许留校</el-checkbox>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-form :inline="true">
                <el-form-item>周末考勤：</el-form-item>
                <el-form-item >
                    <el-switch
                        :disabled="canFlag"
                        v-model="weekend">
                    </el-switch>
                </el-form-item>
                <el-form-item>
                   <span class="mark">关闭则考勤时间为周日晚上至周五下午；打开则周五晚上至周日下午也要考勤14:00</span>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-form :inline="true">
                <el-form-item>智能跳过节假日：</el-form-item>
                <el-form-item >
                     <el-switch
                        :disabled="canFlag"
                        v-model="jumpHoliday">
                    </el-switch>
                </el-form-item>
                <el-form-item>
                   <span class="mark">关闭则节假日也要考勤</span>
                </el-form-item>
            </el-form>
        </div>

         <div>
            <el-form :inline="true">
                <el-form-item>寒假时间：</el-form-item>
                <el-form-item >
                    <el-date-picker
                        :readonly="canFlag"
                        v-model="winterTime"
                        type="daterange"
                        value-format="timestamp"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </div>

        <div>
            <el-form :inline="true">
                <el-form-item>暑假时间：</el-form-item>
                <el-form-item >
                    <el-date-picker
                        :readonly="canFlag"
                        v-model="summerTime"
                        type="daterange"
                        value-format="timestamp"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </div>
        <div v-if="canFlag" class="edit">
            <el-button @click="edit" type="primary">编辑</el-button>
        </div>
        <div v-else class="edit">
            <el-button @click="save" type="primary">确定</el-button>
            <el-button @click="cancel" >取消</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            canFlag: true,
            morningTime: '',
            noonBackOpenTime: '',
            noonBackCloseTime: '',
            noonOutOpenTime: '',
            noonOutCloseTime: '',
            afternoonBackOpenTime: '',
            afternoonBackCloseTime: '',
            nightBackOpenTime: '',
            nightBackCloseTime: '',
            nightCloseLights: '',
            noBackTime: '',
            checked: true,
            weekend: true,
            jumpHoliday: true,
            winterTime: '',
            summerTime: ''
        }
    },
    methods: {
        edit () {
            this.canFlag = false
        },
        save () {
            this.canFlag = true
        },
        cancel () {
            this.canFlag = true
        }
    }
}
</script>
<style  scoped>
.box{
    padding: 40px 50px!important;
}
.mark{
    color: #c0acac
}
.edit{
    margin: 50px auto;
    text-align: center;
}

</style>
