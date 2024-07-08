import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MemberService],
  controllers: [MemberController],
  exports: [MemberService],  // Jika perlu diekspor untuk digunakan di modul lain
})
export class MemberModule {}
