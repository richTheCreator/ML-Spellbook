
import * as path from 'path'

const PUBLIC = path.resolve(__dirname, 'public')

export default {
  src: './docs',
  title: '📖 Spellbook',
  description: 'The design system that powers Merlin Labs.',
  indexHtml: 'src/index.html',
  modifyBundlerConfig: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@images': `${PUBLIC}/images`,
    })

    return config
  },
  // theme: 'my-coolest-theme',
  // themeConfig: {
  //   colors: {
  //     primary: 'tomato'
  //   }
  // },
  // plugins: [
  //   myCoolPlugin()
  // ]
}
