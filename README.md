node-spdlog-daily
=============
This is a node addon for spdlog daily file type

Installation
------------

Install with `npm`:

``` bash
$ npm install --save node-spdlog-daily
```

Example
-------

``` js
const DailyLogger = require('node-spdlog-daily').DailyLogger

let logger = DailyLogger('daily_logger', 'daily.txt', 0, 0);
logger.info('sdscscs2222')

```

Start with NODE_ENV=production will logger to file, otherwise will call console.log