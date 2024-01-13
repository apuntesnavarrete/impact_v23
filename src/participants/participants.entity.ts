import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsDateString, IsEmail, IsNotEmpty, IsOptional, Length, Matches } from 'class-validator';

@Entity()
export class Participants {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  @IsNotEmpty()
  name: string;

  @Column({
    nullable: true, // Permite valores nulos
  })
  @IsDateString()
  @IsOptional()
  birthDate?: string; // Cambiado a string para contener solo la fecha

  @Column({
    length: 18,
    nullable:true,
    unique:true

  })
  @Length(18)
  @IsOptional()
  @Matches(/^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/, { message: 'El CURP no es válido' })

  Curp?: string;

  @Column({
    length: 100,
    nullable:true,
    default: 'default_jugador.jpg'

  })
  @IsOptional()
  Photo?: string;

  @Column({
    length: 100,
    nullable:true,
    unique:true
  })
  @IsOptional()
  @IsEmail()
  Email?: string;

  //Agregando campos Timestamp

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


}

