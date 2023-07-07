import { Args, Query, Resolver } from '@nestjs/graphql';
import { AppObject } from './App.Object';
import { AppDto } from './App.dto';

@Resolver(() => AppObject)
export class AppResolver {
  @Query(() => AppObject)
  test(@Args('input') email: AppDto) {
    console.log(email);
    return 'test query';
  }
}
