from django.shortcuts import render
from django.views import View

# Create your views here.

class Index(View):
    def get(self, request):
        return render(request, 'pages/index.html')
class AboutPage(View):
    def get(self, request):
        return render(request, 'pages/about.html')
class BookSessionsPage(View):
    def get(self, request):
        return render(request, 'pages/book_session.html')
class PrivateSessionsPage(View):
    def get(self, request):
        return render(request, 'pages/private_session.html')