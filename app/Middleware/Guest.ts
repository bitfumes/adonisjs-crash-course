import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {

    if (auth.isAuthenticated) {
      return response.redirect('/profile')
    }

    await next()
  }
}
