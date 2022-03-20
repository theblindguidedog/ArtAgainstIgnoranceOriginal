#from argparse import ONE_OR_MORE
#from turtle import setundobuffer
#from unittest.util import three_way_cmp

from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {})

def about(request):
    return render(request, 'about.html', {})

def contact(request):
    return render(request, 'contact.html', {})

def music(request):
    return render(request, 'music.html', {})

def video(request):
    return render(request, 'video.html', {})

def shop(request):
    return render(request, 'shop.html', {})

def shop_details(request):
    return render(request, 'shop_details.html', {})

def shop_details_liamgervaise(request):
    return render(request, 'shop_details_liamgervaise.html', {})

def articles(request):
    return render(request, 'articles.html', {})

def article_details(request):
    return render(request, 'article_details.html', {})

def article_details_utopians(request):
    return render(request, 'article_details_utopians.html', {})

def artists(request):
    return render(request, 'artists.html', {})

def artists2(request):
    return render(request, 'artists2.html', {})

def artist_details_briangervaise(request):
    return render(request, 'artist_details_briangervaise.html', {})

def artist_details_zacharygervaise(request):
    return render(request, 'artist_details_zacharygervaise.html', {})

def artist_details_darceygervaise(request):
    return render(request, 'artist_details_darceygervaise.html', {})
    
def artist_details_darceygervaise2(request):
    return render(request, 'artist_details_darceygervaise2.html', {})

def artist_details_scottgervaise(request):
    return render(request, 'artist_details_scottgervaise.html', {})

def artist_details_wally(request):
    return render(request, 'artist_details_wally.html', {})

def artist_details_johnno(request):
    return render(request, 'artist_details_johnno.html', {})

def artist_details_ganna(request):
    return render(request, 'artist_details_ganna.html', {})

def artist_details_ganna2(request):
    return render(request, 'artist_details_ganna2.html', {})

def artist_details_nerdyrodent(request):
    return render(request, 'artist_details_nerdyrodent.html', {})

def artist_details_nerdyrodent2(request):
    return render(request, 'artist_details_nerdyrodent2.html', {})

def artist_details_blatantblathiest(request):
    return render(request, 'artist_details_blatantblathiest.html', {})

def artist_details_blatantblathiest2(request):
    return render(request, 'artist_details_blatantblathiest2.html', {})

def artist_details_deconvertedman(request):
    return render(request, 'artist_details_deconvertedman.html', {})







