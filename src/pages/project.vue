<!--
 * @Author: limscript
 * @Date: 2020-12-07 23:20:58
 * @LastEditTime: 2020-12-17 22:07:05
 * @LastEditors: limscript
 * @Description:开源项目
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
        <el-button icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
        <el-button
          icon="el-icon-share"
          type="warning"
          style="margin-left: 10px"
          plain
          circle
        ></el-button>
      </el-card>

      <div v-if="$page.project.edges && $page.project.edges.length > 0">
        <el-card
          shadow="hover"
          v-for="project in $page.project.edges"
          :key="project.node.id"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <a
                    style="text-decoration:none;cursor:pointer"
                    @click="goDetails(project.node.name)"
                  >
                    <i class="el-icon-service"></i>&nbsp;&nbsp; {{ project.node.name }}
                  </a>
                </span>
              </el-col>
              <el-col :span="8">
                <div style="text-align: right;">
                  <el-button
                    @click="goGithub(project.node.url)"
                    style="padding: 3px 0"
                    type="text"
                    icon="el-icon-back"
                    >前往GitHub</el-button
                  >
                  <el-button style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
            最近更新 {{ project.node.updated_at | formatDate }}
          </div>
          <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
            {{ project.node.description }}
          </div>
          <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
            <el-row>
              <el-col :span="16" style="padding-top: 5px">
                <el-tooltip effect="dark" :content="'star ' + project.node.star" placement="bottom">
                  <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
                </el-tooltip>
                {{ project.node.star }}
                <el-tooltip
                  effect="dark"
                  :content="'watch ' + project.node.watch"
                  placement="bottom"
                >
                  <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
                </el-tooltip>
                {{ project.node.watch }}
                <el-tooltip effect="dark" :content="'fork ' + project.node.fork" placement="bottom">
                  <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
                </el-tooltip>
                {{ project.node.fork }}
              </el-col>
              <el-col :span="8" style="text-align: right;">
                <el-tag size="small" type="danger" v-if="project.node.license">{{
                  project.node.license
                }}</el-tag>
                <el-tag size="small" type="success" style="margin-left: 10px;">{{
                  project.node.tag
                }}</el-tag>
              </el-col>
            </el-row>
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
        v-if="!$page.project.edges || $page.project.edges.length == 0"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div></Layout
  >
</template>

<page-query>
query {
  project: allStrapiProject{
    edges{
      node{
        id
        name
        url
        description
        star
        watch
        fork
        license
        tag
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
      projects: []
    }
  },
  methods: {
    list() {},
    search() {},
    goDetails() {},
    goGithub() {}
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
