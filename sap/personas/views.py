import view as view
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
# Create your views here.
from personas.models import Persona


class personaListView(View):
    def get(self, request):
        list= Persona.objects.all()
        return JsonResponse(list,False)
    def post(self,request):

    def put(self,request):
        #put...
class personaDetailView(View):
    def get(self, request,pk):
         list = Persona.objects.get(pk=pk)
         return JsonResponse(list, False)

    def post(self, request):
    #post ...
    def put(self, request):
        #put...

