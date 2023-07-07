import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppObject {
  @Field(() => String)
  email: string;
}
