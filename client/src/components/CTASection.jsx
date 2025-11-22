import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>

        {/* Description */}
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Visit our showroom or browse our online collection to find the perfect pieces for your
          home.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop">
            <button className="px-6 py-3 rounded-md border-2 border-primary-foreground bg-primary-foreground text-primary font-medium hover:bg-primary-light hover:text-primary-foreground transition">
              Browse Collection
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-6 py-3 rounded-md border-2 border-primary-foreground bg-primary text-primary-foreground font-medium hover:bg-primary-foreground hover:text-primary transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
