import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function SignUp() {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={
          "bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px] "
        }
        style={{
          border: `1px solid ${borderColor}`,
        }}
      >
        <h1
          className={"text-3xl font-bold mb-2 "}
          style={{ color: primaryColor }}
        >
          FoodOra
        </h1>
        <p className="text-gray-600 mb-8">
          Create your account to get started with delicious food deleveries
        </p>
        {/* fullName */}

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your full Name"
            style={{
              border: `1px solid ${borderColor}`,
            }}
          />
        </div>
        {/* Email */}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your Email"
            style={{
              border: `1px solid ${borderColor}`,
            }}
          />
        </div>
        {/* mobile */}

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-medium mb-1"
          >
            Mobile
          </label>
          <input
            type="mobile"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your Mobile No"
            style={{
              border: `1px solid ${borderColor}`,
            }}
          />
        </div>
        {/* Password */}

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500"
              placeholder="Enter your full Name"
              style={{
                border: `1px solid ${borderColor}`,
              }}
            />

            <button
              className="absolute right-3 cursor-pointer top-[14px] text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? <FaEye /> : <FaRegEyeSlash />}
            </button>
          </div>
        </div>
        {/* role */}

        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-1"
          >
            Role
          </label>
          <div className="flex gap-2">
            {["user", "owner", "deliveryBoy"].map((r) => {
              <button
                className="flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors"
                onClick={() => setRole(r)}
                style={
                  role === r
                    ? { backgroundColor: primaryColor, color: white }
                    : { border: `1px solid ${primaryColor}`, color: white }
                }
              >
                {r}
              </button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
