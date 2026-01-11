import { Link } from "react-router-dom";
const concerns = [{
  title: "Acne",
  href: "/concerns/acne"
}, {
  title: "Pigmentation",
  href: "/concerns/pigmentation"
}, {
  title: "Sensitivity & Redness",
  href: "/concerns/sensitivity"
}, {
  title: "Ingrown Hairs",
  href: "/concerns/ingrowns"
}, {
  title: "Anti-Ageing",
  href: "/concerns/anti-ageing"
}];
const ConcernsHub = () => <div className="pt-16 pb-16">
    <div className="container mx-auto px-4">
      <h1 className="font-serif text-4xl text-center mb-12">Skin Concerns</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {concerns.map(c => <Link key={c.title} to={c.href} className="card-luxury p-8 text-center hover:border-primary/30">
            <h2 className="font-serif text-xl">{c.title}</h2>
          </Link>)}
      </div>
    </div>
  </div>;
export default ConcernsHub;