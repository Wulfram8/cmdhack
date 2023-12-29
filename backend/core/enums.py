from enum import Enum
from http.client import PROCESSING


class UserRole(Enum):
    ADMIN = "ADMIN"
    RESTARAUNT = "RESTARAUNT"
    CLIENT = "CLIENT"

    @classmethod
    def choices(cls):
        return [(tag.value, tag.name) for tag in cls]


class PaymentMethod(Enum):
    ONLINE = "ONLINE"
    COURIER = "COURIER"
    CASH = "CASH"

    @classmethod
    def choices(cls):
        return [(tag.value, tag.name) for tag in cls]


class PaymentStatus(Enum):
    PAYED = "PAYED"
    PENDING = "PENDING"
    FAILED = "FAILED"

    @classmethod
    def choices(cls):
        return [(tag.value, tag.name) for tag in cls]
