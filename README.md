# Getting Started 

Following steps need to be followed. 
1. Install all the dependencies. Server needs python. Rest API helpers need Flask. Dev deployment needs Gunicorn. UI needs NPM and React libraries.
2. Create virtual enviroment in the project folder where the app will be deployed. This greates a environement folder in the project directory where environment setup exists. This environment is then activated and flask or gunicorn can be run here.
3. Create, install, and deploy the React project. More info can be found in the react-ui folder.

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

## Other Scripts

For React Client, install the following

### `sudo apt install npm`

### `npx create-react-app react-flask-app`

Note: For development, client needs to be run separate from the server.
