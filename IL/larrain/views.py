from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Productos

# Create your views here.
def home(request):
  return render(request,'Inicio.html')
def Contactanos(request):
   return render(request,'Contactanos.html')
def Nosotros(request):
  return render(request,'Nosotros.html')
#def Registrate(request):
#  return render(request,'Registrate.html')
def Producto(request):
  pro = Productos.objects.all()
  context = {"productos": pro}
  return render(request,'productos.html', context)


#ENTRADA Y SALIDA
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Credenciales inválidas. Por favor, inténtalo nuevamente.')
    return render(request, "login.html")
@login_required
def logout(request):
    auth_logout(request)
    return redirect('home')