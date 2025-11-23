from django.core.management.base import BaseCommand
from octofit_tracker.models import Team, User, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User(name='Captain America', email='cap@marvel.com', team=marvel),
            User(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User(name='Batman', email='batman@dc.com', team=dc),
            User(name='Superman', email='superman@dc.com', team=dc),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
        ]
        for user in users:
            user.save()

        # Create workouts
        workouts = [
            Workout(name='Cardio Blast', description='High intensity cardio workout', difficulty='Hard'),
            Workout(name='Strength Training', description='Full body strength workout', difficulty='Medium'),
            Workout(name='Yoga Flow', description='Relaxing yoga session', difficulty='Easy'),
        ]
        for workout in workouts:
            workout.save()

        # Create activities
        Activity.objects.create(user=users[0], type='Running', duration=30, calories=300, date='2025-11-20')
        Activity.objects.create(user=users[1], type='Cycling', duration=45, calories=400, date='2025-11-21')
        Activity.objects.create(user=users[3], type='Swimming', duration=60, calories=500, date='2025-11-22')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=1200)
        Leaderboard.objects.create(team=dc, points=1100)


        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))
