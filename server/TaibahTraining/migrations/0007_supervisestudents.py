# Generated by Django 4.1.5 on 2023-02-04 11:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TaibahTraining', '0006_opportunity_finishdate_opportunity_startdate'),
    ]

    operations = [
        migrations.CreateModel(
            name='SuperviseStudents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Supervisor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.supervisor')),
                ('student', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.student')),
            ],
        ),
    ]
