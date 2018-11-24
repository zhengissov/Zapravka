from django.db import models

# Create your models here.

class City(models.Model):
	name = models.CharField(max_length=100)
	region_id = models.IntegerField(default=0)
	latitude = models.CharField(max_length=200)
	longitude = models.CharField(max_length=200)

class Station(models.Model):
	station_name = models.CharField(max_length=100)
	rating = models.FloatField(default=0)
	rating_counter = models.IntegerField(default=0)
	longitude = models.CharField(max_length=100)
	latitude = models.CharField(max_length=100)
	address = models.CharField(max_length=200)
	city_id = models.IntegerField(default=0)
	tel = models.CharField(max_length=100)
	image_path = models.CharField(max_length=200)
	brand_id = models.IntegerField(default=0)

# class Fuel

# class Features

# class Reviews