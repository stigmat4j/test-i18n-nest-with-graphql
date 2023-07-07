import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class AppDto {
  @IsEmail({}, { message: 'validation.INVALID_EMAIL' })
  @Field(() => String)
  email: string;
}
