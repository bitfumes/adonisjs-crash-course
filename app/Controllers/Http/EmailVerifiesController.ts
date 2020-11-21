import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class EmailVerifiesController {
    public async index({ response, auth }: HttpContextContract) {
        auth.user?.sendVerificationEmail()
        return response.redirect().back()
    }

    public async confirm({ response, request, params }: HttpContextContract) {
        if (request.hasValidSignature()) {
            const user = await User.findByOrFail('email', params.email)
            user.email_verified_at = DateTime.local()
            user.save()
            return response.redirect(`/${user.username}`)
        } else {
            return 'Invalid Token'
        }
    }

}
