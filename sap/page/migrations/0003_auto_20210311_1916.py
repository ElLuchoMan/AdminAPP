# Generated by Django 3.1.7 on 2021-03-12 00:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0002_auto_20210311_1915'),
    ]

    operations = [
        migrations.RenameField(
            model_name='page',
            old_name='titul',
            new_name='titulo',
        ),
    ]
