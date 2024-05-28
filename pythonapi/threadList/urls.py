from django.urls import path
from . import views

urlpatterns = [
    path('listThreads/', views.view_for_scraping_list_threads, name='listThreads'),
    path('selectedThread/', views.view_for_selected_thread, name='selectedThread'),
]
