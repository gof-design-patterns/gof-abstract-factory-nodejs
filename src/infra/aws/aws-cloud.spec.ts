import { FileNotFoundError, ForbiddendError } from '../../errors'
import { AwsCloud, AwsDatabase, AwsStorage, AwsVirtualMachine } from './aws-cloud'
import { Cloud } from '../../protocols'

interface SutTypes {
  sut: AwsCloud
}

const makeSut = (): SutTypes => {
  const sut: Cloud = new AwsCloud()
  return { sut }
}

describe('AWS Cloud', () => {
  test('Should return an object of type Cloud', () => {
    const { sut } = makeSut()
    expect(sut).toBeInstanceOf(Cloud)
  })

  test('Should return an object of type AwsDatabase', () => {
    const { sut } = makeSut()
    expect(sut.createDatabase()).toBeInstanceOf(AwsDatabase)
  })

  test('Should return an object of type AwsStorage', () => {
    const { sut } = makeSut()
    expect(sut.createStorage()).toBeInstanceOf(AwsStorage)
  })

  test('Should return an object of type AwsVirtualMachine', () => {
    const { sut } = makeSut()
    expect(sut.createVirtualMachine()).toBeInstanceOf(AwsVirtualMachine)
  })

  test('Should return true if the upload was successful', () => {
    const { sut } = makeSut()
    jest.spyOn(console, 'log')
    sut.createStorage().upload('./describe')
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return FileNotFoundError if the path is void', () => {
    const { sut } = makeSut()
    expect(() => sut.createStorage().upload('')).toThrow(FileNotFoundError)
  })

  test('Should return true if the vm was started', () => {
    const { sut } = makeSut()
    jest.spyOn(console, 'log')
    sut.createVirtualMachine().start()
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return true if the table was created', () => {
    const { sut } = makeSut()
    jest.spyOn(console, 'log')
    sut.createDatabase().createTable('TABLE_NAME')
    expect(console.log).toHaveBeenCalled()
  })

  test('Should return ForbiddendError if the name is void', () => {
    const { sut } = makeSut()
    expect(() => sut.createDatabase().createTable('')).toThrow(ForbiddendError)
  })
})
