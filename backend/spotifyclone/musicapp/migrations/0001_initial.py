# Generated by Django 5.0.7 on 2024-12-23 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.CharField(max_length=200)),
                ('desc', models.CharField(max_length=200)),
                ('bgColor', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.CharField(max_length=200)),
                ('file', models.CharField(max_length=200)),
                ('desc', models.CharField(max_length=200)),
                ('duration', models.IntegerField(default=0)),
            ],
        ),
    ]
