import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Shield, Clock, CheckCircle, X } from 'lucide-react';

const WarrantySection = () => {
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    productCategory: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
    retailer: '',
    invoiceNumber: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setInvoiceFile(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const warrantyPeriods = [
    {
      category: 'Bela tehnika',
      legal: '2 godine',
      extended: '4 godine',
      total: '6 godina',
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      category: 'Televizori - Android',
      legal: '2 godine',
      extended: '1 godina',
      total: '3 godine',
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      category: 'Televizori - WebOS',
      legal: '2 godine',
      extended: '3 godine',
      total: '5 godina',
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      category: 'Mali kućni aparati',
      legal: '2 godine',
      extended: '-',
      total: '2 godine',
      icon: <Shield className="w-8 h-8 text-gray-400" />
    }
  ];

  return (
    <section id="warranty" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Registracija garancije</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            U promotivnom periodu <b>01.01.2025.-31.12.2025</b>. registracijom u roku od 30 dana od datuma kupovine svaki potrošač ostvaruje pravo na produženu garanciju na kategorije bela tehnika i TV pod brendom Carbon.
          </p>
        </div>

        {/* Warranty Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {warrantyPeriods.map((warranty, index) => (
            <Card key={index} className="bg-gray-50 border-gray-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {warranty.icon}
                </div>
                <CardTitle className="text-black text-sm">{warranty.category}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <div className="text-gray-600">
                    <span className="text-xs">Zakonska garancija:</span>
                    <div className="text-base font-bold text-black">{warranty.legal}</div>
                  </div>
                  {warranty.extended !== '-' && (
                    <div className="text-gray-600">
                      <span className="text-xs">Dodatno:</span>
                      <div className="text-base font-bold text-blue-600">+{warranty.extended}</div>
                    </div>
                  )}
                  <div className="pt-2 border-t border-gray-300">
                    <span className="text-xs text-gray-500">Ukupno:</span>
                    <div className="text-lg font-bold text-green-600">{warranty.total}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showForm && (
          <div className="flex justify-center mb-8">
            <Button
              className="relative text-2xl px-12 py-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-xl text-white font-bold pulse-scale focus:scale-105 hover:scale-105 transition-transform duration-200 border-4 border-white"
              style={{ boxShadow: '0 8px 32px 0 rgba(0, 80, 255, 0.25)' }}
              onClick={() => setShowForm(true)}
            >
              Prikaži formu za registraciju
            </Button>
          </div>
        )}

        {showForm && (
          <div className="relative">
            <button
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow-lg transition-colors"
              onClick={() => setShowForm(false)}
              aria-label="Zatvori formu"
            >
              <X className="w-7 h-7" />
            </button>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Forma za registraciju</CardTitle>
                <CardDescription className="text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span>Rok za registraciju: 30 dana od kupovine</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Lični podaci</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">Ime</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">Prezime</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Telefon</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Adresa</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address" className="text-gray-300">Adresa</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-gray-300">Grad</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Podaci o proizvodu</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="productCategory" className="text-gray-300">Kategorija proizvoda</Label>
                      <Select onValueChange={(value) => handleInputChange('productCategory', value)}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="Izaberite kategoriju" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="televizori">Televizori</SelectItem>
                          <SelectItem value="bela-tehnika">Bela tehnika</SelectItem>
                          <SelectItem value="mali-aparati">Mali kućni aparati</SelectItem>
                          <SelectItem value="lepota-nega">Lepota i nega</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="model" className="text-gray-300">Model</Label>
                      <Input
                        id="model"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="serialNumber" className="text-gray-300">Serijski broj</Label>
                      <Input
                        id="serialNumber"
                        value={formData.serialNumber}
                        onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="purchaseDate" className="text-gray-300">Datum kupovine</Label>
                      <Input
                        id="purchaseDate"
                        type="date"
                        value={formData.purchaseDate}
                        onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Purchase Information */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Podaci o kupovini</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="retailer" className="text-gray-300">Prodavac</Label>
                      <Input
                        id="retailer"
                        value={formData.retailer}
                        onChange={(e) => handleInputChange('retailer', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="invoiceNumber" className="text-gray-300">Broj računa</Label>
                      <Input
                        id="invoiceNumber"
                        value={formData.invoiceNumber}
                        onChange={(e) => handleInputChange('invoiceNumber', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Invoice Upload */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Učitaj fotografiju računa</h3>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-4">
                      Prevucite fotografiju računa ovde ili kliknite da izaberete fajl
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="invoice-upload"
                    />
                    <label htmlFor="invoice-upload">
                      <Button variant="outline" className="cursor-pointer">
                        Izaberite fajl
                      </Button>
                    </label>
                    {invoiceFile && (
                      <div className="mt-4 flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">{invoiceFile.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Registruj garanciju
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default WarrantySection;
