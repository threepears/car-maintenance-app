module.exports = {
    development: {
      client: 'pg',
      migrations: {
        directory: './server/db/migrations'
      },
      connection: {
        port: 5432,
        host: 'localhost',
        database: 'car_app',
        user: 'admin',
        password: 'admin',
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
