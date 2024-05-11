const base = {
    get() {
        return {
            url : "http://localhost:8080/shitangxiaoyuanyuyuejiucan/",
            name: "shitangxiaoyuanyuyuejiucan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shitangxiaoyuanyuyuejiucan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "食堂校园预约就餐小程序"
        } 
    }
}
export default base
