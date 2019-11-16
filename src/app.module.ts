import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgsController } from './orgs/orgs.controller';
import { ReposController } from './repos/repos.controller';
import { BranchesController } from './branches/branches.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, ConfigModule],
  controllers: [AppController, OrgsController, ReposController, BranchesController],
  providers: [AppService],
})
export class AppModule {}
