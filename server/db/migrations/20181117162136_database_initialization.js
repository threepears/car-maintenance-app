
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', (table) => {
        table.increments() // id _ pk initializer
        table.string('first_name').notNullable
        table.string('last_name').notNullable
        table.string('email').notNullable
        table.timestamp('created_on').defaultTo(knex.fn.now())
        table.timestamp('updated_on').defaultTo(knex.fn.now())
    })
    .createTable('service_shops', (table) => {
		table.increments()
		table.string('name').notNullable
		table.string('shop_number').notNullable
		table.string('address').notNullable
		table.string('city').notNullable
		table.string('state').notNullable
		table.string('zip').notNullable
		table.string('phone').notNullable
		table.timestamp('created_on').defaultTo(knex.fn.now())
		table.timestamp('updated_on').defaultTo(knex.fn.now())
	})
	  .createTable('service_events', (table) => {
		  table.increments()
		  table.string('user_id').notNullable
		  table.string('user_vehicle_id').notNullable
		  table.string('shop_id').notNullable
		  table.string('date').notNullable
		  table.string('category_item_id').notNullable
		  table.string('cost').notNullable
		  table.string('notes')
		  table.timestamp('created_on').defaultTo(knex.fn.now())
		  table.timestamp('updated_on').defaultTo(knex.fn.now())
	  })
	  .createTable('service_category', (table) => {
		  table.increments()
		  table.string('name').notNullable
		  table.timestamp('created_on').defaultTo(knex.fn.now())
		  table.timestamp('updated_on').defaultTo(knex.fn.now())
	  })
	  .createTable('service_category_item', (table) => {
		  table.increments()
		  table.string('name').notNullable
		  table.string('service_category_id').notNullable
		  table.timestamp('created_on').defaultTo(knex.fn.now())
		  table.timestamp('updated_on').defaultTo(knex.fn.now())
	  })
	  .createTable('user_vehicles', (table) => {
		  table.increments()
		  table.string('name').notNullable
		  table.string('make').notNullable
		  table.string('model').notNullable
		  table.string('year').notNullable
		  table.string('mileage').notNullable
		  table.string('vin_number').notNullable
		  table.timestamp('created_on').defaultTo(knex.fn.now())
		  table.timestamp('updated_on').defaultTo(knex.fn.now())
	  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('service_shops')
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('service_events')
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('service_category')
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('service_category_item')
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('user_vehicles')
};