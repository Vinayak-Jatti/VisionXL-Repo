const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-4">
          <p className="text-gray-300 hover:text-white cursor-pointer">
            Dashboard
          </p>
          <p className="text-gray-300 hover:text-white cursor-pointer">Users</p>
          <p className="text-gray-300 hover:text-white cursor-pointer">
            Settings
          </p>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dashboard Overview
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Users</p>
            <h3 className="text-2xl font-bold">120</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Admins</p>
            <h3 className="text-2xl font-bold">5</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Active Sessions</p>
            <h3 className="text-2xl font-bold">18</h3>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-600">
            <li>New user registered</li>
            <li>Admin updated settings</li>
            <li>User role changed</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
