from rest_framework import serializers
from .models import Persona

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id','username','password', 'ingreso', 'tiempo', 'boton1','boton2')
