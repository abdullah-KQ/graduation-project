# Generated by Django 4.1.5 on 2023-02-09 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TaibahTraining', '0010_addopportunity_notification'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supervisor',
            name='Verified',
            field=models.CharField(max_length=10),
        ),
    ]
