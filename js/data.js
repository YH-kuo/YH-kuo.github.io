
$(document).ready(function() {
    var app = new Vue({
        el: '#grid',
        data: {
            list:[
                {
                    title: '一頁式服務介紹頁面',
                    type: 'web',
                    path:'web/web_01.jpg',
                    info: '依照公司企劃提供之文案，與平面設計主管討論可製作之版型，由平面設計師提供設計圖檔，我再將其製作成網頁Html檔案，確認後再將寄信功能套上(PHP)並上線公司網域空間。',
                    tag: ['HTML','CSS','Jquery','RWD'],
                    pagename: '歐立利商業空間設計',
                    link: 'path'
                },
                {
                    title: '專案名稱2',
                    type: 'web',
                    path:'web/web_02.jpg'
                },
                {
                    title: '專案名稱2',
                    type: 'web',
                    path:'web/web_03.jpg'
                },
                {
                    title: '專案名稱2',
                    type: 'graphic',
                    path:'banner/banner_11.jpg'
                },
                {
                    title: '專案名稱2',
                    type: 'graphic',
                    path:'banner/banner_06.jpg'
                }
            ]
        }
    })

});