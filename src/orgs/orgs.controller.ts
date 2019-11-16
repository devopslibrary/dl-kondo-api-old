import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('orgs')
export class OrgsController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll(): string {
    return 'This action returns all cats';
  }
}
