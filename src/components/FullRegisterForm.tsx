import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Clock, CheckCircle, X } from 'lucide-react';

interface FullRegisterFormProps {
  onClose: () => void;
}

const FullRegisterForm: React.FC<FullRegisterFormProps> = ({ onClose }) => {
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    productCategory: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
    retailer: '',
    invoiceNumber: ''
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setInvoiceFile(file);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadein px-2">
      <Card className="bg-gray-800 border-gray-700 relative w-full max-w-2xl mx-auto rounded-3xl p-6 overflow-y-auto max-h-[95vh]">
        <button
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow-lg transition-colors"
          onClick={onClose}
          aria-label="Zatvori formu"
          type="button"
        >
          <X className="w-7 h-7" />
        </button>
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-xl sm:text-2xl">Forma za registraciju</CardTitle>
          <CardDescription className="text-gray-300 text-xs sm:text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>Rok za registraciju: 30 dana od kupovine</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Lični podaci</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Adresa</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="sm:col-span-2">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Podaci o proizvodu</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Podaci o kupovini</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-4">Učitaj fotografiju računa</h3>
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
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-base sm:text-lg py-2 sm:py-3 rounded-lg mt-2">
            Registruj nalog
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FullRegisterForm; 