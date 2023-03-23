//This is US client

fetch(`https://us.api.blizzard.com/data/wow/token/index?namespace=dynamic-us&locale=en_US&access_token=USyov35v2CcBo0gBRqiOdTTctVVMrI2ps2`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.US').innerText = `${data.price / 10000} g`
        document.querySelector('.usAPILink').innerText = data._links.self.href
    })
    .catch(err => {
        console.log(`Error ${err}`)
    })


//This is EU Client

fetch(`https://eu.api.blizzard.com/data/wow/token/index?namespace=dynamic-eu&locale=en_US&access_token=USyov35v2CcBo0gBRqiOdTTctVVMrI2ps2`)
.then(res => res.json())
.then(data => {
    document.querySelector('.EU').innerText = `${data.price / 10000} g`
    document.querySelector('.euAPILink').innerText = data._links.self.href
})
.catch(err => {
    console.log(`Error ${err}`)
})
