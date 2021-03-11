from django.db import models

# Create your models here.
class Persona(models.Model):
    nombre = models.CharField(max_length=250)
    password = models.CharField(max_length=50)
    ingreso = models.CharField(max_length=50,null=True)
    tiempo=models.CharField(max_length=50,null=True)
    click = models.CharField(max_length=50,null=True)
    def __str__(self):
        return f'Persona{self.id} : {self.nombre} {self.apellido} {self.email}'
