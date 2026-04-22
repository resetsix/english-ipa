export type PhoneticCategory = 'monophthong' | 'diphthong' | 'consonant'
export type PhoneticFamily = 'vowel' | 'consonant'
export type MonophthongLength = 'long' | 'short'
export type ConsonantManner =
  | 'plosive'
  | 'fricative'
  | 'affricate'
  | 'nasal'
  | 'lateral'
  | 'semivowel'
export type ConsonantVoicing = 'voiceless' | 'voiced'
export type LetterPronunciationKind =
  | 'common'
  | 'hard'
  | 'soft'
  | 'reduced'
  | 'cluster'
  | 'silent'
  | 'minor'
export type LetterPronunciation = {
  phonemeId?: string
  symbol?: string
  examples: string[]
  note?: string
  kind?: LetterPronunciationKind
}
export type LetterPronunciationGroup = {
  letter: string
  pronunciations: LetterPronunciation[]
}

export type PhoneticSymbol = {
  id: string
  symbol: string
  letters: string
  sourceLabel: string
  category: PhoneticCategory
  family: PhoneticFamily
  audio: string
  length?: MonophthongLength
  manner?: ConsonantManner
  voicing?: ConsonantVoicing
}

export const categoryLabels: Record<PhoneticCategory, { title: string; eyebrow: string }> = {
  monophthong: {
    title: '单元音',
    eyebrow: 'Monophthongs',
  },
  diphthong: {
    title: '双元音',
    eyebrow: 'Diphthongs',
  },
  consonant: {
    title: '辅音',
    eyebrow: 'Consonants',
  },
}

const phoneticLetterLabels: Record<string, string> = {
  'vowel-i-long': 'ee / ea / e',
  'vowel-i-short': 'i / y',
  'vowel-e-short': 'e / ea',
  'vowel-ae-short': 'a',
  'vowel-er-long': 'er / ir / ur',
  'vowel-schwa-short': 'a / e / o',
  'vowel-uh-short': 'u / o / ou',
  'vowel-a-long': 'ar / a',
  'vowel-o-short': 'o / a',
  'vowel-aw-long': 'aw / or / au',
  'vowel-u-short': 'oo / u',
  'vowel-u-long': 'oo / u / ew',
  'diphthong-ei': 'a / ai / ay',
  'diphthong-ai': 'i / y / igh',
  'diphthong-oi': 'oi / oy',
  'diphthong-ou': 'o / oa / ow',
  'diphthong-au': 'ou / ow',
  'diphthong-ear': 'ear / eer / ere',
  'diphthong-air': 'air / are / ear',
  'diphthong-ure': 'ure / our',
  'consonant-p': 'p / pp',
  'consonant-b': 'b / bb',
  'consonant-t': 't / tt',
  'consonant-d': 'd / dd',
  'consonant-k': 'c / k / ck',
  'consonant-g': 'g / gg',
  'consonant-f': 'f / ff / ph',
  'consonant-v': 'v / ve',
  'consonant-s': 's / ss / c',
  'consonant-z': 'z / s',
  'consonant-th-soft': 'th',
  'consonant-th-voice': 'th',
  'consonant-sh': 'sh / ti / ci',
  'consonant-zh': 's / si',
  'consonant-h': 'h / wh',
  'consonant-r': 'r / rr',
  'consonant-ch': 'ch / tch',
  'consonant-j': 'j / g / dge',
  'consonant-tr': 'tr',
  'consonant-dr': 'dr',
  'consonant-ts': 'ts',
  'consonant-dz': 'ds / dz',
  'consonant-m': 'm / mm',
  'consonant-n': 'n / nn',
  'consonant-ng': 'ng / n',
  'consonant-l': 'l / ll',
  'consonant-w': 'w / wh',
  'consonant-y': 'y',
}

const getSourceLabel = (letters: string) => {
  const firstSpelling = letters.split('/')[0]?.trim() ?? ''
  if (/^[a-z]$/i.test(firstSpelling)) {
    const letter = firstSpelling.toLowerCase()
    return `${letter.toUpperCase()}/${letter}`
  }

  return '独立音标'
}

const phoneticSymbolData: Omit<PhoneticSymbol, 'letters' | 'sourceLabel'>[] = [
  {
    id: 'vowel-i-long',
    symbol: '[iː]',
    category: 'monophthong',
    family: 'vowel',
    length: 'long',
    audio: '/audio/vowel-i-long.mp3',
  },
  {
    id: 'vowel-i-short',
    symbol: '[ɪ]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-i-short.mp3',
  },
  {
    id: 'vowel-e-short',
    symbol: '[e]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-e-short.mp3',
  },
  {
    id: 'vowel-ae-short',
    symbol: '[æ]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-ae-short.mp3',
  },
  {
    id: 'vowel-er-long',
    symbol: '[ɜː]',
    category: 'monophthong',
    family: 'vowel',
    length: 'long',
    audio: '/audio/vowel-er-long.mp3',
  },
  {
    id: 'vowel-schwa-short',
    symbol: '[ə]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-schwa-short.mp3',
  },
  {
    id: 'vowel-uh-short',
    symbol: '[ʌ]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-uh-short.mp3',
  },
  {
    id: 'vowel-a-long',
    symbol: '[ɑː]',
    category: 'monophthong',
    family: 'vowel',
    length: 'long',
    audio: '/audio/vowel-a-long.mp3',
  },
  {
    id: 'vowel-o-short',
    symbol: '[ɒ]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-o-short.mp3',
  },
  {
    id: 'vowel-aw-long',
    symbol: '[ɔː]',
    category: 'monophthong',
    family: 'vowel',
    length: 'long',
    audio: '/audio/vowel-aw-long.mp3',
  },
  {
    id: 'vowel-u-short',
    symbol: '[ʊ]',
    category: 'monophthong',
    family: 'vowel',
    length: 'short',
    audio: '/audio/vowel-u-short.mp3',
  },
  {
    id: 'vowel-u-long',
    symbol: '[uː]',
    category: 'monophthong',
    family: 'vowel',
    length: 'long',
    audio: '/audio/vowel-u-long.mp3',
  },
  {
    id: 'diphthong-ei',
    symbol: '[eɪ]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-ei.mp3',
  },
  {
    id: 'diphthong-ai',
    symbol: '[aɪ]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-ai.mp3',
  },
  {
    id: 'diphthong-oi',
    symbol: '[ɔɪ]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-oi.mp3',
  },
  {
    id: 'diphthong-ou',
    symbol: '[əʊ]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-ou.mp3',
  },
  {
    id: 'diphthong-au',
    symbol: '[aʊ]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-au.mp3',
  },
  {
    id: 'diphthong-ear',
    symbol: '[ɪə]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-ear.mp3',
  },
  {
    id: 'diphthong-air',
    symbol: '[eə]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-air.mp3',
  },
  {
    id: 'diphthong-ure',
    symbol: '[ʊə]',
    category: 'diphthong',
    family: 'vowel',
    audio: '/audio/diphthong-ure.mp3',
  },
  {
    id: 'consonant-p',
    symbol: '[p]',
    category: 'consonant',
    family: 'consonant',
    manner: 'plosive',
    voicing: 'voiceless',
    audio: '/audio/consonant-p.mp3',
  },
  {
    id: 'consonant-b',
    symbol: '[b]',
    category: 'consonant',
    family: 'consonant',
    manner: 'plosive',
    voicing: 'voiced',
    audio: '/audio/consonant-b.mp3',
  },
  {
    id: 'consonant-t',
    symbol: '[t]',
    category: 'consonant',
    family: 'consonant',
    manner: 'plosive',
    voicing: 'voiceless',
    audio: '/audio/consonant-t.mp3',
  },
  {
    id: 'consonant-d',
    symbol: '[d]',
    category: 'consonant',
    family: 'consonant',
    manner: 'plosive',
    voicing: 'voiced',
    audio: '/audio/consonant-d.mp3',
  },
  {
    id: 'consonant-k',
    symbol: '[k]',
    category: 'consonant',
    family: 'consonant',
    manner: 'plosive',
    voicing: 'voiceless',
    audio: '/audio/consonant-k.mp3',
  },
  {
    id: 'consonant-g',
    symbol: '[g]',
    category: 'consonant',
    family: 'consonant',
    manner: 'plosive',
    voicing: 'voiced',
    audio: '/audio/consonant-g.mp3',
  },
  {
    id: 'consonant-f',
    symbol: '[f]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiceless',
    audio: '/audio/consonant-f.mp3',
  },
  {
    id: 'consonant-v',
    symbol: '[v]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiced',
    audio: '/audio/consonant-v.mp3',
  },
  {
    id: 'consonant-s',
    symbol: '[s]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiceless',
    audio: '/audio/consonant-s.mp3',
  },
  {
    id: 'consonant-z',
    symbol: '[z]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiced',
    audio: '/audio/consonant-z.mp3',
  },
  {
    id: 'consonant-th-soft',
    symbol: '[θ]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiceless',
    audio: '/audio/consonant-th-soft.mp3',
  },
  {
    id: 'consonant-th-voice',
    symbol: '[ð]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiced',
    audio: '/audio/consonant-th-voice.mp3',
  },
  {
    id: 'consonant-sh',
    symbol: '[ʃ]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiceless',
    audio: '/audio/consonant-sh.mp3',
  },
  {
    id: 'consonant-zh',
    symbol: '[ʒ]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiced',
    audio: '/audio/consonant-zh.mp3',
  },
  {
    id: 'consonant-h',
    symbol: '[h]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiceless',
    audio: '/audio/consonant-h.mp3',
  },
  {
    id: 'consonant-r',
    symbol: '[r]',
    category: 'consonant',
    family: 'consonant',
    manner: 'fricative',
    voicing: 'voiced',
    audio: '/audio/consonant-r.mp3',
  },
  {
    id: 'consonant-ch',
    symbol: '[tʃ]',
    category: 'consonant',
    family: 'consonant',
    manner: 'affricate',
    voicing: 'voiceless',
    audio: '/audio/consonant-ch.mp3',
  },
  {
    id: 'consonant-j',
    symbol: '[dʒ]',
    category: 'consonant',
    family: 'consonant',
    manner: 'affricate',
    voicing: 'voiced',
    audio: '/audio/consonant-j.mp3',
  },
  {
    id: 'consonant-tr',
    symbol: '[tr]',
    category: 'consonant',
    family: 'consonant',
    manner: 'affricate',
    voicing: 'voiceless',
    audio: '/audio/consonant-tr.mp3',
  },
  {
    id: 'consonant-dr',
    symbol: '[dr]',
    category: 'consonant',
    family: 'consonant',
    manner: 'affricate',
    voicing: 'voiced',
    audio: '/audio/consonant-dr.mp3',
  },
  {
    id: 'consonant-ts',
    symbol: '[ts]',
    category: 'consonant',
    family: 'consonant',
    manner: 'affricate',
    voicing: 'voiceless',
    audio: '/audio/consonant-ts.mp3',
  },
  {
    id: 'consonant-dz',
    symbol: '[dz]',
    category: 'consonant',
    family: 'consonant',
    manner: 'affricate',
    voicing: 'voiced',
    audio: '/audio/consonant-dz.mp3',
  },
  {
    id: 'consonant-m',
    symbol: '[m]',
    category: 'consonant',
    family: 'consonant',
    manner: 'nasal',
    voicing: 'voiced',
    audio: '/audio/consonant-m.mp3',
  },
  {
    id: 'consonant-n',
    symbol: '[n]',
    category: 'consonant',
    family: 'consonant',
    manner: 'nasal',
    voicing: 'voiced',
    audio: '/audio/consonant-n.mp3',
  },
  {
    id: 'consonant-ng',
    symbol: '[ŋ]',
    category: 'consonant',
    family: 'consonant',
    manner: 'nasal',
    voicing: 'voiced',
    audio: '/audio/consonant-ng.mp3',
  },
  {
    id: 'consonant-l',
    symbol: '[l]',
    category: 'consonant',
    family: 'consonant',
    manner: 'lateral',
    voicing: 'voiced',
    audio: '/audio/consonant-l.mp3',
  },
  {
    id: 'consonant-w',
    symbol: '[w]',
    category: 'consonant',
    family: 'consonant',
    manner: 'semivowel',
    voicing: 'voiced',
    audio: '/audio/consonant-w.mp3',
  },
  {
    id: 'consonant-y',
    symbol: '[j]',
    category: 'consonant',
    family: 'consonant',
    manner: 'semivowel',
    voicing: 'voiced',
    audio: '/audio/consonant-y.mp3',
  },
]

export const phoneticSymbols = phoneticSymbolData.map((item) => ({
  ...item,
  letters: phoneticLetterLabels[item.id] ?? '',
  sourceLabel: getSourceLabel(phoneticLetterLabels[item.id] ?? ''),
})) satisfies PhoneticSymbol[]

export const phoneticCategories: PhoneticCategory[] = ['monophthong', 'diphthong', 'consonant']

export const letterPronunciations: LetterPronunciationGroup[] = [
  {
    letter: 'A',
    pronunciations: [
      { phonemeId: 'diphthong-ei', examples: ['name', 'cake', 'late', 'game'] },
      { phonemeId: 'vowel-ae-short', examples: ['cat', 'apple', 'bag', 'hat'] },
      { phonemeId: 'vowel-a-long', examples: ['car', 'father', 'class', 'park'] },
      { phonemeId: 'vowel-aw-long', examples: ['all', 'water', 'talk', 'ball'] },
      {
        phonemeId: 'vowel-schwa-short',
        examples: ['about', 'ago', 'sofa', 'banana'],
        kind: 'reduced',
      },
    ],
  },
  {
    letter: 'B',
    pronunciations: [{ phonemeId: 'consonant-b', examples: ['bad', 'boy', 'book', 'baby'] }],
  },
  {
    letter: 'C',
    pronunciations: [
      { phonemeId: 'consonant-k', examples: ['cat', 'cup', 'music', 'coat'], kind: 'hard' },
      { phonemeId: 'consonant-s', examples: ['city', 'cell', 'face', 'nice'], kind: 'soft' },
      { phonemeId: 'consonant-ch', examples: ['cello', 'church', 'much', 'child'] },
    ],
  },
  {
    letter: 'D',
    pronunciations: [
      { phonemeId: 'consonant-d', examples: ['dog', 'day', 'desk', 'red'] },
      { phonemeId: 'consonant-j', examples: ['educate', 'soldier', 'procedure', 'edge'] },
    ],
  },
  {
    letter: 'E',
    pronunciations: [
      { phonemeId: 'vowel-e-short', examples: ['bed', 'pen', 'egg', 'red'] },
      { phonemeId: 'vowel-i-long', examples: ['he', 'she', 'even', 'me'] },
      {
        phonemeId: 'vowel-schwa-short',
        examples: ['open', 'silent', 'problem', 'moment'],
        kind: 'reduced',
      },
      { phonemeId: 'vowel-er-long', examples: ['her', 'term', 'serve', 'verb'] },
      { phonemeId: 'diphthong-ear', examples: ['here', 'mere', 'sphere', 'deer'] },
    ],
  },
  {
    letter: 'F',
    pronunciations: [{ phonemeId: 'consonant-f', examples: ['fish', 'food', 'leaf', 'four'] }],
  },
  {
    letter: 'G',
    pronunciations: [
      { phonemeId: 'consonant-g', examples: ['go', 'game', 'big', 'green'], kind: 'hard' },
      { phonemeId: 'consonant-j', examples: ['giant', 'gym', 'age', 'gem'], kind: 'soft' },
    ],
  },
  {
    letter: 'H',
    pronunciations: [{ phonemeId: 'consonant-h', examples: ['he', 'hat', 'house', 'home'] }],
  },
  {
    letter: 'I',
    pronunciations: [
      { phonemeId: 'diphthong-ai', examples: ['time', 'bike', 'find', 'like'] },
      { phonemeId: 'vowel-i-short', examples: ['sit', 'fish', 'milk', 'big'] },
      { phonemeId: 'vowel-er-long', examples: ['bird', 'girl', 'first', 'shirt'] },
      {
        phonemeId: 'vowel-schwa-short',
        examples: ['pencil', 'possible', 'family', 'cousin'],
        kind: 'reduced',
      },
      { phonemeId: 'vowel-i-long', examples: ['machine', 'police', 'ski', 'taxi'] },
    ],
  },
  {
    letter: 'J',
    pronunciations: [{ phonemeId: 'consonant-j', examples: ['jam', 'job', 'June', 'jump'] }],
  },
  {
    letter: 'K',
    pronunciations: [{ phonemeId: 'consonant-k', examples: ['kite', 'keep', 'book', 'key'] }],
  },
  {
    letter: 'L',
    pronunciations: [{ phonemeId: 'consonant-l', examples: ['leg', 'light', 'full', 'tall'] }],
  },
  {
    letter: 'M',
    pronunciations: [{ phonemeId: 'consonant-m', examples: ['man', 'moon', 'time', 'milk'] }],
  },
  {
    letter: 'N',
    pronunciations: [
      { phonemeId: 'consonant-n', examples: ['no', 'name', 'ten', 'nine'] },
      { phonemeId: 'consonant-ng', examples: ['bank', 'think', 'uncle', 'long'] },
    ],
  },
  {
    letter: 'O',
    pronunciations: [
      { phonemeId: 'diphthong-ou', examples: ['go', 'home', 'note', 'old'] },
      { phonemeId: 'vowel-o-short', examples: ['hot', 'dog', 'box', 'not'] },
      { phonemeId: 'vowel-uh-short', examples: ['son', 'love', 'come', 'money'] },
      { phonemeId: 'vowel-u-long', examples: ['do', 'move', 'who', 'shoe'] },
      { phonemeId: 'vowel-aw-long', examples: ['or', 'horse', 'more', 'door'] },
      {
        phonemeId: 'vowel-schwa-short',
        examples: ['today', 'common', 'control', 'lemon'],
        kind: 'reduced',
      },
    ],
  },
  {
    letter: 'P',
    pronunciations: [{ phonemeId: 'consonant-p', examples: ['pen', 'map', 'happy', 'park'] }],
  },
  {
    letter: 'Q',
    pronunciations: [
      { phonemeId: 'consonant-k', examples: ['quit', 'queen', 'question', 'quick'] },
    ],
  },
  {
    letter: 'R',
    pronunciations: [{ phonemeId: 'consonant-r', examples: ['red', 'rain', 'write', 'run'] }],
  },
  {
    letter: 'S',
    pronunciations: [
      { phonemeId: 'consonant-s', examples: ['see', 'sun', 'bus', 'class'] },
      { phonemeId: 'consonant-z', examples: ['is', 'rose', 'music', 'his'] },
      { phonemeId: 'consonant-sh', examples: ['sugar', 'sure', 'Asia', 'issue'] },
      { phonemeId: 'consonant-zh', examples: ['vision', 'usual', 'measure', 'treasure'] },
    ],
  },
  {
    letter: 'T',
    pronunciations: [
      { phonemeId: 'consonant-t', examples: ['tea', 'top', 'cat', 'ten'] },
      { phonemeId: 'consonant-sh', examples: ['nation', 'patient', 'station', 'action'] },
      { phonemeId: 'consonant-ch', examples: ['nature', 'question', 'future', 'picture'] },
    ],
  },
  {
    letter: 'U',
    pronunciations: [
      { phonemeId: 'vowel-uh-short', examples: ['cup', 'sun', 'much', 'bus'] },
      { phonemeId: 'vowel-u-long', examples: ['rule', 'June', 'blue', 'use'] },
      { phonemeId: 'vowel-u-short', examples: ['put', 'push', 'full', 'pull'] },
      { phonemeId: 'vowel-er-long', examples: ['turn', 'burn', 'nurse', 'fur'] },
      {
        phonemeId: 'vowel-schwa-short',
        examples: ['support', 'upon', 'campus', 'focus'],
        kind: 'reduced',
      },
      { phonemeId: 'diphthong-ure', examples: ['pure', 'cure', 'secure', 'sure'] },
    ],
  },
  {
    letter: 'V',
    pronunciations: [{ phonemeId: 'consonant-v', examples: ['very', 'voice', 'five', 'van'] }],
  },
  {
    letter: 'W',
    pronunciations: [{ phonemeId: 'consonant-w', examples: ['we', 'water', 'twin', 'win'] }],
  },
  {
    letter: 'X',
    pronunciations: [
      {
        symbol: '[ks]',
        examples: ['box', 'six', 'text', 'next'],
        note: '组合音，当前无单独音频',
        kind: 'cluster',
      },
      {
        symbol: '[gz]',
        examples: ['exam', 'exist', 'exactly'],
        note: '组合音，当前无单独音频',
        kind: 'cluster',
      },
      {
        phonemeId: 'consonant-z',
        examples: ['xylophone', 'xylem'],
        note: '少数词读 [z]',
        kind: 'minor',
      },
    ],
  },
  {
    letter: 'Y',
    pronunciations: [
      { phonemeId: 'diphthong-ai', examples: ['my', 'try', 'sky', 'fly'] },
      { phonemeId: 'vowel-i-short', examples: ['gym', 'myth', 'system', 'symbol'] },
      { phonemeId: 'vowel-i-long', examples: ['happy', 'city', 'baby', 'funny'] },
      { phonemeId: 'consonant-y', examples: ['yes', 'yellow', 'young', 'you'] },
    ],
  },
  {
    letter: 'Z',
    pronunciations: [{ phonemeId: 'consonant-z', examples: ['zoo', 'zero', 'buzz', 'zip'] }],
  },
]
