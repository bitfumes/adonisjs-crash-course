import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email').index()
      table.string('username', 25).index()
      table.string('avatar').nullable()
      table.text('details').nullable()
      table.dateTime('email_verified_at').nullable()
      table.string('password')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
