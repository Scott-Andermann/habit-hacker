var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'habit-hacker.cgkfmrodpy3o.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Renthal1!',
    database: 'sys'
})


const userId = 2
const newActivity = {
    "title": "walking around",
    "date": "2022-10-06",
    "description": "great",
    "link": "https://www.strava.com/activities/8084505727",
    "duration": 24001,
    "distance": 4.01,
    "activityType": "walk",
    "userId": userId,
    "points": 2
}
const new_user = {
    joinDate: '2022-11-08',
    birthDate: '1990-05-21',
    email: "kelseyandermann@gmail.com",
    groupName: "none",
    username: "Kelsey",
    pw_field: "password",
    pw_reset: "reset",
    profileUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
}

// ****************************************************** 
// get user info
// con.connect(function(err) {
//     if (err) throw err;
//     const query = `SELECT * FROM users WHERE id = ?`;
//     const values = [userId]
//     con.query(query, values, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// })

// ****************************************************** 
// get all activities by user
// con.connect(function(err) {
//     if (err) throw err;
//     const query = `SELECT * FROM activities WHERE userId = ?`;
//     const values = [userId]
//     con.query(query, values, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
//     con.end()
// })

// ****************************************************** 
// get all activities by user in last 30 days
// con.connect(function(err) {
//     if (err) throw err;
//     const date = new Date()
//     const newDate = new Date(date.setMonth(date.getMonth()-1));
//     console.log(newDate);
//     const query = `SELECT * FROM activities WHERE userId = ? AND date_field > ?`;
//     const values = [userId, newDate]
//     con.query(query, values, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// })

// ****************************************************** 
// add user
// con.connect(function(err) {
//     if (err) throw err;
//     const query = `INSERT INTO users (joinDate, birthDate, email, username, profileUrl, pw_field, pw_reset, groupName) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`
//     const values = [new_user.joinDate, new_user.birthDate, new_user.email, new_user.username, new_user.profileUrl, new_user.pw_field, new_user.pw_reset, new_user.groupName]
//     console.log("Connected!");
//     con.query(query, values, function(err, rows) {
//         if (err) throw err;
//         console.log('new entry created: ', rows.insertId);
//     })
// })

// ***********************************************************************
// add activity
// con.connect(function(err) {
//     if (err) throw err;

//     const query = `INSERT INTO activities (userId, date_field, actType, title, actDescription, duration, mileage, points, externalLink) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
//     const values = [newActivity.userId, newActivity.date, newActivity.activityType, newActivity.title, newActivity.description, newActivity.duration, newActivity.distance, newActivity.points, newActivity.link]
//     console.log("Connected!");
//     con.query(query, values, function(err, rows) {
//         if (err) throw err;
//         console.log('new entry created: ', rows.insertId);
//     })
// })

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query('SELECT * FROM activities', function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// })