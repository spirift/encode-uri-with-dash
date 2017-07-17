const encodeURICompWithDash = function(string){ return encodeURIComponent(string.replace(/ /g, '-')); }

const encodeURIWithDash = function(string){ return encodeURI(string.replace(/ /g, '-')); }

module.exports = {
  encodeURICompWithDash: encodeURICompWithDash,
  encodeURIWithDash: encodeURIWithDash
}
