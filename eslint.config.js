import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

const stylisticConfig = stylistic.configs.customize({
    indent: "tab",
    quotes: 'double',
    semi: true,
    jsx: true,
    commaDangle: "only-multiline",
})
export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            '@stylistic': stylistic
        },
        ...stylisticConfig,
        rules: {
            ...stylisticConfig.rules,
            "react-refresh/only-export-components": "warn",

        }
    },
])
