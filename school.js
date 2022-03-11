const events = require('events');

class School extends events.EventEmitter {
    startPeriod = () => {
        setTimeout(() => {
            this.emit('periodStarted', {
                message: 'Period Started',
                time: new Date().toLocaleTimeString(),
            });
        }, 5000);
    };
}
module.exports = School;
