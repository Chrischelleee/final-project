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
//console.log(gilmoreGirls.title)
function idname(object){
   return (object.title).replace(/\s/g, '')
}
console.log(idname(theOriginals))

var show
var ent = document.createElement("a-entity")

function displayQuestion(id) {
    ent.setAttribute("id", "entity")
    document.getElementById("scene").appendChild(ent)

    //create plane
    //set attributes
    //append to entity
    var plane = document.createElement("a-plane")
    plane.setAttribute("color", "lightblue")
    plane.setAttribute("width", "10")
    plane.setAttribute("height", "7")
    plane.setAttribute("position", "0 2 -5")
    plane.setAttribute("id", "plane")
    document.getElementById("entity").appendChild(plane)

    //create image
    //append to assets
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


    if (id == "circle1") {
        var circle = document.getElementById("circle1")
        circle.setAttribute("visible", "false")
        ent.setAttribute("visible","true")
        show = theOriginals
        title.setAttribute("value", "What is this show?")
        title.setAttribute("position", "-1 5 -5")
        title.setAttribute("color", "black")
        title.setAttribute("font-weight", "bold")
        document.getElementById("entity").appendChild(title)

        img.setAttribute("src", show.pictureLink)
        img.setAttribute("id", idname(show))
        document.getElementById("assets").appendChild(img)

        imagePlane.setAttribute("material", "src:#" + idname(show))
        imagePlane.setAttribute("width", "5")
        imagePlane.setAttribute("height", "3")
        imagePlane.setAttribute("position", "0 3 -5")
        document.getElementById("entity").appendChild(imagePlane)
        var plane = document.createElement("a-plane")

        b1text.setAttribute("value", "The Vampire Diaries")
        b1text.setAttribute("position", "-2.4 1.2 -3")
        b1text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b1text)

        b2text.setAttribute("value", show.title)
        b2text.setAttribute("position", "-2.2 0.5 -3")
        b2text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b2text)
        b2.setAttribute("id", "correct")
        b2.setAttribute("onclick", "isCorrect('correct')")

        b3text.setAttribute("value", "Being Human")
        b3text.setAttribute("position", "0.7 1.2 -3")
        b3text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b3text)

        b4text.setAttribute("value", "Twilight")
        b4text.setAttribute("position", "1 0.5 -3")
        b4text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b4text)
    }
}

//     else if(id == "circle2"){
//         var circle2 = document.getElementById("circle2")
//         circle2.setAttribute("visible", "false")
//         show = gilmoreGirls
//         title.setAttribute("value", "What is this show?")
//         title.setAttribute("position", "-1 5 -5")
//         title.setAttribute("color", "black")
//         title.setAttribute("font-weight", "bold")
//         document.getElementById("entity").appendChild(title)

//         img.setAttribute("src", show.pictureLink)
//         img.setAttribute("id", "gg")
//         document.getElementById("assets").appendChild(img)

//         imagePlane.setAttribute("material", "src:#gg")
//         imagePlane.setAttribute("width", "5")
//         imagePlane.setAttribute("height", "3")
//         imagePlane.setAttribute("position", "0 3 -5")
//         document.getElementById("entity").appendChild(imagePlane)
//         var plane = document.createElement("a-plane")

//         b1text.setAttribute("value", "The Vampire Diaries")
//         b1text.setAttribute("position", "-2.4 1.2 -3")
//         b1text.setAttribute("color", "black")
//         document.getElementById("entity").appendChild(b1text)

//         b2text.setAttribute("value", "The Originals")
//         b2text.setAttribute("position", "-2.2 0.5 -3")
//         b2text.setAttribute("color", "black")
//         document.getElementById("entity").appendChild(b2text)
//         b2.setAttribute("id", "correct")
//         b2.setAttribute("onclick", "isCorrect('correct')")

//         b3text.setAttribute("value", "Being Human")
//         b3text.setAttribute("position", "0.7 1.2 -3")
//         b3text.setAttribute("color", "black")
//         document.getElementById("entity").appendChild(b3text)

//         b4text.setAttribute("value", "Twilight")
//         b4text.setAttribute("position", "1 0.5 -3")
//         b4text.setAttribute("color", "black")
//         document.getElementById("entity").appendChild(b4text)
//     }


// }

function isCorrect(id) {
    if (id == "correct") {
        ent.setAttribute("visible", "false")
        document.getElementById("circle2").setAttribute("visible", "true")
    }

}
