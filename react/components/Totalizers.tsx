import React from 'react'

const Totalizers = (totalizers: any) => {
  const {id, name, value} = totalizers
  console.log("Mis totales son igual a: ", id, name, value)
  return (
    <div>
      <p>Tenemos x items en tu compra</p>
      <p>Total: {totalizers[0]?.value} </p>
    </div>
  )
}

export default Totalizers
