const grelhas = document.querySelectorAll(".grelha-item")
let carnes = [false, false, false, false, false, false]


for (let i = 0; i < grelhas.length; i++) {

    grelhas[i].addEventListener("click", () => {
        if (!carnes[i]) {
            let img = document.createElement("img")
            img.src = "imgs/carne.png"

            grelhas[i].appendChild(img)
            carnes[i] = true
            setTimeout(()=>{
                carneA(img)
            },10000)
        }
    })
    grelhas[i].oncontextmenu = (e) => {
        e.preventDefault()
        if(grelhas[i].querySelector("img")){
            grelhas[i].querySelector("img").remove()
            carnes[i] = false
        }
       
    }
}

function carneA(carne){
    carne.src = "http://conteudo.imguol.com.br/c/entretenimento/da/2018/03/23/carne-grelhada-churrasco-1521829328590_v2_1254x836.jpg"
}