import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


function Productlist() {
    const [products, setProducts] =useState([])
    
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const res=axios.get("https://fakestoreapi.com/products")
         .then((res)=>{setProducts(res.data)
            setLoading(false)
         })
         .catch((error)=>console.log(error))
        
    },[])
    console.log(products);
    
  return (
    <div style={{ display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
        {loading ? <Spinner animation="border" variant="success" />:
   products.map(el=>
        <Card style={{ width: '18rem',height:"" }}>
        <Card.Img style={{height:"300px"}} variant="top" src={el.image} />
        <Card.Body>
          <Card.Title style={{fontSize:"1rem"}}>{el.title}</Card.Title>
          <Card.Text style={{overflow:"auto",height:"200px"}}>
          {el.description}
          </Card.Text>
          <Card.Text>
          {el.category}
          </Card.Text>
          <Card.Text>price:{el.price}$</Card.Text>
         
        </Card.Body>
      </Card>
    )}
    </div>
  )
}

export default Productlist