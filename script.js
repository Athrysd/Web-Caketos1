let proker1 = document.getElementById('isiProker1')
let tutup1 = document.getElementById('close1')
let buka1 = document.getElementById('pelajari1')


let proker2 = document.getElementById('isiProker2')
let tutup2 = document.getElementById('close2')
let buka2 = document.getElementById('pelajari2')

let proker3 = document.getElementById('isiProker3')
let tutup3 = document.getElementById('close3')
let buka3 = document.getElementById('pelajari3')

let proker4 = document.getElementById('isiProker4')
let tutup4 = document.getElementById('close4')
let buka4 = document.getElementById('pelajari4')

let proker5 = document.getElementById('isiProker5')
let tutup5 = document.getElementById('close5')
let buka5 = document.getElementById('pelajari5')

buka1.addEventListener("click", function(){
  proker1.classList.add("aktif")
})
tutup1.addEventListener("click", function(){
  proker1.classList.remove("aktif")
})


buka2.addEventListener("click", function(){
  proker2.classList.add("aktif")
})
tutup2.addEventListener("click", function(){
  proker2.classList.remove("aktif")
})

buka3.addEventListener("click", function(){
  proker3.classList.add("aktif")
})
tutup3.addEventListener("click", function(){
  proker3.classList.remove("aktif")
})

buka4.addEventListener("click", function(){
  proker4.classList.add("aktif")
})
tutup4.addEventListener("click", function(){
  proker4.classList.remove("aktif")
})

buka5.addEventListener("click", function(){
  proker5.classList.add("aktif")
})
tutup5.addEventListener("click", function(){
  proker5.classList.remove("aktif")
})