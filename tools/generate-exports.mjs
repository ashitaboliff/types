import { readFileSync, writeFileSync } from 'fs'
import { glob } from 'glob'
import path from 'path'

const generateExports = () => {
	const pkgPath = path.resolve('package.json')
	const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

	// dist/modules/**/schema.js を全部拾う
	const files = glob.sync('dist/**/**/*.js')

	pkg.exports = pkg.exports || {}
	for (const file of files) {
		// 例: dist/modules/user/schema.js → ./modules/user/schema
		const subpath = './' + file.replace(/^dist\//, '').replace(/\.js$/, '')

		pkg.exports[subpath] = {
			import: './' + file,
			types: './' + file.replace(/\.js$/, '.d.ts'),
		}
	}

	writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
	console.log('✔ exports updated!')
}

export default generateExports
