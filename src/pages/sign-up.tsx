import React, { useState } from "react";

interface formDataType {
  name: string;
  email: string;
  password: string;
}
function SignUp() {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
  });

  const setFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-600">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-200 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8 text-white">
                  Sign Up
                </h1>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      onChange={setFormValues}
                      name="name"
                      value={formData.name}
                      className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      onChange={setFormValues}
                      name="email"
                      value={formData.email}
                      className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      onChange={setFormValues}
                      name="password"
                      value={formData.password}
                      className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Password"
                    />
                  </div>
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-bold transition duration-200">
                    Sign Up
                  </button>
                  <p className="text-center text-gray-400 text-sm">
                    Already have an account?
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-400 ml-1"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
