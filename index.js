
var extend = require('extend');
var onResponse = require('on-response');

/**
 * Expose `generate`.
 */

module.exports = generate;

/**
 * Generate a request logging middleware.
 *
 * @param {Logger} logger
 * @param {Logger} onResponse
 * @return {Function}
 */

function generate (logger, onResponse) {
  return function requestLog (req, res, next) {
    onResponse(req, res, function (err, summary) {
      var status = summary.response.status;
      var log = logger.info;
      if (status >= 500) {
        log = logger.error;
        extend(summary.request, { body: req.body });
      }
      else if (status >= 400) {
        log = logger.warn;
        extend(summary.request, { body: req.body });
      }

      var msg = format(summary);
      log.bind(logger)(summary, msg);
    });

    next();
  };
}

/**
 * Formats the request log message.
 *
 * @param {Object} summary
 * @return {String}
 */

function format (summary) {
  var request = summary.request;
  var response = summary.response;
  var msg = 'Handled';
  msg += ' (' + response.status + ') ';
  return msg + request.method + ' ' + request.url + ' ' +
    response.time + 'ms';
}
