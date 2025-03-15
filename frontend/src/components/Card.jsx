import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import '../Product.css'; // Ensure this file exists

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded text-center d-flex flex-column equal-card bg-light shadow-sm">
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          className="equal-image"
        />
      </Link>

      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title className="my-2 text-dark">{product.name}</Card.Title>
        </Link>

        <Card.Text as="h3" className="mt-auto">${product.price}</Card.Text>

        <Card.Text as="div" className="mb-2">
          <Rating 
            value={product.rating} 
            text={`from ${product.numReviews} reviews`} 
            color={'#f8e825'} 
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
