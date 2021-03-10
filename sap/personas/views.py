from django.shortcuts import render
from rest_framework import generics
from ..personas.models import Persona
from ..sap.serializers import PersonaSerilizer

class PersonaList(generics.ListCreateAPIView):
    