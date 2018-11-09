from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import City, Station
from .serializers import CitySerializer, StationSerializer
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.models import User
from django.contrib.auth import *
from django.contrib.auth.forms import UserCreationForm

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

@csrf_exempt
def user_register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        print (form.errors);
        if form.is_valid():
          new_user = form.save()
          login(request, new_user)
          return HttpResponse('success')
        else:
          return JsonResponse(form.errors)
    else:
        return JsonResponse({'output' : "404.html"})

@csrf_exempt
def user_login(request):
    if request.POST:
        username = password = ''
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        print (user)
        if user is not None and user.is_active:
            print("User Login:  Username:" + username + '    Password:' + password)
            login(request, user)
            return JsonResponse({'output' : request.user.username})
        else:
            return JsonResponse({'output' : "Username or Password wrong!"})
    else:
        return JsonResponse({'output' : "404.html"})