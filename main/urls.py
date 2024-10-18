from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='home'),
    path('about/', views.AboutPage.as_view(), name='about'),
    path('sessions/book/', views.BookSessionsPage.as_view(), name='session'),
    path('sessions/private/', views.PrivateSessionsPage.as_view(), name='book_session'),
    path('club/', views.PhoebeClubPage.as_view(), name='club'),

]