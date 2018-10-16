<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__hd">图文组合列表</div>
		<div class="weui-panel__bd">
			<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="l in computedNews">
				<div class="weui-media-box__hd">
					<img class="weui-media-box__thumb" :src="l.author.avatar_url" alt="" @click="setGallery(l.author.avatar_url)">
				</div>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title" v-text="l.author.loginname"></h4>
					<p class="weui-media-box__desc" v-text="l.title"></p>
				</div>
			</a>
		</div>
		<div class="weui-panel__ft">
			<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd" @click="getInfo">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
	</div>
</template>

<script>
	import { Panel } from 'vux';
	import $ from 'jquery';
	export default {
		data() {
			return {
				page: 0,
				list: [],
			}
		},
		components: {
			Panel
		},
		methods: {
			getInfo() {
				var self = this;
				$.ajax({
					type: "get",
					url: "https://cnodejs.org/api/v1/topics",
					async: true,
					data: {
						page: self.page++,
						tab: 'share',
						limit: 10
					},
					success: function(data) {
						self.list = self.list.concat(data.data);
					}
				});
			},
			setGallery(url) {
				this.$store.state.isShowGallery = true;
				this.$store.state.galleryImg = url;
				//或者return this.$store.state.searchName
			}
		},
		mounted: function() {
			this.getInfo();
			console.log(this);
		},
		computed: {
			searchText() {
				return this.$store.getters.getSearchText;
				//或者return this.$store.state.searchName
			},
			
			computedNews() {
				//var self = this;
				var newArr = this.list.filter(function(a) {
					//					console.log(a.title.indexOf(this.searchText) != -1)
					//					//真
					//					console.log(a.title, this.searchText)
					return a.title.indexOf(this.searchText) != -1
					//return 
				}.bind(this));
				//				console.log(newArr);
				return newArr
			}
		}
	}
</script>

<style>
	.weui-panel__ft {
		margin-bottom: 3rem;
	}
</style>