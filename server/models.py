from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy 
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy.orm import validates


from config import db, bcrypt

class User(db.Model): 
   
    __tablename__ = 'users' 
   
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False) 
    email = db.Column(db.String, nullable=False, unique=True) 
    phone = db.Column(db.String, nullable = False) 
    username = db.Column(db.String, nullable = False, unique = True)  
    _password_hash = db.Column(db.String, nullable = False)  
    manager = db.relationship("Manager", back_populates = "users")

    @property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

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

    serialize_rules = ('-users.manager')



class Review(db.Model, SerializerMixin): 
   
    __tablename__ = 'reviews' 
    
    id = db.Column(db.Integer, primary_key=True)  
    review = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  
    
    user = db.relationship('User', backref = 'reviews') 

    serialize_rules = ('-user.reviews')

    @validates('user_id') 
    def validate_user_id(self, key, user_id): 
        if user_id is None: 
            raise ValueError("review must need a user ID ")
        return user_id  
    
    @validates('review') 
    def validate_review(self, key, review): 
        if review is None: 
            raise ValueError("review must not be empty") 
        return review

