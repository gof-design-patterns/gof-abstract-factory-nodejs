import { ForbiddendError, FileNotFoundError } from '../../errors'
import { Cloud, Storage, VirtualMachine, Database } from '../../protocols'

export class AwsStorage implements Storage {
  public upload (path: string): boolean {
    console.log(`The file [${path}] was uploaded to [AWS].`)
    if (path.trim().length === 0) throw new FileNotFoundError()

    return true
  }
}

export class AwsVirtualMachine implements VirtualMachine {
  public start (): boolean {
    console.log('The vm  was started [AWS].')
    return true
  }
}

export class AwsDatabase implements Database {
  public createTable (name: string): boolean {
    console.log(`The table [${name}] was created [AWS].`)
    if (name.trim().length === 0) throw new ForbiddendError()

    return true
  }
}

export class AwsCloud extends Cloud {
  public createStorage (): Storage {
    return new AwsStorage()
  }

  public createVirtualMachine (): VirtualMachine {
    return new AwsVirtualMachine()
  }

  public createDatabase (): Database {
    return new AwsDatabase()
  }
}
