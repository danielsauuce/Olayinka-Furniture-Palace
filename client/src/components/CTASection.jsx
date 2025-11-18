import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-foreground">
      <div className=" container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Visit our showroom or browse our online collection to find the perfect pieces for your
          home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-foreground border p-2"> Browse collection</button>
          <button className="bg-primary text-foreground border p-2"> Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
