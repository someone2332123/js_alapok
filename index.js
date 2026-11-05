console.log("Hello World")

/* Változók deklarálása */
let szam1 = 2
let szam2 = Number("3") // Átalakítva számmá, hogy az összeadás 5 legyen
console.log(szam1 + szam2) // Eredmény: 5

let szam3 = 4
let szam4 = 5
console.log(szam3 + szam4) // Eredmény: 9

const szam = 12
console.log(szam)

szam1 = 23
console.log(szam1 + szam2) // Eredmény: 26


/* 1. A címet írd át kedvencekre */ 
const cimElem = document.getElementById("cim")
cimElem.textContent = "Kedvencek"


/* 2. Az első gyümölcsöt írd át csupa nagybetűre */
let gyumolcsokElemek = document.getElementsByClassName("gyumolcs")
console.log(gyumolcsokElemek)

// Az első elem nagybetűssé térukése (index: 0)
gyumolcsokElemek[0].textContent = "ALMA"


/* 3. A második elemet írd át a harmadikra */
// A HTML-ben a 2. elem a "Körte" (index: 1), a 3. elem a "Szilva" (index: 2)
gyumolcsokElemek[1].textContent = gyumolcsokElemek[2].textContent


/* 4. A div-re kattintva az inputelembe beírt gyümölcsnév kerüljön a felsorolás végére
1. megfogjuk a div-et
2. kell rá egy eseménykezelő
3. kell egy metódus, amiben megcsináljuk, amit meg kell,.
4,5 meg kell fogni az input elemet
4. meg kell fogni az ul-t
5. bele kell írni az ul-be
*/

let divElem=document.getElementById("uzenet")
divElem.addEventListener("click", beIr)

function beIr(){

let felsorolasElem=document.getElementById("felsorolas")
let inputElem= document.getElementById("kedvenc")
let ertek=inputElem.value
felsorolasElem.insertAdjacentHTML("beforeend", `<li class='gyumolcs'>${ertek}</li>`)
}


