// Collects every character used under src/ into the font charset file.
// `--check` only verifies the charset still covers src/ (run before build).
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const srcDir = join(rootDir, 'src')
const charsFile = join(srcDir, 'assets/fonts/lxgwwenkaiscreen-page.chars.txt')
const textExtensions = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.mdx', '.css'])

async function listTextFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) return listTextFiles(path)
      const ext = entry.name.slice(entry.name.lastIndexOf('.'))
      return textExtensions.has(ext) ? [path] : []
    }),
  )
  return files.flat()
}

async function collectChars() {
  const chars = new Set()
  // Always keep printable ASCII so English copy renders in the same face.
  for (let code = 0x20; code <= 0x7e; code += 1) chars.add(String.fromCodePoint(code))

  for (const file of await listTextFiles(srcDir)) {
    for (const char of await readFile(file, 'utf8')) {
      if (char.codePointAt(0) > 0x7e && !/\s/u.test(char)) chars.add(char)
    }
  }
  return [...chars].sort((a, b) => a.codePointAt(0) - b.codePointAt(0)).join('')
}

const chars = await collectChars()

if (process.argv.includes('--check')) {
  const subsetChars = new Set(await readFile(charsFile, 'utf8').catch(() => ''))
  const missing = [...chars].filter((char) => !subsetChars.has(char))
  if (missing.length > 0) {
    console.error(
      `Font subset is missing ${missing.length} character(s): ${missing.join('')}\n` +
        'Run `pnpm font:subset` to regenerate the LXGW WenKai Screen subset.',
    )
    process.exit(1)
  }
  console.log(`Font subset covers all ${chars.length} characters used in src/.`)
} else {
  await writeFile(charsFile, chars)
  console.log(`Wrote ${chars.length} characters to ${relative(rootDir, charsFile)}`)
}
