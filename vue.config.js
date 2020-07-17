const path = require('path');
module.exports={
    configureWebpack:{
        //webpack内置的js模块化语法解析功能 默认采用模块化标准里约定好的规则  配置寻找模块对应的文件使用的规则
        resolve:{
            //别名：将导入的路径隐射成新的路径 
            alias:{
                'src':path.join(__dirname,'src'),
                'vue$':'vue/dist/vue.esm.js'
            },
            // 导入语句没有带文件后缀，自动带上后缀去访问文件是否存在
            extensions:['.js','.vue']
        },
        devServer:{
            open:true,
            proxy:{
                '/*':{
                    target:'http://localhost:3000'
                }
            }
        }
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    }
}