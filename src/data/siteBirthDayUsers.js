// Árbol genealógico. Agregá o editá acá — la página se actualiza sola.
//
// Cada "unidad" es una tarjeta, con 1 o 2 personas:
//   - 1 persona  -> alguien sin pareja cargada todavía.
//   - 2 personas -> pareja (papás, o un hermano/a con su novio/a).
// Cada persona: { name: 'Nombre', relation: 'Mamá' | 'Papá' | 'Hermano' | 'Novia' | etc, date: 'AAAA-MM-DD' }
// marriedSince: 'AAAA-MM-DD' si están casados, o null si no aplica / no corresponde.
// title: etiqueta arriba de la tarjeta (ej. 'Papás'), o null para no mostrar ninguna.

export const familyTree = {
  reiner: [
    {
      id: 'papas',
      title: 'Papás',
      people: [
        { name: 'Cheryl', relation: 'Mamá', date: '1975-07-24' },
        { name: 'Rody', relation: 'Papá', date: '1969-09-13' },
      ],
      marriedSince: '1993-04-10',
    },
    {
      id: 'milton',
      title: null,
      people: [
        { name: 'Milton', relation: 'Hermano', date: '2002-12-18' },
        // Si tiene novia/esposa, agregala acá y queda como tarjeta de pareja:
        { name: 'Kimberli', relation: 'Novia', date: '1998-06-10' },
      ],
      marriedSince: null,
    },
    {
      id: 'isa',
      title: null,
      people: [{ name: 'Isa', relation: 'Hermana', date: '1998-09-01' }],
      marriedSince: null,
    },
  ],
  kari: [
    {
      id: 'papás',
      title: 'papás',
      people: [
        { name: 'Ileana', relation: 'Mamá', date: '1980-10-21' },
        { name: 'Alberto', relation: 'Papá', date: '1980-04-04' }

      ],
      marriedSince: '2002-04-20',
    },
    {
      id: 'hermano',
      title: null,
      people: [
        { name: 'Emanuel', relation: 'Hermano', date: '2007-08-22' },

      ],
      marriedSince: null,
    },
  ],
}
