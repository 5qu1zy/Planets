let overView = document.getElementById("overview")
let internalStructure = document.getElementById("internalStructure")
let surfaceGeology = document.getElementById("surfaceGeology")

let picture = document.getElementById("planetpic")
let planetname = document.getElementById("planetname")
let planetText = document.getElementById("planettext")

let structureContent
let imagesInternal
let overviewContent
let imagesPlanet
let geologyContent
let imagesGeology

var color
var pic_link
var theme

var rotation = document.getElementById("rotation")
var revolution = document.getElementById("revolution")
var radius = document.getElementById("radius")
var temp = document.getElementById("temp")

let mercury = document.getElementById("mercury")
let venus = document.getElementById("venus")
let earth = document.getElementById("earth")
let mars = document.getElementById("mars")
let jupiter = document.getElementById("jupiter")
let saturn = document.getElementById("saturn")
let uranus = document.getElementById("uranus")
let neptune = document.getElementById("neptune")
async function planetClicked(){
    var api_url = 'https://planets-api.vercel.app/api/v1/planets/' + chosenPlanet
    const response = await fetch(api_url)
    const data = await response.json()
    
    overView.style.backgroundColor ='rgb(13, 17, 34)'
    surfaceGeology.style.backgroundColor = 'rgb(13, 17, 34)'
    internalStructure.style.backgroundColor = 'rgb(13, 17, 34)'

    overView.style.backgroundColor = color

    overviewContent = data.overview.content
    imagesPlanet = data.images.planet

    structureContent = data.structure.content
    imagesInternal = data.images.internal

    geologyContent = data.geology.content
    imagesGeology = data.images.geology

    overView.style.backgroundColor = color

    planetname.innerText = data.name
    planetText.innerText= data.overview.content
    rotation.innerText = data.rotation
    radius.innerText = data.radius
    revolution.innerText = data.revolution
    temp.innerText = data.temperature
    pic_link = "https://raw.githubusercontent.com/gvinianidzegivi/planets-api/main/assets/images/planet-" + data.name.toLowerCase() +".svg"
    picture.src = pic_link
}
chosenPlanet = mercury.innerHTML
color = "#419EBB";
planetClicked()

mercury.addEventListener("click", () => {
    chosenPlanet = mercury.innerHTML
    color = "#419EBB";
    planetClicked()

})
venus.addEventListener("click", () => {
    chosenPlanet = venus.innerHTML
    color = "#F7CC7F"
    planetClicked()
})
earth.addEventListener("click", () => {
    chosenPlanet = earth.innerHTML
    color = "#545BFE"
    planetClicked()
})
jupiter.addEventListener("click", () => {
    chosenPlanet = jupiter.innerHTML
    color = "#ECAD7A"
    planetClicked()
})
saturn.addEventListener("click", () => {
    chosenPlanet = saturn.innerHTML
    color = "#FCCB6B"
    planetClicked()
})
uranus.addEventListener("click", () => {
    chosenPlanet = uranus.innerHTML
    color = "#65F0D5"
    planetClicked()
})
neptune.addEventListener("click", () => {
    chosenPlanet = neptune.innerHTML
    color = "#497EFA"
    planetClicked()
})
mars.addEventListener("click", () => {
    chosenPlanet = mars.innerHTML
    color = "#FF6A45"
    planetClicked()
})

async function viewclicked(){
    planetText.innerText = overviewContent
    picture.src = imagesPlanet

}

overView.addEventListener("click",() =>{
    internalStructure.style.backgroundColor = 'rgb(13, 17, 34)'
    surfaceGeology.style.backgroundColor = 'rgb(13, 17, 34)'
    overView.style.backgroundColor = color
    viewclicked()
} )
internalStructure.addEventListener("click", () =>{
    overView.style.backgroundColor ='rgb(13, 17, 34)'
    surfaceGeology.style.backgroundColor = 'rgb(13, 17, 34)'
    internalStructure.style.backgroundColor = color

    planetText.innerText = structureContent
    picture.src = imagesInternal
    
})
surfaceGeology.addEventListener("click", () =>{
    overView.style.backgroundColor = 'rgb(13, 17, 34)'
    internalStructure.style.backgroundColor = 'rgb(13, 17, 34)'
    surfaceGeology.style.backgroundColor = color

    planetText.innerText = geologyContent
    imagesGeology = data.images.geology
})








 









