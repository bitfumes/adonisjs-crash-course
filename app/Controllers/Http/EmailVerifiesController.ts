import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class EmailVerifiesController {
    public async index({ response, auth }: HttpContextContract) {
        auth.user?.sendVerificationEmail()
        return response.redirect().back()
    }
}
