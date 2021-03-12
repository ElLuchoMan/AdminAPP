from django.views import View
from .models import Persona
from django.http import JsonResponse
from django.forms import model_to_dict

class PersonaListView(View):
    def get(self,request):
        if('name' in request.GET):
            PList= Persona.objects.filter(name=request.GET['name'],password=request.GET['password'])
        else:
            PList= Persona.objects.all()
        return JsonResponse(list(PList.values()), safe=False)
class PersonaDetailView(View):
    def get(self, request,name):
        persona = Persona.objects.get(name=name)
        return JsonResponse(model_to_dict(persona))

