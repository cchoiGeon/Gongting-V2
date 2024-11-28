exports.adminpage = (req,res) => {
    const uid = req.params.uid
    if(uid === process.env.ADMINUID){
        res.render('admin')
    }
    return res.redirect("/error")
}

exports.checkpage = (req,res) => {
    const uid = req.params.uid
    return res.render('checkadmin',{'uid':uid})
}
exports.matchingpage = (req,res) => {
    res.render("adminmatching")
}

exports.genderpage = (req,res) => {
    res.render("admingender")
}
exports.page1 = (req,res) => {
    res.render("admin1")
}
exports.page2 = (req,res) => {
    res.render("admin2")
}
exports.matchingpagef =(req,res) => {
    res.render("adminmatchingf")
}
exports.matchingpageg =(req,res) => {
    res.render("adminmatchingg")
}