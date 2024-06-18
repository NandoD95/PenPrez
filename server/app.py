#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User

# Views go here!

@app.route('/')
def index():
     return '<h1>Project Server</h1>'  

class Users(Resource): 
    def get(self):
        users = User.query.all() 
        users_list = [user.to_dict() for user in users] 
        return clients_list, 200 

class UsersById(Resource): 
    def get(self, id):
        user = User.query.filter_by(id = id).first() 
        if user: 
            return user.to_dict(), 200 
        else: 
            return {"message": "User not found"}, 404

class SignUp(Resource):
    def post(self):  
        try:
            data = request.get_json() 
            user = User(username = data['username'], email = data['email']) 
            user._password_hash = data['password'] 
            db.session.add(user) 
            db.session.commit() 
            return {'message': 'User created successfully'}, 201 
        except KeyError as k_error:
            return make_response({"error": "Missing required field: " + str(k_error)}, 422) 

class CheckSession(Resource):
    def get(self):

        user_id = session["user_id"]
        if user_id:
            user = User.query.filter_by(id = user_id).first()
            return make_response(user.to_dict(), 200)
        else:
            return make_response({"error": "No session found"}, 401)

class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']
        user = User.query.filter(User.username == username).first()
        if user:
            try: 
                if user.authenticate(password):
                    session['user_id'] = user.id
                    return make_response(user.to_dict(), 200)
            except KeyError as k_error:
                return make_response({"error": "Missing required field: " + str(k_error)}, 422)
        
        return make_response({'error': '401 Unauthorized'}, 401) 

class Logout(Resource):
     def delete(self):
        if 'user_id' not in session or session['user_id'] is None:
            return make_response({"error": "No user logged in"}, 401)

        session['user_id'] = None
        
        return {}, 204  

api.add_resource(Users, '/users') 
api.add_resource(UsersById, '/users/<int:id>')
api.add_resource(SignUp, '/signup', endpoint='signup') 
api.add_resource(CheckSession, '/check_session', endpoint='check_session') 
api.add_resource(Login, '/login', endpoint='login') 
api.add_resource(Logout, '/logout', endpoint='logout')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

