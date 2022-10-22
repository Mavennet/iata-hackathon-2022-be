import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PieceModule } from './piece/piece.module';

@Module({
  imports: [PieceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
