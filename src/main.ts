import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT, ()=>{
      console.log(`Server ${PORT}-inchi portga ishga tushdi`);
    });
  } catch (error) {
    console.log(error.message);
  }
  
}
bootstrap();
