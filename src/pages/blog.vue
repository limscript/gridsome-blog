<!--
 * @Author: limscript
 * @Date: 2020-12-07 23:20:58
 * @LastEditTime: 2020-12-17 22:06:12
 * @LastEditors: limscript
 * @Description:博客列表
-->

<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="margin-bottom: 20px">
        <el-input
          placeholder="请输入关键字"
          v-model="searchKey"
          clearable
          style="width: 300px"
        ></el-input>
        <el-button
          @click="search"
          icon="el-icon-search"
          style="margin-left: 10px"
          circle
          plain
        ></el-button>
        <el-button
          style="margin-left: 10px"
          icon="el-icon-share"
          type="warning"
          plain
          circle
        ></el-button>
        <el-button type="primary" icon="el-icon-edit" round plain style="float: right;"
          >写博文</el-button
        >
      </el-card>

      <div v-if="$page.blog.edges && $page.blog.edges.length > 0">
        <el-card
          shadow="hover"
          v-for="version in $page.blog.edges"
          :key="version.node.id"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <a
                    style="text-decoration:none;cursor:pointer"
                    @click="goDetails(version.node.id)"
                  >
                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{ version.node.title }}
                  </a>
                </span>
              </el-col>
              <el-col :span="8">
                <div style="text-align: right;">
                  <el-button
                    @click="$share('/user/blog/details/' + version.node.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-share"
                  ></el-button>
                  <el-button
                    @click="editBlog(version.node.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-edit"
                  ></el-button>
                  <el-button
                    @click="deleteBlog(version.node.id)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-delete"
                  ></el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
            最近更新 {{ version.node.id.updated_at | formatDate }}
          </div>
          <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
            {{ version.node.description }}
          </div>
        </el-card>
        <div style="text-align: center">
          <el-pagination
            @current-change="list"
            background
            layout="prev, pager, next"
            :current-page.sync="query.page"
            :page-size="query.pageSize"
            :total="query.pageNumber * query.pageSize"
          >
          </el-pagination>
        </div>
      </div>

      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="!$page.blog.edges || $page.blog.edges.length == 0"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div></Layout
  >
</template>

<page-query>
query {
  blog: allStrapiBlog{
    edges{
      node{
        id
        title
        content
        description
        created_at
        updated_at
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      query: {
        page: 1,
        pageSize: 5,
        pageNumber: 1
      },
      loading: false,
      searchKey: '',
      blogs: []
    }
  },
  methods: {
    list() {},
    search() {}
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
