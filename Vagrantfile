# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 80, host: 4000, auto_correct: true
  config.vm.synced_folder ".", "/opt/python/current/app/",
    :owner => 'www-data',
    :group => 'www-data',
    :mount_options => ['dmode=777,fmode=777']

  config.vm.hostname = "shareabouts"

  config.vm.provider :virtualbox do |vb|
    vb.name = "shareabouts"
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    sudo apt-get install apache2 apache2-doc apache2-utils libapache2-mod-wsgi python-setuptools python-dev build-essential git libpq-dev --assume-yes
    sudo easy_install pip
    pip install virtualenv
    mkdir -p
    cd /opt/python/current/app/
    sudo pip install -r requirements.txt
    # having trouble installing all packages at once
    sudo pip install raven==5.19.0
    sudo pip install python-dateutil==2.2
    sudo pip install ujson==1.33
    virtualenv env
    source env/bin/activate
    env/bin/pip install -r requirements.txt
    sudo rm -rf /etc/apache2/sites-enabled/000-default.conf
    sudo ln -s /opt/python/current/app/wsgi.conf /etc/apache2/sites-enabled/wsgi.conf
    sudo adduser --disabled-password --group --system wsgi
    sudo service apache2 restart
  SHELL
end
