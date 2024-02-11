
let player1;

let player2;

const avatares = document.getElementsByClassName("magician")
const versus = document.getElementById("vs")
const selection = document.getElementById("sel")

const arrayAvatares = Array.from(avatares)

// const playerSel = document.createElement("div")



arrayAvatares.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if (!player1) {
                player1 = magos[e.target.id]
                elemento.classList.add("magicianSelected")
                playerSel = elemento.cloneNode(true)
                versus.append(playerSel)
            } else {
                player2 = magos[e.target.id]
                elemento.classList.add("magicianSelected")
                playerSel = elemento.cloneNode(true)
                versus.append(playerSel)


                //En este punto ya tenemos a los dos players....
                console.log(player1, player2)
            }
            player2
                ? (selection.classList.toggle("visible"),
                   versus.classList.toggle("visible"))           
                : null
        })
    }
)
