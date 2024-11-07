import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { useForm } from 'react-hook-form';

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  phone: string;
}

export const BookingForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString('en-GB', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Get today's date at midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const onSubmit = (data: BookingFormData) => {
    const subject = `New Booking Request - ${data.name} for ${data.guests} guests`;

    const emailBody = `
New Booking Request from NOTSA Website

Booking Details:
---------------
Name: ${data.name}
Number of Guests: ${data.guests}
Date: ${formatDate(data.date)}
Time: ${formatTime(data.time)}

Contact Information:
-------------------
Email: ${data.email}
Phone: ${data.phone}

This booking request was submitted through the NOTSA website booking form.
    `.trim();

    const mailtoLink = `mailto:julia@jamesconsulatncy.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    reset();
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="font-['Prata'] text-center">Make a Reservation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              placeholder="Name"
              {...register('name', { required: true })}
              className="w-full"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register('email', { 
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full"
            />
            {errors.email && <span className="text-red-500 text-sm">
              {errors.email.message || "Email is required"}
            </span>}
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone"
              {...register('phone', { 
                required: true,
                pattern: {
                  value: /^[0-9\s\-()+]+$/,
                  message: "Invalid phone number"
                }
              })}
              className="w-full"
            />
            {errors.phone && <span className="text-red-500 text-sm">
              {errors.phone.message || "Phone is required"}
            </span>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                type="date"
                {...register('date', { 
                  required: true,
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    selectedDate.setHours(0, 0, 0, 0);
                    return selectedDate.getTime() >= today.getTime() || "Date must be in the future";
                  }
                })}
                className="w-full"
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <span className="text-red-500 text-sm">
                {typeof errors.date === 'string' ? errors.date : "Date is required"}
              </span>}
            </div>
            <div>
              <Input
                type="time"
                {...register('time', { required: true })}
                className="w-full"
              />
              {errors.time && <span className="text-red-500 text-sm">Time is required</span>}
            </div>
          </div>
          <div>
            <Input
              type="number"
              placeholder="Number of guests"
              min="1"
              max="10"
              {...register('guests', { 
                required: true, 
                min: 1, 
                max: 10,
                valueAsNumber: true
              })}
              className="w-full"
            />
            {errors.guests && <span className="text-red-500 text-sm">Please select number of guests (1-10)</span>}
          </div>
          <Button type="submit" className="w-full font-['Prata']">
            Book Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};