# configurable-request-log-middleware

  Hacked about to be bunyan friendly and accept an "onResponse" function

  Log an [express](https://github.com/visionmedia/express) request.

## Example

```js
var requestLog = require('configurable-request-log-middleware');

var logger = //some bunyan log instanse
var onResponseFunc = //some instance of configurable-on-response

var app = express();


app.use(requestLog(logger, onResponseFunc));

```

## API

### requestLog(logger, onResponseFunc)

  Return a request logger middleware.


## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

