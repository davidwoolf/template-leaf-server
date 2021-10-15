import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        ViteAliases()
    ],
    optimizeDeps: {
        include: ['@indexorg/leaf']
    }
    // resolve: {
    //     alias: {
    //         '@assets': './src/assets',
    //         '@components': './src/components',
    //         '@config': './src/config',
    //         '@utils': './src/utils',
    //         '@views': './src/views',
    //     }
    // }
})