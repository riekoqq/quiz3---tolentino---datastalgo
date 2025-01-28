import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap'; // Added Button for styling
import Product from '../components/Card';
import axios from 'axios'

function Dashboard() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const {data} = await axios.get(`/api/products`)
      setProducts(data)
    }
    fetchProducts()
  }, []) 
  return (
    <div>
      <h1>Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>

      <div className="mt-4">
        <Link to="/users">
          <Button variant="primary">Go to User Management</Button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
