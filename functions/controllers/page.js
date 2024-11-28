exports.welcomepage = async(req,res) => { // 내 프로필 설정을 먼저 해달라는 페이지
    res.render('welcome')
}
exports.intropage = (req,res) =>{ // 인트로 
    res.render('intro')
}
// 로그인,회원가입 페이지
exports.loginpage = (req,res) =>{
    res.render('login')
}

exports.signuppage = (req,res) =>{
    res.render('signup')
}
exports.logoutpage = (req,res) => {
    res.render('logout')
}
// 실제 작동 페이지들 (홈,매칭,결과,내프로필)
exports.homepage = async(req,res) =>{ // 홈페이지
    res.render('home')
}
exports.myprofilepage = async(req,res,next) =>{ // 내 프로필 페이지
    try{
        return res.render('myprofile')
    }catch(error){
        console.error(error)
        next(error)
    }
}
exports.matching = async(req,res,next) =>{ // 매칭 페이지
    try{
        res.render('matching')
    }catch(error){
        next(error)
    }
}

// 프로필 설정 페이지 
exports.myprofilesetting = (req,res) =>{ // 내프로필 설정 페이지
    res.render('myprofileset')
}
exports.lovematching = (req,res) =>{ // 연인 매칭 설정 페이지
    res.render('lovematching')
}
exports.friendmatching = (req,res) =>{ // 친구 매칭 설정 페이지
    res.render('friendmatching')
}
exports.groupmatching = (req,res) =>{
    res.render('groupmatching')
}
exports.lmatching_finish = (req,res) =>{
    res.render('lmatching-finish')
}
exports.fmatching_finish = (req,res) =>{
    res.render('fmatching-finish')
}
exports.gmatching_finish = (req,res) =>{
    res.render('gmatching-finish')
}
// 학생증 인증 페이지
exports.verify = (req,res) =>{ // 학생증 인증 페이지
    res.render('verify')
}

exports.viewprofilepage = (req,res) => {
    res.render('viewprofile')
}
exports.matchingInfopage = (req,res) => {
    res.render('matchingInfo')
}
exports.matchingresultL = (req,res) => {
    res.render("testmatchingresult-love")
}
exports.matchingresultF = (req,res) => {
    res.render("testmatchingresult-friend")
}
exports.matchingresultG = (req,res) => {
    res.render("testmatchingresult-group")
}

exports.groupmatchingInfo = (req,res) => {
    res.render('groupmatchingInfo')
}
