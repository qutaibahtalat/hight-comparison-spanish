"use client";
import AddPerson from "@/components/controls/AddPerson";
import Board from "@/components/controls/Board";
import AddItems from "@/components/controls/AddItems";
import NavBar from "@/components/NavBar";
import { useGlobals } from "@/contexts/GlobalContext";
import AddImage from "@/components/controls/AddImage";
import BoardUtilities from "@/components/controls/BoardUtilities";
import EditPersons from "@/components/controls/EditPersons";
import Celebrities from "@/components/controls/Celebrities";
import { ItemType } from "@/misc/enums";
import AddPokemon from "@/components/controls/AddPokemon";
import { BsImage } from "react-icons/bs";
import { cn } from "@/misc/utils";
import AdsenseUnit from "@/components/google-ads/AdsenseUnit";
import { useEffect } from "react";

export default function Home() {
  const { selectedScreen, setSelectedScreen } = useGlobals();

  useEffect(() => {
    document.title = "Comparación De Altura - Comparar Estaturas en Segundos";
  }, []);

  // Define the screens inside the component
  const screens = {
    "Agregar persona": <AddPerson key="add-person" />,
    "Editar personas": <EditPersons key="edit-persons" />,
    "Celebridades": <Celebrities key="celebrities" category="Celebrities" />,
    "Ficticia": <Celebrities key="fictional" category="Fictional" />,
    "Objetos": <AddItems type={ItemType.OBJECT} key="add-items-object" />,
    "Edificios": <AddItems type={ItemType.BUILDING} key="add-items-building" />,
    "Animales": <AddItems type={ItemType.ANIMAL} key="add-items-animal" />,
    "Pokémon": <AddPokemon key="add-items-pokemon" />,
    "Agregar imagen": <AddImage key="add-image" />,
  };

  return (
    <main className="p-2.5 space-y-2.5 flex flex-col items-stretch">
      <NavBar className="hidden lg:flex z-[9999]" />
      <div className="md:hidden">
        <AdsenseUnit slot="1419638897" format="auto" responsive={true} />
      </div>

      <div className="flex flex-col lg:flex-row gap-2.5  h-fit lg:min-h-screen relative z-10">
        <div className="w-full h-full lg:max-w-[400px] bg-white rounded-2xl shadow-sm p-4 border border-gray-200 overflow-y-auto">
          {screens[selectedScreen as keyof typeof screens]}
        </div>
        <div className="flex flex-col flex-grow gap-2 order-first lg:order-none">
          <BoardUtilities />
          <Board />
          <span
            onClick={() => setSelectedScreen("Agregar imagen")}
            className={`flex md:hidden w-full justify-center items-center gap-2 max-h-[50px] py-4 px-6 h-full !mt-0 border-b border-transparent bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:text-primary hover:border-primary/40 ${cn(
              selectedScreen === "Agregar imagen" && "!text-primary !border-primary"
            )}`}
          >
            <BsImage />
            <span className="text-xs text-center"> Agregar imagen</span>
          </span>
          <NavBar className="lg:hidden" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2.5">
        <div className="w-full md:min-w-[400px] md:max-w-[400px]">
          <AdsenseUnit slot="7985047243" format="auto" responsive={true} />
        </div>
        <Content />
      </div>
    </main>
  );
}

const Content = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 [&_p]:text-sm [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h2]:mt-4 [&_p]:mt-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2  [&_ul]:text-sm [&_ul]:mt-2 [&_li]:text-sm [&_li]:mt-2 [&_li]:mb-2">
      <p>
        HeightComparisonChart.com tiene una herramienta simple pero poderosa para comparar estaturas con tu pareja, hijos, mascotas, celebridades, personajes ficticios o incluso con monumentos famosos. Con solo unos clics, puedes hacer una comparación visual de alturas sin perder tiempo buscando entre innumerables aplicaciones o sitios web.
      </p>
      <h2>Cómo Usar el Comparador de Alturas</h2>
      <p>
        Este comparador de alturas ha sido desarrollado para todo tipo de personas, sin importar la edad, el género o la ubicación. Su interfaz fácil de usar te permite elegir entre centímetros o pies/pulgadas como unidad de medida. Puedes comparar alturas de hasta 10,000 metros (más de 32,800 pies), lo que significa que puedes medir desde un niño pequeño hasta estructuras imponentes como el Monte Everest, la Torre Eiffel, el Burj Khalifa o la Estatua de la Libertad.
      </p>
      <h2>Pasos:</h2>
      <ul>
        <li>Selecciona los sujetos a comparar: personas, animales, personajes de ficción o edificios.</li>
        <li>Ingresa los datos: altura, género y opcionalmente el peso (en caso de personas, para un mayor realismo).</li>
        <li>Haz clic en “Agregar”: Cada figura aparecerá en el gráfico una al lado de la otra.</li>
        <li>Para objetos: No es necesario ingresar la altura, ya que nuestra base de datos incluye dimensiones reales ya precargadas.</li>
      </ul>
      <p>
        Nuestro simulador de estatura genera representaciones claras y a escala real. La herramienta también convierte automáticamente entre centímetros y pies según tus preferencias.
      </p>
      <h2>¿Por Qué Usar Este Simulador de Estatura?</h2>
      <p>
        A diferencia de visualizadores básicos, este simulador de estatura utiliza avatares realistas y una interfaz visual que permite entender claramente la diferencia de altura entre dos o más sujetos. Si te preguntas cómo luces al lado de una celebridad o quieres resolver una discusión sobre estaturas con un amigo, esta herramienta es para ti.
      </p>
      <h2>Compara con Celebridades y Personajes</h2>
      <ul>
        <li>Celebridades: BTS, actores, atletas, luchadores de UFC, presidentes de EE. UU. y muchos más.</li>
        <li>Personajes ficticios: Spider-Man, Pokémon, Batman, Naruto, Goku, etc.</li>
        <li>Animales: dinosaurios, jirafas, elefantes, alces y otros.</li>
        <li>Estructuras famosas: Torre Eiffel, Big Ben, el London Eye y más.</li>
      </ul>
      <h2>Compara Grupos, Bodas, Eventos o Amigos</h2>
      <p>
        ¿Quieres ver cómo te verás junto a tus damas de honor, padrinos o tu grupo de amigos? Usa el comparador de alturas para añadir varias personas al mismo tiempo y visualizar cómo se ven juntas. Esta función es ideal para planear fotos grupales o simplemente por diversión.
      </p>
      <h2>¿Es Preciso? Claro que sí.</h2>
      <p>
        Nuestro simulador de estatura es altamente preciso. Puedes comparar 5’11” con 5’7″ o colocar a varias personas una al lado de la otra, y verás avatares proporcionales y detallados. Todo está diseñado para ofrecer resultados realistas al instante.
      </p>
      <h2>Nuestra Misión</h2>
      <p>
        Queremos ayudarte a comparar estaturas de una forma precisa, visual y entretenida. Nuestra misión es hacer que la comparación de estaturas sea accesible para todos, ya sea entre amigos, familiares, personajes ficticios o monumentos mundialmente famosos. Gracias a nuestro sistema visual único, diseño inclusivo y compatibilidad con múltiples unidades de medida, puedes ver cómo te comparas con cualquier persona u objeto, desde cualquier parte del mundo.
      </p>
    </div>
  );
};
