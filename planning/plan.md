takes in object and you want to return id tit
var listofshows = ["Criminal Minds",
"How To Get Away With Murder",
"Stranger Things",
"Orange Is The New Black",
"Fuller House",
"13 Reasons Why",
"The Office",
"Breaking Bad",
"Malcolm In The Middle",
"Scandal",
"Pretty Little Liars",
"Vampire Diaries",
"The Originals",
"Riverdale",
"Glee",
"Shameless",
"Law & Order",
"The Flash",
"The Originals",
"Hannah Montana",
"Grey's Anatomy"]
var gilmoreGirls = {
    title: "Gilmore Girls",
    pictureLink: "http://img.cinemablend.com/cb/0/6/f/5/6/b/06f56b2f6c6b033298d4a77f60a484c62146d5e1ddede6ad43699163d8234023.jpg",
    quote: "Oy with the poodle's already."
}

var greysAnatomy = {
    title: "Grey's Anatomy",
    pictureLink: "greysanatomy.jpg",
    quote: "Don't let what he wants eclipse what you need. He's very dreamy, but he is not the sun, you are."

}
var theOriginals = {
    title: "The Originals",
    pictureLink: "theoriginals.jpg",
    quote: "Always and forever. Family above all."
}
var show=theOriginals
//remove correct show title from Array
//create random 3 
//push correct into options
Array.prototype.getRandom= function(num, cut){
    var A= cut? this:this.slice(0);
    A.sort(function(){
        return .5-Math.random();
    });
    return A.splice(0, num);
}
listofshows.getRandom(3)
function isShow(obj) {
  return (obj != show.title)
}
var noShow = listofshows.filter(isShow)
var options=noShow.getRandom(3)
console.log(options)
var ans=[show.title]
console.log(ans)
var choices=options.push(show.title)
console.log(options)