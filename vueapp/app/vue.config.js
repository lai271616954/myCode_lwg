module.exports={
    devServer:{
        overlay:{
            warnings:false,
            errors:false
        },
        proxy:{
            '/page':{
                target:'https://m.wowdsgn.com/v2',
                changeOrigin:true
            }
        }
    },
    lintOnSave: false
}