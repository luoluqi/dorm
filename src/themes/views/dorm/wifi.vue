<template>
    <div>
        <cvue-dialog
            :dialogVisible="wifiVisible"
            title="选择WIFI"
            :isShowFoot="true"
            @handleOpen="openDialog"
            @closeDialog="closeDialog"
            @confirmDialog="confirmDialog"
            @handleClose="closeDialog"
            >
            <div  slot="dialogBody">
               <div class="man-list">
                   <div class="man-item">展示</div>
                   <div class="man-item active">展示</div>
                   <div class="man-item">展示</div>
               </div>
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
        wifiVisible () {
            return this.$store.state.lou.wifiVisible
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
            this.$store.commit('lou/hideWifi')
        }
        
    }
}
</script>
<style scoped>
.man-list{

}
.man-item{
    border:1px solid #409EFF;
    padding: 5px 10px;
    color: #409EFF;
    margin: 10px 10px 0 0;
    display: inline-block;
    cursor: pointer;
}
.man-item.active{
    background: #409EFF;
    color: #fff;

}
</style>
