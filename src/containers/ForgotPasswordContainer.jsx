import { useState } from "react";
import Title from "../components/Title";

const ForgotPasswordContainer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="pt-4 md:pt-6 lg:pt-8 px-3 sm:px-[5vw] lg:px-[9vw] flex flex-col items-center min-h-[60vh]">
      <div className="flex flex-col gap-5 items-center justify-center w-full max-w-lg bg-white p-6 shadow-lg rounded-xl">
        <Title title="Reset Password" />
        <p className="text-gray-600 text-center">
          Enter your email to reset your account.
        </p>

        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordContainer;
