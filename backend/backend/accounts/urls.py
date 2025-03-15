from django.urls import path
from . import views

urlpatterns = [
    path('', views.getUsers, name='users'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user_profile'),
    path('register', views.registerUser, name='register'),
]