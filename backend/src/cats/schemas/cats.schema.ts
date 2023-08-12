import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cats {
    @Prop()
    name: String;
    @Prop()
    age: Number;
    @Prop()
    breed: String;
    @Prop()
    image: String;
}

export const CatSchema = SchemaFactory.createForClass(Cats);
