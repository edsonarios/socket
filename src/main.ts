import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  console.log('Enable cors2')
  app.enableCors({
    origin: '*',
    methods: 'ALL',
    allowedHeaders: 'Content-Type, Authorization',
  })
}
bootstrap()
