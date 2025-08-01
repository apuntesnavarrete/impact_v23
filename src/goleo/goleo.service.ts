import { Injectable } from '@nestjs/common';

@Injectable()
export class GoleoService {
  GetSumDataPlayerWithTeam(datos: any[]): any[] {
  const goleadores: { [key: string]: any & { nombre: string } } = datos.reduce((acumulador, registro) => {
    const nombreJugador = registro.participants.name;
    const jugadorId = registro.participants.id;
    const jugadorIdFoto = registro.participants.Photo;

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
        jugadorIdFoto
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
    const jugadorIdFoto = registro.participants.Photo;

    if (!jugadores[id]) {
      jugadores[id] = {
        id,
        nombre,
        goles: 0,
        asistencias: 0,
        equipo: '',
        equipoLogo: '',
        jugadorIdFoto
      };
    }

    jugadores[id].goles += registro.annotations;
    jugadores[id].asistencias += Number(registro.attendance);
  }

  return Object.values(jugadores).sort((a, b) => b.goles - a.goles);
}


getGoleadorDelMes(datos: any[], mes: number, anio: number): any | null {
  const jugadores: { [key: number]: any } = {};

  for (const registro of datos) {
    const fecha = new Date(registro.matches.date);
    const mesRegistro = fecha.getMonth() + 1;
    const anioRegistro = fecha.getFullYear();

    if (mesRegistro === mes && anioRegistro === anio) {
      const id = registro.participants.id;
      const nombre = registro.participants.name;
      const foto = registro.participants.Photo;

      if (!jugadores[id]) {
        jugadores[id] = {
          id,
          nombre,
          foto,
          goles: 0,
          asistencias: 0,
        };
      }

      jugadores[id].goles += registro.annotations;
      jugadores[id].asistencias += Number(registro.attendance);
    }
  }

  const lista = Object.values(jugadores);
  if (lista.length === 0) return null;

   return lista
    .sort((a, b) => b.goles - a.goles) // Ordenar por goles descendente
    .slice(0, 20); // Tomar los primeros 20
}
  
getTopGoleadoresDelMesPorLiga(
  datos: any[],
  mes: number,
  anio: number,
  liga: string
): any[] {
  const jugadores: { [key: number]: any } = {};

  for (const registro of datos) {
    const fecha = new Date(registro.matches.date);
    const mesRegistro = fecha.getMonth() + 1;
    const anioRegistro = fecha.getFullYear();
    const idName = registro.matches.tournaments.idName;

    const ligaTorneo = idName.split('-')[0]; // obtiene "ED" o "PRO"

    if (mesRegistro === mes && anioRegistro === anio && ligaTorneo === liga) {
      const id = registro.participants.id;
      const nombre = registro.participants.name;
      const foto = registro.participants.Photo;

      if (!jugadores[id]) {
        jugadores[id] = {
          id,
          nombre,
          foto,
          goles: 0,
          asistencias: 0,
        };
      }

      jugadores[id].goles += registro.annotations;
      jugadores[id].asistencias += Number(registro.attendance);
    }
  }

  const lista = Object.values(jugadores);
  return lista
    .sort((a, b) => b.goles - a.goles)
    .slice(0, 20);
}


}





