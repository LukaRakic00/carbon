import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock, MapPin, Wrench, Shield, Truck } from 'lucide-react';

const ServiceSection = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: 'Tehnička podrška',
      description: 'Stručna pomoć za sve Carbon proizvode'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Garantni servis',
      description: 'Besplatan servis u garantnom roku'
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-400" />,
      title: 'Dostava i montaža',
      description: 'Profesionalna montaža na adresi'
    }
  ];

  return (
    <section id="service" className="py-10 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-2">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 sm:text-2xl">Servis i podrška</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tu smo da vam pomognemo sa vašim Carbon proizvodima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <Card className="bg-white border-gray-200 h-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-black text-2xl sm:text-xl">Kontakt informacije</CardTitle>
                <CardDescription className="text-gray-600">
                  Kontaktirajte naš servis za bilo kakvu pomoć
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold">Telefon</h3>
                    <p className="text-gray-600">011/635-12-20 | 011/635-12-12</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold">Email</h3>
                    <p className="text-gray-600 break-all">servis@smarttehnologysolution.co.rs</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold">Adresa</h3>
                    <p className="text-gray-600">Maglajska 11, Beograd</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black font-semibold">Radno vreme</h3>
                    <div className="text-gray-600">
                      <p>Ponedeljak - Petak: 09:00 - 17:00</p>
                      <p>Subota: 10:00 - 14:00</p>
                      <p>Nedelja: zatvoreno</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Kontaktiraj servis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-xl font-bold text-black mb-6">Naše usluge</h3>
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-6 sm:p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-black font-semibold text-lg sm:text-base mb-2">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-base sm:text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200 shadow-lg">
              <CardContent className="p-6 sm:p-4">
                <h4 className="text-black font-semibold text-lg sm:text-base mb-4">
                  Garantni uslovi
                </h4>
                <div className="space-y-2 text-gray-700 text-base sm:text-sm">
                  <p>• Bela tehnika: 6 godina (2+4 godine nakon registracije)</p>
                  <p>• Televizori: 3 godine (2+1 godina nakon registracije)</p>
                  <p>• Mali kućni aparati: 2 godine zakonska garancija</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Produžena garancija važi samo uz registraciju u roku od 30 dana
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
