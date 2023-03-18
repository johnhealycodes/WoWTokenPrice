//This is US client

fetch(`https://us.api.blizzard.com/data/wow/token/index?namespace=dynamic-us&locale=en_US&access_token=USVK27cOuge3SyzzzFuIsHEEioQd3MvjCX
`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // let token = data.price / 10000
        document.querySelector('.US').innerText = data.price / 10000
        document.querySelector('.usAPILink').innerText = data._links.self.href
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })


//This is EU Client

fetch(`https://eu.api.blizzard.com/data/wow/token/index?namespace=dynamic-eu&locale=eu_US&access_token=USVK27cOuge3SyzzzFuIsHEEioQd3MvjCX`)
.then(res => res.json())
.then(data => {
    console.log(data)
    let token = data.price / 10000
    document.querySelector('.EU').innerText = data.price / 10000
    document.querySelector('.euAPILink').innerText = data._links.self.href
})
.catch(err => {
    console.log(`Error ${err}`)
})
