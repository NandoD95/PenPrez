#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Manager, Review

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!  

        print("Deleting all records...")
        User.query.delete() 
        Manager.query.delete() 
        db.session.commit()
        
        print("Creating Users...")  
        u1 = User ( 
            username="jojo", 
            name="Joel John", 
            email="joeljohn@gmail.com", 
            _password_hash="299992", 
            phone="1234567890"
        )
        u2 = User ( 
            username="fern", 
            name="Fernando", 
            email="fernando@gmail.com", 
            _password_hash="12345", 
            phone= "7185463214"
        ) 
        db.session.add(u1) 
        db.session.add(u2)
        db.session.commit() 
        
        for i in range(5):

              
            user = User(username=fake.user_name(), name=fake.name(), email=fake.email(), _password_hash="password", phone="2345678912") 
            db.session.add(user)
            db.session.commit() 

        print("Creating Managers...") 
        m1 = Manager( 
            name= "Jake Smith", 
            email="jakesmith@gmail.com",
            services="social media",
            user_id=1 
        )
        m2 = Manager( 
            name="Emily Chen", 
            email="emilychen@gmail.com", 
            services="sms", 
            user_id=2 
        )
          
        db.session.add(m1) 
        db.session.add(m2)
        db.session.commit()

        print("Creating Reviews...") 
        r1 = Review( 
            review="these guys are really helpful", 
            user_id=1,
            manager_id=1
        ) 
        r2 = Review( 
            review="she gave me a good idea for my business", 
            user_id=1,
            manager_id=2
        )  
        db.session.add(r1) 
        db.session.add(r2)
        db.session.commit()
    


