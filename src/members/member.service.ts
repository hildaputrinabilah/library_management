import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository: Repository<Member>,
  ) {}

  async findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  async findOne(code: string): Promise<Member> {
    return this.memberRepository.findOne({ where: { code } });
  }

  async create(member: Member): Promise<Member> {
    return this.memberRepository.save(member);
  }

  async update(code: string, member: Partial<Member>): Promise<Member> {
    await this.memberRepository.update({ code }, member);
    return this.memberRepository.findOne({ where: { code } });
  }

  async remove(code: string): Promise<void> {
    await this.memberRepository.delete({ code });
  }
}
