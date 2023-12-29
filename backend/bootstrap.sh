#!/bin/bash

sleep 10s
python manage.py migrate
python manage.py collectstatic --no-input --clear
# python manage.py schedule_meds_notifications &
gunicorn --workers 5 app.wsgi:application --bind 0.0.0.0:4000 --reload
