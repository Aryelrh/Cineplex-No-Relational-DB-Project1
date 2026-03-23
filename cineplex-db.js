// ============================================================
// CINEPLEX - Avance 1
// Script de inserción para MongoDB Atlas
// Uso: mongosh mongodb+srv://aryel-db:<db_password>@cineplex-db.dbkbbfn.mongodb.net/?appName=cineplex-db --file cineplex_avance1.js
//
// RECORDAR: Cambiar el password en el connection string de arriba
// ============================================================

use("cineplex_db");

// ============================================================
// 1. CADENAS_CINES
// ============================================================
db.cadenas_cines.insertMany([
  {
    _id: ObjectId("65a100000000000000000001"),
    nombre_comercial: "Cinépolis",
    razon_social: "Cinépolis de Costa Rica S.A.",
    pais_origen: "México",
    empresa_matriz: "Organización Ramírez",
    servicios: ["Cine convencional", "IMAX", "VIP"],
    zonas_geograficas: ["San José", "Heredia", "Alajuela", "Cartago"],
    fecha_fundacion: new Date("1971-03-15"),
    fecha_inicio_cr: new Date("2012-06-01"),
    convenios: [
      {
        distribuidora: "Warner Bros Pictures",
        fecha_inicio: new Date("2023-01-01"),
        estrenos_mensuales: 4,
        porcentaje_taquilla: 45,
        generos: ["Acción", "Drama", "Comedia"],
        titulos_exclusivos: true,
      },
      {
        distribuidora: "Universal Pictures",
        fecha_inicio: new Date("2023-03-15"),
        estrenos_mensuales: 3,
        porcentaje_taquilla: 42,
        generos: ["Animación", "Suspenso", "Terror"],
        titulos_exclusivos: false,
      },
    ],
  },
  {
    _id: ObjectId("65a100000000000000000002"),
    nombre_comercial: "Cinemark",
    razon_social: "Cinemark de Costa Rica S.A.",
    pais_origen: "Estados Unidos",
    empresa_matriz: "Cinemark Holdings Inc.",
    servicios: ["Cine convencional", "4DX", "VIP"],
    zonas_geograficas: ["San José", "Escazú", "Cartago", "Liberia"],
    fecha_fundacion: new Date("1984-08-10"),
    fecha_inicio_cr: new Date("2005-11-20"),
    convenios: [
      {
        distribuidora: "Disney Pictures",
        fecha_inicio: new Date("2023-02-01"),
        estrenos_mensuales: 5,
        porcentaje_taquilla: 48,
        generos: ["Animación", "Aventura", "Superhéroes"],
        titulos_exclusivos: true,
      },
      {
        distribuidora: "Sony Pictures",
        fecha_inicio: new Date("2022-09-01"),
        estrenos_mensuales: 3,
        porcentaje_taquilla: 40,
        generos: ["Acción", "Comedia", "Drama"],
        titulos_exclusivos: false,
      },
    ],
  },
  {
    _id: ObjectId("65a100000000000000000003"),
    nombre_comercial: "Vi Cinemas",
    razon_social: "Vi Cinemas Costa Rica S.A.",
    pais_origen: "Costa Rica",
    empresa_matriz: "Grupo Vi",
    servicios: ["Cine convencional", "VIP"],
    zonas_geograficas: ["San José", "Heredia"],
    fecha_fundacion: new Date("2010-05-20"),
    fecha_inicio_cr: new Date("2010-05-20"),
    convenios: [
      {
        distribuidora: "Paramount Pictures",
        fecha_inicio: new Date("2023-04-01"),
        estrenos_mensuales: 2,
        porcentaje_taquilla: 38,
        generos: ["Drama", "Suspenso", "Ciencia ficción"],
        titulos_exclusivos: false,
      },
    ],
  },
  {
    _id: ObjectId("65a100000000000000000004"),
    nombre_comercial: "Multicinemas",
    razon_social: "Multicinemas de Costa Rica S.A.",
    pais_origen: "Costa Rica",
    empresa_matriz: "Corporación Multicinemas",
    servicios: ["Cine convencional"],
    zonas_geograficas: ["San José", "Alajuela", "Puntarenas"],
    fecha_fundacion: new Date("1995-07-12"),
    fecha_inicio_cr: new Date("1995-07-12"),
    convenios: [
      {
        distribuidora: "Lionsgate Films",
        fecha_inicio: new Date("2023-06-01"),
        estrenos_mensuales: 2,
        porcentaje_taquilla: 35,
        generos: ["Acción", "Terror", "Drama"],
        titulos_exclusivos: false,
      },
    ],
  },
]);

print("✓ cadenas_cines: 4 documentos insertados");

// ============================================================
// 2. PELICULAS
// ============================================================
db.peliculas.insertMany([
  {
    _id: ObjectId("65a100000000000000000010"),
    titulo_original: "How to Train Your Dragon",
    titulo_espanol: "Cómo entrenar a tu dragón",
    sinopsis:
      "En la isla de Berk, donde vikingos y dragones han sido enemigos por generaciones, Hiccup desafía siglos de tradición al hacerse amigo de Toothless, un temido dragón Night Fury, descubriendo juntos una nueva forma de convivir.",
    duracion_min: 125,
    generos: ["Aventura", "Fantasía", "Acción"],
    clasificacion_edad: "PG",
    pais_origen: "Estados Unidos",
    idioma_original: "Inglés",
    directores: ["Dean DeBlois"],
    reparto_principal: [
      "Mason Thames",
      "Nico Parker",
      "Gerard Butler",
      "Nick Frost",
      "Julian Dennison",
    ],
    casa_productora: "DreamWorks Animation",
    distribuidora: "Universal Pictures",
    estreno_mundial: new Date("2025-06-13"),
    estreno_cr: new Date("2025-06-13"),
    estado_cartelera: "retirada",
    formatos: ["2D", "3D", "IMAX", "4DX"],
    url_poster:
      "https://image.tmdb.org/t/p/original/httZPHiYLBvAoM1CJKM7R3oUZAQ.jpg",
    url_trailer: "https://www.youtube.com/watch?v=sIT2UUQBmgY",
    puntuacion_critica: 7.7,
    calificacion_publico: 8.2,
  },
  {
    _id: ObjectId("65a100000000000000000011"),
    titulo_original: "Hauru no Ugoku Shiro",
    titulo_espanol: "El increíble castillo vagabundo",
    sinopsis:
      "Sophie, una joven sombrerera, es víctima de un hechizo que la transforma en una anciana. En su búsqueda por romper la maldición, llega al castillo ambulante del mago Howl, donde descubre el valor y el amor.",
    duracion_min: 119,
    generos: ["Animación", "Fantasía", "Romance"],
    clasificacion_edad: "PG",
    pais_origen: "Japón",
    idioma_original: "Japonés",
    directores: ["Hayao Miyazaki"],
    reparto_principal: [
      "Chieko Baisho",
      "Takuya Kimura",
      "Akihiro Miwa",
      "Tatsuya Gashuin",
      "Ryunosuke Kamiki",
    ],
    casa_productora: "Studio Ghibli",
    distribuidora: "Toho",
    estreno_mundial: new Date("2004-11-20"),
    estreno_cr: new Date("2005-03-10"),
    estado_cartelera: "retirada",
    formatos: ["2D"],
    url_poster:
      "https://image.tmdb.org/t/p/original/TkTP5VHpluo7OwZy4MvNKCzLGex.jpg",
    url_trailer: "https://www.youtube.com/watch?v=iwROgK94zcM",
    puntuacion_critica: 8.2,
    calificacion_publico: 8.6,
  },
  {
    _id: ObjectId("65a100000000000000000012"),
    titulo_original: "The Amazing Spider-Man",
    titulo_espanol: "El sorprendente Hombre Araña",
    sinopsis:
      "Peter Parker, un estudiante de secundaria abandonado por sus padres, descubre un maletín que lo lleva a investigar su pasado. Tras ser picado por una araña genéticamente modificada, adquiere poderes que lo convierten en Spider-Man.",
    duracion_min: 136,
    generos: ["Acción", "Aventura", "Ciencia ficción"],
    clasificacion_edad: "PG-13",
    pais_origen: "Estados Unidos",
    idioma_original: "Inglés",
    directores: ["Marc Webb"],
    reparto_principal: [
      "Andrew Garfield",
      "Emma Stone",
      "Rhys Ifans",
      "Denis Leary",
      "Martin Sheen",
      "Sally Field",
    ],
    casa_productora: "Columbia Pictures",
    distribuidora: "Sony Pictures",
    estreno_mundial: new Date("2012-06-13"),
    estreno_cr: new Date("2012-07-05"),
    estado_cartelera: "retirada",
    formatos: ["2D", "3D", "IMAX"],
    url_poster:
      "https://image.tmdb.org/t/p/original/oDB8Fq4DYAPFKS7hFG6bSAhBYGz.jpg",
    url_trailer: "https://www.youtube.com/watch?v=X2mhD3Qxs4g",
    puntuacion_critica: 6.9,
    calificacion_publico: 7.2,
  },
  {
    _id: ObjectId("65a100000000000000000013"),
    titulo_original:
      "Gekijouban Sword Art Online Progressive: Hoshi Naki Yoru no Aria",
    titulo_espanol: "Sword Art Online: Progressive - Aria of a Starless Night",
    sinopsis:
      "Un mes después de que comenzara el mortal juego, Asuna lucha por sobrevivir en el mundo virtual de Sword Art Online. En la reunión estratégica para el primer jefe, conoce a Kirito, un solitario espadachín de alto nivel.",
    duracion_min: 97,
    generos: ["Animación", "Acción", "Ciencia ficción"],
    clasificacion_edad: "NR",
    pais_origen: "Japón",
    idioma_original: "Japonés",
    directores: ["Ayako Kono"],
    reparto_principal: [
      "Yoshitsugu Matsuoka",
      "Haruka Tomatsu",
      "Inori Minase",
      "Hiroaki Hirata",
    ],
    casa_productora: "A-1 Pictures",
    distribuidora: "Aniplex",
    estreno_mundial: new Date("2021-10-30"),
    estreno_cr: new Date("2021-12-03"),
    estado_cartelera: "retirada",
    formatos: ["2D"],
    url_poster:
      "https://image.tmdb.org/t/p/original/pzAbHVAVBYuJq3yWCsDvzAkEfgM.jpg",
    url_trailer: "https://www.youtube.com/watch?v=2fTLqaUP9Hk",
    puntuacion_critica: 7.2,
    calificacion_publico: 7.8,
  },
]);

print("✓ peliculas: 4 documentos insertados");

// ============================================================
// 3. COMPLEJOS
// ============================================================
db.complejos.insertMany([
  {
    _id: ObjectId("65a100000000000000000020"),
    cadena_id: ObjectId("65a100000000000000000001"),
    codigo: "CPL-SJ-001",
    nombre: "Cinépolis Multiplaza Escazú",
    provincia: "San José",
    canton: "Escazú",
    distrito: "San Rafael",
    direccion_exacta:
      "Multiplaza Escazú, 3er piso, frente a la entrada principal",
    centro_comercial: "Multiplaza Escazú",
    num_salas: 10,
    estacionamiento: 800,
    servicios_adicionales: ["Restaurante", "Confitería", "Zona de juegos"],
  },
  {
    _id: ObjectId("65a100000000000000000021"),
    cadena_id: ObjectId("65a100000000000000000001"),
    codigo: "CPL-HE-001",
    nombre: "Cinépolis Paseo de las Flores",
    provincia: "Heredia",
    canton: "Heredia",
    distrito: "San Francisco",
    direccion_exacta:
      "Centro Comercial Paseo de las Flores, 2do piso, ala norte",
    centro_comercial: "Paseo de las Flores",
    num_salas: 8,
    estacionamiento: 600,
    servicios_adicionales: ["Confitería", "Zona de juegos"],
  },
  {
    _id: ObjectId("65a100000000000000000022"),
    cadena_id: ObjectId("65a100000000000000000002"),
    codigo: "CMK-SJ-001",
    nombre: "Cinemark Terramall",
    provincia: "San José",
    canton: "La Unión",
    distrito: "Tres Ríos",
    direccion_exacta: "Terramall, planta baja, sector este",
    centro_comercial: "Terramall",
    num_salas: 12,
    estacionamiento: 1200,
    servicios_adicionales: ["Restaurante", "Confitería"],
  },
  {
    _id: ObjectId("65a100000000000000000023"),
    cadena_id: ObjectId("65a100000000000000000003"),
    codigo: "VIC-SJ-001",
    nombre: "Vi Cinemas Oxígeno",
    provincia: "Heredia",
    canton: "Heredia",
    distrito: "Ulloa",
    direccion_exacta: "Centro Comercial Oxígeno, 3er piso",
    centro_comercial: "Oxígeno",
    num_salas: 6,
    estacionamiento: 400,
    servicios_adicionales: ["Confitería"],
  },
]);

print("✓ complejos: 4 documentos insertados");

// ============================================================
// 4. SALAS
// ============================================================
db.salas.insertMany([
  {
    _id: ObjectId("65a100000000000000000030"),
    complejo_id: ObjectId("65a100000000000000000020"),
    numero: 1,
    nombre_sala: "Sala IMAX",
    tipo_sala: "IMAX",
    capacidad_total: 250,
    caracteristicas_pantalla: "Pantalla IMAX 26x19 metros, resolución 4K laser",
    sistema_sonido: "Dolby Atmos",
    tipo_proyector: "Laser IMAX",
    ultima_renovacion: new Date("2022-08-15"),
    config_asientos: {
      total_filas: 18,
      total_columnas: 14,
      espacios_discapacidad: 6,
      butacas_reclinables: false,
      zonas: [
        {
          nombre_zona: "General",
          filas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
          capacidad: 168,
        },
        {
          nombre_zona: "Preferencial",
          filas: ["M", "N", "O", "P", "Q", "R"],
          capacidad: 82,
        },
      ],
    },
  },
  {
    _id: ObjectId("65a100000000000000000031"),
    complejo_id: ObjectId("65a100000000000000000020"),
    numero: 2,
    nombre_sala: "Sala VIP 1",
    tipo_sala: "VIP",
    capacidad_total: 50,
    caracteristicas_pantalla: "Pantalla curva 12x6 metros, resolución 4K",
    sistema_sonido: "Dolby Atmos",
    tipo_proyector: "Digital 4K Christie",
    ultima_renovacion: new Date("2023-01-20"),
    config_asientos: {
      total_filas: 5,
      total_columnas: 10,
      espacios_discapacidad: 2,
      butacas_reclinables: true,
      zonas: [
        {
          nombre_zona: "VIP",
          filas: ["A", "B", "C", "D", "E"],
          capacidad: 50,
        },
      ],
    },
  },
  {
    _id: ObjectId("65a100000000000000000032"),
    complejo_id: ObjectId("65a100000000000000000022"),
    numero: 1,
    nombre_sala: "Sala 4DX",
    tipo_sala: "4DX",
    capacidad_total: 120,
    caracteristicas_pantalla: "Pantalla plana 18x9 metros, resolución 4K",
    sistema_sonido: "Dolby Digital",
    tipo_proyector: "Digital 4K Barco",
    ultima_renovacion: new Date("2021-11-10"),
    config_asientos: {
      total_filas: 10,
      total_columnas: 12,
      espacios_discapacidad: 4,
      butacas_reclinables: false,
      zonas: [
        {
          nombre_zona: "General",
          filas: ["A", "B", "C", "D", "E", "F", "G", "H"],
          capacidad: 96,
        },
        {
          nombre_zona: "Preferencial",
          filas: ["I", "J"],
          capacidad: 24,
        },
      ],
    },
  },
  {
    _id: ObjectId("65a100000000000000000033"),
    complejo_id: ObjectId("65a100000000000000000023"),
    numero: 1,
    nombre_sala: "Sala Convencional 1",
    tipo_sala: "Cine convencional",
    capacidad_total: 180,
    caracteristicas_pantalla: "Pantalla plana 16x8 metros, resolución 2K",
    sistema_sonido: "Dolby Digital",
    tipo_proyector: "Digital 2K NEC",
    ultima_renovacion: new Date("2020-06-05"),
    config_asientos: {
      total_filas: 15,
      total_columnas: 12,
      espacios_discapacidad: 4,
      butacas_reclinables: false,
      zonas: [
        {
          nombre_zona: "General",
          filas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
          capacidad: 120,
        },
        {
          nombre_zona: "Preferencial",
          filas: ["K", "L", "M", "N", "O"],
          capacidad: 60,
        },
      ],
    },
  },
]);

print("✓ salas: 4 documentos insertados");
print("");
print("✓ Base de datos CINEPLEX creada exitosamente.");
print("  Colecciones: cadenas_cines, peliculas, complejos, salas");
