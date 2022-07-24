const events = require('events');
const util = require('util');

const myEmitter = new events();

myEmitter.on('demo',function(params) {
   console.log(params); 
});

myEmitter.emit('demo','my personal emmiter is working fine...!!');

const teams = function(name){
    this.name = name;
}

util.inherits(teams,events);

const India = new teams("Cricket");
const UK = new teams("HandBall");
const US = new teams("BaseBall");

const teamsArray = [India,US,UK];

teamsArray.forEach(function(team) {
    team.on('nation',function(nation) {
        console.log(team.name+" is "+nation+" game team..!");
    });
});

India.emit('nation','INDIA');
UK.emit('nation','England');
US.emit('nation','America');