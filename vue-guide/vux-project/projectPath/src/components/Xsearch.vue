<template>
	<div class="weui-search-bar" :class=" isShowCancel ? 'weui-search-bar_focusing' : ''" id="searchBar">
		<form class="weui-search-bar__form">
			<div class="weui-search-bar__box">
				<i class="weui-icon-search"></i>
				<input @keyup="setSearchText" v-model="searchText" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
				<a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
			</div>
			<label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);" @click="isShowCancel=true">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
		</form>
		<a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="isShowCancel=false">取消</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShowCancel: false,
				searchText: ""
			}
		},
		methods:{
			setSearchText() {
				this.$store.dispatch("setSearchText", this.searchText);
			}	
		}

	}
</script>

<style>

</style>