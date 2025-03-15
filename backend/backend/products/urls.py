from django.urls import path
from . import views

urlpatterns = [
    path('', views.getProducts, name='product_list'),
    path('<int:pk>/', views.getProduct, name='product_detail'),
]
