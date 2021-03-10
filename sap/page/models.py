from django.db import models

# Create your models here.
class Page(models.Model):
    imagen=  models.ImageField(upload_to='albums/images/',null=True)
    logo= models.ImageField(upload_to='page/images/', null=True)
    descripcion= models.CharField(max_length=500,null=True)