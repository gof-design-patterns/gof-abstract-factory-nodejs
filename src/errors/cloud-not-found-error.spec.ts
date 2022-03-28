import { CloudNotFoundError } from './cloud-not-found-error'

interface SutTypes {
  sut: CloudNotFoundError
}

const makeSut = (): SutTypes => {
  const sut = new CloudNotFoundError()
  return { sut }
}

describe('CloudNotFoundError', () => {
  test('Should be a type of error', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Error)
  })
  test('Should return a correct message', () => {
    const { sut } = makeSut()
    expect(sut.message).toEqual('This cloud does not exist.')
  })
})
