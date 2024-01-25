import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import ContenedorPrincipal from "@/components/ContenedorPrincipal";

export default function Home() {
  //porque hay solo una página, realizaré todo en la home page
  return (
    <main className="bg-white">
      <ContenedorPrincipal />
    </main>
  );
}
