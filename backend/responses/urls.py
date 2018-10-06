from django.urls import path
from . import views

urlpatterns = [
    path('city/', views.city, name='city'),
    path('station/', views.station, name='station'),
    path('station/<int:station_id>/', views.station_detail)
]