var gilmoreGirls = {
    title: "Gilmore Girls",
    pictureLink: "gilmoregirls.jpg",
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
var netflixshows = [gilmoreGirls,greysAnatomy,theOriginals]
console.log(netflixshows)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }return array;
}
arr=shuffle(netflixshows)
console.log(arr)
function idnam(object){
   return (object.title).replace(/\s/g, '')
}
function idname(object){
  return (idnam(object)).toLowerCase()
}
console.log(idname(theOriginals))
var show=arr[1]
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

function createQuestion(){
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
var option=noShow.getRandom(3)
var ans=[show.title]
var choices=option.push(show.title)
var options=shuffle(option)
return options
}


// onclick is correct if show title is equal to options
//return string correct if true and incorrect if false
function answer(choices){
    if (choices == show.title){
      return "correct"
    }
    else if (choices != show.title) {
      return "incorrect"
    }
}

var ent = document.createElement("a-entity")
var assets = document.createElement("a-assets")

function displayQuestion(id) {
    var particularOptions = createQuestion()
    console.log(particularOptions)
    ent.setAttribute("id", "entity")
    document.getElementById("scene").appendChild(ent)
    assets.setAttribute("id","assets")
    document.getElementById("scene").appendChild(assets)

    var plane = document.createElement("a-plane")
    plane.setAttribute("color", "lightblue")
    plane.setAttribute("width", "10")
    plane.setAttribute("height", "7")
    plane.setAttribute("position", "0 2 -5")
    plane.setAttribute("id", "plane")
    document.getElementById("entity").appendChild(plane)

    var img = document.createElement("img")
    var imagePlane = document.createElement("a-plane")
    var title = document.createElement("a-text")
    var quote = document.createElement("a-text")

    var b1 = document.createElement("a-box")
    b1.setAttribute("width", "4")
    b1.setAttribute("height", ".5")
    b1.setAttribute("depth", "1")
    b1.setAttribute("color", "pink")
    b1.setAttribute("position", "-2.2 1 -5")
    b1.setAttribute("id", "b1")
    document.getElementById("entity").appendChild(b1)
    var b1text = document.createElement("a-text")

    var b2 = document.createElement("a-box")
    b2.setAttribute("width", "4")
    b2.setAttribute("height", ".5")
    b2.setAttribute("depth", "1")
    b2.setAttribute("color", "pink")
    b2.setAttribute("position", "-2.2 -0.1 -5")
    b2.setAttribute("id", "b2")
    document.getElementById("entity").appendChild(b2)
    var b2text = document.createElement("a-text")


    var b3 = document.createElement("a-box")
    b3.setAttribute("width", "4")
    b3.setAttribute("height", ".5")
    b3.setAttribute("depth", "1")
    b3.setAttribute("color", "pink")
    b3.setAttribute("position", "2.2 1 -5")
    b3.setAttribute("id", "b3")
    document.getElementById("entity").appendChild(b3)
    var b3text = document.createElement("a-text")


    var b4 = document.createElement("a-box")
    b4.setAttribute("width", "4")
    b4.setAttribute("height", ".5")
    b4.setAttribute("depth", "1")
    b4.setAttribute("color", "pink")
    b4.setAttribute("position", "2.2 -.1 -5")
    b4.setAttribute("id", "b4")
    document.getElementById("entity").appendChild(b4)
    var b4text = document.createElement("a-text")

        ent.setAttribute("visible","true")
        title.setAttribute("value", "What is this show?")
        title.setAttribute("position", "-1 5 -5")
        title.setAttribute("color", "black")
        title.setAttribute("font-weight", "bold")
        document.getElementById("entity").appendChild(title)

        img.setAttribute("src", show.pictureLink)
        img.setAttribute("id", idname(show))
        document.getElementById("assets").appendChild(img)

        imagePlane.setAttribute("src", "#" + idname(show))
        imagePlane.setAttribute("width", "5")
        imagePlane.setAttribute("height", "3")
        imagePlane.setAttribute("position", "0 3 -5")
        document.getElementById("entity").appendChild(imagePlane)


        b1text.setAttribute("value", particularOptions[0])
        b1text.setAttribute("position", "-2.4 1.2 -3")
        b1text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b1text)
        b1.setAttribute("id", answer(particularOptions[0]))
        var a = answer(particularOptions[0])
        b1.setAttribute("onclick", `isCorrect(${a})`)

        b2text.setAttribute("value", particularOptions[1])
        b2text.setAttribute("position", "-2.2 0.5 -3")
        b2text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b2text)
        b2.setAttribute("id", answer(particularOptions[1]))
        var b = b2.getAttribute("id")
        b2.setAttribute("onclick", `isCorrect(${b}`)

        b3text.setAttribute("value", particularOptions[2])
        b3text.setAttribute("position", "0.7 1.2 -3")
        b3text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b3text)
        b3.setAttribute("id", answer(particularOptions[2]))
        b3.setAttribute("onclick", `isCorrect(${b3.getAttribute('id')})`)

        b4text.setAttribute("value", particularOptions[3])
        b4text.setAttribute("position", "1 0.5 -3")
        b4text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b4text)
        b4.setAttribute("id", answer(particularOptions[3]))
        console.log(b4.id)
        var c = answer(particularOptions[3])
        b4.setAttribute("onclick", `isCorrect(${c})`)
}
//circle id visisble should turn false if correct
//
function isCorrect(idval) {
    console.log(idval)
    if (idval == "correct") {
        ent.setAttribute("visible", "false")
        circle1.setAttribute("visible","false")
        document.getElementById("circle2").setAttribute("visible","true")
    }
    }
//     else if (idval == "correct") {
//         console.log(document.getElementById("circle2"))
//         ent.setAttribute("visible", "false")
//         document.getElementById("circle3").setAttribute("visible", "true")
//     }
//     else if (idval == "correct3") {
//         console.log(document.getElementById("circle3"))
//         ent.setAttribute("visible", "false")
//     }
// }

//find way to get previous circle to disappear and make new one appear
//so it reruns each time
//when answer is incorrect drop 3D barricade door with animation
//get nicer 3D shapes