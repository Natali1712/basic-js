const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  const domainMap = domains.map(domain => {
    const domainNames = [];
    const result = [];
    const names = domain.split('.').reverse();
    names.forEach(name => {
      domainNames.push(`.${name}`);
      result.push(domainNames.join(''))
    });
    return result;
  });

  domainMap.forEach((e) => e.forEach((i) => { stats[i] = 0; }));
  domainMap.forEach((e) => e.forEach((i) => { stats[i] += 1; }));

  return stats;
}

module.exports = {
  getDNSStats
};
