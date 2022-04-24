from django.shortcuts import render

def index(request):
    return render(request, 'AAI_App/index.html', {})

def artist_details_briangervaise(request):
    return render(request, 'AAI_App/artist_details_briangervaise.html', {})

def artist_details_zacharygervaise(request):
    return render(request, 'AAI_App/artist_details_zacharygervaise.html', {})

def artist_details_darceygervaise(request):
    return render(request, 'AAI_App/artist_details_darceygervaise.html', {})
    
def artist_details_wally(request):
    return render(request, 'AAI_App/artist_details_wally.html', {})

def artist_details_johnno(request):
    return render(request, 'AAI_App/artist_details_johnno.html', {})

def artist_details_ganna(request):
    return render(request, 'AAI_App/artist_details_ganna.html', {})

def artist_details_ganna3(request):
    return render(request, 'AAI_App/artist_details_ganna3.html', {})

def artist_details_nerdyrodent(request):
    return render(request, 'AAI_App/artist_details_nerdyrodent.html', {})

def artist_details_blatantblatheist(request):
    return render(request, 'AAI_App/artist_details_blatantblatheist.html', {})

def news_details_aron_ra(request):
    return render(request, 'AAI_App/news_details_aron_ra.html', {})

def news_details_lawrence_krauss(request):
    return render(request, 'AAI_App/news_details_lawrence_krauss.html', {})

def news_details_richard_dawkins(request):
    return render(request, 'AAI_App/news_details_richard_dawkins.html', {})

def news_details_utopians(request):
    return render(request, 'AAI_App/news_details_utopians.html', {})

def critical_thinking(request):
    return render(request, 'AAI_App/critical-thinking.html', {})

def test(request):
    return render(request, 'AAI_App/test.html', {})












