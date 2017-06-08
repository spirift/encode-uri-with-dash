const encodeURICompWithDash = string => encodeURIComponent(string.replace(/ /g, '-'));

const encodeURIWithDash = string => encodeURI(string.replace(/ /g, '-'));

module.exports = {
  encodeURICompWithDash: encodeURICompWithDash,
  encodeURIWithDash: encodeURIWithDash
}
