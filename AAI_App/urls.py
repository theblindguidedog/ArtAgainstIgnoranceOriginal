from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('artist_details_briangervaise', views.artist_details_briangervaise, name="artist_details_briangervaise"),
    path('artist_details_zacharygervaise', views.artist_details_zacharygervaise, name="artist_details_zacharygervaise"),
    path('artist_details_darceygervaise', views.artist_details_darceygervaise, name="artist_details_darceygervaise"),
    path('artist_details_wally', views.artist_details_wally, name="artist_details_wally"),
    path('artist_details_johnno', views.artist_details_johnno, name="artist_details_johnno"),
    path('artist_details_ganna', views.artist_details_ganna, name="artist_details_ganna"), 
    path('artist_details_ganna2', views.artist_details_ganna2, name="artist_details_ganna2"),
    path('artist_details_nerdyrodent', views.artist_details_nerdyrodent, name="artist_details_nerdyrodent"),
    path('artist_details_blatantblatheist', views.artist_details_blatantblatheist, name="artist_details_blatantblatheist"),     
    path('news_details_aron_ra', views.news_details_aron_ra, name="news_details_aron_ra"),
    path('news_details_lawrence_krauss', views.news_details_lawrence_krauss, name="news_details_lawrence_krauss"),
    path('news_details_richard_dawkins', views.news_details_richard_dawkins, name="news_details_richard_dawkins"),
    path('news_details_utopians', views.news_details_utopians, name="news_details_utopians"),  
]


