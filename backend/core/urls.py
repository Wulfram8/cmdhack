import inspect
import sys

from django.urls import re_path, path, include
from django.contrib.auth.models import User

from rest_framework import routers, serializers, viewsets, permissions
from rest_framework.authtoken import views

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

import core.views as core_views
from core.views import *

...

schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
core_views = [cls for name, cls in inspect.getmembers(
    sys.modules['core.views'], inspect.isclass) if issubclass(cls, viewsets.ModelViewSet)]

for cls in core_views:
    router.register(cls.Meta.path, cls)

router.register(r'register', UserRegisterViewSet, basename='register')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0),
         name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
         cache_timeout=0), name='schema-redoc'),
    path('', include(router.urls)),
    # path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('auth/', CustomAuthToken.as_view()),
]
