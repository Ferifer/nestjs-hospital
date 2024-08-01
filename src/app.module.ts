import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffManagementModule } from './staff-management/staff-management.module';
import { PatientManagementModule } from './patient-management/patient-management.module';
import { AppointmentManagementModule } from './appointment-management/appointment-management.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './common/filter/allexception.filter';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        logging: configService.get('DB_LOGGING') === 'true' ? true : false,
        autoLoadEntities: true,
        synchronize: configService.get('DB_SYNC') === '1' ? true : false,
        extra: {
          timezone: configService.get('DB_TIMEZONE'), // Set the timezone to Asia/Jakarta
        },
      }),
      inject: [ConfigService],
    }),
    StaffManagementModule,
    PatientManagementModule,
    AppointmentManagementModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
