import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tasks } from './model/task.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tasks])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule { }