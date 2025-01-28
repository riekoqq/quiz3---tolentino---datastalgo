import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Button, Card } from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Card.jsx'
import Rating from '../components/Rating.jsx'
import axios from 'axios'
function ProductScreen() {
  const { id } = useParams()

  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchProduct() {
      const {data} = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [])

  return (
    <div>
      <h1>{product.name}</h1>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
