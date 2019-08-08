const IORedis = require('ioredis');
const Objelion = require('objelion');

const redis = new IORedis({
  port: process.env.REDIS_PORT || 63799,
  host: process.env.REDIS_HOST || 'localhost',
});

module.exports = new Objelion({
  cacheClient: redis,
  enabled: true,
  expireTime: 120,
  cacheKeyRule: (fnName, args) => {
    return `${fnName}-${JSON.stringify(args)}`;
  },
}).createCacheMiddleware();
