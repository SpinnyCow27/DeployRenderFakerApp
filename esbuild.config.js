// esbuild.config.js
const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  sourcemap: process.env.NODE_ENV === 'development',
  loader: { '.js': 'jsx', '.css': 'css' }, // Configuración de loaders
  resolveExtensions: ['.js'] // Solo resolvemos las extensiones necesarias
}).catch(() => process.exit(1));