import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Clock, CheckCircle, X } from 'lucide-react';

interface RegisterFormProps {
  formData: any;
  setFormData: (cb: (prev: any) => any) => void;
  invoiceFile: File | null;
  setInvoiceFile: (file: File | null) => void;
  onClose: () => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (field: string, value: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  formData,
  setFormData,
  invoiceFile,
  setInvoiceFile,
  onClose,
  handleFileUpload,
  handleInputChange,
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      for (const [key, value] of Object.entries(formData)) {
        if (!value) {
          alert('Sva polja moraju biti popunjena!');
          return;
        }
      }
      if (!invoiceFile) {
        alert('Morate izabrati fajl računa!');
        return;
      }
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, String(value)));
      if (invoiceFile) data.append('invoiceFile', invoiceFile);
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/garancije`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        alert('Uspešno ste registrovali garanciju!');
        setFormData((prev: any) => ({
          ...prev,
          firstName: '', lastName: '', email: '', phone: '', address: '', city: '', productCategory: '', model: '', serialNumber: '', purchaseDate: '', retailer: '', invoiceNumber: ''
        }));
        setInvoiceFile(null);
        onClose();
      } else {
        alert('Došlo je do greške!');
      }
    } catch (err) {
      alert('Došlo je do greške!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 relative animate-fadein w-full max-w-xs p-4 sm:max-w-md sm:p-6 md:max-w-none md:p-12 md:rounded-2xl mx-auto overflow-y-auto max-h-[95vh] flex flex-col">
      <button
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow-lg transition-colors"
        onClick={onClose}
        aria-label="Zatvori formu"
        type="button"
      >
        <X className="w-7 h-7" />
      </button>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-white text-2xl">Registracija naloga</CardTitle>
          <CardDescription className="text-gray-300">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Popunite podatke za registraciju naloga</span>
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
          {/* Password */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Lozinka</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password" className="text-gray-300">Lozinka</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password || ''}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="password2" className="text-gray-300">Ponovi lozinku</Label>
                <Input
                  id="password2"
                  type="password"
                  value={formData.password2 || ''}
                  onChange={(e) => handleInputChange('password2', e.target.value)}
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
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={loading}>
            {loading ? 'Slanje...' : 'Registruj nalog'}
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default RegisterForm; 