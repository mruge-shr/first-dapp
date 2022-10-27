const express = require("express");
const Gun = require("gun");

const app = express();
const port = process.env.PORT || 3000;

app.use(Gun.serve);
app.use('/client', express.static('client.html'))

app.use('/graph', express.static('graph.html'))

const server = app.listen(port);

gun = Gun({ web: server });

//  SEED DATA 

// gun = Gun('http://localhost:3000/gun')

nodes = gun.get('mynodes')

alice = gun.get('alice').put({name: 'alice', age: 22});
bob = gun.get('bob').put({name: 'bob', age: 24});

nodes.set(bob)
nodes.set(alice)

alice.get('marriedTo').put(bob)
bob.get('marriedTo').put(alice)

