import React from "react";
import { Ship } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            HG Expert Marine Surveyor Services
          </h1>
          <p className="text-xl text-gray-700">
            Specialized in draft surveys, on/off hire inspections, and cargo
            operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Ship className="w-12 h-12 text-blue-900 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Draft Surveys</h2>
            <p>
              Accurate determination of cargo weight for bulk carriers and
              tankers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Ship className="w-12 h-12 text-blue-900 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">
              On/Off Hire Inspections
            </h2>
            <p>
              Thorough vessel condition assessments for chartering purposes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Ship className="w-12 h-12 text-blue-900 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Cargo Operations</h2>
            <p>
              Expert supervision of loading, discharging, and tallying
              operations.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p>
                With years of experience in marine surveying, we provide
                accurate and reliable services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
              <p>
                Our network of surveyors allows us to offer services in major
                ports worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p>
                We understand the importance of time in shipping. Our reports
                are delivered promptly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Advanced Technology
              </h3>
              <p>
                We use the latest surveying equipment and software for precise
                measurements and calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
