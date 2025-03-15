import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Row, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

function ProductScreen() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])

  return (
    <div className="container my-4">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Link to="/" className="btn btn-dark my-3">
            &larr; Go Back
          </Link>

          <Row className="justify-content-center">
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid className="rounded shadow" />
            </Col>
            <Col md={4}>
              <ListGroup variant="flush" className="shadow-sm p-3 rounded">
                <ListGroup.Item>
                  <h3 className="fw-bold">{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="text-muted">{product.description}</p>
                </ListGroup.Item>
                <ListGroup.Item className="fs-5">
                  <strong>Price: </strong> <span className="text-success">${product.price}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Status: </strong>
                  {product.stock > 0 ? (
                    <span className="text-success">{product.stock} In Stock</span>
                  ) : (
                    <span className="text-danger">Out of Stock</span>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}

export default ProductScreen
