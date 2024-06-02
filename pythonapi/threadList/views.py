from django.http import JsonResponse
from .ScrapingListThreads import func1
from .SelectedThread import func2

def view_for_scraping_list_threads(request,keyword):
    data = func1(keyword)
    return JsonResponse(data,safe=False)

def view_for_selected_thread(request):
    data = func2()
    return JsonResponse(data)

