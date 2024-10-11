from django.shortcuts import render
from django.views import View

# Create your views here.

class Index(View):
    def get(self, request):
        return render(request, 'pages/index.html')
class AboutPage(View):
    def get(self, request):
        return render(request, 'pages/about.html')
class SessionsPage(View):
    def get(self, request):
        return render(request, 'pages/session.html')