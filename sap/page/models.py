from django.db import models

# Create your models here.
class Page(models.Model):
    titulo=models.CharField(max_length=100,null=True)
    logo= models.CharField(max_length=1000,null=True)
    descripcion= models.CharField(max_length=500,null=True)