# Generated by Django 4.0.4 on 2022-05-22 17:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_remove_signup_numbers_signup_number'),
    ]

    operations = [
        migrations.RenameField(
            model_name='signup',
            old_name='number',
            new_name='phone',
        ),
    ]
