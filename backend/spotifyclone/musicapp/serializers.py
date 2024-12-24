from rest_framework import serializers
from musicapp.models import Songs,Album,Userdata

class SongsSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = ['id','name','image','file','desc','album','duration']


class AlbumSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['id','name','image','desc','bgColor']

class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Userdata
        fields = ['id','username','email','password']       