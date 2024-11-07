import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Clock } from 'lucide-react';

export const OpeningHours = () => {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <h3 className="font-['Prata'] text-2xl md:text-3xl">
            Opening Times
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-['Prata'] font-bold mb-2">Food</h3>
            <p>Monday to Friday - 10am – 2.30pm</p>
            <p>Saturday - 9am - 3pm</p>
            <p>Sunday - 10am – 3pm</p>
          </div>
          <div>
            <h3 className="font-['Prata'] font-bold mb-2">Bar</h3>
            <p>Monday & Tuesday - 9am - 6pm</p>
            <p>Wednesday & Thursday - 9am – 10pm</p>
            <p>Friday - 9am till 12am</p>
            <p>Saturday - 9am till 11pm</p>
            <p>Sunday - 10am till 8pm</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};