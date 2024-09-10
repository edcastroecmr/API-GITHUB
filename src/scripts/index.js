const pegarDivProfile = document.querySelector('.profile-data')
const pegarButton = document.querySelector('#btn-search')
const pegarInput = document.querySelector('#input-search')



 async function pegarAPI(userNAME){
     const response = await fetch(`https://api.github.com/users/${userNAME}`)
     return await response.json()
  }

  async function pegarRepos(userNAME){
    const response = await fetch(`https://api.github.com/users/${userNAME}/repos`)
    return await response.json()
 }


 async function usarApiName(userNAME){
    pegarAPI(userNAME).then((user)=>{
         const passarHTML = `<div class="info">
                           <img src= ${user.avatar_url} alt="Foto do Usuário">
                            <div class = "data">
                           <h1>${user.name  ?? 'nome sem cadastro 😢'}</h1>
                            <p>${user.bio ?? 'não possui bio 😢'} </p>
                             </div>
                             </div>
                             `
        

        pegarDivProfile.innerHTML = passarHTML
        usarApiRepos(userNAME)

       })
   }

pegarButton.addEventListener('click', ()=>{
     const pegarInputValue = document.querySelector("#input-search").value
     if(pegarInputValue.length === 0) return alert("Preencha o nome do usuário🙄")
        usarApiName(pegarInputValue)
 })
 
 pegarInput.addEventListener('keyup', (e)=>{
    const pegarInputValue = e.target.value
    const keyEnter = e.which || e.keycode
    const isKeyPressed = keyEnter === 13
    // const pegarInputValue = document.querySelector("#input-search").value
    
    if(isKeyPressed){
        
        if(pegarInputValue.length === 0) return alert("Preencha o nome do usuário🙄")
        usarApiName(targetEnter)
    }
})

// =============================Repositories

async function usarApiRepos(userNAME){
    pegarRepos(userNAME).then(repos =>{
    let repositoriesItens = ""
    repos.forEach(itens => {
        repositoriesItens += `<li>
                              <a href= "${itens.html_url}" target="_blank">
                              ${itens.name}
                              </a>
                              </li>`
    }); 
    pegarDivProfile.innerHTML  += `<div class ="repositories section">
                                   <h2>Repositórios</h2>
                                   <ul>${repositoriesItens}</ul>
                                   </div>`
                          
    })
}



