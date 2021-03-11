from django.urls import path
from .views import PageDetailView,PageListView


urlpatterns=[
path('page/',PageListView.as_view(),name='page_list'),
  path('page/<int:pk>/', PageDetailView.as_view(), name='page'),
]
