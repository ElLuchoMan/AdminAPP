# Generated by Django 3.1.7 on 2021-03-12 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('page', '0003_auto_20210311_1916'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='logo',
            field=models.CharField(max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='page',
            name='titulo',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
