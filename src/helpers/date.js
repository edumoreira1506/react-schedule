const brazilianDate = (americanDate) => {
  const brazilianDate = new Date(americanDate).toLocaleDateString('pt-BR', {timeSone: 'UTC'})
  return brazilianDate
}

export { brazilianDate }
