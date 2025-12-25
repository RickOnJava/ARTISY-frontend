import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authThunks";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye } from "lucide-react";
import { toast } from "sonner";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((s) => s.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast("Welcome to ARTISY");
        navigate("/");
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
          <p className="text-gray-400 mt-1">Welcome back ✨</p>
        </div>

        <h2 className="text-xl text-white font-semibold mb-1">
          Sign in to your account
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Show the world your creativity
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="artist@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm text-gray-300">Password</label>
            </div>

            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
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

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-2 rounded-lg font-semibold text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
            hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-400 hover:underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
