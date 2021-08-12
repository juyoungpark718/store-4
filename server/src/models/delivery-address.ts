import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Timestamp from './timestamp';

@Entity('delivery_addresses')
class DeliveryAddress extends Timestamp {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ name: 'recipient_name' })
  recipientName!: string;

  @Column()
  address!: string;

  @Column({ name: 'recipient_phone_number' })
  recipientPhoneNumber!: string;
}

export default DeliveryAddress;
