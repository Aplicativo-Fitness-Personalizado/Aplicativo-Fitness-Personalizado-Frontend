// Carousel.tsx


// CarouselSection.tsx


// Atualizacoes.tsx
import Card from "../../assets/img/Card.png";
import Card1 from "../../assets/img/Card1.png";
import Card2 from "../../assets/img/Card2.png";
import Card3 from "../../assets/img/Card3.png";
import { CarouselSection } from "../carrossel/CarouselSection";


export default function Atualizacoes() {
  const sections = [
    {
      images: [Card, Card1],
      text: (
        <>
          <p>
            Estamos trabalhando para trazer mais recursos à sua experiência!
            Em breve, nossa aplicação contará com uma nova funcionalidade que
            permitirá o cadastro e visualização dos dados de
            <span className="font-bold text-primary"> antropometria</span> — como
            peso, altura, IMC, circunferências corporais e outros indicadores
            físicos importantes.
          </p>
          <p>
            Essa atualização vai ajudar você a acompanhar melhor sua evolução e
            ter um controle mais completo das informações de saúde e bem-estar.
          </p>
        </>
      ),
    },
    {
      images: [Card2, Card3],
      text: (
        <>
          <p>
            também teremos uma área exclusiva chamada
            <span className="font-bold text-primary"> Minha Dieta</span>. Em
            parceria com nutricionistas, você terá acesso à sua dieta
            personalizada, alinhada aos seus treinos e as avalições físicas.
          </p>
          <p>
            Tudo em um só lugar: acompanhamento físico, metas de treino e
            alimentação — para cuidar da sua saúde de forma integrada.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-background px-6 py-8 min-h-screen flex flex-col items-center">
      <h1 className="text-primary text-4xl font-bold text-center mb-10">
        Em breve
      </h1>

      {sections.map(({ images, text }, index) => (
        <CarouselSection key={index} images={images} text={text} reverse={index % 2 === 1} />
      ))}
    </div>
  );
} 