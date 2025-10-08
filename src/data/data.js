
const viajes = [
    {
        id: 1,
        title: "Aventura en la Patagonia Argentina",
        category: "Aventura",
        price: 2500,
        img: "/images/patagonia.jpg",
        stock: 12,
        description: "Un viaje de 10 días recorriendo los glaciares, montañas y lagos más impresionantes del sur argentino. Incluye trekking en El Chaltén y visita al Glaciar Perito Moreno."
    },
    {
        id: 2,
        title: "Playas y Ruinas: Riviera Maya",
        category: "Playa",
        price: 1800,
        img: "/images/maya-playa.jpg",
        stock: 15,
        description: "7 días de relax en las playas de Cancún y Tulum, con excursiones a las antiguas ruinas mayas de Chichén Itzá y Cobá. All-inclusive."
    },
    {
        id: 3,
        title: "Safari Fotográfico en Kenia",
        category: "Aventura",
        price: 4500,
        img: "https://placehold.co/600x400?text=Safari+en+Kenia",
        stock: 8,
        description: "Experimenta la vida salvaje de África en un safari de 8 días por la reserva Masai Mara. Avistamiento de los 'Cinco Grandes' garantizado."
    },
    {
        id: 4,
        title: "Cultura y Neón: Explorando Tokio",
        category: "Cultural",
        price: 3200,
        img: "https://placehold.co/600x400?text=Explorando+Tokio",
        stock: 12,
        description: "Sumérgete en la fascinante cultura japonesa. Un viaje de 9 días por Tokio, visitando desde templos antiguos hasta los barrios más modernos."
    },
    {
        id: 5,
        title: "Crucero por las Islas Griegas",
        category: "Playa",
        price: 2800,
        img: "https://placehold.co/600x400?text=Islas+Griegas",
        stock: 20,
        description: "Un crucero de lujo de 7 días visitando Santorini, Mykonos y Creta. Disfruta del sol, la historia y la gastronomía del Mediterráneo."
    },
    {
        id: 6,
        title: "Trekking al Campo Base del Everest",
        category: "Aventura",
        price: 3800,
        img: "https://placehold.co/600x400?text=Campo+Base+Everest",
        stock: 5,
        description: "La aventura de tu vida. Una caminata guiada de 14 días hasta el campamento base de la montaña más alta del mundo. Requiere buena condición física."
    },
    {
        id: 7,
        title: "Historia y Arte en Roma",
        category: "Cultural",
        price: 1500,
        img: "https://placehold.co/600x400?text=Historia+y+Arte+en+Roma",
        stock: 25,
        description: "Descubre los tesoros de la 'Ciudad Eterna'. Paquete de 5 días con visitas guiadas al Coliseo, Foro Romano y Museos Vaticanos."
    },
    {
        id: 8,
        title: "Relax Total en las Maldivas",
        category: "Playa",
        price: 5500,
        img: "https://placehold.co/600x400?text=Relax+en+Maldivas",
        stock: 10,
        description: "Estadía de lujo de 7 noches en un bungalow sobre el agua. Ideal para lunas de miel y escapadas románticas. Incluye snorkel y buceo."
    },
    {
        id: 9,
        title: "Recorrido Gastronómico por Perú",
        category: "Gastronómico",
        price: 2200,
        img: "https://placehold.co/600x400?text=Gastronomia+Peru",
        stock: 15,
        description: "Un tour de 8 días para foodies. Descubre los sabores de Lima, Cusco y el Valle Sagrado, con clases de cocina y visitas a mercados locales."
    },
    {
        id: 10,
        title: "Auroras Boreales en Islandia",
        category: "Naturaleza",
        price: 3500,
        img: "https://placehold.co/600x400?text=Auroras+Boreales",
        stock: 7,
        description: "Un viaje mágico de 6 días en busca de las luces del norte. Incluye tour por el Círculo Dorado y visita a la Laguna Azul."
    },
    {
        id: 11,
        title: "Descubriendo el Antiguo Egipto",
        category: "Cultural",
        price: 2900,
        img: "https://placehold.co/600x400?text=Antiguo+Egipto",
        stock: 18,
        description: "Viaje de 10 días por la tierra de los faraones. Incluye crucero por el Nilo, visita a las Pirámides de Giza y el Valle de los Reyes."
    },
    {
        id: 12,
        title: "Ruta del Vino: Mendoza, Argentina",
        category: "Gastronómico",
        price: 1200,
        img: "https://placehold.co/600x400?text=Ruta+del+Vino+Mendoza",
        stock: 22,
        description: "Escapada de 4 días a la capital del Malbec. Visita a tres bodegas de renombre con degustaciones y almuerzo gourmet incluido."
    },
    {
        id: 13,
        title: "Aventura en Costa Rica: Pura Vida",
        category: "Naturaleza",
        price: 1900,
        img: "https://placehold.co/600x400?text=Aventura+Costa+Rica",
        stock: 14,
        description: "7 días de ecoturismo. Tirolesa sobre la selva, caminatas por puentes colgantes y visita a volcanes activos. ¡Una dosis de adrenalina y naturaleza!"
    },
    {
        id: 14,
        title: "Castillos y Leyendas: Escocia",
        category: "Cultural",
        price: 2400,
        img: "https://placehold.co/600x400?text=Castillos+de+Escocia",
        stock: 11,
        description: "Un tour de 8 días por las Tierras Altas de Escocia. Visita el Lago Ness, el Castillo de Edimburgo y la Isla de Skye."
    },
    {
        id: 15,
        title: "Sol y Samba en Río de Janeiro",
        category: "Playa",
        price: 1300,
        img: "https://placehold.co/600x400?text=Rio+de+Janeiro",
        stock: 30,
        description: "Paquete de 5 días para disfrutar de las playas de Copacabana e Ipanema, y subir al Cristo Redentor y al Pan de Azúcar."
    },
    {
        id: 16,
        title: "Maravillas de Petra y Wadi Rum",
        category: "Aventura",
        price: 3100,
        img: "https://placehold.co/600x400?text=Petra+y+Wadi+Rum",
        stock: 9,
        description: "Un viaje inolvidable de 7 días a Jordania. Explora la ciudad perdida de Petra y pasa una noche bajo las estrellas en el desierto de Wadi Rum."
    },
    {
        id: 17,
        title: "Esplendor Imperial: Viena y Praga",
        category: "Cultural",
        price: 1950,
        img: "https://placehold.co/600x400?text=Viena+y+Praga",
        stock: 16,
        description: "Un tour de 8 días por dos de las capitales más bellas de Europa. Incluye visitas a palacios, conciertos de música clásica y tours históricos."
    },
    {
        id: 18,
        title: "Buceo en la Gran Barrera de Coral",
        category: "Aventura",
        price: 4200,
        img: "https://placehold.co/600x400?text=Gran+Barrera+de+Coral",
        stock: 6,
        description: "Experiencia de buceo de 5 días en Australia. Explora el ecosistema marino más grande del mundo con instructores certificados PADI."
    },
    {
        id: 19,
        title: "Sabores de Tailandia",
        category: "Gastronómico",
        price: 2100,
        img: "https://placehold.co/600x400?text=Sabores+de+Tailandia",
        stock: 13,
        description: "10 días de inmersión en la cultura culinaria tailandesa. Clases de cocina en Bangkok y Chiang Mai, y tours de comida callejera."
    },
    {
        id: 20,
        title: "Parques Nacionales del Oeste de USA",
        category: "Naturaleza",
        price: 3300,
        img: "https://placehold.co/600x400?text=Parques+Nacionales+USA",
        stock: 10,
        description: "Un road trip de 12 días visitando el Gran Cañón, Zion y Yosemite. Ideal para amantes de la fotografía y el senderismo."
    },
    {
        id: 21,
        title: "Misterios de la Isla de Pascua",
        category: "Cultural",
        price: 3600,
        img: "https://placehold.co/600x400?text=Isla+de+Pascua",
        stock: 5,
        description: "Viaje de 5 días a Rapa Nui para descubrir la historia de los enigmáticos moáis. Incluye tours arqueológicos y vistas al amanecer."
    },
    {
        id: 22,
        title: "Mercados y Riads de Marruecos",
        category: "Cultural",
        price: 1700,
        img: "https://placehold.co/600x400?text=Marruecos",
        stock: 20,
        description: "Sumérgete en la cultura marroquí durante 7 días. Explora los zocos de Marrakech, duerme en un riad tradicional y visita el desierto de Agafay."
    },
    {
        id: 23,
        title: "Esquí en los Alpes Suizos",
        category: "Aventura",
        price: 2950,
        img: "https://placehold.co/600x400?text=Esqui+Alpes+Suizos",
        stock: 12,
        description: "Semana de esquí en Zermatt con vistas al Matterhorn. Paquete incluye pases de telesilla, alquiler de equipo y alojamiento en chalet."
    },
    {
        id: 24,
        title: "Naturaleza Salvaje en Galápagos",
        category: "Naturaleza",
        price: 6200,
        img: "https://placehold.co/600x400?text=Galapagos",
        stock: 4,
        description: "Crucero de expedición de 8 días por las Islas Galápagos. Observa tortugas gigantes, leones marinos e iguanas marinas en su hábitat natural."
    },
    {
        id: 25,
        title: "Capitales del Báltico: Tallin y Riga",
        category: "Cultural",
        price: 1850,
        img: "https://placehold.co/600x400?text=Capitales+del+Baltico",
        stock: 17,
        description: "Un encantador viaje de 6 días por los cascos históricos medievales de Tallin (Estonia) y Riga (Letonia), ambos Patrimonio de la Humanidad."
    }
];

export default viajes;
