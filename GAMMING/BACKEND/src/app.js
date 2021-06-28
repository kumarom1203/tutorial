require('dotenv').config();
const express = require('express');

var cors = require('cors');
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

const adminLoginRouter = require("./api/admin/login/loginRouter");
const adminUserRouter = require("./api/admin/user/userRouter");
const adminGameRouter = require("./api/admin/game/gameRouter");

const {initialConditionModel, updateAR, copyToLogTable, getTeamModel, showCardSelectionModel} = require("./socketModel");

const facilitatorLoginRouter = require("./api/facilitator/login/loginRouter");
const facilitatorCodeRouter = require("./api/facilitator/code/codeRouter");
const participantLoginRouter = require("./api/participant/login/loginRouter");
const participantCodeRouter = require("./api/participant/code/codeRouter");

/*
s
*/

const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use("/admin/login", adminLoginRouter);
app.use("/admin/user", adminUserRouter);
app.use("/admin/game", adminGameRouter);

app.use("/facilitator/login", facilitatorLoginRouter);
app.use("/facilitator/code", facilitatorCodeRouter);

app.use("/participant/login", participantLoginRouter);
app.use("/participant/code", participantCodeRouter);

/*
-------------------SOCKET FUNCTIONALITY----------------------------
*/

io.on('connection', function(socket) {

    socket.on('join_workshop', function(workshop) {
        console.log('SOME ONE JOIN THE WORKSHOP ', workshop);
        socket.join(workshop);
    });


    socket.on('join_team', function(team) {
        console.log('SOME ONE JOIN THE TEAM - ', team);
        socket.join(team);
    });


    socket.on('changeSlide_socket', function(team_id, msg) {
        io.sockets.in(team_id).emit('changeSlide_socket_rcv', msg);   
    });


    socket.on('initialConditionBySocket', function(team_id, msg) {
        console.log('initialConditionBySocket');
        condition = {
            team_id: team_id,
            workshop_id: msg.workshop_id
        };

        initialConditionModel(condition, (err, results) => {
            io.sockets.in(team_id).emit('receive_initialConditionBySocket', results);
        });

    });


    socket.on('getTeamList', function(team_id, msg) {
        console.log('getTeamList');
        condition = {
            team_id: team_id,
            workshop_id: msg.workshop_id
        };

        getTeamModel(condition, (err, results) => {
            io.sockets.in(team_id).emit('receive_getTeamList', results);
        });

    });


    socket.on('showCardSelection', function(workshop_id, msg) {
        console.log('showCardSelection');
        condition = {
            team_id: msg.team_id,
            workshop_id: msg.workshop_id
        };

        showCardSelectionModel(condition, (err, results) => {
            
            io.sockets.in(workshop_id).emit('receive_showCardSelection', results);
        });

    });


    socket.on('endMarketing', function(workshop_id, msg) {
    updateAR(msg, (err, results) => {
        initialConditionModel(msg, (err, results) => {
            console.log('EMITING DATA FROM HERE');
            console.log('====================================================================');
            io.sockets.in(workshop_id).emit('receive_endMarketing', results);
        });

        copyToLogTable(msg, (err, results) => {
          
        });

        });
        
    });
    



socket.on('game_page_data_for_workshop', function(workshop_id, msg) {
    updateAR(msg, (err, results) => {
        initialConditionModel(msg, (err, results) => {
            console.log('EMITING DATA FROM HERE');
            console.log('====================================================================');
            io.sockets.in(workshop_id).emit('receive_game_page_data_for_workshop', results);
        });

        copyToLogTable(msg, (err, results) => {
          
        });

        });
        
    });




socket.on('game_page_data', function(team_id, msg) {
    updateAR(msg, (err, results) => {
        initialConditionModel(msg, (err, results) => {
            console.log('EMITING DATA FROM HERE');
            console.log('====================================================================');
            io.sockets.in(team_id).emit('receive_game_page_data', results);
        });

        copyToLogTable(msg, (err, results) => {
          
        });

        });
        
    });



socket.on('startMarketingsock', function(workshop_id, msg) {
    updateAR(msg, (err, results) => {
        initialConditionModel(msg, (err, results) => {
            console.log('EMITING DATA FROM HERE');
            console.log('====================================================================');
            io.sockets.in(workshop_id).emit('receive_startMarketingsock', results);
        });

        copyToLogTable(msg, (err, results) => {
          
        });

        });
        
    });

socket.on('startGame', function(workshop_id, msg) {
    console.log('startGame');
            var results = {};
            io.sockets.in(workshop_id).emit('receive_startGame', results);
  
 });


});

/*
-------------------SOCKET FUNCTIONALITY----------------------------
*/





app.get('/', function(req, res) {
    res.send('Hello Condair Gamming World!');
})

http.listen(process.env.APP_PORT, () => {
    console.log("Srever up and running at port", process.env.APP_PORT);
})