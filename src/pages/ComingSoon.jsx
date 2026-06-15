import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const ComingSoon = ({ serviceName }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-40 px-6 min-h-screen bg-white dark:bg-slate-950 text-center flex flex-col items-center transition-colors duration-300">
      <div className="max-w-md">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="text-4xl">🚀</span>
        </div>
        <Title
            title={`${serviceName} Booking`}
            subTitle={`We're currently working hard to bring you the best ${serviceName.toLowerCase()} experience. Stay tuned!`}
        />
        <button
            onClick={() => navigate("/")}
            className="mt-12 px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all active:scale-95"
        >
            Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
