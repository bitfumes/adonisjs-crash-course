
import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('welcome')
Route.on('/signup').render('auth/signup')
Route.on('/login').render('auth/login')
Route.on('/profile').render('profile').middleware('auth')

Route.post('/verify-email', 'EmailVerifiesController.index').middleware('auth')
Route.get('/confirm-email/:userid/:token', 'EmailVerifiesController.confirm').middleware('auth')
Route.post('/signup', 'AuthController.signup')
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')