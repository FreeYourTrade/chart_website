<template>
	<div class="home">
		<Navigation></Navigation>
		<div class="container">
			<div class="topTips">
				<div>
					<div>
						<div>ALGOTRADE
						</div>
						我们让交易更简单
					</div>
					<div class="summary">你不需要再花费大量时间去观察市场行情变化</div>
					<button class="theFeedback" @click="toRouter('chart')">
						进入图表
					</button>
				</div>
				<img src="../assets/imgs/line.jpg">
			</div>
		    <div>
				<div class="sub-card">
					<div>
						<div class="title">获取交易信号</div>
						<div class="title1">右侧输入您的邮箱我们将会向你推送策略交易信息</div>
					</div>
					<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>订阅</span>
					</div>
					<el-input
						placeholder="请输入你的邮箱地址"
						v-model="inputEmail"
						clearable>
					</el-input>
					<el-button type="primary" class="submit-email">提交</el-button>
					</el-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
	name: 'home',
	components: {
		Navigation,
	},
	computed: {
		title() {
			return this.$t('title.home')
		},
	},
	data() {
    return {
		inputEmail:""
    };
  },

	methods: {
		toRouter(router) {
			this.$router.push(router)
		},
	},
}
</script>

<style scoped>
a {
	text-decoration-line: none;
}

.home {
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
}

.container {
	max-width: 1280px;
	padding-top: 20px;
	padding-bottom: 50px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin: 30px 20px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.container .topTips {
	display: flex;
	width: 100%;
	padding: 0 40px;
	margin-bottom: 20px;
	box-sizing: border-box;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 30px;
}

.container .topTips > div {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 100px;
	max-width: 50%;
}

.container .topTips > div div:first-child {
	color: #000;
	font-weight: 700;
	font-size: 2vw;
}

.container .topTips > div div:last-child {
	font-size: 50px;
	font-weight: bold;
	color: #333333;
	line-height: 75px;
}

.container .topTips > div div:last-child span {
	font-size: 56px;
	font-family: SourceHanSansCN-Bold, SourceHanSansCN;
	font-weight: bold;
	color: #2e8ff0;
	line-height: 84px;
	background: linear-gradient(313deg, #5ef4cb 0%, #19aae2 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.container .topTips > img {
	width: 40vw;
	max-width: 512px;
	object-fit: contain;
}

.container .title {
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 30px;
	color: #000;
	font-weight: 700;
}

.container .detail {
	font-size: 18px;
	font-weight: 400;
	margin: 5px 0 20px;
}

.container .listTool {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	max-width: 1100px;
	width: 100%;
}

.container .submit-email{
	margin-top: 10px;
	width: auto;
	height: auto;
}
.container .sub-card{
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	margin: 30px 20px;
}

.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

.container .listTool > div {
	display: flex;
	width: 356px;
	height: 118px;
	padding: 16px 24px;
	box-sizing: border-box;
	background-color: #fafafa;
	cursor: pointer;
}

.container .listTool > div:hover {
	background-color: #f5f5f5;
}

.container .listTool div img {
	width: 35px;
	height: 35px;
	object-fit: cover;
}

.container .listTool .text {
	margin-left: 16px;
	width: 84%;
}

.container .listTool .text img {
	width: 24px;
	height: 24px;
}

.container .listTool .text .textTitle {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.container .listTool .text div:last-child {
	margin-top: 16px;
}

@media (max-width: 1320px) {
	.container {
		max-width: calc(100vw - 40px);
	}
}

.footer {
	margin-top: 20px;
}

.el-button--primary {
	width: 260px;
}

.theFeedback {
	width: 127px;
	height: 37px;
	background: #141414;
	color: #ffffff;
	border-radius: 23px;
	border: none;
}

.theFeedback a {
	width: 56px;
	height: 20px;
	font-size: 14px;
	color: #ffffff;
}

.summary {
	color: #0e1f59;
}

@media (min-width: 769px) and (max-width: 900px) {
	.container .topTips > div div:last-child {
		font-size: 4vw;
		font-weight: bold;
		color: #333333;
		line-height: 0;
	}

	.summary {
		width: 250px;
	}

	.container .topTips > div div:last-child span {
		font-size: 6vw;
	}

	.container .topTips > div {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 100px;
		max-width: 31%;
	}

	.container .topTips div div {
		width: 41vw;
	}

	.container .topTips > div > div > div {
		height: 112px;
	}
}

@media (max-width: 768px) {
	.container .topTips > div div:last-child span {
		font-size: 40px;
	}

	.container .listTool > div {
		height: auto;
	}

	.container .title {
		font-size: 6vw;
	}

	.container .topTips > img {
		width: 30vw;
		max-width: 512px;
		object-fit: contain;
	}

	.topTips {
		text-align: center;
	}

	.container .topTips > div div:first-child {
		font-size: 5vw;
	}

	.container .topTips > div {
		max-width: 100%;
		margin: 0;
	}

	.theFeedback {
		margin: 0 auto;
	}

	.container .topTips > div div:last-child {
		font-size: 5vw;
		text-align: center;
	}

	.summary {
		font-size: 3vw;
	}

	.topTips img {
		display: none;
	}

	.title {
		display: none;
	}

	.detail {
		display: none;
	}

	.container .listTool > div {
		width: 80%;
	}
}

@media (min-width: 790px) and (max-width: 1139px) {
	.container .listTool {
		width: 728px;
	}
	.listTool > div {
		width: 25vw;
	}
}

@media (max-width: 767px) {
	.container .listTool {
		width: 100%;
	}

	.listTool > div {
		margin: 0 auto;
		width: 47vw;
	}
}
@media (max-width: 350px) {
	.container .topTips > div div:last-child span {
		font-size: 10vw;
	}
}
</style>