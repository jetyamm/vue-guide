<template>
	<div>
		<xheader></xheader>
		<swiper :list="list" ></swiper>
		<xsearch></xsearch>
		<xmain></xmain>
		<xfooter></xfooter>
		<xgallery></xgallery>
	</div>
</template>

<script>
	import { Swiper } from 'vux';
	import xheader from '../components/Xheader.vue';
	import xfooter from '../components/Xfooter.vue';
	import xsearch from '../components/Xsearch.vue';
	import xmain from '../containers/Main.vue';
	import xgallery from '../components/Xgallery.vue';
	export default {
		data() {
			return {
				list: [{
					url: 'javascript:',
					img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
					title: '送你一辆车'
				}, {
					url: 'javascript:',
					img: 'https://static.vux.li/demo/5.jpg', // 404
					title: '送你一次旅行',
					fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
				}]
			}
		},
		components: {
			xheader,
			Swiper,
			xfooter,
			xsearch,
			xmain,
			xgallery
		}
	}
</script>

<style>

</style>