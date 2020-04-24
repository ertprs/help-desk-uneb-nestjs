import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SetorModule } from './setor/setor.module';
import { dbConfig } from './config/database.config';
import { ProblemaModule } from './problema/problema.module';
import { SolicitanteModule } from './solicitante/solicitante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    AuthModule,
    SetorModule,
    ProblemaModule,
    SolicitanteModule,
  ],
})
export class AppModule {}
