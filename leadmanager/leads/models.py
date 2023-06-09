from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Lead(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name='leads',null=True,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)
