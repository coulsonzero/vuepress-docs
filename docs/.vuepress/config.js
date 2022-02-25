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
                    { text: 'html', link: '/guide/frontend/html' },
                    { text: 'css', link: '/guide/frontend/css' },
                    { text: 'javascript', link: '/guide/frontend/javascript' },
                    { text: 'scss', link: '/guide/frontend/scss' },
                    { text: 'react', link: '/guide/frontend/react' },
                    { text: 'vue', link: '/guide/frontend/vue' },
                    { text: 'jquery', link: '/guide/frontend/jquery' },
                    { text: 'echarts', link: '/guide/frontend/echarts/QuickStart'}
                ]
            },
            { text: '后端', 
                children: [
                    { text: 'java', link: '/guide/backend/java'},
                    { text: 'python', link: '/guide/backend/python'},
                    { text: 'go', link: '/guide/backend/go'}, 
                    { text: 'swift', link: '/guide/backend/swift'}
                ]
            },
            { text: '运维',
                children: [
                    { text: 'sql', link: '/guide/operations/sql'},
                    { text: 'linux', link: '/guide/operations/linux'},
                    { text: 'shell', link: '/guide/operations/shell'},
                    { text: 'Markdown', link: '/guide/operations/markdown.md'}
                ]
            }
        ],
        repo: 'https://github.com/coulsonzero/docs',
	},
}