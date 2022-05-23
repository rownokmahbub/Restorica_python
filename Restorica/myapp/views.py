
from multiprocessing import context
from django.shortcuts import redirect,render
from myapp.models import Signup
# Create your views here.

def index(request):
    return render(request, 'myapp/index.html')

def menu(request):
    return render(request, 'myapp/menu.html')
def table(request):
    return render(request, 'myapp/tablebook.html')
def login(request):
    return render( request, 'myapp/login.html')  
def selecttable(request):
    return render( request, 'myapp/selecttable.html')  
def userprofile(request):
    return render( request, 'myapp/userprofile.html') 
def admindashboard(request):
    return render( request, 'myapp/admindashboard.html')     
def signup(request):
  if request.method == "POST":
      name= request.POST.get('name')
      email=request.POST.get('email')
      phone=request.POST.get('phone')
      password=request.POST.get('password')
      sign=Signup(
          name=name,
          email=email,
          phone=phone,
          password=password,
      )
      sign.save()
      return redirect('login')
  return render( request, 'myapp/signup.html')   