const IORedis = require('ioredis');
const Objelion = require('objelion');

const redis = new IORedis({
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || 'redis',
});

module.exports = new Objelion({
  cacheClient: redis,
  enabled: true,
  expireTime: 15,
  cacheKeyRule: (fnName, args) => {
    return `${fnName}-${args}`;
  },
}).createCacheMiddleware();
