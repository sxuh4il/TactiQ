import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Globe, 
  Shield, 
  Database, 
  Mail,
  Moon,
  Sun,
  Save
} from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    matchUpdates: true,
    playerPerformance: false,
    teamNews: true,
  });

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <User className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-800">Profile Settings</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
              defaultValue="john.doe@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
              defaultValue="Team Manager"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Team
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
              defaultValue="Team A"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <Bell className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-800">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between py-2">
              <div>
                <h3 className="font-medium text-gray-800">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </h3>
                <p className="text-sm text-gray-500">
                  Receive notifications about {key.toLowerCase()} updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={value}
                  onChange={(e) => 
                    setNotifications(prev => ({
                      ...prev,
                      [key]: e.target.checked
                    }))
                  }
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Display Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <Globe className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-800">Display Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div>
              <h3 className="font-medium text-gray-800">Dark Mode</h3>
              <p className="text-sm text-gray-500">Toggle dark mode theme</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {darkMode ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <h3 className="font-medium text-gray-800">Language</h3>
              <p className="text-sm text-gray-500">Choose your preferred language</p>
            </div>
            <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-800">Security</h2>
        </div>

        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50">
            <h3 className="font-medium text-gray-800">Change Password</h3>
            <p className="text-sm text-gray-500">Update your password</p>
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50">
            <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500">Add an extra layer of security</p>
          </button>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <Database className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg font-semibold text-gray-800">Data Management</h2>
        </div>

        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50">
            <h3 className="font-medium text-gray-800">Export Data</h3>
            <p className="text-sm text-gray-500">Download your data in CSV format</p>
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-red-600 hover:text-red-700">
            <h3 className="font-medium">Delete Account</h3>
            <p className="text-sm">Permanently delete your account and data</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;