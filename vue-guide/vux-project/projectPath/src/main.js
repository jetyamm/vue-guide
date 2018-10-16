// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "weui";
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import Vuex from 'vuex'
Vue.use(Vuex)

import home from './containers/Home'
Vue.use(VueRouter)

const routes = [{
	path: '/',
	component: home
}]

const router = new VueRouter({
	routes
})

const store = new Vuex.Store({
	state: {
		searchText: "",
//		headPhoto: '',
		isShowGallery: false,
		galleryImg: ''
	},
	mutations: {
		setChangeText(state, data) {
			state.searchText = data;
		},
//		setChangeGallery(state, data) {
//			state.headPhoto = data;
//		}
	},
	actions: {
		setSearchText(context, data) {
			context.commit('setChangeText', data);
		},
//		setShowGallery(context, data) {
//			context.commit('setChangeGallery', data);
//		}
	},
	getters: {
		getSearchText(state) {
			//处理数据
			return state.searchText
		},
//		getShowGallery(state) {
//			//处理数据
//			return state.headPhoto
//		}
	}

})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box')