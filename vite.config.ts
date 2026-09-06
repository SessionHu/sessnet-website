import type { PluginOption, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { } from 'vite-react-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
  ssgOptions: {
    // It will cause Hydration Failed
    // formatting: 'minify',
    mock: true,
    crittersOptions: false,
    dirStyle: 'nested',
  },
  clearScreen: false,
} as UserConfig)
