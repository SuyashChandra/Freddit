import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  //We can choose not to expose the tilte in our GraphQL schema, by remmoving @Field. That way we still have the title in our database but not queryable by the GraphQL
  @Field()
  @Property({ type: "text" })
  title!: string;
}
