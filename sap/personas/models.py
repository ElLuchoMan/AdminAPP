from django.db import models

# Create your models here.
class Persona(models.Model):
    username = models.CharField(max_length=250)
    password = models.CharField(max_length=50)
    admin = models.BooleanField(default=False)
    ingreso = models.CharField(max_length=50,null=True)
    tiempo=models.CharField(max_length=50,null=True)
    boton1 = models.CharField(max_length=50,null=True)
    boton2 = models.CharField(max_length=50, null=True)
    def __str__(self):
        return self.username
