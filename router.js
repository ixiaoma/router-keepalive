import Main from '@/views/Main.vue';

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [{
                path: '/organization',
                title: '组织架构',
                name: 'organization',
                component: () =>
                    import ('@/views/access/organization/index.vue')
            },
            {
                path: '/role',
                title: '角色管理',
                name: 'role',
                component: () =>
                    import ('@/views/access/role/index.vue')
            },
            { path: '/systemMenus', title: '系统菜单', name: 'systemMenus', component: resolve => { require(['@/views/access/system-menus/index.vue'], resolve); } }
        ]
    },
    {
        path: '/my-plans',
        icon: 'earth',
        title: '我的待办管理',
        name: 'my-plans',
        component: Main,
        children: [{
            path: 'my-plan',
            title: '我的待办',
            name: 'my-plan',
            component: () =>
                import ('@/views/my-plan/index.vue'),
            meta:{
                keepAlive:true//路由添加属性控制动态路由
            }
        }]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    ...appRouter,
];