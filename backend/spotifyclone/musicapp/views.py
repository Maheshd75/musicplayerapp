from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from musicapp.models import Songs,Album,Userdata
from musicapp.serializers import SongsSerialisers,AlbumSerialisers,UserSerialiser
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


@api_view(['GET','POST'])
def songsdata(request):
    if request.method== 'GET':
        songs= Songs.objects.all()
        serializer = SongsSerialisers(songs,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = SongsSerialisers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET','POST'])
def albumdata(request):
    if request.method== 'GET':
        songs= Album.objects.all()
        serializer = AlbumSerialisers(songs,many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = AlbumSerialisers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
@api_view(['GET','POST'])
def removesong(request):
    if request.method=='POST':
        songs=Songs.objects.filter(pk=request.data['id'])
        songs.delete()
        return Response("Successfully deleted",status=status.HTTP_200_OK)
    
@api_view(['GET','POST'])
def removealbum(request):
    if request.method=='POST':
        album=Album.objects.filter(pk=request.data['id'])
        serializer=AlbumSerialisers(album,many=True)
        name=serializer.data[0]['name']
        songs=Songs.objects.filter(name=name)
        songs.delete()
        album.delete()
        return Response("Successfully deleted",status=status.HTTP_200_OK)
@api_view(['GET','POST'])
def user(request):
    if request.method =='GET':
        user =Userdata.objects.all()
        serialiser=UserSerialiser(user,many=True)
        return Response(serialiser.data,status=status.HTTP_200_OK)
    if request.method=='POST':
        serializer = UserSerialiser(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET','POST'])
def usertoken(request):
    if request.method == 'GET':
        return Response("Token",status=status.HTTP_200_OK)
    if request.method == 'POST':
        user=Userdata.objects.filter(username=request.data['username'])
        print(user)
        if user :
            usertokenexists= User.objects.get(username=request.data['username'])
            print(usertokenexists)
            if usertokenexists :
                token = Token.objects.get(user=usertokenexists)
                print(token.key) 
                return Response("Token "+token.key,status=status.HTTP_200_OK)
            else:
                usertoken = User.objects.create_user(username=request.data['username'], password=request.data['password'])
                token = Token.objects.create(user=usertoken)
                return Response(token.key,status=status.HTTP_200_OK)
            
            
           

