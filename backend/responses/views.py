from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import City, Station
from .serializers import CitySerializer, StationSerializer
# Create your views here.


def city(request):
	if request.method == "GET":
	    city = City.objects.all()
	    ser = CitySerializer(city, many=True)
	    return JsonResponse(ser.data, safe=False)


def station(request):
   if request.method == "GET":
      station = Station.objects.all()
      ser = StationSerializer(station, many=True)
      return JsonResponse(ser.data, safe=False)


@csrf_exempt
def station_detail(request, station_id):
  try:
    stationDetails = Station.objects.get(pk=station_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    ser = StationSerializer(stationDetails)
    return JsonResponse(ser.data)
