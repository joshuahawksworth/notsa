import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ImageCarousel } from './components/ImageCarousel';
import { BookingForm } from './components/BookingForm';
import { OpeningHours } from './components/OpeningHours';
import { ContactInfo } from './components/ContactInfo';

function App() {
  return (
    <Router>
       <div className="min-h-screen bg-white font-['Inter']">
        <Navbar />
        
        <ImageCarousel />
        
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="font-['Prata'] text-3xl md:text-4xl font-normal text-center mb-8 tracking-wide">
            hybrid café, deli & bar
          </h2>
          <div className="prose max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              Housed in the former maltings and garage, Derby Road in the heart of Aston on Trent, South Derbyshire.
            </p>
            <p className="mb-6">
              NOTSA is a contemporary hybrid Café, Deli & Bar, opening early to offer breakfast and brunch, 
              with fresh coffee, award winning teas, breakfast smoothies plus champagne breakfasts. There is 
              a fully stocked deli bar featuring artisan sausage rolls, scotch eggs and pork pies which are 
              also available in the evenings when the kitchen closes and the bar is still open.
            </p>
            <p className="mb-6">
              As you would expect from a Derby Brewing venue we love our drinks, and the range at NOTSA brings 
              something new to Aston on Trent. Of course we have a selection of our award winning ales plus a 
              few guests beers thrown in for good measure, along with our fantastic range of craft beers, 
              ciders, world wines, artisan spirits and cocktails.
            </p>
            <p>
              So treat someone you know to one of our fantastic champagne breakfast or come along and enjoy 
              a drink in our bar area.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-['Prata'] text-3xl md:text-4xl font-normal text-center mb-12">
              Book A Table
            </h2>
              <BookingForm />
          </div>
        </section>

        <section className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <OpeningHours />
              <ContactInfo />
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;