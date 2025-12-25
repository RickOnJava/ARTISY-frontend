import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { logout2 } from "../../redux/image/imageSlice";
import { toast } from "sonner";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(logout2());
    toast("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        A R T I S Y
      </Link>

      {/* Right Section */}
      {user && (
        <div className="flex items-center gap-4">
          <Link
            to={`/myprofile/${user.username}`}
            className="text-sm text-gray-700 hover:bg-blue-500 hover:text-white border-2 px-2 py-1"
          >
            Hi, {user.username}
          </Link>

          <Link
            to="/create"
            className="bg-black text-white px-4 py-1 rounded hover:opacity-80"
          >
            + Create
          </Link>

          <button
            onClick={handleLogout}
            className="bg-gray-200 px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
