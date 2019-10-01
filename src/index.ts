// define replacements
const REPLACEMENTS = [
  ["[.]", " :DD"],
  [",", " XDD"],

  ["epic", "ebin"],

  ["wh", "w"],
  ["th", "d"],

  ["af", "ab"],
  ["ap", "ab"],
  ["ca", "ga"],
  ["ck", "gg"],
  ["co", "go"],
  ["ev", "eb"],
  ["ex", "egz"],
  ["et", "ed"],
  ["iv", "ib"],
  ["it", "id"],
  ["ke", "ge"],
  ["nt", "nd"],
  ["op", "ob"],
  ["ot", "od"],
  ["po", "bo"],
  ["pe", "be"],
  ["up", "ub"],

  ["ck", "gg"],
  ["cr", "gr"],
  ["kn", "gn"],
  ["lt", "ld"],
  ["mm", "m"],
  ["pr", "br"],
  ["ts", "dz"],
  ["tr", "dr"],

  ["as", "az"],
  ["bs", "bz"],
  ["ds", "dz"],
  ["fs", "fz"],
  ["gs", "gz"],
  ["is", "iz"],
  ["ls", "lz"],
  ["ms", "mz"],
  ["ns", "nz"],
  ["rs", "rz"],
  ["ss", "sz"],
  ["us", "uz"],
  ["ws", "wz"],
  ["ys", "yz"],

  ["alk", "olk"],
  ["ing", "ign"],

  ["ic", "ig"],
  ["ng", "nk"],
]

const SPURDO_SMILE_PATTERN = ":D"
const SPURDO_SMILE_APPEND = " :DD"

const toSpurdo = function(string: String): String {
  // apply replacements
  REPLACEMENTS.forEach(filter => {
    const replaceFrom = new RegExp(filter[0], "gi")
    string = string.replace(replaceFrom, filter[1])
  })

  // append Spurdo smile if not found
  if (string.indexOf(SPURDO_SMILE_PATTERN) < 0) {
    string = string + SPURDO_SMILE_APPEND
  }

  // return spurdo'd text
  return string
}

export default toSpurdo