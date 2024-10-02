# Getting Started 

Following steps need to be followed. 
1. Create virtual enviroment in the project folder where the app will be deployed. This greates a environement folder in the project directory where environment setup exists. This environment is then activated and flask or gunicorn can be run here.
2. Create, install, and deploy the React project. More info can be found in the react-ui folder.

## Dependencies

### `sudo apt upgrade`

### `sudo apt install python3.12-venv`

## Create Python Virtual Environment

### `python3 -m venv venv`

## Activate VENV

On Linux

### `source venv\bin\activate`

On Windows

### `venv\Scripts\activate`

Once venv is activated, install requirements.

### `pip install -r requirements.txt`

Deactivate

### `deactivate`

## Run App

### `flask run`

## Optional configuration

### `FLASK_APP=app.py`

### `FLASK_ENV=development`

## Deployment using Gunicorn
Install Gunicorn (if not already added to requirements.txt and pip install done) -

### `pip install gunicorn`

Once installed, start the server.

### `gunicorn -b 127.0.0.1 app:app`
