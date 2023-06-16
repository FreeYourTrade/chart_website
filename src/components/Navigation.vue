<template>
	<div class="navigation">
		<div class="container">
			<div class="btn" @click="toHome()">
				<span>
					<img class="topLogo" src="../assets/imgs/webLogo.png" alt="">
				</span>
			</div>
			<div class="rightcontainer">
				<div class="chart">
					<div @click="toRouter('chart')">k线图</div>
				</div>
				<el-select v-model="lang" @change="cutoverLang(lang)" class="lang">
					<el-option label="中文" value="zh"></el-option>
					<!-- <el-option label="English" value="en"></el-option> -->
				</el-select>
			</div>
			<div class="more pcHide" @click="show = !show">
				<div><img src="../assets/imgs/more.png" alt=""></div>
			</div>
			<transition name="el-zoom-in-top">
				<div v-show="show" class="collapse-item">
					<el-collapse accordion @change="activeNamesList">
						<el-collapse-item name="home">
							<template slot="title">{{$t('navigation.nav.home')}}</template>
							<div></div>
						</el-collapse-item>
						<el-collapse-item name="chart">
							<template slot="title">图表</template>
							<div></div>
						</el-collapse-item>
						<el-collapse-item :title="$t('navigation.nav.languageSelection')" name="4">
							<div @click="cutoverLang('zh')">中文</div>
							<div @click="cutoverLang('en')">English</div>
						</el-collapse-item>
					</el-collapse>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Navigation',
	data() {
		return {
			address: null,
			lang: 'zh',
			//控制列表的展示
			show: false,
		}
	},

	computed: {
		account() {
			return this.$store.state.account
		},
	},

	async created() {
		if (localStorage.getItem('lang') != null) {
			this.$i18n.locale = localStorage.getItem('lang')
		} else {
			let lan = navigator.systemLanguage || navigator.language
			if (lan.toLowerCase().indexOf('zh') !== -1) {
				this.$i18n.locale = 'zh'
			} else if (lan.toLowerCase().indexOf('en') !== -1) {
				this.$i18n.locale = 'en'
			}
		}
		this.lang = this.$i18n.locale
	},


	methods: {

		//切换语言
		cutoverLang(lang) {
			this.lang = lang
			this.$i18n.locale = lang
			localStorage.setItem('lang', lang)
		},

		toHome() {
			this.$router.push('/')
		},
		toRouter(router) {
			this.$router.push(router)
		},

		activeNamesList(activeNames) {
			if (activeNames == 'home') {
				this.$router.push('/')
				this.$router.go(0)
			}
		},
	},
}
</script>

<style scoped>
.navigation {
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #fff;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.container {
	display: flex;
	width: 100%;
	height: 70px;
	max-width: 1280px;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;
}

.container .btn {
	cursor: pointer;
}

.container div span {
	font-size: 24px;
	font-weight: 500;
}

.container .connect {
	cursor: pointer;
	height: 35px;
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0 20px;
}
/* 
.container .connect div:first-child {
	width: 16px;
	height: 16px;
	background-color: #a3a3a3;
	border-radius: 50%;
} */

.container .connect div:last-child {
	font-size: 14px;
}

.container .connected div:first-child {
	background-color: #3ec93f;
}

.topLogo {
	width: 150px;
	height: 33px;
}

.chart{
    font-size: 14px;
	cursor: pointer
}
.github {
	width: 30px;
	height: 30px;
	margin-right: 12px;
	filter: invert(0%);
}

.twitter {
	width: 30px;
	height: 30px;
	margin-right: 12px;
	filter: invert(0%);
}

.rightcontainer {
	display: flex;
	align-items: center;
}

/deep/ .rightcontainer .lang div input {
	border: 0px solid !important;
	width: 100px !important;
	background: none !important;
	margin: 0 0 1px 0 !important;
}

/deep/ .rightcontainer .lang div span span i {
	line-height: 0px;
}

.more {
	cursor: pointer;
	float: left;
	width: 40px;
	height: 40px;
}

.more div {
	width: 22px;
	height: 22px;
	margin: 7px auto;
}

.more div img {
	width: 22px;
	height: 22px;
}

.collapse-item {
	display: none;
}

/deep/ .el-collapse-item__content {
	border: solid 1px rgb(176, 176, 176);
	border-radius: 10px;
	padding: 5px 20px 10px 20px;
}

.el-collapse-item__content div {
	margin-top: 10px;
	padding: 10px 10px 10px 15px;
}

.el-collapse-item__content div:hover {
	cursor: pointer;
	background-color: rgb(214, 214, 214);
	border-radius: 10px;
}

.el-collapse-item__content a {
	margin-top: 10px;
	margin-right: 10px;
	padding: 10px 10px 10px 15px;
	width: 93%;
	text-decoration: none;
	display: inline-block;
	color: block !important;
}

.el-collapse-item__content a:hover {
	cursor: pointer;
	background-color: rgb(214, 214, 214);
	border-radius: 10px;
}

a:-webkit-any-link {
	color: black;
}

.nav ul{
    display: flex;
    flex-wrap: nowrap;
}

@media (max-width: 400px) {
	.container {
		margin: 0 10px;
	}

	.container .btn span img {
		width: 125px;
		height: 25px;
	}
}

@media (max-width: 375px) {
	.more {
		margin-left: 5px;
	}

	.pcHide {
		margin-right: 0px;
	}
}

@media (max-width: 768px) {
	.nav {
		display: none;
	}

	.navigation {
		display: inline-block;
	}

	.container {
		margin: 4px 20px;
		width: 94%;
	}

	.collapse-item {
		display: block;
	}

	.btn {
		margin: 20px 0 0 0;
		display: inline-block;
		float: left;
	}

	.rightcontainer {
		display: none;
	}

	.pcHide {
		width: auto;
		margin-top: 15px;
		margin-right: 15px;
	}

	.container {
		flex-wrap: wrap;
		height: auto;
		display: inline-block;
	}

	.container .connect {
		width: 160px;
	}

	.connect {
		width: 200px;
		float: right;
	}

	.more {
		float: right;
		margin-left: 20px;
	}

	.collapse-item {
		margin-top: 70px;
		margin-bottom: 20px;
	}
}

@media (min-width: 769px) {
	.pcHide {
		display: none;
	}

	.nav {
		width: 30%;
	}

	.nav ul li {
		display: inline-block;
	}

	.el-menu--horizontal {
		border-bottom: none;
	}

	/deep/ .nav .el-menu--horizontal > .el-submenu .el-submenu__title {
		color: black;
		font-size: 17px;
	}

	.navRouter {
		text-decoration: none;
	}
}
</style>
