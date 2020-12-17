<!--
 * @Author: limscript
 * @Date: 2020-12-07 23:20:58
 * @LastEditTime: 2020-12-17 22:06:54
 * @LastEditors: limscript
 * @Description:最新动态
-->

<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card
        shadow="never"
        style="margin: 0 0 20px;"
        v-for="version in $page.version.edges"
        :key="version.node.id"
      >
        <div slot="header">
          <span>{{ version.node.title }}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{ version.node.created_at | formatDate }} <br />
          更新 {{ version.node.updated_at | formatDate }}
        </div>
        <!-- <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
        >
          <pre style="font-family: '微软雅黑'">{{ blog.description }}</pre>
        </div> -->
        <div v-html="version.node.content" class="markdown-body" style="padding-top: 20px"></div>
      </el-card>
      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="!$page.version.edges.length"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>
<page-query>
query {
  version: allStrapiVersion{
    edges{
      node{
        id
        title
        content
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
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
