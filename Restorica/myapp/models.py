import numbers
from django.db import models

class Signup(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

def __str__(self):
    return self.name   