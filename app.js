var express = require('express')
var port = process.env.PORT || 3000
var app = express()
var path = require('path')
var serveStatic = require('serve-static')

app.set('views','./views/pages/')
app.set('view engine','pug')
app.use(serveStatic(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('started on port '+port)

//index page
app.get('/',function(req,res){
    res.render('index',{
        title:'movie 首页',
        movies:[{
        title:'机械战警',
        _id:1,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警',
        _id:2,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警',
        _id:3,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警',
        _id:4,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警',
        _id:5,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        },{
        title:'机械战警',
        _id:6,
        poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }]
    })
})
//detail page
app.get('/movie/:id',function(req,res){
    res.render('detail',{
        title:'电影详情页',
        movie:{
          doctor:'何塞·帕迪利亚',
          country:'美国',
          title:'机械战警',
          year:2014,
          poster:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1229375904.jpg',
          language:'英语',
          flash:'http://player.video.qiyi.com/94960e0e42a9ef684c36c954e777ef94/0/0/w_19rra11wx9.swf-albumId=576238209-tvId=576238209-isPurchase=0-cnId=0',
          summary:'《新机械战警》是由何塞·帕迪里亚执导，乔尔·金纳曼、塞缪尔·杰克逊、加里·奥德曼等主演的一部科幻电影，改编自1987年保罗·范霍文执导的同名电影。影片于2014年2月12日在美国上映，2014年2月28日在中国大陆上映。影片的故事背景与原版基本相同，故事发生在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。'
        }
    })
})
//admin page
app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title:'电影后台录入页',
        movie:{
            title:'',
            doctor:'',
            country:'',
            year:'',
            poster:'',
            flash:'',
            summary:'',
            language:''
        }
    })
})
//list page
app.get('/admin/list',function(req,res){
    res.render('list',{
        title:'电影列表页',
        movies:[{
        title:'机械战警',
        _id:1,
        doctor:'何塞·帕迪利亚',
        country:'美国',
        year:2014,
        language:'英语',
        flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
        }]
    })
})
