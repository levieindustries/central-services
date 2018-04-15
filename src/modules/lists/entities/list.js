import ListItem from './list-item';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class List {
  @PrimaryGeneratedColumn() id = undefined;

  @Column('varchar') name = undefined;

  @Column(nullable => true)
  deletedAt = undefined;

  @Column('timestamp') createdAt = undefined;

  @Column('timestamp') updatedAt = new Date();

  @OneToMany(type => ListItem, listItem => listItem.list, {cascadeAll: true})
  listItems = undefined;
}
