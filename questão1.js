function formatDate (userDate) {
  const dia = userDate.split('/')[1]
  const mes = userDate.split('/')[0]
  const ano = userDate.split('/')[2]

  return ano + '/' + ('0' + mes).slice(-2) + '/' + ('0' + dia).slice(-2)
}

console.log(formatDate('12/31/2014'))
