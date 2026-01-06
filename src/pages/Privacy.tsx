import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose">
        <h1 className="font-serif text-4xl mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">ReSKN Clinic is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
        <h2 className="font-serif text-2xl mt-8 mb-4">Data Collection</h2>
        <p className="text-muted-foreground">We collect information you provide when booking appointments or completing consultation questionnaires.</p>
        <h2 className="font-serif text-2xl mt-8 mb-4">Contact</h2>
        <p className="text-muted-foreground">For privacy inquiries, email hello@resknclinic.co.uk</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
