import { motion } from "framer-motion";

export default function CertificateModal({ certificate, close }) {
  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = certificate.image;
    a.download = certificate.name + ".png";
    a.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#344955] text-white rounded-lg max-w-2xl w-full p-6 relative"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 text-2xl font-bold text-white"
        >
          ✕
        </button>

        <img
          src={certificate.image}
          alt={certificate.name}
          className="w-full h-72 object-contain rounded-md "
        />

        <h2 className="text-2xl font-bold mt-4">{certificate.name}</h2>
        <p className="text-gray-200 mt-2">{certificate.description}</p>
        <p className="font-semibold text-blue-600 mt-3">{certificate.date}</p>

    
        <button
          onClick={close}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full"
        >
          Back
        </button>
      </motion.div>
    </div>
  );
}
