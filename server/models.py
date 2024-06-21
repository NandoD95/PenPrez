from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy 
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt


from config import db

class User(db.Model,SerializerMixin): 
   
    __tablename__ = 'users' 
   
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False) 
    email = db.Column(db.String, nullable=False, unique=True) 
    phone = db.Column(db.String, nullable = False) 
    username = db.Column(db.String, nullable = False, unique = True)  
    _password_hash = db.Column(db.String, nullable = False)  
    
    manager = db.relationship("Manager", back_populates = "users") 
    serialize_rules = ('-manager', '-reviews')

    @property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    
    #Create an authenticate method that uses bcyrpt to verify the password against the hash in the DB with bcrypt.check_password_hash
    def authenticate(self, password):
        return Bcrypt.check_password_hash(self.password_hash, 'password')

    @validates('email')
    def validate_email(self, key, address):
        if address is None:
            return address
        if '@' not in address:
            raise ValueError("Invalid email address")
        return address 
    
    @validates('phone') 
    def validate_phone(self, key, phone): 
        if phone is None: 
            return phone 
        if len(phone) != 10: 
            raise ValueError("Invalid phone number") 
        return phone

    def __repr__(self):
        return f'<User id={self.id} username={self.username} >'

class Manager(db.Model, SerializerMixin): 
   
    __tablename__ = 'managers' 
    
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False)  
    email = db.Column(db.String, nullable=False, unique=True) 
    services = db.Column(db.String) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  
    
    users = db.relationship('User', back_populates='manager')  

    serialize_rules = ('-users.manager',) 



class Review(db.Model, SerializerMixin): 
   
    __tablename__ = 'reviews' 
    
    id = db.Column(db.Integer, primary_key=True)  
    review = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) 
    manager_id = db.Column(db.Integer, db.ForeignKey('managers.id'))
    
    user = db.relationship('User', backref = 'reviews') 
    manager = db.relationship('Manager', backref = 'reviews')

    serialize_rules = ('-user.reviews', '-manager.reviews') 
    

    @validates('user_id') 
    def validate_user_id(self, key, user_id): 
        if user_id is None: 
            raise ValueError("review must need a user ID ")
        return user_id  
    
    @validates('manager_id') 
    def validate_manager_id(self, key, manager_id): 
        if manager_id is None: 
            raise ValueError("review must need a manager ID ") 
        return manager_id
    
    @validates('review') 
    def validate_review(self, key, review): 
        if review is None: 
            raise ValueError("review must not be empty") 
        return review

