import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-indigo-600">User Dashboard</h2>
        <p className="text-gray-600">
          Welcome, <span className="font-semibold">{user?.name}</span>
        </p>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            👋 Hello, {user?.name}
          </h1>
          <p className="text-gray-600">
            You’re logged in as <b>{user?.role}</b>.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Profile Status</p>
            <h3 className="text-xl font-bold text-green-600">Active</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Last Login</p>
            <h3 className="text-xl font-bold">Today</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Account Type</p>
            <h3 className="text-xl font-bold capitalize">{user?.role}</h3>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Logged in successfully</li>
            <li>✔ Profile viewed</li>
            <li>✔ Dashboard accessed</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
