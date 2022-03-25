from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('about', views.about, name="about"),
    path('music', views.music, name="music"),
    path('video', views.video, name="video"),
    path('shop', views.shop, name="shop"),
    path('shop_details', views.shop_details, name="shop_details"),
    path('shop_details_liamgervaise', views.shop_details_liamgervaise, name="shop_details_liamgervaise"),
    path('articles', views.articles, name="articles"),
    path('article_details', views.article_details, name="article_details"),
    path('article_details_utopians', views.article_details_utopians, name="article_details_utopians"),
    path('artists', views.artists, name="artists"),
    path('artists2', views.artists2, name="artists2"),
    path('contact', views.contact, name="contact"),
    path('artist_details_briangervaise', views.artist_details_briangervaise, name="artist_details_briangervaise"),
    path('artist_details_zacharygervaise', views.artist_details_zacharygervaise, name="artist_details_zacharygervaise"),
    path('artist_details_darceygervaise', views.artist_details_darceygervaise, name="artist_details_darceygervaise"),
    path('artist_details_darceygervaise2', views.artist_details_darceygervaise2, name="artist_details_darceygervaise2"),
    path('artist_details_scottgervaise', views.artist_details_scottgervaise, name="artist_details_scottgervaise"),
    path('artist_details_wally', views.artist_details_wally, name="artist_details_wally"),
    path('artist_details_johnno', views.artist_details_johnno, name="artist_details_johnno"),
    path('artist_details_ganna', views.artist_details_ganna, name="artist_details_ganna"),
    path('artist_details_ganna2', views.artist_details_ganna2, name="artist_details_ganna2"),
    path('artist_details_nerdyrodent', views.artist_details_nerdyrodent, name="artist_details_nerdyrodent"),
    path('artist_details_nerdyrodent2', views.artist_details_nerdyrodent2, name="artist_details_nerdyrodent2"),
    path('artist_details_blatantblathiest', views.artist_details_blatantblathiest, name="artist_details_blatantblathiest"),
    path('artist_details_blatantblathiest2', views.artist_details_blatantblathiest2, name="artist_details_blatantblathiest2"),
    path('artist_details_deconvertedman', views.artist_details_deconvertedman, name="artist_details_deconvertedman"),
    path('artist_details_deconvertedman2', views.artist_details_deconvertedman2, name="artist_details_deconvertedman2"),
    
]
