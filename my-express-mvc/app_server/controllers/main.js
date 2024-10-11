//Controller index
const index = (req, res) => {
    res.render("index", {title: "Express MVC"});
}
//Controller Kontak
const kontak = (req, res) => {
    res.render("kontak", {title:"Ini Halaman Kontak"});
}

const profil = (req, res) => {
    res.render("profil", {title:"Ini Halaman Profil Guyyssssss...... Okeee"});
}
module.exports = { index, kontak, profil };
