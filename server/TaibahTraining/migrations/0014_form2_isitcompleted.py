# Generated by Django 4.1.5 on 2023-02-11 23:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TaibahTraining', '0013_form4_isitcompleted_form5_isitcompleted_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='form2',
            name='IsItCompleted',
            field=models.CharField(default='false', max_length=10),
            preserve_default=False,
        ),
    ]
