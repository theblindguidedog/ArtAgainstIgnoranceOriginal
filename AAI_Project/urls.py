from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('AAI_App.urls')),
    path('news', include('News.urls')),
    path('events', include('events.urls')),
]
