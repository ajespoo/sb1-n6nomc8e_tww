// Comprehensive list of popular cities worldwide
export const popularCities = [
  // Nordic & Scandinavian
  { id: 'CPH', name: 'Copenhagen', country: 'Denmark' },
  { id: 'STO', name: 'Stockholm', country: 'Sweden' },
  { id: 'OSL', name: 'Oslo', country: 'Norway' },
  { id: 'HEL', name: 'Helsinki', country: 'Finland' },
  { id: 'REK', name: 'Reykjavik', country: 'Iceland' },
  { id: 'GOT', name: 'Gothenburg', country: 'Sweden' },
  { id: 'BGO', name: 'Bergen', country: 'Norway' }, // Changed from BER to BGO (IATA code for Bergen)
  { id: 'AAR', name: 'Aarhus', country: 'Denmark' },
  { id: 'TMP', name: 'Tampere', country: 'Finland' },
  { id: 'TRD', name: 'Trondheim', country: 'Norway' },
  { id: 'MAL', name: 'Malmö', country: 'Sweden' },
  { id: 'TKU', name: 'Turku', country: 'Finland' },

  // Rest of the cities remain the same...
  // North America
  { id: 'NYC', name: 'New York City', country: 'USA' },
  { id: 'LAX', name: 'Los Angeles', country: 'USA' },
  { id: 'CHI', name: 'Chicago', country: 'USA' },
  { id: 'MIA', name: 'Miami', country: 'USA' },
  { id: 'SFO', name: 'San Francisco', country: 'USA' },
  { id: 'YVR', name: 'Vancouver', country: 'Canada' },
  { id: 'YYZ', name: 'Toronto', country: 'Canada' },
  { id: 'MEX', name: 'Mexico City', country: 'Mexico' },

  // Europe
  { id: 'LON', name: 'London', country: 'UK' },
  { id: 'PAR', name: 'Paris', country: 'France' },
  { id: 'ROM', name: 'Rome', country: 'Italy' },
  { id: 'BCN', name: 'Barcelona', country: 'Spain' },
  { id: 'AMS', name: 'Amsterdam', country: 'Netherlands' },
  { id: 'TXL', name: 'Berlin', country: 'Germany' }, // Changed from BER to TXL (historic Berlin airport code)
  { id: 'PRG', name: 'Prague', country: 'Czech Republic' },
  { id: 'VIE', name: 'Vienna', country: 'Austria' },
  { id: 'ATH', name: 'Athens', country: 'Greece' },
  { id: 'IST', name: 'Istanbul', country: 'Turkey' },

  // Asia
  { id: 'TYO', name: 'Tokyo', country: 'Japan' },
  { id: 'SEL', name: 'Seoul', country: 'South Korea' },
  { id: 'BJS', name: 'Beijing', country: 'China' },
  { id: 'SHA', name: 'Shanghai', country: 'China' },
  { id: 'HKG', name: 'Hong Kong', country: 'China' },
  { id: 'BKK', name: 'Bangkok', country: 'Thailand' },
  { id: 'SGN', name: 'Ho Chi Minh City', country: 'Vietnam' },
  { id: 'SIN', name: 'Singapore', country: 'Singapore' },
  { id: 'KUL', name: 'Kuala Lumpur', country: 'Malaysia' },
  { id: 'DXB', name: 'Dubai', country: 'UAE' },
  { id: 'DEL', name: 'New Delhi', country: 'India' },
  { id: 'BOM', name: 'Mumbai', country: 'India' },

  // Oceania
  { id: 'SYD', name: 'Sydney', country: 'Australia' },
  { id: 'MEL', name: 'Melbourne', country: 'Australia' },
  { id: 'BNE', name: 'Brisbane', country: 'Australia' },
  { id: 'AKL', name: 'Auckland', country: 'New Zealand' },
  { id: 'WLG', name: 'Wellington', country: 'New Zealand' },

  // South America
  { id: 'GRU', name: 'São Paulo', country: 'Brazil' },
  { id: 'RIO', name: 'Rio de Janeiro', country: 'Brazil' },
  { id: 'BUE', name: 'Buenos Aires', country: 'Argentina' },
  { id: 'SCL', name: 'Santiago', country: 'Chile' },
  { id: 'LIM', name: 'Lima', country: 'Peru' },
  { id: 'BOG', name: 'Bogotá', country: 'Colombia' },

  // Africa
  { id: 'CPT', name: 'Cape Town', country: 'South Africa' },
  { id: 'JNB', name: 'Johannesburg', country: 'South Africa' },
  { id: 'CAI', name: 'Cairo', country: 'Egypt' },
  { id: 'NBO', name: 'Nairobi', country: 'Kenya' },
  { id: 'CAS', name: 'Casablanca', country: 'Morocco' },
  { id: 'ACC', name: 'Accra', country: 'Ghana' },

  // Middle East
  { id: 'DOH', name: 'Doha', country: 'Qatar' },
  { id: 'AUH', name: 'Abu Dhabi', country: 'UAE' },
  { id: 'RUH', name: 'Riyadh', country: 'Saudi Arabia' },
  { id: 'TLV', name: 'Tel Aviv', country: 'Israel' },
  { id: 'AMM', name: 'Amman', country: 'Jordan' },

  // Central Asia
  { id: 'ALA', name: 'Almaty', country: 'Kazakhstan' },
  { id: 'TAS', name: 'Tashkent', country: 'Uzbekistan' },
  { id: 'ASB', name: 'Ashgabat', country: 'Turkmenistan' }
].sort((a, b) => a.name.localeCompare(b.name));