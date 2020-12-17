<!--
 * @Author: limscript
 * @Date: 2020-12-12 15:29:48
 * @LastEditTime: 2020-12-17 22:51:23
 * @LastEditors: limscript
 * @Description:社交圈
-->

<template>
  <Layout>
    <div>
      <el-card
        shadow="never"
        style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px"
      >
        <el-tabs v-model="activeTab" type="card" @tab-click="onSelect">
          <el-tab-pane
            :label="'粉丝 ' + $page.infos.followers.length"
            name="followers"
            style="padding: 5px"
          >
            <div v-loading="followers.loading">
              <div v-if="$page.infos.followers.length">
                <el-row style="min-height: 200px; ">
                  <el-col
                    :span="8"
                    v-for="(item, index) in $page.infos.followers"
                    :key="'followers' + index"
                    style="padding: 10px"
                  >
                    <el-card
                      shadow="hover"
                      style="font-size: 13px;color: #606266;line-height: 20px"
                    >
                      <i class="el-icon-star-off"></i>&emsp;
                      <a
                        @click="$router.push(`/user/social/details/${item.name}`)"
                        style=" text-decoration:none;cursor:pointer"
                        >{{ item.name }}</a
                      >
                      <br />
                      <i class="el-icon-message"></i>&emsp;
                      <a
                        :href="item.url"
                        target="_blank"
                        style=" text-decoration:none;cursor:pointer"
                        >TA的主页</a
                      >
                      <br />
                      <img
                        :src="baseUrl + item.avatar.url"
                        style="width: 100%;border-radius:5px;margin-top: 5px"
                      />
                    </el-card>
                  </el-col>
                </el-row>
                <div style="text-align: center;margin-top: 10px">
                  <el-pagination
                    @current-change="onSelect"
                    background
                    layout="prev, pager, next"
                    :current-page.sync="followers.query.page"
                    :page-size="followers.query.pageSize"
                    :total="followers.query.pageNumber * followers.query.pageSize"
                  >
                  </el-pagination>
                </div>
              </div>
              <div
                style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
                v-else
              >
                <font style="font-size: 30px;color:#dddddd ">
                  <b>(￢_￢) 没有一个粉丝</b>
                </font>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane
            :label="'关注 ' + $page.infos.followings.length"
            name="following"
            style="padding: 5px"
          >
            <div v-loading="following.loading">
              <div v-if="$page.infos.followings.length">
                <el-row style="min-height: 200px; ">
                  <el-col
                    :span="8"
                    v-for="(item, index) in $page.infos.followings"
                    :key="'following' + index"
                    style="padding: 10px"
                  >
                    <el-card
                      shadow="hover"
                      style="font-size: 13px;color: #606266;line-height: 20px"
                    >
                      <i class="el-icon-star-off"></i>&emsp;
                      <a
                        @click="$router.push(`/user/social/details/${item.url}`)"
                        style=" text-decoration:none;cursor:pointer"
                        >{{ item.name }}</a
                      >
                      <br />
                      <i class="el-icon-message"></i>&emsp;
                      <a
                        :href="item.url"
                        target="_blank"
                        style=" text-decoration:none;cursor:pointer"
                        >TA的主页</a
                      >
                      <br />
                      <img
                        :src="baseUrl + item.avatar.url"
                        style="width: 100%;border-radius:5px;margin-top: 5px"
                      />
                    </el-card>
                  </el-col>
                </el-row>
                <div style="text-align: center;margin-top: 10px">
                  <el-pagination
                    @current-change="onSelect"
                    background
                    layout="prev, pager, next"
                    :current-page.sync="following.query.page"
                    :page-size="following.query.pageSize"
                    :total="following.query.pageNumber * following.query.pageSize"
                  >
                  </el-pagination>
                </div>
              </div>
              <div
                style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
                v-else
              >
                <font style="font-size: 30px;color:#dddddd ">
                  <b>(￢_￢) 还没有关注一个人</b>
                </font>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query{
  infos: strapiInfo(id:1){
    id
    name
    github
    blogUrl
    location
    photo {
      url
    }
    followers {
      name
      url
      avatar{
        url
      }
    }
    followings{
      name
      url
      avatar{
        url
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
      activeTab: 'followers',
      followers: {
        query: {
          page: 1,
          pageSize: 9,
          pageNumber: 1
        },
        loading: false,
        list: []
      },
      following: {
        query: {
          page: 1,
          pageSize: 9,
          pageNumber: 1
        },
        loading: false,
        list: []
      },
      followersTotal: 200,
      followingTotal: 354
    }
  },
  methods: {
    onSelect() {}
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
