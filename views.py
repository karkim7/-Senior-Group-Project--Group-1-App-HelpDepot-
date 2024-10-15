from rest_framework import viewsets
from .models import ForumPost
from .serializers import ForumPostSerializer

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer
