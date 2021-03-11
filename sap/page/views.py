from django.shortcuts import render
from rest_framework import generics
from .models import Page
from .serializers import PageSerializer


class PageList(generics.ListCreateAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
