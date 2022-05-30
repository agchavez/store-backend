import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

const transformToLowerCase = {
  to: (value: string) => value.toLowerCase(),
  from: (value: string) => value.toUpperCase(),
};
@Entity({
  name: 'app_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 40,
    unique: true,
    nullable: false,
  })
  username: string;

  //Campo de solo lectura
  @Exclude()
  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 50,
    transformer: transformToLowerCase,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 50,
    transformer: transformToLowerCase,
  })
  lastName: string;
}
