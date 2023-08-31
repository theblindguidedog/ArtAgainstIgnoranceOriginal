from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('artist_details_artgervaise', views.artist_details_artgervaise, name="artist_details_artgervaise"),
    path('artist_details_zacharygervaise', views.artist_details_zacharygervaise, name="artist_details_zacharygervaise"),
    path('artist_details_darceygervaise', views.artist_details_darceygervaise, name="artist_details_darceygervaise"),
    path('artist_details_wally', views.artist_details_wally, name="artist_details_wally"),
    path('artist_website_madam_who', views.artist_website_madam_who, name="artist_website_madam_who"),
    path('artist_details_ganna', views.artist_details_ganna, name="artist_details_ganna"), 
    path('artist_details_ganna2', views.artist_details_ganna2, name="artist_details_ganna2"),
    path('artist_details_nerdyrodent', views.artist_details_nerdyrodent, name="artist_details_nerdyrodent"),
    path('artist_details_blatantblatheist', views.artist_details_blatantblatheist, name="artist_details_blatantblatheist"),     
    path('news_details_aron_ra', views.news_details_aron_ra, name="news_details_aron_ra"),
    path('news_details_lawrence_krauss', views.news_details_lawrence_krauss, name="news_details_lawrence_krauss"),
    path('news_details_richard_dawkins', views.news_details_richard_dawkins, name="news_details_richard_dawkins"),
    path('news_details_utopians', views.news_details_utopians, name="news_details_utopians"),
    path('artagainstignorance', views.artagainstignorance, name="artagainstignorance"),  
]


