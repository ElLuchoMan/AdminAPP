from django.urls import path
from .views import PageList


urlpatterns=[
  path('page/',PageList.as_view(),name='page')
]
