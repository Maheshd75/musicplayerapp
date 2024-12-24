from django.urls import path
from  . import views

urlpatterns=[
    path('songs/',views.songsdata),
    path('album/',views.albumdata),
    path('song/remove',views.removesong),
    path('album/remove',views.removealbum),
    path('user/',views.user),
    path('usertoken/',views.usertoken)
]