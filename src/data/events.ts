export default [
  {
    id: 1,
    titulo: 'Entrenamientos dominicales',
    fechaISO: '2025-10-05', // fecha inicial de ejemplo
    horario: 'Domingos de 7:00 am a 12:00 pm',
    lugar: 'Club Tequendama — Cali',
    tipo: 'Entreno',
    imagen: '/images/domingo.png', // 📷 guarda esta imagen en public/images/events
  },
  {
    id: 2,
    titulo: 'Entrenamientos de jueves',
    fechaISO: '2025-10-09', // fecha inicial de ejemplo
    horario: 'Jueves de 7:00 am a 12:00 pm',
    lugar: 'Club Tequendama — Cali',
    tipo: 'Entreno',
    imagen: '/images/jueves.png', // 📷 guarda esta imagen en public/images/events
  },
] as const
