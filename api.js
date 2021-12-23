const express = require('express');
const app = express();

const server = app.listen(3001, () => {
  console.log('Start Server ... : localhost:3001');
});

app.get('/api/users/:id', async (req, res) => {
  let {
    id
  } = req.params;

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

})


app.get('/api/users/info/:id', async (req, res) => {
  let {
    id
  } = req.params;

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

})