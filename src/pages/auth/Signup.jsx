import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/auth/authThunks";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye } from "lucide-react";
import { toast } from "sonner";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast("User Created Successfully")
        navigate("/login");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0714] via-[#120d1f] to-[#0b0714] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-500 tracking-wide">
            ARTISY
          </h1>
          <p className="text-gray-400 mt-1">
            Join the creative community ✨
          </p>
        </div>

        <h2 className="text-xl font-semibold text-white mb-1">
          Create your account
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Create, share, and inspire through art
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Your creative name"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="email"
                placeholder="artist@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 h-4 w-4 text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          <p className="text-xs text-gray-400">
            By signing up, you agree to our{" "}
            <span className="text-purple-400 cursor-pointer">Terms</span> and{" "}
            <span className="text-purple-400 cursor-pointer">Privacy Policy</span>
          </p>

          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg font-semibold text-white
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
            hover:opacity-90 transition"
          >
            ✨ Create account
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
