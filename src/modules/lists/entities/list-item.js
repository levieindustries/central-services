import List from './list';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export default class ListItem {
  @PrimaryGeneratedColumn() id = undefined;

  @Column('varchar') name = undefined;

  @Column(nullable => true)
  deletedAt = undefined;

  @Column('timestamp') createdAt = undefined;

  @Column('timestamp') updatedAt = new Date();

  @ManyToOne(type => List, list => list.listItems)
  list = undefined;
}
