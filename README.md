# Lauku Forms
Lauku forms is a project designed and created for "Latvijas Lauku konsultāciju un izglītības centrs".

## Technical Overview
Django (v4.1.3) boilerplate. Uses Parcel v2.8 as the bundler. Bootstrap v5, SASS & JS setup.

## Requirements
Ensure that you have Node.js (v16.13.0) installed. [You can download it here](https://nodejs.org/download/release/v16.13.0/).
Ensure that you have Python (v3.10.9) and PIP installed. [You can download it here](https://www.python.org/downloads/release/python-3109/).

## Quick Start
* run `npm ci`
* run `npm install --save-dev parcel`
* run `npm install bootstrap`
* run `npm build:css` to build sass
* run `py manage.py runserver` to run server
* open browser at `http://127.0.0.1:8000/`

## Django 
Small instruction how to setup django.

1. Open your project at the root level `cd ~/27club`
2. Run commands in powershell
    * `py -m venv lauku_forms_venv`
    * `27club_venv\Scripts\activate.bat`
    * `cd 27club-main`