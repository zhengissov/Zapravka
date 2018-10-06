from django.urls import path
from . import views

urlpatterns = [
    path('city/', views.city, name='city'),
    path('station/', views.station, name='station'),
    path('station/<int:station_id>/', views.station_detail),
    # path('auth/login/', views.user_login),
    path('auth/join/', views.user_register)
]