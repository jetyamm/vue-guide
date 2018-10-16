<template>
	<div class="weui-gallery" :style="{display : getShowGallery ? 'block' : 'none'}">
        <span class="weui-gallery__img" :style="{backgroundImage: `url(${getGalleryImg})`}"></span>
        <div class="weui-gallery__opr">
            <a href="javascript:" class="weui-gallery__del" @click="setShowGallery">
                <i class="weui-icon-delete weui-icon_gallery-delete"></i>
            </a>
        </div>
    </div>
</template>

<script>
	export default{
		data(){
			return{
//				isShowGallery: false,
//				galleryImg: ''
			}
		},
		methods:{
			setShowGallery() {
				this.$store.state.isShowGallery = false;
			}	
		},
		computed:{
			getShowGallery(){
				return this.$store.state.isShowGallery;
			},
			getGalleryImg(){
				return this.$store.state.galleryImg;
			}
		}
	}
</script>

<style>
</style>