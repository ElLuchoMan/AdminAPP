from rest_framework import generics
from .models import Persona
from .serializers import PersonaSerializer
from django.http import Http404, JsonResponse


class PersonaList(generics.ListCreateAPIView):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer

    def getPersona(request):
        users = Persona.objects.all()
        data = list(users.values("id", "username", "password","tiempo","click","ingreso"))
        return JsonResponse(data, safe=False)

    def getPersonaDetail(request, param):
        data = Persona.objects.filter(id=param)
        return JsonResponse(list(data.values("id", "username", "password","tiempo","click","ingreso")), safe=False)