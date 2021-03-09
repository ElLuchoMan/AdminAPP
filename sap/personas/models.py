from django.db import models

# Create your models here.
class Persona(models.Model):
    nombre = models.CharField(max_length=250)
    apellido = models.CharField(max_length=250)
    email = models.CharField(max_length=250)
    password = models.CharField(max_length=50)