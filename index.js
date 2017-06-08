const encodeURICompWithDash = string => encodeURIComponent(string.replace(' ', '-'));

const encodeURIWithDash = string => encodeURI(string.replace(' ', '-'));

module.exports = {
  encodeURICompWithDash: encodeURICompWithDash,
  encodeURIWithDash: encodeURIWithDash
}
