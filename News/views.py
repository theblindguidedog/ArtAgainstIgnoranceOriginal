from django.shortcuts import render

def articles(request):
    return render(request,"News/articles.html", {})


    
    


