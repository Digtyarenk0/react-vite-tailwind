import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { lingui } from '@lingui/vite-plugin'

const plugins = [
  [
    react({
      plugins: [
        [
          '@lingui/swc-plugin',
          {
            runtimeModules: {
              i18n: ['@lingui/core', 'i18n'],
              trans: ['@lingui/react', 'Trans']
            }
          }
        ]
      ]
    }),
    lingui(),
    tsconfigPaths()
  ]
]

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig(() => {
  return {
    base: '/',
    server: {
      port: 3000
    },
    plugins,
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: '.vitest/setup',
      include: ['**/test.{ts,tsx}']
    }
  }
})
