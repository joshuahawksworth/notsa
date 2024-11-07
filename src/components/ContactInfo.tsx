import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactInfo = () => {
  // Create encoded address for maps URL
  const encodedAddress = encodeURIComponent('NOTSA, 7 Derby Road, Aston on Trent, Derby, DE72 2AE');
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <h3 className="font-['Prata'] text-2xl md:text-3xl">
            Location & Contact
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="font-['Prata'] font-bold">notsa</p>
          <a 
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-gray-300 transition-colors"
          >
            <div className="cursor-pointer">
              <p>7 Derby Road</p>
              <p>Aston on Trent</p>
              <p>Derby, DE72 2AE</p>
            </div>
          </a>
        </div>
        <div className="space-y-2">
          <a 
            href="tel:01332479361"
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <Phone className="h-4 w-4" />
            01332 479361
          </a>
          <a 
            href="mailto:notsa@derbybrewing.co.uk"
            className="font-['Prata'] flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <Mail className="h-4 w-4" />
            notsa@derbybrewing.co.uk
          </a>
        </div>
      </CardContent>
    </Card>
  );
};