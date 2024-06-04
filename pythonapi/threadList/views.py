from django.http import JsonResponse
from .ScrapingListThreads import func1
from .SelectedThread import func2
import json
from django.views.decorators.csrf import csrf_exempt

def view_for_scraping_list_threads(request,keyword):
    data = func1(keyword)
    return JsonResponse(data,safe=False)

@csrf_exempt 
def view_for_selected_thread(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            url = data.get('url')
            result = func2(url)
            return JsonResponse(result)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

