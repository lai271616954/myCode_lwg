import axios from 'axios'
const module = {
    namespaced:true,// 开启命名空间
    state:{
        data:[],
        datamore:[],
        datasence:[],
        datares:[],
        databook:[],
        datasplit:[],
        datawe:[],
        datacoop:[],
        bannerrec:[],
        bannerzone:[],
        bannerhome:[],
        datazone:[],
        datahome:[]
    },
    mutations:{
        dataChange(state,data){
            state.data=data
        },
        datamoreChange(state,data){
            state.datamore=data
        },
        datasenceChange(state,data){
            state.datasence=data
        },
        dataresChange(state,data){
            state.datares=data
        },
        databookChange(state,data){
            state.databook=data
        },
        datasplitChange(state,data){
            state.datasplit=data
        },
        dataweChange(state,data){
            state.datawe=data
        },
        datacoopChange(state,data){
            state.datacoop=data
        },
        changeBannerRec(state,data){
            state.bannerrec=data
        },
        changeBannerZone(state,data){
            state.bannerzone=data
        },
        changeBannerHome(state,data){
            state.bannerhome=data
        },
        changeZone(state,data){
            state.datazone=data
        },
        changeHome(state,data){
            state.datahome=data
        }
    },
    actions:{
        getBannerRec(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1583390745471',
                method:"get"
            }).then(res=>{
                store.commit('dataChange',res.data.data)
                store.commit('changeBannerRec',res.data.data.modules[0].moduleContent.banners)
            })
        },
        getBannerRecMore(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=2&pageSize=8&_=1583513198917',
                method:"get"
            }).then(res=>{
                store.commit('datamoreChange',res.data.data)
            })
        },
        getBannerRecSence(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=3&pageSize=8&_=1583513234570',
                method:"get"
            }).then(res=>{
                store.commit('datasenceChange',res.data.data)
            })
        },
        getBannerRecRes(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=4&pageSize=8&_=1583513277583',
                method:"get"
            }).then(res=>{
                store.commit('dataresChange',res.data.data)
            })
        },
        getBannerRecBook(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=5&pageSize=8&_=1583513817824',
                method:"get"
            }).then(res=>{
                store.commit('databookChange',res.data.data)
            })
        },
        getBannerRecSplit(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=6&pageSize=8&_=1583513982590',
                method:"get"
            }).then(res=>{
                store.commit('datasplitChange',res.data.data)
            })
        },
        getBannerRecWe(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=7&pageSize=8&_=1583513983507',
                method:"get"
            }).then(res=>{
                store.commit('dataweChange',res.data.data)
            })
        },
        getBannerRecCoop(store){
            axios({
                url:'/page?pageId=1&tabId=1&currentPage=8&pageSize=8&_=1583566321973',
                method:"get"
            }).then(res=>{
                store.commit('datacoopChange',res.data.data)
            })
        },
        getBannerZone(store){
            axios({
                url:'/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1583487806187',
                method:"get"
            }).then(res=>{
                store.commit('changeBannerZone',res.data.data.modules[0].moduleContent.banners)
            })
        },
        getZone(store){
            axios({
                url:'/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1583487806187',
                method:"get"
            }).then(res=>{
                store.commit('changeZone',res.data.data)
            })
        },
        getBannerHome(store){
            axios({
                url:'/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1583487878504',
                method:"get"
            }).then(res=>{
                store.commit('changeBannerHome',res.data.data.modules[0].moduleContent.banners)
            })
        },
        getHome(store){
            axios({
                url:'/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1583600540595',
                method:"get"
            }).then(res=>{
                store.commit('changeHome',res.data.data)
            })
        },
    }
}

export default module