from django.urls import path
from .views import home, hello_world

urlpatterns = [
    path('', home, name='home'),  # This will handle requests to "/"
    path('api/hello/', hello_world, name='hello_world'),
]
