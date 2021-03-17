from django.db import models
from uuid import uuid4

# Create your models here.
class MyUsers(models.Model):
    users_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    username = models.CharField(max_length=255)
    profilePicture = models.CharField(max_length=255)
    emailAddress = models.CharField(max_length=255)
    favoriteCoin = models.CharField(max_length=50)

