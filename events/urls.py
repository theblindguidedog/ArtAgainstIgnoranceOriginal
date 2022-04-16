from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.events, name='events'),
    path('all_events/', views.all_events, name='show-events'),
    #path('<int:year>/<str:month>/', views.events, name='events')
    #re_path(r'^(?P<year>[0-9]{4})/(?P<month>0?[[1-9]|1[0-2])/', views.events, name="events"),

]
