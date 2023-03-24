from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.
admin.site.register(User, UserAdmin)

class CustomUserAdmin(UserAdmin):
  def get_form(self, request, obj=None, **kwargs):
    form = super().get_form(request, obj, **kwargs)
    is_superuser = request.user.is_superuser
    disabled_fields = set()

    # Prevent changing permissions without using groups
    if not is_superuser:
        disabled_fields |= {
            "is_superuser",
            "user_permissions",
        }
    
    # Prevent users changing own permissions
    if not is_superuser and obj is not None and obj == request.user:
        disabled_fields |= {
            "is_staff",
            "is_superuser",
            "groups",
            "user_permissions",
        }

    for f in disabled_fields:
        if f in form.base_fields:
            form.base_fields[f].disabled = True

    return form