from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.authtoken import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/v1/', include(('personas.urls', 'api'))),
    path('api/v1/', include(('page.urls', 'api'))),
    path('api_generate_token/',views.obtain_auth_token),
]
