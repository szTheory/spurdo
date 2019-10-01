import toSpurdo from '../src/index'

test('recites the preamble to the US Constitution', () => {
  const preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
  const expectedText = "We de beoble of de Unided States XDD in Order to form a more berfect Union XDD establizh Juztige XDD inzure domestig dranquilidy XDD brovide for de gomon defence XDD bromode de general Welfare XDD and secure de Bleszignz of Liberty to ourzelves and our bosteridy XDD do ordain and establizh diz gonztidution for de Unided States of Ameriga :DD"
  expect(toSpurdo(preamble)).toBe(expectedText)
})

test('changes periods to :DD smiles', () => {
  expect(toSpurdo('Hi. How are you?')).toBe('Hi :DD How are you?')
})

test('changes commas in the middle of a sentence to XD smiles', () => {
  expect(toSpurdo('One, two, three')).toBe('One XDD two XDD dree :DD')
})

test('no change in "hello"', () => {
  expect(toSpurdo('hello :D')).toBe('hello :D')
})

test('adds a smile if none', () => {
  expect(toSpurdo('dang')).toBe('dank :DD')
})

test('keeps the smile if already has one', () => {
  expect(toSpurdo('dang :D')).toBe('dank :D')
})

test('epic -> ebin', () => {
  expect(toSpurdo('epic :D')).toBe('ebin :D')
})

test('wh -> w', () => {
  expect(toSpurdo('what :D')).toBe('wat :D')
})

test('th -> d', () => {
  expect(toSpurdo('that :D')).toBe('dat :D')
})

test('af -> ab', () => {
  expect(toSpurdo('after :D')).toBe('abter :D')
})

test('ap -> ab', () => {
  expect(toSpurdo('apple :D')).toBe('abple :D')
})

test('ca -> ga', () => {
  expect(toSpurdo('cake :D')).toBe('gage :D')
})

test('ck -> g', () => {
  expect(toSpurdo('clock :D')).toBe('clogg :D')
})

test('co -> go', () => {
  expect(toSpurdo('cool :D')).toBe('gool :D')
})

test('ev -> eb', () => {
  expect(toSpurdo('even :D')).toBe('eben :D')
})

test('ex -> egz', () => {
  expect(toSpurdo('excel :D')).toBe('egzcel :D')
})

test('et -> ed', () => {
  expect(toSpurdo('poet :D')).toBe('boed :D')
})

test('iv -> ib', () => {
  expect(toSpurdo('live :D')).toBe('libe :D')
})

test('it -> id', () => {
  expect(toSpurdo('slit :D')).toBe('slid :D')
})

test('ke -> ge', () => {
  expect(toSpurdo('kernel :D')).toBe('gernel :D')
})

test('nt -> nd', () => {
  expect(toSpurdo('mint :D')).toBe('mind :D')
})

test('op -> ob', () => {
  expect(toSpurdo('open :D')).toBe('oben :D')
})

test('ot -> od', () => {
  expect(toSpurdo('otter :D')).toBe('odter :D')
})

test('po -> bo', () => {
  expect(toSpurdo('power :D')).toBe('bower :D')
})

test('pe -> be', () => {
  expect(toSpurdo('pen :D')).toBe('ben :D')
})

test('up -> ub', () => {
  expect(toSpurdo('super :D')).toBe('suber :D')
})

test('ck -> gg', () => {
  expect(toSpurdo('click :D')).toBe('cligg :D')
})

test('cr -> gr', () => {
  expect(toSpurdo('croak :D')).toBe('groak :D')
})

test('kn -> gn', () => {
  expect(toSpurdo('know :D')).toBe('gnow :D')
})

test('lt -> ld', () => {
  expect(toSpurdo('wilt :D')).toBe('wild :D')
})

test('mm -> m', () => {
  expect(toSpurdo('summer :D')).toBe('sumer :D')
})

test('pr -> br', () => {
  expect(toSpurdo('prong :D')).toBe('bronk :D')
})

test('ts -> dz', () => {
  expect(toSpurdo('hits :D')).toBe('hidz :D')
})

test('tr -> dr', () => {
  expect(toSpurdo('truck :D')).toBe('drugg :D')
})

test('as -> az', () => {
  expect(toSpurdo('gas :D')).toBe('gaz :D')
})

test('bs -> bz', () => {
  expect(toSpurdo('dibs :D')).toBe('dibz :D')
})

test('ds -> dz', () => {
  expect(toSpurdo('duds :D')).toBe('dudz :D')
})

test('fs -> fz', () => {
  expect(toSpurdo('gifs :D')).toBe('gifz :D')
})

test('gs -> gz', () => {
  expect(toSpurdo('figs :D')).toBe('figz :D')
})

test('is -> iz', () => {
  expect(toSpurdo('foolish :D')).toBe('foolizh :D')
})

test('ls -> lz', () => {
  expect(toSpurdo('kills :D')).toBe('killz :D')
})

test('ms -> mz', () => {
  expect(toSpurdo('yams :D')).toBe('yamz :D')
})

test('ns -> nz', () => {
  expect(toSpurdo('buns :D')).toBe('bunz :D')
})

test('rs -> rz', () => {
  expect(toSpurdo('towers :D')).toBe('towerz :D')
})

test('ss -> sz', () => {
  expect(toSpurdo('moss :D')).toBe('mosz :D')
})

test('us -> uz', () => {
  expect(toSpurdo('thus :D')).toBe('duz :D')
})

test('ws -> wz', () => {
  expect(toSpurdo('skews :D')).toBe('sgewz :D')
})

test('ys -> yz', () => {
  expect(toSpurdo('lays :D')).toBe('layz :D')
})

test('alk -> olk', () => {
  expect(toSpurdo('chalk :D')).toBe('cholk :D')
})

test('ing -> ign', () => {
  expect(toSpurdo('happening :D')).toBe('habbenign :D')
})

test('ic -> ig', () => {
  expect(toSpurdo('plastic :D')).toBe('plaztig :D')
})

test('ng -> nk', () => {
  expect(toSpurdo('rang :D')).toBe('rank :D')
})