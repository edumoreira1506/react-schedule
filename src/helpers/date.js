const brazilianDate = (americanDate) => {
    let arrayDate = americanDate.split('-')
    let brazilianDate = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
    return brazilianDate
}

export {
    brazilianDate
}