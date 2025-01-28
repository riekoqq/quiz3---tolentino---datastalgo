from django.db import models
import uuid

class Product(models.Model):
    # Define the fields for the Product model
    user = models.CharField(max_length=255)  # Example field for user as a string (change type if necessary)
    name = models.CharField(max_length=255)  # Product name
    image = models.URLField()  # Image URL or path to the image
    brand = models.CharField(max_length=255)  # Brand name
    category = models.CharField(max_length=255)  # Category name
    description = models.TextField()  # Product description
    rating = models.DecimalField(max_digits=2, decimal_places=1)  # Rating out of 5
    numReviews = models.IntegerField()  # Number of reviews
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Price of the product
    stock = models.IntegerField()  # Number of items in stock
    createdAt = models.DateTimeField(auto_now_add=True)  # Automatically set the timestamp when created
    updatedAt = models.DateTimeField(auto_now=True)  # Automatically update the timestamp when modified
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)  # Unique identifier for each product

    def __str__(self):
        return self.name  # String representation of the product (returns the product name)