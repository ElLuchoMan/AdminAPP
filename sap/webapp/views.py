from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def bienvenido(request):
    return HttpResponse('Hola desde django')
def despedirse(request):
    return HttpResponse('Adiós desde django')