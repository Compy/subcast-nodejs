var Request = require('./request');

/**
 * Subcast API Client
 * @see http://subcast.io/developers
 * @param {Object} options
 *
 * <pre>
 *  options = {
 *      timeout: 5000, // ms
 *      maxSockets: 100 // pooling
 *      key: 'xxxxxxxxx', // api key
 *      proxy: 'http://internal-vpcp-hogehoge' // http proxy(or :false ,if you dont use)
 *  }
 * </pre>
 * @constructor
 */
function Subcast(options) {
    if (typeof(options) === "string") {
      options = {key: options};
    }
    this.options = options = options || {};
    this.request = new Request(options);
}

module.exports = Subcast;

Subcast.prototype.url = 'http://localhost:3000/api';

/**
 * Post Message
 * @param {String} roomId
 * @param {String} from  Name the message will appear be sent from.
 * @param {String} message
 * @param {Function} callback
 */
Subcast.prototype.startProcess = function(process, email, callback) {
    this.request.get(this.url, '/v1/start/' + this.options.key + '/' + process + '/' + email, {}, function(err, result) {
        if (err) {
            return callback(err);
        }

        callback(null, result);
    });
};

/**
 * Post Message
 * @param {String} roomId
 * @param {String} from  Name the message will appear be sent from.
 * @param {String} message
 * @param {Function} callback
 */
Subcast.prototype.completeProcess = function(process, email, callback) {
    this.request.get(this.url, '/v1/complete/' + this.options.key + '/' + process + '/' + email, {}, function(err, result) {
        if (err) {
            return callback(err);
        }

        callback(null, result);
    });
};
