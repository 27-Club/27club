# Generated by Django 4.1.5 on 2023-10-09 19:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0002_uploadbanner_delete_uploadimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='form',
            name='banner',
        ),
    ]