from rest_framework import viewsets
from myusers.api import serializers
from myusers import models

class MyUsersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MyUsersSerializers
    queryset = models.MyUsers.objects.all()
