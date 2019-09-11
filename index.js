const spdlog = require('bindings')('node-spdlog-daily')
let _instance = {};
'use strict';

function argsToStr(arg) {
    var args = Array.prototype.slice.call(arg)
    args = args.map((item, i) => {
        if (Array.isArray(item)) {
            return JSON.stringify(item);
        }
        if (typeof item == 'object') {
            return JSON.stringify(item);
        }
        return item;
    })
    
    return args;
}

class DailyLogger extends spdlog.Logger {
    constructor(name, filename, hour, minute) {
        super('daily_logger', name, filename, hour, minute);
    }
    
    critical() {
        var args = argsToStr(arguments)
        if (process.env.NODE_ENV == 'production') {
            super.critical(args.join(' '));
        } else {
            console.log(args.join(' '));
        }
    }
    
    error() {
        var args = argsToStr(arguments)
        if (process.env.NODE_ENV == 'production') {
            super.error(args.join(' '));
        } else {
            console.error(args.join(' '));
        }
    }
    
    warn() {
        var args = argsToStr(arguments)
        if (process.env.NODE_ENV == 'production') {
            super.warn(args.join(' '));
        } else {
            console.war(args.join(' '));
        }
    }
    
    info() {
        var args = argsToStr(arguments)
        if (process.env.NODE_ENV == 'production') {
            super.info(args.join(' '));
        } else {
            console.log(args.join(' '));
        }
    }
    
    debug() {
        var args = argsToStr(arguments)
        if (process.env.NODE_ENV == 'production') {
            super.debug(args.join(' '));
        } else {
            console.debug(args.join(' '));
        }
    }
    
    trace() {
        var args = argsToStr(arguments)
        if (process.env.NODE_ENV == 'production') {
            super.trace(args.join(' '));
        } else {
            console.trace(args.join(' '));
        }
    }
}

exports.DailyLogger = function(name, filename, hour, minute) {
    if(_instance[name]) {
        return _instance[name]
    }
    _instance[name] = new DailyLogger(name, filename, hour, minute)
    return  _instance[name]
}
