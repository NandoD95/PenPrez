#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!  

        print("Deleting all records...")
        User.query.delete()

        print("Creating Users...") 
        users = []
        usernames = []
        for i in range(20):

            username = fake.user_name() 
        while username in usernames: 
            username = fake.user_name() 
            usernames.append(username) 
            user = User(username=username, name=fake.name(), email=fake.email(), _password_hash="password") 
            users.append(user) 
            db.session.add(user)
            db.session.commit() 


u1 = User ( 
    username="jojo", 
    name="Joel John", 
    email="joeljohn@gmail.com", 
    _password_hash="299992"
)


