import { Link } from 'react-router-dom';
import { aboutImage, values } from '../data/Value';
import { Icon } from 'lucide-react';

const stats = [
  { value: '28+', label: 'Years in Business' },
  { value: '5000+', label: 'Happy Customers' },
  { value: '200+', label: 'Furniture Pieces' },
  { value: '50+', label: 'Expert Craftsmen' },
];

function About() {
  const value = values;
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              Since 1995, we've been crafting furniture that transforms houses into homes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Intro Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">A Legacy of Excellence</h2>

              <p className="text-muted-foreground">
                Olayinka Furniture Palace was founded in 1995 with a simple mission: to create
                beautiful, durable furniture that stands the test of time. What started as a small
                workshop has grown into a trusted name in quality furniture, serving thousands
                across Nigeria.
              </p>

              <p className="text-muted-foreground">
                Our founder, Chief Olayinka, believed that furniture should be more than functional—
                it should reflect personality and add warmth to everyday life.
              </p>

              <p className="text-muted-foreground">
                Every piece we create combines craftsmanship, modern design, and premium materials
                that last for generations.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Furniture workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Values</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-card rounded-lg shadow-card hover:scale-[1.03] transition-transform"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>

                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team CTA Section */}
          <div className="bg-muted/30 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our passionate designers, craftsmen, and support team work together to bring you the
              finest furniture & a premium shopping experience.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/shop">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-colors">
                  Browse Collection
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((item, index) => (
                  <div key={index}>
                    <p className="text-5xl font-bold mb-2">{item.value}</p>
                    <p className="text-sm opacity-80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;
