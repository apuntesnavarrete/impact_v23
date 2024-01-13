import { IsEmpty } from "class-validator";
import { Participants } from "src/participants/participants.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Teams{
  //creara la llave primaria 
    @PrimaryGeneratedColumn()
    id: number;
  //creara la columna para los nombres de los equipos  
    @Column({
        length: 255,
      })
      @IsEmpty()
      name_team: string;

  //creara la columna para el fundador del equipo  
// con una relacion que viene de la tabla participantes
      @ManyToOne(() => Participants, participants => participants.id)
      participants : Participants
  //creara la columna para la dirreccion del logo del equipo 

      @Column({
        length: 100,
       nullable: true,
        default: 'default_equipo.jpg'
      })
      @IsEmpty()

      logo: string; //  *** debe ser opcional cambiar **
      @CreateDateColumn()
      createdAt: Date;
    
      @UpdateDateColumn()
      updatedAt: Date;

}
//cambiar nombre de columna a founder