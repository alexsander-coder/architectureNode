import { SignUpController } from "./signup"
import { MissingParamError } from "../errors/missing-param-error"

describe('SignUp Controller', () => {

  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'alexsander@teste.com',
        password: 'teste',
        passwordConfirmation: 'teste'
      }
    }

  const httpResponse = sut.handle(httpRequest)

  expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))

  })



  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'alexsander',
        password: 'teste',
        passwordConfirmation: 'teste'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))

  })

})