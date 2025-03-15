from django.db import models
import uuid
from accounts.models import CustomUser
import random
import os

def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext

def upload_image_path(instance, filename):
    new_filename = random.randint(1, 2541781232)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext)
    return "img/{new_filename}/{final_filename}".format(new_filename=new_filename, final_filename=final_filename)

class Product(models.Model):
    # Define the fields for the Product model
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)  # Product name
    image = models.ImageField(null=True, blank=True)  # Image URL or path to the image
    brand = models.CharField(max_length=255, null=True, blank=True)  # Brand name
    category = models.CharField(max_length=255, null=True, blank=True)  # Category name
    description = models.TextField(null=True, blank=True)  # Product description
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True)  # Number of reviews
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Price of the product
    stock = models.IntegerField(null=True, blank=True)  # Number of items in stock
    createdAt = models.DateTimeField(auto_now_add=True, null=True, blank=True)  # Automatically set the timestamp when created
    updatedAt = models.DateTimeField(auto_now=True, null=True, blank=True)  # Automatically update the timestamp when modified
    _id = models.AutoField(primary_key=True)
    
    def __str__(self):
        return self.name