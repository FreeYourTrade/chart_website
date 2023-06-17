<template>
  <div class="addressView">
    <Navigation></Navigation>
    <div class="address" ref="tv">
      <iframe class="tradingview_46ccf" :src="chartUrl" width="98%" height="720" frameborder="1" allowtransparency="true" scrolling="no">
			</iframe>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Clipboard from "clipboard";
export default {
  name: "ChartPage",
  components: {
    Navigation,
  },
  data() {
    return {
      chartUrl:"https://s.tradingview.com/embed/EAtfpMtP?method=script&amp;utm_source=localhost&amp;utm_medium=widget&amp;utm_campaign=chart",
    };
  },

  mounted(){
    console.log("mounted---")
    // this.display()
  },

  methods: {
     display() {
        var tradingview_embed_options = {};
        tradingview_embed_options.width = "640";
        tradingview_embed_options.height = "640";
        tradingview_embed_options.chart = "EAtfpMtP";
        var res = new TradingView.chart(tradingview_embed_options);
        console.log(res)
      }

  },
};
</script>

<style scoped>
.addressView {
  width: 100%;
  height: auto;
  min-height: 94%;
}

.address {
  width: 100%;
  height: 480;
  display: flex;
  justify-content: center;
  overflow: auto;
  margin-top: 5px;
}

.container {
  max-width: 768px;
  padding: 32px;
  height: min-content;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.container div {
  width: 100%;
}

.container div div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.container div div .el-input {
  width: 100%;
  margin-right: 0px
}

/deep/ .container div .el-input input {
  padding: 0 15px !important;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 0px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  border: none;
  background-color: #f5f5f5;
  border-radius: 6px;
  width: 95%;
  margin-right: 20px;
}

.container .el-button {
  width: 96px;
  height: 36px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  display: flex;
  padding: 0;
  line-height: 36px;
  justify-content: center;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.container h3 {
  font-size: 18px;
  font-weight: 700;
}

.title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
  position:relative;
}

.usingHelp {
  width: 100%;
  height: 21px;
  margin-bottom: 5px;
}

.usingHelp span{
  float: right;
}

.usingHelp span a{
  text-decoration:none;
  cursor:pointer;
  font-size: 15px;
  color: #909399;
  width: 90px;
  display: inline-block;
}

.usingHelp span a:hover{
  color: #409eff;
}

.usingHelp span img{
  margin-bottom: -3px;
  width: 15px;
  display: inline-block;
}

.container h5 {
  margin: 10px 0;
  font-size: 14px;
  color: #000;
  font-weight: 700;
}

.container .result {
  width: 100%;
  margin-left: 10px;
}

.copyButton {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.load {
  width: 30px;
  height: 30px;
  filter: invert(100%);
  vertical-align: middle;
}
@media (max-width:768px){
    .container .result{
      word-break: break-all;
    }
    
    .container div .unctionalArea{
        flex-wrap: wrap;
    }

    .unctionalArea .el-button{
        margin-top: 20px;
    }
}
</style>
