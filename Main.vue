
<template>
  <div class="main" :class="{'main-hide-text': !shrink}">
      <div color="rgba(0,0,0,0.5)" size="2" class="sidebar-menu-con"  :style="{width: !shrink?'75px':'200px', overflow:'auto',background: bgColor}">
        <shrinkable-menu
          :shrink="shrink"
          @on-change="handleSubmenuChange"
          :theme="menuTheme"
          :before-push="beforePush"
          :open-names="openedSubmenuArr"
          :menu-list="menuList">
          <div slot="top" class="logo-con" style="border-bottom: 1px solid rgba(0,0,0,.4)">
            <div class="fadeMenu" v-show="shrink" style="display: flex; align-items: center;justify-content: flex-start;padding-left: 16px; ;flex-direction: row;">
              <img src="../images/menu_icon.png" key="max-logo" style="height: 20px" />
              <span style="font-size: 18px;padding-left: 5px; display: inline-flex;" >话务系统</span>
            </div>
            <img v-show="!shrink" style="height: 20px" src="../images/menu_icon_1.png" key="min-logo" />
          </div>
        </shrinkable-menu>
      </div>
        <div class="tags-con">
            <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
      </div>
      <div class="single-page-con" :style="{left: !shrink?'60px':'200px'}">
        <div class="single-page">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
  import tagsPageOpened from './main-components/tags-page-opened.vue';
  import breadcrumbNav from './main-components/breadcrumb-nav.vue';
  import fullScreen from './main-components/fullscreen.vue';
  import lockScreen from './main-components/lockscreen/lockscreen.vue';
  import messageTip from './main-components/message-tip.vue';
  import themeSwitch from './main-components/theme-switch/theme-switch.vue';
  import telePhone from './callPhone/call-phone';
  import {mapGetters} from 'vuex'
  import Cookies from 'js-cookie';
  import util from '@/libs/util.js';
  export default {
    components: {
      shrinkableMenu,
      tagsPageOpened,
      breadcrumbNav,
      fullScreen,
      lockScreen,
      messageTip,
      themeSwitch,
      telePhone,
    },
    data(){
      return {
      
      }
    }
  }
  </script>