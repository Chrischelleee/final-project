var gilmoreGirls = {
    title: "Gilmore Girls",
    pictureLink: "gilmoreGirls.jpg",
    quote: "Oy with the poodle's already."
}

var greysAnatomy = {
    title: "Grey's Anatomy",
    pictureLink: "greysAnatomy.jpg",
    quote: "Don't let what he wants eclipse what you need. He's very dreamy, but he is not the sun, you are."
}

var theOriginals = {
    title: "The Originals",
    pictureLink: "theoriginals.jpg",
    quote: "Always and forever. Family above all."
}

var criminalMinds ={
    title: "Criminal Minds",
}

var show
var ent = document.createElement("a-entity")
ent.setAttribute("id", "entity")
var assets = document.createElement("a-assets")
assets.setAttribute("id", "assets")

console.log(document.getElementById("circle2"))

function displayQuestion(id) {
    if (id == "circle1") {
        show = theOriginals
        document.getElementById("scene").appendChild(ent)
        document.getElementById("scene").appendChild(assets)

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


        //create image1
        //set attributes
        //append to assets
        var img = document.createElement("img")
        img.setAttribute("src", show.pictureLink)
        img.setAttribute("id", "theoriginals")
        document.getElementById("assets").appendChild(img)

        //create image2
        //set attributes
        //append to assets
        var img2 = document.createElement("img")
        img2.setAttribute("id", "gilmoreGirls")
        assets.appendChild(img2)

        //create image3
        //set attributes
        //append to assets
        var img3 = document.createElement("img")
        img3.setAttribute("id", "greysAnatomy")
        assets.appendChild(img3)

        //create imagePlane
        //set attributes
        //append to entity 
        var imagePlane = document.createElement("a-plane")
        imagePlane.setAttribute("id", "imagePlane")
        imagePlane.setAttribute("src", "#theoriginals")
        imagePlane.setAttribute("width", "5")
        imagePlane.setAttribute("height", "3")
        imagePlane.setAttribute("position", "0 3 -4.8")
        imagePlane.setAttribute("id", "imagePlane")
        document.getElementById("entity").appendChild(imagePlane)

        //create title question
        //set attributes
        //append to entity 
        var title = document.createElement("a-text")
        title.setAttribute("id", "title")
        title.setAttribute("value", "What is this show?")
        title.setAttribute("position", "-1 5 -5")
        title.setAttribute("color", "black")
        title.setAttribute("font-weight", "bold")
        document.getElementById("entity").appendChild(title)

        var quote = document.createElement("a-text")

        //create box1
        //set attributes
        //append to entity
        var b1 = document.createElement("a-box")
        b1.setAttribute("width", "4")
        b1.setAttribute("height", ".5")
        b1.setAttribute("depth", "1")
        b1.setAttribute("color", "pink")
        b1.setAttribute("position", "-2.2 1 -5")
        b1.setAttribute("id", "b1")
        document.getElementById("entity").appendChild(b1)

        //create text for box1
        //set attributes
        //append 
        var b1text = document.createElement("a-text")
        b1text.setAttribute("id", "b1text")
        b1text.setAttribute("value", "The Vampire Diaries")
        b1text.setAttribute("position", "-2.4 1.2 -3")
        b1text.setAttribute("color", "black")
        ent.appendChild(b1text)

        //create box 2
        //set attributes
        //append to entity
        var b2 = document.createElement("a-box")
        b2.setAttribute("width", "4")
        b2.setAttribute("height", ".5")
        b2.setAttribute("depth", "1")
        b2.setAttribute("color", "pink")
        b2.setAttribute("position", "-2.2 -0.1 -5")
        b2.setAttribute("id", "b2")
        ent.appendChild(b2)

        //create text for box2
        //set attributes
        var b2text = document.createElement("a-text")
        b2text.setAttribute("id", "b2text")
        b2text.setAttribute("value", "The Originals")
        b2text.setAttribute("position", "-2.2 0.5 -3")
        b2text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b2text)
        b2.setAttribute("id", "correct")
        b2.setAttribute("onclick", "isCorrect('correct')")

        //create box 3
        //set attributes
        //append to entity 
        var b3 = document.createElement("a-box")
        b3.setAttribute("width", "4")
        b3.setAttribute("height", ".5")
        b3.setAttribute("depth", "1")
        b3.setAttribute("color", "pink")
        b3.setAttribute("position", "2.2 1 -5")
        b3.setAttribute("id", "b3")
        ent.appendChild(b3)

        //create text for box3
        //set attributes
        var b3text = document.createElement("a-text")
        b3text.setAttribute("id", "b3text")
        b3text.setAttribute("value", "Being Human")
        b3text.setAttribute("position", "0.7 1.2 -3")
        b3text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b3text)

        //create box 4
        //set attributes
        //append to entiy
        var b4 = document.createElement("a-box")
        b4.setAttribute("width", "4")
        b4.setAttribute("height", ".5")
        b4.setAttribute("depth", "1")
        b4.setAttribute("color", "pink")
        b4.setAttribute("position", "2.2 -.1 -5")
        b4.setAttribute("id", "b4")
        ent.appendChild(b4)

        //create text for box4
        //set attributes
        var b4text = document.createElement("a-text")
        b4text.setAttribute("id", "b4text")
        b4text.setAttribute("value", "Twilight")
        b4text.setAttribute("position", "1 0.5 -3")
        b4text.setAttribute("color", "black")
        document.getElementById("entity").appendChild(b4text)

        //get circle element
        //make circle disappear and entity appear
        var circle = document.getElementById("circle1")
        circle.setAttribute("visible", "false")
        ent.setAttribute("visible", "true")
    }

    else if (id == "circle2") {
        show = gilmoreGirls
        ent.setAttribute("position", "2.5 0 -1")
        ent.setAttribute("rotation", "360 -30 0")
        ent.setAttribute("visible", "true")

        //get circle2 element
        //make circle2 invisible
        var circle2 = document.getElementById("circle2")
        circle2.setAttribute("visible", "false")

        var plane = document.getElementById("plane")

        var img2 = document.getElementById("gilmoreGirls")
        img2.setAttribute("src", show.pictureLink)
        var imagePlane = document.getElementById("imagePlane")
        var title = document.getElementById("title")

        var b1 = document.getElementById("b1")
        var b1text = document.getElementById("b1text")
        var b2 = document.getElementById("correct")
        var b2text = document.getElementById("b2text")
        var b3 = document.getElementById("b3")
        var b3text = document.getElementById("b3text")
        var b4 = document.getElementById("b4")
        var b4text = document.getElementById("b4text")
        var circle2 = document.getElementById("circle2")
        ent.setAttribute("visible", "true")


        imagePlane.setAttribute("src", "#gilmoreGirls")
        console.log(imagePlane)
        imagePlane.setAttribute("width", "5")
        imagePlane.setAttribute("height", "3")
        imagePlane.setAttribute("position", "0 3 -4.8")

        b1text.setAttribute("value", "Gossip Girl")

        b2text.setAttribute("value", "Parenthood")
        b3text.setAttribute("value", "Gilmore Girls")
        b3.setAttribute("id", "correct2")
        b3.setAttribute("onclick", "isCorrect('correct2')")
        b4text.setAttribute("value", "Hart of Dixie")
    }

    else if (id == "circle3") {
        show = greysAnatomy
        console.log(show)
        ent.setAttribute("position", "2 2 -5")
        ent.setAttribute("rotation", "375 0 0")
        ent.setAttribute("visible", "true")
        var circle3 = document.getElementById("circle3")
        circle3.setAttribute("visible", "false")

        var plane = document.getElementById("plane")

        var img3 = document.getElementById("greysAnatomy")
        img3.setAttribute("src", show.pictureLink)
        var imagePlane = document.getElementById("imagePlane")
        var title = document.getElementById("title")

        var b1 = document.getElementById("b1")
        var b1text = document.getElementById("b1text")
        var b2 = document.getElementById("correct2")

        var b2text = document.getElementById("b2text")
        var b3 = document.getElementById("b3")
        var b3text = document.getElementById("b3text")
        var b4 = document.getElementById("b4")
        var b4text = document.getElementById("b4text")
        var circle3 = document.getElementById("circle3")
        ent.setAttribute("visible", "true")


        imagePlane.setAttribute("src", "#greysAnatomy")
        console.log(imagePlane)
        imagePlane.setAttribute("width", "5")
        imagePlane.setAttribute("height", "3")
        imagePlane.setAttribute("position", "0 3 -4.8")

        b1text.setAttribute("value", "Grey's Anatomy")
        b1.setAttribute("id", "correct3")
        b1.setAttribute("onclick", "isCorrect('correct3')")
        b2text.setAttribute("value", "Scrubs")
        b3text.setAttribute("value", "Nurse Jackie")
        b4text.setAttribute("value", "Call the Midwife")
        circle3.setAttribute("value", "false")
    }
}

function isCorrect(idval) {
    if (idval == "correct") {
        console.log("ball 1")
        ent.setAttribute("visible", "false")
        document.getElementById("circle2").setAttribute("visible", "true")
    }
    else if (idval == "correct2") {
        console.log("ball2")
        console.log(document.getElementById("circle2"))
        ent.setAttribute("visible", "false")
        document.getElementById("circle3").setAttribute("visible", "true")
    }
    else if (idval == "correct3") {
        console.log(document.getElementById("circle3"))
        ent.setAttribute("visible", "false")
        var winningText = document.createElement("a-text")
        winningText.setAttribute("value", "Congrats! You solved the problems. Click the blue sphere to escape the room!")
        winningText.setAttribute("color", "red")
        winningText.setAttribute("position", "-3 5 -5")
        document.getElementById("scene").appendChild(winningText)
        var circle4 = document.getElementById("circle4")
        circle4.setAttribute("visible", "true")
        circle4.setAttribute("onclick", "youWon('circle4')")
    }
}

function youWon(id) {
    if (id == "circle4") {
        document.getElementById("sky").setAttribute("src", "#outside")
    }
}