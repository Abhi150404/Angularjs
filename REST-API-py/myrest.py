from flask import Flask,jsonify,request,send_from_directory
from flask_cors import CORS, cross_origin  # type: ignore
import mysql.connector as cn 
import random as rd 
import datetime as dt 
db = cn.connect(host="localhost",user="root",password="",database="abhishek")
cr = db.cursor()

app = Flask(__name__)
CORS(app,support_credentials=True) # type: ignore

app.config['UPLOAD_FOLDER']="upload_files"
@app.route('/uploads/<filename>')
def send_uploaded_file(filename=''):
 return send_from_directory(app.config['UPLOAD_FOLDER'],filename)


@app.route('/get_data',methods=['GET'])
@cross_origin(app,support_credentials=True) # type: ignore
def load_data():
    cmd ="select * from user_info"
    cr.execute(cmd)
    dt=cr.fetchall()
    return jsonify({'all_data':dt})

@app.route('/save_data',methods=['POST'])
@cross_origin(app,support_credentials=True) # type: ignore
def save_data():
    username = request.json['user_name']
    mobileno = request.json['mobile_no']
    dob = request.json['dob']
    myfiles = request.files['uploaded_file']
    myfiles.save("upload_files/"+myfiles.filename)
    user_id = getUserID()
    password = getPassword()
    data = (user_id,username,mobileno,dob,password)
    cmd ="insert into user_info(userid,user_name,mob,dob,myfiles.filename,pwd) values(%s,%s,%s,%s,%s,%s)"
    cr.execute(cmd,data)
    db.commit()
    return jsonify({'all_data':'Data Save'});

@app.route('/delete_data',methods=['POST'])
@cross_origin(app,support_credentials=True) # type: ignore
def delete_data():
    user_id = request.json['userid']
    dt=(user_id,)
    cmd = "DELETE FROM user_info where userid =%s"
    cr.execute(cmd,dt)
    db.commit()
    return jsonify({'all_data':'Data Deleted'});

@app.route('/update_data',methods=['POST'])
@cross_origin(app,support_credentials=True) # type: ignore
def update_data():
    username =request.json['username']
    mobileno = request.json['mobile_no']
    user_id = request.json['user_id']
    dob = request.json['dob']
    dt=(username,mobileno,dob,user_id)
    cmd = 'UPDATE user_info SET user_name=%s,mob=%s,dob=%s WHERE userid=%s'
    cr.execute(cmd,dt)
    db.commit()
    return jsonify({'all_data':'Data Updated'});
    
    
def getUserID():
    ct = dt.datetime.now()
    return "STU"+str(int(ct.timestamp()))

def getPassword():
    al = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    password = "".join(rd.sample(al,8))
    return password

if __name__ == '__main__':
    app.run()
