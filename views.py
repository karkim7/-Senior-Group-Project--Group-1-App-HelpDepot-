from django.http import JsonResponse

def hello_world(request):
    return JsonResponse({"message": "Hello, world from Django!"})
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Help!")

from rest_framework import viewsets
from .models import ForumPost
from .serializers import ForumPostSerializer

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer
