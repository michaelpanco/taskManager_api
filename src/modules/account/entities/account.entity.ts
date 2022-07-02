import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BeforeInsert,
    OneToMany
} from 'typeorm';
import { Task } from 'src/modules/task/entities/task.entity';
import * as bcrypt from 'bcrypt';

@Entity('accounts')
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    password: string;

    @BeforeInsert() async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    @OneToMany(() => Task, (task) => task.account)
    tasks: Task;
}
