import { SignUpController } from "./signup"

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
  })
})