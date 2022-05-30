import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity('app_product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  price: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  image: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  name2: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: number;
}
