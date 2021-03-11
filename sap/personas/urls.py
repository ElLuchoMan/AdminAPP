from django.urls import path
from .views import PersonaListView, PersonaDetailView

urlpatterns=[
  path('persona/',PersonaListView.as_view(),name='persona_list'),
  path('persona/<str:name>/', PersonaDetailView.as_view(),name='persona'),
]