# Generated by Django 5.0.7 on 2024-12-24 09:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('musicapp', '0007_user'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='Userdata',
        ),
    ]
