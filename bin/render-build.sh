#!/bin/sh
set -e

# Instala las gemas necesarias
bundle install

# Instala las dependencias de npm
npm install

# Ejecuta la construcción de JavaScript y CSS
npm run build

# Precompila los activos de Rails
bundle exec rails assets:precompile

# Limpia los activos antiguos (opcional)
bundle exec rails assets:clean

# Si estás usando un tipo de instancia Free, realiza migraciones de la base de datos
# Uncomment the following line:
# bundle exec rails db:migrate
