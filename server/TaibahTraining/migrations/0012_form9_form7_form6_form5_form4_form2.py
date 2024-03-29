# Generated by Django 4.1.5 on 2023-02-11 22:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TaibahTraining', '0011_alter_supervisor_verified'),
    ]

    operations = [
        migrations.CreateModel(
            name='Form9',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('WeekNo', models.CharField(max_length=20)),
                ('StudentAttendenceSunday', models.CharField(max_length=20)),
                ('StudentAttendenceMonday', models.CharField(max_length=20)),
                ('StudentAttendenceTuesday', models.CharField(max_length=20)),
                ('StudentAttendenceWednesday', models.CharField(max_length=20)),
                ('StudentAttendenceThursday', models.CharField(max_length=20)),
                ('TasksThisWeek', models.CharField(max_length=100)),
                ('SoftwarUsedThisWeek', models.CharField(max_length=100)),
                ('TrainingBody', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.trainingbody')),
            ],
        ),
        migrations.CreateModel(
            name='Form7',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SeriousTraining', models.CharField(max_length=20)),
                ('ExperienceProvided', models.CharField(max_length=20)),
                ('SuitableTrainingPlace', models.CharField(max_length=3)),
                ('ExperienceTrainer', models.CharField(max_length=3)),
                ('HelpWorkingStaff', models.CharField(max_length=3)),
                ('FollowingPlan', models.CharField(max_length=3)),
                ('AdvantagesProgram', models.CharField(max_length=3)),
                ('TheCompatibility', models.CharField(max_length=3)),
                ('benefits', models.CharField(max_length=100)),
                ('problems', models.CharField(max_length=100)),
                ('expectations', models.CharField(max_length=100)),
                ('suggestions', models.CharField(max_length=100)),
                ('recommend', models.CharField(max_length=10)),
                ('student', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.student')),
            ],
        ),
        migrations.CreateModel(
            name='Form6',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Course', models.CharField(max_length=20)),
                ('Term', models.CharField(max_length=20)),
                ('PunctualityFrist', models.CharField(max_length=3)),
                ('QualityFrist', models.CharField(max_length=3)),
                ('PunctualityFinal', models.CharField(max_length=3)),
                ('QualityFinal', models.CharField(max_length=3)),
                ('Supervisor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.supervisor')),
            ],
        ),
        migrations.CreateModel(
            name='Form5',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AttendanceAccuracy', models.CharField(max_length=3)),
                ('GeneralAppearance', models.CharField(max_length=3)),
                ('Enthusiasm', models.CharField(max_length=3)),
                ('AbilityToAnalyze', models.CharField(max_length=3)),
                ('AccuracyOutput', models.CharField(max_length=3)),
                ('AbilityPresent', models.CharField(max_length=3)),
                ('AbilityReport', models.CharField(max_length=3)),
                ('RelationshipTrainer', models.CharField(max_length=3)),
                ('RelationshipCoWorkers', models.CharField(max_length=3)),
                ('Flexibility', models.CharField(max_length=3)),
                ('AbilityLearn', models.CharField(max_length=3)),
                ('AbilityDecision', models.CharField(max_length=3)),
                ('GeneralPerformance', models.CharField(max_length=10)),
                ('Strengths', models.CharField(max_length=100)),
                ('Weaknesses', models.CharField(max_length=100)),
                ('AreTraineeSkills', models.CharField(max_length=100)),
                ('Comments', models.CharField(max_length=100)),
                ('TrainingBody', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.trainingbody')),
            ],
        ),
        migrations.CreateModel(
            name='Form4',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AttendanceAccuracy', models.CharField(max_length=3)),
                ('GeneralAppearance', models.CharField(max_length=3)),
                ('Enthusiasm', models.CharField(max_length=3)),
                ('AbilityToAnalyze', models.CharField(max_length=3)),
                ('AccuracyOutput', models.CharField(max_length=3)),
                ('AbilityPresent', models.CharField(max_length=3)),
                ('AbilityReport', models.CharField(max_length=3)),
                ('RelationshipTrainer', models.CharField(max_length=3)),
                ('RelationshipCoWorkers', models.CharField(max_length=3)),
                ('Flexibility', models.CharField(max_length=3)),
                ('AbilityLearn', models.CharField(max_length=3)),
                ('AbilityDecision', models.CharField(max_length=3)),
                ('GeneralPerformance', models.CharField(max_length=10)),
                ('Strengths', models.CharField(max_length=100)),
                ('Weaknesses', models.CharField(max_length=100)),
                ('AreTraineeSkills', models.CharField(max_length=100)),
                ('Comments', models.CharField(max_length=100)),
                ('TrainingBody', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.trainingbody')),
            ],
        ),
        migrations.CreateModel(
            name='Form2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AcademicYear', models.CharField(max_length=50)),
                ('Semester', models.CharField(max_length=50)),
                ('Major', models.CharField(max_length=50)),
                ('CGPA', models.CharField(max_length=50)),
                ('HoursEarned', models.CharField(max_length=50)),
                ('HoursRegistered', models.CharField(max_length=50)),
                ('HoursRemaining', models.CharField(max_length=50)),
                ('descriptionAboutCompany', models.CharField(max_length=100)),
                ('student', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='TaibahTraining.student')),
            ],
        ),
    ]
