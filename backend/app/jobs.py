# from django.db.models import F
from datetime import datetime
# from push_notifications.models import GCMDevice
# from schedule import Scheduler
import threading
import time
from random import randrange

# from meds.models import PrescriptionMedicine
# from .models import UserHolding

# Example
# def give_admin_gold():
#     admin_gold_holding = (UserHolding.objects
#         .filter(inventory__user__username='admin', commodity__name='gold'))
#
#     admin_gold_holding.update(amount=F('amount') + 1)

def give_admin_gold():
    print(f'give_admin_gold called ({randrange(10)})')
    time = datetime.today().time()
    datetime.time(datetime.now()).replace(second=0, microsecond=0)
    meds = PrescriptionMedicine.objects.all().filter(
        intake_time__hour=time.hour, intake_time__minute=time.minute
    )
    print(meds)


def run_continuously(self, interval=6):
    """Continuously run, while executing pending jobs at each elapsed
    time interval.
    @return cease_continuous_run: threading.Event which can be set to
    cease continuous run.
    Please note that it is *intended behavior that run_continuously()
    does not run missed jobs*. For example, if you've registered a job
    that should run every minute and you set a continuous run interval
    of one hour then your job won't be run 60 times at each interval but
    only once.
    """

    cease_continuous_run = threading.Event()

    class ScheduleThread(threading.Thread):

        @classmethod
        def run(cls):
            while not cease_continuous_run.is_set():
                self.run_pending()
                time.sleep(interval)

    continuous_thread = ScheduleThread()
    continuous_thread.setDaemon(True)
    continuous_thread.start()
    return cease_continuous_run


# Scheduler.run_continuously = run_continuously


def start_scheduler():
    pass
    # scheduler = Scheduler()
    # scheduler.every(4).seconds.do(give_admin_gold)
    # scheduler.run_continuously()