import Title from "../components/Title";

const SignupContainer = () => {
  return (
    <div className="pt-4 md:pt-6 lg:pt-8 px-3 sm:px-[5vw] lg:px-[9vw] flex flex-col items-center min-h-[60vh]">
      <div className="flex flex-col gap-5 items-center justify-center w-full max-w-md bg-white p-6 shadow-lg rounded-xl">
        <Title title="Signup" />
        <p className="text-gray-600 text-center">
          Enter your credentials to access your account.
        </p>

        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500">
          Don&lsquo;t have an account?
          <a href="/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupContainer;
