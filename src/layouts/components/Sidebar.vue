<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active">
        <el-menu-item v-for="item in constantRouterMap" :key="item.path" :index="item.name">
          <g-link :to="item.path" tag="li">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </g-link>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    meta: {
      icon: 'el-icon-star-off',
      title: '最新动态'
    }
  },
  {
    path: '/social',
    name: 'social',
    meta: {
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      icon: 'el-icon-edit-outline',
      title: '博客列表'
    }
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      icon: 'el-icon-service',
      title: '开源项目'
    }
  }
]
export default {
  data() {
    return {
      constantRouterMap,
      active: '',
      parentUrl: '',
      menuList: []
    }
  },
  computed: {},
  mounted() {
    let arr = this.$route.path.split('/')
    this.active = arr[1] || 'index'
  },
  methods: {}
}
</script>
