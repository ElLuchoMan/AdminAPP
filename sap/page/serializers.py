from rest_framework import serializers
from .views import Page
class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('imagen', 'logo', 'descripcion')