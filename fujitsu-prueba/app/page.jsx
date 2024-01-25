import "primeicons/primeicons.css";
import ContenedorPrincipal from "@/components/ContenedorPrincipal";
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';

export default function Home() {
  //porque hay solo una página, realizaré todo en la home page
  return (
    <main className="bg-white">
      <ContenedorPrincipal />
    </main>
  );
}
