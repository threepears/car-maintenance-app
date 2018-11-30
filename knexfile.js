module.exports = {
    development: {
      client: 'pg',
      migrations: {
        directory: './server/db/migrations'
      },
      connection: {
        host:'postgres-db',
        user: 'admin',
        password: 'admin',
        port: '',
        database: 'car_app'
      },
      seeds: {
        directory: './server/db/seeds/dev'
      },
      useNullAsDefault: true
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: './server/db/migrations'
      },
      seeds: {
        directory: './server/db/seeds/production'
      },
      useNullAsDefault: true
    }
  }
