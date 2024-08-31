const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsesUrl = new url.URL(address)


console.log(parsesUrl.host)
console.log(parsesUrl.pathname)
console.log(parsesUrl.search)
console.log(parsesUrl.searchParams)
console.log(parsesUrl.searchParams.get('produtos'))