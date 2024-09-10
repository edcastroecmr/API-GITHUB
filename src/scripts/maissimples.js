const pegarDivProfile = document.querySelector('.profile-data')
const pegarButton = document.querySelector('#btn-search')
const pegarInput = document.querySelector('#input-search')



 async function pegarAPI(pegarInputValue){
    const url = await fetch(`https://api.github.com/users/${pegarInputValue}`)
     const response = await url.json()
    const passarHTML = `
                           <img src= ${response.avatar_url} alt="Foto do Usuário">
                          <div>
                           <h1>${response.name  ?? 'nome sem cadastro 😢'}<h1>
                           <p>${response.bio ?? 'não possui bio 😢'} <p>
                           <div>
                            `
    pegarDivProfile.innerHTML = passarHTML

 }

 pegarButton.addEventListener('click', ()=>{
     const pegarInputValue = document.querySelector("#input-search").value
     pegarAPI(pegarInputValue)
 })


 // ==========com await
 async function usarApiName(userNAME){
    const pegarAPIVar = await pegarAPI(userNAME)
    const passarHTML = `<div class="info">
                            <img src= ${pegarAPIVar.avatar_url} alt="Foto do Usuário">
                           <div class = "data">
                           <h1>${pegarAPIVar.name  ?? 'nome sem cadastro 😢'}</h1>
                             <p>${pegarAPIVar.bio ?? 'não possui bio 😢'} </p>
                             </div>
                             </div>
                             `
                        pegarDivProfile.innerHTML = passarHTML
                        usarApiRepos(userNAME)

    
}
