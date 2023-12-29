import inspect
import sys

from django.contrib import admin
from django.db.models import Model

import core.models as core_models

core_models = {name: cls for name, cls in inspect.getmembers(
    sys.modules['core.models'], inspect.isclass) if issubclass(cls, Model)}

core_models.pop('User')
core_models = list(core_models.values())

for model in core_models:
    admin.site.register(model)
