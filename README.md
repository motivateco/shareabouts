# Shareabouts Frontend
*A hacked-up, multiheaded version of the original shareabouts app by your loving
interns*

# Adding a System
There are a number of files to create and edit.

1. Create your flavor. Place it in `/src/flavors`.
2. Create the `settings_SYSTEM.py` file in `/src`. Use the template, and name it accordingly.
3. Create the `wsgi_SYSTEM.py` file at the root. This just points to the settings file.
4. Modify the `wsgi.conf` file by adding the wsgi path. Copy paste the following, replacing SYSTEM_NAME with the name you used for your system.

```xml
<VirtualHost *>
    ServerName SYSTEM_NAME.localhost
    ServerAlias SYSTEM_NAME.*.com

    WSGIDaemonProcess SYSTEM_NAME processes=5 python-path=/opt/python/current/app:/opt/python/run/venv/lib64/python2.7/site-packages:/opt/python/run/venv/lib/python2.7/site-packages user=wsgi group=wsgi threads=1 home=/opt/python/current/app
    WSGIProcessGroup SYSTEM_NAME
    WSGIScriptAlias / /opt/python/current/app/wsgi_SYSTEM_NAME.py
</VirtualHost>
```

## Local development

### Hold your horses we will get there
