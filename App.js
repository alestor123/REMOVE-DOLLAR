module.exports = value =>{ 
    if(value.trim().startsWith('$')) return value.slice(1)
    else throw Error('$ Not Found')
}