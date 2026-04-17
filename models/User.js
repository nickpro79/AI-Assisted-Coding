const db = require('../database');
const bcrypt = require('bcryptjs');

class User {
  static create(username, email, password, callback) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.run(sql, [username, email, hashedPassword], function(err) {
      callback(err, { id: this.lastID, username, email });
    });
  }

  static findByEmail(email, callback) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [email], callback);
  }

  static findByUsername(username, callback) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.get(sql, [username], callback);
  }
}

module.exports = User;