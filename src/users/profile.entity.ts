import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserProfiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  age: number;
}
