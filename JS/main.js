fetch(`https://us.api.blizzard.com/data/wow/token/index?namespace=dynamic-us&locale=en_US&access_token=USVK27cOuge3SyzzzFuIsHEEioQd3MvjCX
`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h4').innerText = data.price
        document.querySelector('h5').innerText = data.last_updated_timestamp
        document.querySelector('p').innerText = data._links.self.href
    })