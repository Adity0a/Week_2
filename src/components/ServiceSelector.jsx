import { assets } from "../assets/assets";

const services = [
  { id: 'hotels', label: 'Hotels', icon: assets.homeIcon },
  { id: 'flights', label: 'Flights', icon: assets.mountainIcon }, // Placeholder icon
  { id: 'trains', label: 'Trains', icon: assets.calenderIcon }, // Placeholder icon
  { id: 'buses', label: 'Buses', icon: assets.locationIcon }, // Placeholder icon
  { id: 'cabs', label: 'Cabs', icon: assets.userIcon } // Placeholder icon
];

const ServiceSelector = ({ activeService, onServiceChange }) => {
  return (
    <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-2 mb-4 w-full">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceChange(service.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap border ${
            activeService === service.id
              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
              : "bg-white/10 text-white border-white/20 hover:bg-white/20"
          }`}
        >
          <img
            src={service.icon}
            alt={service.label}
            className={`h-4 w-4 ${activeService === service.id ? "invert-0" : "invert"}`}
          />
          <span className="text-sm font-bold uppercase tracking-wider">{service.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ServiceSelector;
