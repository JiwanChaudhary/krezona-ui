import Home from "@/components/home/home";
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
    </main>
  );
}
