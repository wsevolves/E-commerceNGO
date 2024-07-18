import React from 'react';

interface Contact {
  type: string;
  details: string;
}

interface Ngo {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
  contact: Contact;
}

interface NgoCardProps {
  ngo: Ngo;
}

const NgoCard: React.FC<NgoCardProps> = ({ ngo }) => {
  return (
    <div className="flex flex-col sm:flex-row  justify-center  p-4 border rounded-lg shadow-md w-full bg-white">
      <img
        src={ngo.logoUrl}
        alt={`${ngo.name} Logo`}
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"
      />
      <div className="flex flex-col sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
        <h2 className=" font-semibold text-4xl text-orange-400">{ngo.name}</h2>
        <p className=" mt-2 text-2xl  text-gray-700">{ngo.description}</p>
        <p className="text-gray-600 mt-2 text-2xl">
          <span className="  font-medium">Contact Type:</span> {ngo.contact.type}
        </p>
        <p className="text-gray-600 text-2xl">
          <span className="font-medium">Contact Details:</span> {ngo.contact.details}
        </p>
      </div>
    </div>
  );
};

export default NgoCard;
