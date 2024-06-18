from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy 
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

class User(db.Model): 
   
    __tablename__ = 'users' 
   
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False) 
    email = db.Column(db.String, nullable=False, unique=True) 
    phone = db.Column(db.String, nullable=False) 
    username = db.Column(db.String, nullable = False, unique = True)  
    _password_hash = db.Column(db.String, nullable = False) 
    billing = db.Column(db.String) 
    manager_id = db.Column(db.Integer, db.ForeignKey('managers.id'))  

    @hybrid_property
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


class Manager(db.Model, SerializerMixin): 
   
    __tablename__ = 'managers' 
    
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String, nullable=False)  
    email = db.Column(db.String, nullable=False, unique=True) 
    services = db.Column(db.String) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  
    
    clients = db.relationship('User', back_populates='managers')  

    serialize_rules = ('-user.managers')



class Review(db.Model, SerializerMixin): 
   
    __tablename__ = 'reviews' 
    
    id = db.Column(db.Integer, primary_key=True)  
    review = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  
    
    client = db.relationship('User', backref = 'reviews') 

    serialize_rules = ('-user.reviews')



