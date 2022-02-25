module.exports = {
    title: 'CoulsonZero',
    description: '文档管理中心',
    host: '127.0.0.1',
    port: 80,
    themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
        navbar: [
            { text: '主页', link: '/'},
            { text: 'Bing', link: 'https://cn.bing.com'},
            { text: '前端', 
                children: [
                    { text: 'html', link: '/frontend/html' },
                    { text: 'css', link: '/frontend/css' },
                    { text: 'javascript', link: '/frontend/javascript' },
                    { text: 'scss', link: '/frontend/scss' },
                    { text: 'react', link: '/frontend/react' },
                    { text: 'vue', link: '/frontend/vue' },
                    { text: 'echarts', link: '/frontend/echarts' }
                ]
            },
            { text: '后端', 
                children: [
                    { text: 'java', link: '/backend/java'},
                    { text: 'python', link: '/backend/python'},
                    { text: 'go', link: '/backend/go'}
                ]
            },
            { text: '运维',
                children: [
                    { text: 'linux', link: '/operations/linux'},
                    { text: 'mysql', link: 'operations/mysql'}
                ]
            }
        ],
        repo: 'https://github.com/coulsonzero/docs',
	},
}