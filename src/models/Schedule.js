const validate = (fields) => {
  for(let i in fields){
    if(!fields[i]){
      return {
        ok: false,
        field: i
      }
    }
  }

  return {
    ok: true
  }
}

export { validate }