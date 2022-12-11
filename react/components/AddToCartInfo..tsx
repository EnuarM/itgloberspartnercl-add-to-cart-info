import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
// import Totalizers from './Totalizers'


const AddToCartInfo = () => {
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Este producto tiene esta info: ", productInfo)
  console.log("Estos son mis totales: ", totalizers)

  return (
    <>
      {items.map((item: any, index: number) => {
        console.log(item)
        return (
          <div key={index}>
            <div>
              <img src={item.imageUrls.at1x} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>${item.price / 100}</p>
              <p>Cantidad:{item.quantity}</p>
            </div>
          </div>)
      }
      )}
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>Total: ${totalizers[0]?.value / 100} </p>
      </div>
      <ButtonGroup />
    </>
  )
}


export default AddToCartInfo
