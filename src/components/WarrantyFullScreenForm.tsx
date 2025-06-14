import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { format, isAfter, isBefore, subDays, parseISO } from 'date-fns';
import MyDatePicker from './MyDatePicker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface WarrantyFullScreenFormProps {
  onClose: () => void;
}

const initialState = {
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
};

const WarrantyFullScreenForm: React.FC<WarrantyFullScreenFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState(initialState);
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [datePickerError, setDatePickerError] = useState<string | null>(null);

  // Helper za validaciju
  const validateField = (field: string, value: string) => {
    if (!value) {
      return `Polje "${fieldToLabel(field)}" mora biti popunjeno.`;
    }
    if (field === 'email' && value) {
      // Prosta email validacija
      const re = /^\S+@\S+\.\S+$/;
      if (!re.test(value)) return 'Unesite ispravan email.';
    }
    if (field === 'purchaseDate' && value) {
      const today = new Date();
      const inputDate = new Date(value);
      if (inputDate > today) return 'Datum ne može biti u budućnosti.';
    }
    return '';
  };

  const fieldToLabel = (field: string) => {
    const map: { [key: string]: string } = {
      firstName: 'Ime',
      lastName: 'Prezime',
      email: 'Email',
      phone: 'Telefon',
      address: 'Adresa',
      city: 'Grad',
      productCategory: 'Kategorija proizvoda',
      model: 'Model',
      serialNumber: 'Serijski broj',
      purchaseDate: 'Datum kupovine',
      retailer: 'Prodavac',
      invoiceNumber: 'Broj računa',
    };
    return map[field] || field;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Inline validacija
    setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleBlur = (field: string) => {
    setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setInvoiceFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      const err = validateField(key, value);
      if (err) newErrors[key] = err;
    });
    if (!invoiceFile) newErrors['invoiceFile'] = 'Morate izabrati fajl računa!';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (invoiceFile) data.append('invoiceFile', invoiceFile);
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/garancije`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        alert('Uspešno ste registrovali garanciju!');
        setFormData(initialState);
        setInvoiceFile(null);
        setErrors({});
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

  // Date picker: max danas
  const today = new Date();
  const minDate = subDays(today, 30);
  const selectedDate = formData.purchaseDate ? parseISO(formData.purchaseDate) : undefined;

  return (
    <div className="w-full max-w-[1280px] mx-auto bg-gray-900 rounded-2xl p-8 shadow-2xl overflow-y-auto mt-8 mb-12" style={{ minHeight: 700 }}>
      <div className="relative">
        <button
          className="absolute top-0 right-0 z-10 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 shadow-lg transition-colors"
          onClick={onClose}
          aria-label="Zatvori formu"
          type="button"
        >
          <X className="w-7 h-7" />
        </button>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-white mb-3">Forma za registraciju</h2>
            <p className="text-lg text-orange-300 flex items-center justify-center gap-2 font-semibold"><span style={{ fontSize: 24 }}>🕒</span> Rok za registraciju: 30 dana od kupovine</p>
          </div>
          {/* Lični podaci */}
          <div className="bg-gray-800/80 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Lični podaci</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Ime</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.firstName}
                  onChange={e => handleInputChange('firstName', e.target.value)}
                  onBlur={() => handleBlur('firstName')}
                  autoComplete="off"
                  placeholder="Unesite ime"
                />
                {errors.firstName && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.firstName}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Prezime</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.lastName}
                  onChange={e => handleInputChange('lastName', e.target.value)}
                  onBlur={() => handleBlur('lastName')}
                  autoComplete="off"
                  placeholder="Unesite prezime"
                />
                {errors.lastName && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.lastName}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Email</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  autoComplete="off"
                  placeholder="ime@email.com"
                />
                {errors.email && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.email}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Telefon</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  autoComplete="off"
                  placeholder="060123456"
                />
                {errors.phone && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.phone}</div>}
              </div>
            </div>
          </div>
          {/* Adresa */}
          <div className="bg-gray-800/80 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Adresa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Adresa</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.address}
                  onChange={e => handleInputChange('address', e.target.value)}
                  onBlur={() => handleBlur('address')}
                  autoComplete="off"
                  placeholder="Unesite adresu"
                />
                {errors.address && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.address}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Grad</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.city}
                  onChange={e => handleInputChange('city', e.target.value)}
                  onBlur={() => handleBlur('city')}
                  autoComplete="off"
                  placeholder="Unesite grad"
                />
                {errors.city && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.city}</div>}
              </div>
            </div>
          </div>
          {/* Podaci o proizvodu */}
          <div className="bg-gray-800/80 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Podaci o proizvodu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Kategorija proizvoda</label>
                <select
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none mt-1"
                  value={formData.productCategory}
                  onChange={e => handleInputChange('productCategory', e.target.value)}
                  onBlur={() => handleBlur('productCategory')}
                >
                  <option value="">Izaberite kategoriju</option>
                  <option value="televizori">Televizori</option>
                  <option value="bela-tehnika">Bela tehnika</option>
                  <option value="mali-aparati">Mali kućni aparati</option>
                  <option value="lepota-nega">Lepota i nega</option>
                </select>
                {errors.productCategory && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.productCategory}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Model</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none mt-1"
                  value={formData.model}
                  onChange={e => handleInputChange('model', e.target.value)}
                  onBlur={() => handleBlur('model')}
                  autoComplete="off"
                  placeholder="Unesite model"
                />
                {errors.model && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.model}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Serijski broj</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none mt-1"
                  value={formData.serialNumber}
                  onChange={e => handleInputChange('serialNumber', e.target.value)}
                  onBlur={() => handleBlur('serialNumber')}
                  autoComplete="off"
                  placeholder="Unesite serijski broj"
                />
                {errors.serialNumber && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.serialNumber}</div>}
              </div>
              <div className="flex flex-col relative group">
                <label className="block text-gray-200 mb-1">Datum kupovine</label>
                <div
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus-within:border-blue-500 outline-none mt-1 cursor-pointer transition-all duration-150 group-hover:shadow-lg flex items-center justify-between min-h-[48px]"
                  onClick={() => setCalendarOpen(true)}
                  tabIndex={0}
                  style={{ userSelect: 'none' }}
                >
                  <span className={selectedDate ? 'text-white font-semibold' : 'text-gray-400'}>
                    {selectedDate ? format(selectedDate, 'dd.MM.yyyy') : 'Izaberite datum kupovine'}
                  </span>
                  <span className="pointer-events-auto" onClick={e => { e.stopPropagation(); setCalendarOpen(true); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                </div>
                <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <DialogContent className="bg-gray-900 border-gray-700 p-4 rounded-xl flex flex-col items-center">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={date => {
                        if (!date) {
                          setDatePickerError('Morate izabrati datum kupovine.');
                          return;
                        }
                        if (isAfter(date, today)) {
                          setDatePickerError('Ne možete uneti datum u budućnosti.');
                          return;
                        }
                        if (isBefore(date, minDate)) {
                          setDatePickerError(`Rok za registraciju je 30 dana od kupovine. Registracija važi za datume od: ${format(minDate, 'dd.MM.yyyy')}`);
                          return;
                        }
                        setDatePickerError(null);
                        handleInputChange('purchaseDate', format(date, 'yyyy-MM-dd'));
                        setCalendarOpen(false);
                      }}
                      fromDate={minDate}
                      toDate={today}
                      className="bg-gray-900 text-white rounded-xl shadow-lg"
                      styles={{
                        caption: { color: '#60a5fa' },
                        day_selected: { backgroundColor: '#2563eb', color: '#fff' },
                        day_today: { border: '2px solid #60a5fa' },
                      }}
                      modifiersClassNames={{
                        selected: 'bg-blue-600 text-white',
                        today: 'border-blue-400 border-2',
                      }}
                      footer={
                        datePickerError ? (
                          <span className="text-red-500 font-semibold">{datePickerError}</span>
                        ) :
                          selectedDate ? (
                            <span className="text-blue-400 font-semibold">Izabrano: {format(selectedDate, 'dd.MM.yyyy')}</span>
                          ) : (
                            <span className="text-red-500 font-semibold">Rok za registraciju: 30 dana od kupovine</span>
                          )
                      }
                    />
                  </DialogContent>
                </Dialog>
                {errors.purchaseDate && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.purchaseDate}</div>}
              </div>
            </div>
          </div>
          {/* Podaci o kupovini */}
          <div className="bg-gray-800/80 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Podaci o kupovini</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Prodavac</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.retailer}
                  onChange={e => handleInputChange('retailer', e.target.value)}
                  onBlur={() => handleBlur('retailer')}
                  autoComplete="off"
                  placeholder="Unesite ime prodavca"
                />
                {errors.retailer && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.retailer}</div>}
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-200 mb-1">Broj računa</label>
                <input
                  className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                  value={formData.invoiceNumber}
                  onChange={e => handleInputChange('invoiceNumber', e.target.value)}
                  onBlur={() => handleBlur('invoiceNumber')}
                  autoComplete="off"
                  placeholder="Unesite broj računa"
                />
                {errors.invoiceNumber && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.invoiceNumber}</div>}
              </div>
            </div>
          </div>

          <div className="bg-gray-800/80 rounded-2xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-white mb-4">Učitaj fotografiju računa</h3>
          {/* Upload fajla */}
          <div className="mb-4">
            <div className="border-2 border-dashed border-gray-500 rounded-2xl p-0 flex flex-col items-center justify-center text-center bg-gray-800" style={{ minHeight: 250, width: '100%' }}>
              <label htmlFor="invoice-upload" style={{ cursor: 'pointer', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Upload className="w-14 h-14 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-200 mb-4 text-lg">Prevucite fotografiju računa ovde ili kliknite da izaberete fajl</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  id="invoice-upload"
                  style={{ display: 'none' }}
                />
                <span className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-base shadow hover:bg-gray-100 transition-colors" style={{ marginTop: 8 }}>
                  Izaberite fajl
                </span>
              </label>
              <p className="text-gray-400 text-xs mt-2">PNG, JPG, JPEG, WEBP (max. 5MB)</p>
              {invoiceFile && (
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">{invoiceFile.name}</span>
                </div>
              )}
              {errors.invoiceFile && <div className="text-red-500 text-xs mt-1 animate-fadein">{errors.invoiceFile}</div>}
            </div>
          </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 rounded text-white font-bold transition-all duration-200"
            disabled={loading}
          >
            {loading ? 'Slanje...' : 'Registruj garanciju'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WarrantyFullScreenForm; 