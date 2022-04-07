const EventEmitter =  require('events');

const url = 'http://mylogger.io/log'

class Logger extends EventEmitter {

    log(message) {
        // Send an HTTP request
        console.log(message);
        // Raise Event
        this.emit('messageLogged', { id: 1, url: 'http://'});
    }
}


module.exports = Logger;
