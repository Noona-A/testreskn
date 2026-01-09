const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground mb-12">Real reviews coming soon</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-luxury p-6">
              <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-4 animate-pulse" />
              <div className="h-3 bg-muted rounded w-1/2 mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
