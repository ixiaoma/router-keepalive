<template>
    <div id="main" class="app-main">
         <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
            <--include{页面的class名称，v-if相当于两套路由在切换}
            <keep-alive :include="cachePage">
              <router-view></router-view>
            </keep-alive>
            -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            };
        }
    };
</script>


