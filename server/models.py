from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt

class Client(db.Model): 
   
    __tablename__ = 'clients' 
   
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False) 
    email = db.Column(db.String, nullable=False, unique=True) 
    phone = db.Column(db.String, nullable=False) 
    username = db.Column(db.String, nullable = False, unique = True)  
    _password_hash = db.Column(db.String) 
    billing = db.Column(db.String) 
    manager_id = db.Coliumn(db.Integer, db.ForiegnKey('manager.id')) 


class Manager(db.Model): 
   
    __tablename__ = 'managers' 
    
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False)  
    email = db.Column(db.String, nullable=False, unique=True) 
    services = db.Column(db.String)  


class Review(db.Model): 
   
    __tablename__ = 'reviews' 
    
    id = db.Column(db.Integer, primary_key=True)  
    review = db.Column(db.String)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))  



