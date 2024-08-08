import React, { useContext } from 'react'
import { TheContext } from '../App'

function Products() {
  const productsdata=useContext(TheContext);
  console.log(productsdata)
    return (
<>
      {      productsdata.slice(0,10).map(data=>{
        return <p key={data.id}>{data.title} and the id is :{data.id}</p>
      }
    )
}  
    </>
)
}

export default Products