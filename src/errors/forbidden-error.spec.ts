import { ForbiddendError } from './forbidden-error'

interface SutTypes {
  sut: ForbiddendError
}

const makeSut = (): SutTypes => {
  const sut = new ForbiddendError()
  return { sut }
}

describe('ForbiddendError', () => {
  test('Should be a type of error', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Error)
  })
  test('Should return a correct message', () => {
    const { sut } = makeSut()
    expect(sut.message).toEqual('You do not have permission to do this task.')
  })
})
