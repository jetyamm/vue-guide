<template>
	<div class="weui-tabbar">
		<a v-for="(o,idx) in options" href="javascript:;" class="weui-tabbar__item" :class="{'weui-bar__item_on' : idx === page}" @click="getPage(idx)">
			<span style="display: inline-block;position: relative;">
                <img :src="img" alt="" class="weui-tabbar__icon">
                <span v-show="o.num>0" class="weui-badge"  style="position: absolute;top: -2px;right: -13px;" v-text="o.num"></span>
                <span v-show="o.isShow" class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
			</span>
			<p class="weui-tabbar__label" v-text="o.btnInfo"></p>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img: require("../assets/icon_tabbar.png"),
				page: 0,
				options: [{
					btnInfo: '微信',
					num: 8,
					isShow: false
				},{
					btnInfo: '通讯录',
					num: 0,
					isShow: false
				},{
					btnInfo: '发现',
					num: 0,
					isShow: true
				},{
					btnInfo: '我',
					num: 0,
					isShow: false
				}]
			}
		},
		methods: {
			getPage: function(idx){
				this.page = idx;
			}
		}
	}
</script>

<style>
	.weui-tabbar {
		position: fixed!important;
	}
</style>