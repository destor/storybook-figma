import react from "@vitejs/plugin-react";
import { resolve } from 'path'
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			formats: ['es'],
			entry: resolve(__dirname, 'lib/main.ts')
		},
	}
});
