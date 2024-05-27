import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.enableCors({
  //   origin: '*',
  //   methods: 'ALL',
  //   // allowedHeaders:
  //   //   'Content-Type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-With, Access-Control-Allow-Methods',
  //   allowedHeaders: 'Content-Type, Authorization',
  // })
  app.enableCors()
  await app.listen(3000)
  console.log('Enable cors4')
}
bootstrap()
