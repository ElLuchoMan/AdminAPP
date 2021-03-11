from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

#from ..personas import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include('personas.urls')),
    path('api/', include('page.urls')),

]
