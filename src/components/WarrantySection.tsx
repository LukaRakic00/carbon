import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Shield, Clock, CheckCircle, X } from 'lucide-react';
import FullRegisterForm from './FullRegisterForm';
import WarrantyFullScreenForm from './WarrantyFullScreenForm';

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
              className="relative text-xl px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-xl text-white font-bold pulse-scale focus:scale-105 hover:scale-105 transition-transform duration-200 border-4 border-white md:text-2xl md:px-12 md:py-6"
              style={{ boxShadow: '0 8px 32px 0 rgba(0, 80, 255, 0.25)' }}
              onClick={() => setShowForm(true)}
            >
              Prikaži formu za registraciju
            </Button>
          </div>
        )}

        {showForm && (
          <WarrantyFullScreenForm onClose={() => setShowForm(false)} />
        )}
      </div>
    </section>
  );
};

export default WarrantySection;