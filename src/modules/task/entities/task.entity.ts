import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Account } from 'src/modules/account/entities/account.entity';
@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
        nullable: false
    })
    note: string;

    @Column({
        type: 'text',
        nullable: false
    })
    dateTime: string;

    @ManyToOne(() => Account, (account) => account.tasks)
    account: Account;
}
