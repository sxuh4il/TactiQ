import React from 'react';
import { FileText, Download, Filter, Calendar, BarChart2, Users } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Team Performance Analysis',
      type: 'Performance',
      date: '2024-03-15',
      status: 'Ready',
      icon: BarChart2,
    },
    {
      id: 2,
      title: 'Player Development Report',
      type: 'Player',
      date: '2024-03-14',
      status: 'Processing',
      icon: Users,
    },
    {
      id: 3,
      title: 'Match Analysis Report',
      type: 'Match',
      date: '2024-03-13',
      status: 'Ready',
      icon: FileText,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready':
        return 'bg-emerald-100 text-emerald-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          <FileText className="w-5 h-5" />
          Generate New Report
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <FileText className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="date"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500"
            />
            <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <select className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-emerald-500">
            <option value="">All Types</option>
            <option value="performance">Performance</option>
            <option value="player">Player</option>
            <option value="match">Match</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <report.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{report.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-500">{report.type}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{report.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
                {report.status === 'Ready' && (
                  <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                    <Download className="w-5 h-5" />
                    Download
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent AI Insights</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Team Tactics Analysis',
              description: 'AI-powered analysis suggests adjusting the pressing intensity in the first 15 minutes of play.',
              date: '2 hours ago',
            },
            {
              title: 'Player Performance Prediction',
              description: 'Based on recent training data, Player X shows a 15% improvement in passing accuracy.',
              date: '5 hours ago',
            },
            {
              title: 'Opposition Analysis',
              description: 'Upcoming opponent shows vulnerability in defensive transitions. Recommended strategy attached.',
              date: '1 day ago',
            },
          ].map((insight, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
              <div>
                <h3 className="font-medium text-gray-800">{insight.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                <p className="text-xs text-gray-400 mt-2">{insight.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;