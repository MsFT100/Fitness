from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='home'),
    path('about/', views.AboutPage.as_view(), name='about'),
    path('sessions/', views.SessionsPage.as_view(), name='session'),
]