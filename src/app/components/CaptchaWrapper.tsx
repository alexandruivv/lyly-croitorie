import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha, VerifyCaptchaResponse } from "@/app/services/apiClient";
import { environment } from "@/app/environment";

interface Props {
  onVerify: (response: VerifyCaptchaResponse) => void;
  onClose: () => void;
}

const CaptchaWrapper = ({ onVerify, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleVerify = async (token: string | null) => {
    if (token) {
      const result = await verifyCaptcha(token);
      onVerify(result);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        ref={modalRef}
        className="relative z-10 bg-white p-8 rounded-lg shadow-xl max-w-lg w-full mx-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="captcha-title"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="captcha-title" className="text-xl font-semibold">
            Vă rugăm să confirmați că nu sunteți robot
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Închide captcha"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ReCAPTCHA
          sitekey={environment.siteKey || ""}
          onChange={handleVerify}
        />
      </div>
    </div>
  );
};

export default CaptchaWrapper;
