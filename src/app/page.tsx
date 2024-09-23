import About from "@/components/about/about";
import Home from "@/components/home/home";
import KrezonaServices from "@/components/krezona-services/krezona-services";
import Navbar from "@/components/navbar/navbar";

export default function Page() {
  return (
    <main>
      <section className="pb-4 border-b">
        <div className="page-wrapper">
          <Navbar />
        </div>
      </section>
      <div className="page-wrapper">
        <Home />
      </div>
      <div className="page-wrapper">
        <About />
      </div>
      <KrezonaServices />
    </main>
  );
}
