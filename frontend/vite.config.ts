/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
//@ts-expect-error
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    //@ts-expect-error
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@root', replacement: path.join(__dirname, '../../') },
    ],
  },
});
