import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";
import { envSchema } from "./env";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true, // isGlobal: true para que o módulo seja global e não seja necessário importá-lo em outros módulos
    }),
  ], // Configuração do dotenv
  controllers: [CreateAccountController], // Tudo que tem requisição http
  providers: [PrismaService], // Tudo que não tem requisição http
})
export class AppModule {}
