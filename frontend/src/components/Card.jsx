import Card from 'react-bootstrap/Card';
import Rating from './Rating';

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Img src={product.image} />
        <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title className='my-3'>
                    {product.name}
                </Card.Title>
            </a>

            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>

            <Card.Text as='div'>
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </div>
            </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default Product;