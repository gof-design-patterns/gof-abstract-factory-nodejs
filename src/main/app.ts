import { AwsCloud, GoogleCloud } from '../infra'
import { CloudNotFoundError } from '../errors'
import { Cloud, Database, Storage, VirtualMachine } from '../protocols'

const TYPE_CLOUD: string = 'GOOGLE'

class App {
  private cloud: Cloud

  bootstrap (): void {
    switch (TYPE_CLOUD) {
      case 'AWS':
        this.cloud = new AwsCloud()
        break
      case 'GOOGLE':
        this.cloud = new GoogleCloud()
        break
      default:
        throw new CloudNotFoundError()
    }
  }

  runLogic (): void {
    const uploadFilepath = './description.txt'
    const tableName = 'GOF-ABSTRACT-FACTORY'

    const storage: Storage = this.cloud.createStorage()
    const virtualMachine: VirtualMachine = this.cloud.createVirtualMachine()
    const database: Database = this.cloud.createDatabase()

    console.log(`The result of upload is [${String(storage.upload(uploadFilepath))}].\n`)
    console.log(`The result of create virtual machine is [${String(virtualMachine.start())}].\n`)
    console.log(`The result of create table is [${String(database.createTable(tableName))}].\n`)
  }

  main (): void {
    this.bootstrap()
    this.runLogic()
  }
}

const app = new App()
app.main()
