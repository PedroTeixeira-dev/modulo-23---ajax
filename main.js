document.addEventListener("DOMContentLoaded", function(){
    const profileAvatar = document.querySelector('#profile-avatar')
    const profileName = document.querySelector('#profile-name')
    const profileUserName = document.querySelector('#profile-username')
    const repositorys = document.querySelector('#repositorys')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')
    const profileLink = document.querySelector('.profile-link')
    const urlAPI = 'https://api.github.com/users/PedroTeixeira-dev'

    fetch(urlAPI)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        profileAvatar.src = json.avatar_url
        profileName.innerText = json.name 
        profileUserName.innerText = json.login
        repositorys.innerHTML = json.public_repos
        followers.innerHTML = json.followers
        following.innerHTML = json.following
        profileLink.href = json.html_url
    })
    .catch(function(erro){
        alert("ocorreu um erro, tente novamente , mais tarde.")
    })
})