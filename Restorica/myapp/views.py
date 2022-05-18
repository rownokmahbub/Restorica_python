from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'myapp/index.html')

def menu(request):
    return render(request, 'myapp/menu.html')
def table(request):
    return render(request, 'myapp/tablebook.html')
def login(request):
    return render( request, 'myapp/login.html')  
def signup(request):
    return render( request, 'myapp/signup.html')   