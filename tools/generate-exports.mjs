import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { glob } from 'glob'

const generateExports = () => {
	const pkgPath = path.resolve('package.json')
	const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

	// dist/modules/**/schema.js を全部拾う
	const files = glob.sync('dist/**/**/*.js')

	pkg.exports = pkg.exports || {}
	for (const file of files) {
		// 例: dist/modules/user/schema.js → ./modules/user/schema
		const rawSubpath = `./${file.replace(/^dist\//, '').replace(/\.js$/, '')}`
		const subpath = rawSubpath.replace(/\/index$/, '')

		pkg.exports[subpath] = {
			import: `./${file}`,
			types: `./${file.replace(/\.js$/, '.d.ts')}`,
		}
	}

	writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
	console.log('✔ exports updated!')
}

export default generateExports
