import { Injectable } from '@nestjs/common';

@Injectable()
export class GoleoService {
  GetSumDataPlayerWithTeam(datos: any[]): any[] {
  const goleadores: { [key: string]: any & { nombre: string } } = datos.reduce((acumulador, registro) => {
    const nombreJugador = registro.participants.name;
    const jugadorId = registro.participants.id;
    const equipo = registro.teams.name;
    const equipoLogo = registro.teams.logo;

    const clave = `${jugadorId}-${equipo}`;

    if (!acumulador[clave]) {
      acumulador[clave] = {
        id: jugadorId,
        goles: 0,
        asistencias: 0,
        equipo,
        equipoLogo,
        nombre: nombreJugador,
      };
    }

    acumulador[clave].goles += registro.annotations;
    acumulador[clave].asistencias += Number(registro.attendance);

    return acumulador;
  }, {} as { [key: string]: any & { nombre: string } });

  return Object.values(goleadores).sort((a, b) => b.goles - a.goles);
}

GetSumDataPlayerTotal(datos: any[]): any[] {
  const jugadores: { [key: number]: any } = {};

  for (const registro of datos) {
    const id = registro.participants.id;
    const nombre = registro.participants.name;

    if (!jugadores[id]) {
      jugadores[id] = {
        id,
        nombre,
        goles: 0,
        asistencias: 0,
        equipo: '',
        equipoLogo: ''
      };
    }

    jugadores[id].goles += registro.annotations;
    jugadores[id].asistencias += Number(registro.attendance);
  }

  return Object.values(jugadores).sort((a, b) => b.goles - a.goles);
}


}

