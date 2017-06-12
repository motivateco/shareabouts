TIME_ZONE = 'America/New_York'
DEBUG = True
TEMPLATE_DEBUG = DEBUG

# EMAIL_ADDRESS = 'shareabouts@example.com'
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Uncomment the following line if you would like to also receive emails that
# are sent to your users.
# EMAIL_NOTIFICATIONS_BCC = 'shareabouts@example.com'

# The SHAREABOUTS['FLAVOR'] environment variable is used as a prefix for the
# Shareabouts configuration. configuration is expected to live in a package
# named 'flavors.<SHAREABOUTS_FLAVOR>'. This package will correspond to a
# folder in the root of the src tree that contains all the configuration
# information for the flavor.

SHAREABOUTS = {
    'FLAVOR': 'divvy',
    'DATASET_ROOT': 'http://data.shareabouts.org/api/v2/demo-user/'
                    'datasets/demo-data/',
    'DATASET_KEY': 'NTNhODE3Y2IzODlmZGZjMWU4NmU3NDhj',
}

# For geocoding...
MAPQUEST_KEY = 'Fmjtd%7Cluur2g0bnl%2C25%3Do5-9at29u'

# Unless you are running both the map and API locally,
# delete/comment out everything below.

# API settings
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.contrib.gis.db.backends.postgis',
#         'NAME': 'shareabouts-old',
#         'USER': 'postgres',
#         'PASSWORD': 'postgres',
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }
#
# REST_FRAMEWORK = {
#     'PAGINATE_BY': 500,
#     'PAGINATE_BY_PARAM': 'page_size'
# }
#
# BROKER_URL = 'django://'
