from django.views import View
from .models import Page
from django.http import JsonResponse
from django.forms import model_to_dict

class PageListView(View):
    def get(self,request):
        if('id' in request.GET):
            PageList= Page.objects.filter(id=request.GET['id'])
        else:
            PageList= Page.objects.all()
        return JsonResponse(list(PageList.values()), safe=False)
class PageDetailView(View):
    def get(self, request,pk):
        page = Page.objects.get(pk=pk)
        return JsonResponse(model_to_dict(page))