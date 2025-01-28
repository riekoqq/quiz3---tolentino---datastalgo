from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.getProduct, name='product_list'),
    path('api/product/pk')
]
