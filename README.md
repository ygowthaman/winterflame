# Gettings Started
View instructions to get started in the client and server in the respective folders. Once development environment is set up, follow the below steps to deploy the application to access it from other systems on the network.

Install all the dependencies. Server needs python. Rest API helpers need Flask. Deployment needs Gunicorn and Nginx. UI needs NPM and React libraries.

## Dependencies
GUNICORN: Add Gunicorn to requirements.txt.
NGINX: Needs to be installed directly in the deployment server.

Why both?
Nginx is a deployment server that is compatible with serving a web application which includes a client and server. We will use this to expose the entire application to the network.
Gunicorn will be used to deploy and expose the server APIs to Nginx. A server needs to have a Web Server Gateway Interface (WSGI) to be able to serve an application to the network. Gunicorn is a WSGI middleware that exposes the python flask application to Nginx.
Below are steps on how to set up Nginx to serve the UI, and also set up Gunicorn middleware to make the APIs available.

## Deployment Server
We are going to use Nginx for deployment.

### `sudo apt-get install nginx`

Once Nginx is installed, the necessary folders will need to be updated.
/etc/nginx/sites-available and /etc/nginx/sites-enabled needs to be updated with statics paths from which application needs to be served.

sites-available will have the list of available sites. sites-enabled will have the current site reference.

In sites-enabled create a new entry for this application.

### `sudo vim /etc/nginx/sites-available/winterflame.nginx`

It will have the below contents:

```
server {
    listen 80;
    root <path to UI build folder>;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Now remove symlink to existing default webpage from sites-enabled.

### `sudo rm /etc/nginx/sites-enabled/default`

Add new symlink to the project.

### `sudo ln -s /etc/nginx/sites-available/winterflame.nginx /etc/nginx/sites-enabled/winterflame.nginx`

Reload Nginx.

### `sudo systemctl reload nginx`

Note that the contents of the winterflame.nginx file has a path to the UI build folder. Now when a user accesses the IP address of the server, the UI application will load.

Now Gunicorn needs to be included to serve the APIs.

#### Run Gunicorn as a service
If this is run as a service, then it will auto start when sytem goes down and comes back up.

1. Create a new service file:

### `sudo vim /etc/systemd/system/winterflame.service`

2. Add the following configuration:

```
[Unit]
Description=A simple Flask API
After=network.target

[Service]
User=ubuntu
WorkingDirectory=<path to the server>
ExecStart=/<path to server venv>/venv/bin/gunicorn -b 127.0.0.1:5000 api:app
Restart=always

[Install]
WantedBy=multi-user.target
```

3. Reload the services

### `sudo systemctl daemon-reload`

4. Start the service

### `sudo systemctl start winterflame`

5. Check status of the service - it should be running

### `sudo systemctl status winterflame`

#### Adding Gunicorn to Nginx

Update /etc/nginx/sites-available/winterflame.nginx

### `sudo vim /etc/nginx/sites-available/winterflame.nginx`

The complete file now has

```
server {
    listen 80;
    root /home/ubuntu/react-flask-app/build;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api {
        include proxy_params;
        proxy_pass http://localhost:5000;
    }
}
```

Reload nginx

### `sudo systemctl reload nginx`

Now, application should be fully deployed
