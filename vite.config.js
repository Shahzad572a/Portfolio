// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-app-base/', // Set the base path for your app
  publicDir: 'public', // Specify the directory where your public assets are located

  // Define additional build options
  build: {
    outDir: 'dist', // Set the output directory for the built files
    assetsDir: 'assets', // Specify the directory for static assets within the output directory
    rollupOptions: {
      // Customize Rollup options if needed
    },
  },

  server: {
    port: 3000, // Set the development server port
  },
})