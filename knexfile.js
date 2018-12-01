module.exports = {
    development: {
      client: 'pg',
      migrations: {
        directory: './server/db/migrations'
      },
      connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
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
