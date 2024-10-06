import React from 'react';
import { Anchor, Clipboard, Scale } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Anchor className="w-12 h-12 text-blue-900 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Draft Surveys</h2>
          <p className="mb-4">Our expert draft surveys provide accurate determination of cargo weight for bulk carriers and tankers. We use advanced techniques to ensure precise measurements.</p>
          <ul className="list-disc list-inside">
            <li>Initial, intermediate, and final draft surveys</li>
            <li>Deadweight verification</li>
            <li>Bunker surveys</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clipboard className="w-12 h-12 text-blue-900 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">On/Off Hire Inspections</h2>
          <p className="mb-4">We conduct thorough vessel condition assessments for chartering purposes, ensuring all parties have a clear understanding of the vessel's state.</p>
          <ul className="list-disc list-inside">
            <li>Detailed hull and machinery inspections</li>
            <li>Cargo hold cleanliness surveys</li>
            <li>Bunker quantity and quality checks</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Scale className="w-12 h-12 text-blue-900 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Cargo Operations</h2>
          <p className="mb-4">Our experienced surveyors provide expert supervision of loading, discharging, and tallying operations to ensure accuracy and compliance.</p>
          <ul className="list-disc list-inside">
            <li>Pre-loading inspections</li>
            <li>Cargo tallying and monitoring</li>
            <li>Damage surveys and reporting</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Anchor className="w-12 h-12 text-blue-900 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Hold Inspections</h2>
          <p className="mb-4">We perform detailed hold inspections to ensure cargo spaces are clean, dry, and suitable for the intended cargo.</p>
          <ul className="list-disc list-inside">
            <li>Pre-loading hold cleanliness inspections</li>
            <li>Hatch cover weathertightness tests</li>
            <li>Post-discharge inspections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;