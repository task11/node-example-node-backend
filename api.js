const express = require('express');
const app = express();
const uuidAPIkey = require('uuid-apikey');

const server = app.listen(3001, () => {
  console.log('Start Server ... : localhost:3001');
});

const key = {
  apiKey: 'B954ADP-62ZMMDK-GZMNWF3-KGN15AY',
  uuid: '5a4a4536-30bf-4a36-87e9-5e3c9c2a12ab'
} // DB에 저장해서 관리하면 된다.

app.get('/api/users/:apikey/:id', async (req, res) => {
  let {
    apikey,
    id
  } = req.params;

  if (uuidAPIkey.check(apikey, key.uuid)) {
    if (id === '1') {
      let data = [{
        "uid": 123,
        "username": "김정맨",
        "photoUrl": "111/222",
      }]
      res.send(data);
    }

    if (id === '2') {
      let data = [{
        "uid": 123123,
        "username": "김정맨222",
        "photoUrl": "111/222/333",
      }]
      res.send(data);
    }
  }




})


app.get('/api/users/info/:apikey/:id', async (req, res) => {
  let {
    apikey,
    id
  } = req.params;

  if (uuidAPIkey.check(apikey, key.uuid)) {
    if (id === '1') {
      let data = [{
        "id": 123,
        "username": "김정맨",
        "calendar": [{
          "startDate": "2021/12/20",
          "endDate": "2021/12/20"
        }],
        "toDos": [{
          "do": "wakeup",
          "done": false
        }]
      }]
      res.send(data);
    }

    if (id === '2') {
      let data = [{
        "id": 12322,
        "username": "김정맨222",
        "calendar": [{
          "startDate": "2021/12/20T13:00",
          "endDate": "2021/12/20T16:00"
        }],
        "toDos": [{
          "do": "working hard",
          "done": true
        }]
      }]
      res.send(data);

    }


  }

})