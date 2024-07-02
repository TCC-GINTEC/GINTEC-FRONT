export default function
const [principal, setPrincipal] = useState([
  {
    id: 1,
    nome: 'fulano',
    qda: 25,
    qdp: 18.436,
    dia: 1,
    totalPontos: 60.7,
    mencao: 'MB',
  },
  {
    id: 2,
    nome: 'joao',
    qda: 13,
    qdp: 9.896,
    dia: 1,
    totalPontos: 25.76,
    mencao: 'R',
  },
  {
    id: 3,
    nome: 'beltrano',
    qda: 19,
    qdp: 18.436,
    dia: 1,
    totalPontos: 48.367,
    mencao: 'B',
  },
  {
    id: 4,
    nome: 'ciclano',
    qda: 25,
    qdp: 1200,
    dia: 1,
    totalPontos: 0,
    mencao: 'I',
  },
]);

function getColorClass(mencao) {
  switch (mencao) {
    case 'MB':
      return 'bg-[#3ACF1F]'; // Verde para MB
    case 'B':
      return 'bg-[#A0C340]'; // Verde-claro para B
    case 'I':
      return 'bg-[#D32719]'; // Vermelho para I
    case 'R':
      return 'bg-[#FFC24C]'; // Laranja para R
    default:
      return 'bg-gray-200'; // Cor padrão para outras menções
  }
}

