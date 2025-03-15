from rest_framework import serializers
from accounts.models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)  # Keep `_id`
    isAdmin = serializers.SerializerMethodField(read_only=True)  # Add `isAdmin`

    class Meta:
        model = CustomUser
        fields = ['_id', 'username', 'email', 'role', 'isAdmin']  # Include `_id`

    def get__id(self, obj):  # ✅ Correct method name
        return obj.id

    def get_username(self, obj):
        return obj.username if obj.username else obj.email

    def get_isAdmin(self, obj):
        return obj.is_staff
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', '_id', 'username', 'email', 'role', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)