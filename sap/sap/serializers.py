from rest_framework import serializers
from ..personas.models import Persona
from ..page.models import Page
class PersonaSerilizer(serializers.ModelSerializer):
    class Meta:
        model= Persona
        fields={
            'nombre',
            'apellido',
            'email',
            'password',
            'ingreso',
            'tiempo',
            'click',
        }