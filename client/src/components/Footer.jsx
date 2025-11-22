import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Shopping Cart', path: '/cart' },
];

const customerServiceLinks = [
  'Shipping & Delivery',
  'Returns & Exchange',
  'Warranty Information',
  'FAQ',
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#' },
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
];

const contactInfo = [
  { icon: <Phone className="h-4 w-4" />, text: '+234 (0) 123 456 7890' },
  { icon: <Mail className="h-4 w-4" />, text: 'info@olayinkafurniture.com' },
  {
    icon: <MapPin className="h-6 w-6 mt-1" />,
    text: '1, Aroworamimo Street, Igbo-olomu, Agric Ikorodu, Lagos State, Nigeria.',
    isStart: true, // flag for items that should use items-start
  },
];

function Footer() {
  return (
    <footer className="bg-muted border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-foreground">
              Olayinka Furniture Palace
            </h3>
            <p className="text-sm text-muted-foreground">
              Crafting beautiful, timeless furniture for your home since 1995.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {customerServiceLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className={`flex ${
                    item.isStart ? 'items-start' : 'items-center'
                  } space-x-2 text-muted-foreground`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Olayinka Furniture Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
