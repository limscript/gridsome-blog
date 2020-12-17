/*
 * @Author: your name
 * @Date: 2020-12-07 23:20:58
 * @LastEditTime: 2020-12-17 22:50:05
 * @LastEditors: limscript
 * @Description: In User Settings Edit
 * @FilePath: /real-world/Users/lim/bat/homework/fed-e-task-03-04/my-blog/src/main.js
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import DefaultLayout from '~/layouts/index.vue'
import util from "./utils";
import dayjs from "dayjs";

export default function(Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        baseUrl: process.env.GRIDSOME_API_URL
      }
    }
  })
  console.log('rocess.env.GRIDSOME_API_URL', process.env.GRIDSOME_API_URL);
  // Set default layout as a global component
  Vue.use(ElementUI)
  Vue.prototype.$util = util
  Vue.component('Layout', DefaultLayout)
  Vue.filter('formatDate', (val, temp = 'YYYY-DD-MM HH:mm:ss') => {
    return dayjs().isValid(val) ? dayjs(val).format(temp) : ''
  });
}
