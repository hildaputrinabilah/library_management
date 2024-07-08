import { Controller, Get, Post, Body } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './member.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('members')
@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  async findAll(): Promise<Member[]> {
    return this.memberService.findAll();
  }

  @Get(':code')
  async findOne(@Body() code: string): Promise<Member> {
    return this.memberService.findOne(code);
  }

  @Post()
  async create(@Body() member: Member): Promise<Member> {
    return this.memberService.create(member);
  }
}
