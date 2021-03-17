from rest_framework import serializers
from myusers import models

class MyUsersSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.MyUsers
        fields = '__all__'
