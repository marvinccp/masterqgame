export const getData = async () =>{
  const res = await fetch('https://masterquestionback-production.up.railway.app/game/questions')
  const data = await res.json()
  console.log(data);
  return data
}









export const data = [
  {
    id: 16,
    category: "Easy",
    question: "¿En qué país se encuentra la Torre Eiffel?",
    options: [
      {
        op: 1,
        answerText: "España",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Italia",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Francia",
        isCorrect: true,
      },
    ],
    createdAt: "2023-04-30T22:59:32.639Z",
    updatedAt: "2023-04-30T22:59:32.639Z",
  },
  {
    id: 17,
    category: "Easy",
    question: "¿Cuanto es 2 + 2 - 1?",
    options: [
      {
        op: 1,
        answerText: "5",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "8",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "3",
        isCorrect: true,
      },
    ],
    createdAt: "2023-05-01T15:06:51.508Z",
    updatedAt: "2023-05-01T15:06:51.508Z",
  },
  {
    id: 3,
    category: "Easy",
    question: "¿Que hace un pez todo el día?",
    options: [
      {
        op: 1,
        answerText: "Nada",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Busca a su hijo",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Come gusanos",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:40:21.667Z",
    updatedAt: "2023-04-30T22:40:21.667Z",
  },
  {
    id: 4,
    category: "Easy",
    question: "¿Cuál es la capital de España?",
    options: [
      {
        op: 1,
        answerText: "Barcelona",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Madrid",
        isCorrect: true,
      },
      {
        op: 3,
        answerText: "Valencia",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:41:43.162Z",
    updatedAt: "2023-04-30T22:43:16.743Z",
  },
  {
    id: 5,
    category: "Easy",
    question: "¿Qué animal es conocido como el `Rey de la Selva`",
    options: [
      {
        op: 1,
        answerText: "León",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Tigre",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Oso",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:44:16.885Z",
    updatedAt: "2023-04-30T22:44:16.885Z",
  },
  {
    id: 6,
    category: "Easy",
    question: "¿Cuál es el instrumento musical más popular del mundo?",
    options: [
      {
        op: 1,
        answerText: "Piano",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Guitarra",
        isCorrect: true,
      },
      {
        op: 3,
        answerText: "Batería",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:45:41.702Z",
    updatedAt: "2023-04-30T22:45:41.702Z",
  },
  {
    id: 7,
    category: "Medium",
    question: "¿En qué año comenzó la Primera Guerra Mundial?",
    options: [
      {
        op: 1,
        answerText: "1918",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "1916",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "1914",
        isCorrect: true,
      },
    ],
    createdAt: "2023-04-30T22:46:51.428Z",
    updatedAt: "2023-04-30T22:46:51.428Z",
  },
  {
    id: 8,
    category: "Medium",
    question: "¿Cuál es la capital de Australia?",
    options: [
      {
        op: 1,
        answerText: "Canberra",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Sydney",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Melbourne",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:47:40.570Z",
    updatedAt: "2023-04-30T22:47:40.570Z",
  },
  {
    id: 9,
    category: "Medium",
    question: "¿En qué año se fundó Google?",
    options: [
      {
        op: 1,
        answerText: "1996",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "1998",
        isCorrect: true,
      },
      {
        op: 3,
        answerText: "2000",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:48:21.504Z",
    updatedAt: "2023-04-30T22:48:21.504Z",
  },
  {
    id: 10,
    category: "Medium",
    question:
      "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
    options: [
      {
        op: 1,
        answerText: "1776",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "1789",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "1804",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:49:19.793Z",
    updatedAt: "2023-04-30T22:49:19.793Z",
  },
  {
    id: 11,
    category: "Hard",
    question:
      "¿En qué país se encuentra la ciudad de Petra, famosa por sus ruinas arqueológicas?",
    options: [
      {
        op: 1,
        answerText: "Irak",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Egypto",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Jordania",
        isCorrect: true,
      },
    ],
    createdAt: "2023-04-30T22:50:34.291Z",
    updatedAt: "2023-04-30T22:50:34.291Z",
  },
  {
    id: 12,
    category: "Hard",
    question: "¿En qué país se encuentra el desierto del Kalahari?",
    options: [
      {
        op: 1,
        answerText: "Namibia",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Botswana",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Sudáfrica",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:51:40.302Z",
    updatedAt: "2023-04-30T22:51:40.302Z",
  },
  {
    id: 13,
    category: "Hard",
    question: "¿Quién es el autor de 'Guerra y Paz'?",
    options: [
      {
        op: 1,
        answerText: "Anton Chejov",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Fiodor Dostoievski",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Tolstói",
        isCorrect: true,
      },
    ],
    createdAt: "2023-04-30T22:52:39.344Z",
    updatedAt: "2023-04-30T22:52:39.344Z",
  },
  {
    id: 14,
    category: "Easy",
    question: "¿Cuál es el planeta más cercano al sol?",
    options: [
      {
        op: 1,
        answerText: "Mercurio",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Venus",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Tierra",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:55:29.392Z",
    updatedAt: "2023-04-30T22:55:29.392Z",
  },
  {
    id: 15,
    category: "Medium",
    question: "¿Cuál es el océano más grande del mundo?",
    options: [
      {
        op: 1,
        answerText: "Atlántico",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Pacífico",
        isCorrect: true,
      },
      {
        op: 3,
        answerText: "Índico",
        isCorrect: false,
      },
    ],
    createdAt: "2023-04-30T22:56:39.998Z",
    updatedAt: "2023-04-30T22:56:39.998Z",
  },
  {
    id: 18,
    category: "Hard",
    question: "¿Cuál es el simbolo químico del Rodio?",
    options: [
      {
        op: 1,
        answerText: "Rh",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Rd",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Rdh",
        isCorrect: false,
      },
    ],
    createdAt: "2023-05-01T15:45:37.654Z",
    updatedAt: "2023-05-01T15:45:37.654Z",
  },
  {
    id: 19,
    category: "Medium",
    question: "¿Cuanto es 5+5 * 2",
    options: [
      {
        op: 1,
        answerText: "20",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "15",
        isCorrect: true,
      },
      {
        op: 3,
        answerText: "12",
        isCorrect: false,
      },
    ],
    createdAt: "2023-05-01T15:50:26.393Z",
    updatedAt: "2023-05-01T15:50:26.393Z",
  },
  {
    id: 20,
    category: "Medium",
    question: "¿Simbolo Químico del cobalto?",
    options: [
      {
        op: 1,
        answerText: "Co",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: "Kb",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Ko",
        isCorrect: false,
      },
    ],
    createdAt: "2023-05-01T18:05:33.315Z",
    updatedAt: "2023-05-01T18:05:33.315Z",
  },
  {
    id: 21,
    category: "Hard",
    question:
      "¿Cuál es el nombre de la estructura de proteínas que se encuentra en los cromosomas y contiene la información genética de los seres vivos?",
    options: [
      {
        op: 1,
        answerText: "Ribosomas",
        isCorrect: false,
      },
      {
        op: 2,
        answerText: "Núcleo",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "ADN",
        isCorrect: true,
      },
    ],
    createdAt: "2023-05-02T12:03:30.969Z",
    updatedAt: "2023-05-02T12:03:30.969Z",
  },
  {
    id: 22,
    category: "Hard",
    question:
      "¿Cuál es el nombre de la ley que establece que la presión y la temperatura de un gas son inversamente proporcionales cuando la cantidad de gas y el volumen son constantes?",
    options: [
      {
        op: 1,
        answerText: "Ley de Boyle  ",
        isCorrect: true,
      },
      {
        op: 2,
        answerText: " Ley de Charles",
        isCorrect: false,
      },
      {
        op: 3,
        answerText: "Ley de Avogadro",
        isCorrect: false,
      },
    ],
    createdAt: "2023-05-02T12:09:30.632Z",
    updatedAt: "2023-05-02T12:09:30.632Z",
  },
];
