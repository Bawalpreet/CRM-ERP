import React, { useState } from 'react';
import { 
  FiUsers, 
  FiBriefcase, 
  FiCalendar, 
  FiDollarSign, 
  FiPieChart, 
  FiShoppingCart,
  FiSettings,
  FiBell,
  FiSearch,
  FiHome,
  FiTruck,
  FiCreditCard,
  FiFileText,
  FiBarChart2,
  FiLayers,
  FiDatabase,
  FiPackage,
  FiShield,
  FiClock
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const tabs = {
    dashboard: <DashboardOverview />,
    users: <UserManagement />,
    projects: <ProjectManagement />,
    tasks: <TaskManagement />,
    customers: <CustomerManagement />,
    inventory: <InventoryManagement />,
    reports: <ReportsAnalytics />,
    settings: <SystemSettings />,
    // New ERP Modules
    accounting: <AccountingManagement />,
    hr: <HRManagement />,
    procurement: <ProcurementManagement />,
    manufacturing: <ManufacturingManagement />,
    assets: <AssetManagement />,
    payroll: <PayrollManagement />,
    compliance: <ComplianceManagement />
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 overflow-y-auto`}>
        <div className="p-4 flex items-center justify-between sticky top-0 bg-blue-800 z-10">
          {sidebarOpen && <h1 className="text-xl font-bold">CRM-ERP Portal</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-blue-700"
          >
            {sidebarOpen ? '◄' : '►'}
          </button>
        </div>
        <nav className="mt-6">
          {/* CRM Modules */}
          <div className={`${sidebarOpen ? 'px-4 py-2 text-sm text-blue-200' : 'hidden'}`}>CRM Modules</div>
          {Object.entries({
            dashboard: 'Dashboard',
            users: 'Users',
            projects: 'Projects',
            tasks: 'Tasks',
            customers: 'Customers',
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center w-full p-4 ${activeTab === key ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            >
              {key === 'dashboard' && <FiPieChart className="mr-3" />}
              {key === 'users' && <FiUsers className="mr-3" />}
              {key === 'projects' && <FiBriefcase className="mr-3" />}
              {key === 'tasks' && <FiCalendar className="mr-3" />}
              {key === 'customers' && <FiUsers className="mr-3" />}
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
          
          {/* ERP Modules */}
          <div className={`${sidebarOpen ? 'px-4 py-2 text-sm text-blue-200 mt-4' : 'hidden'}`}>ERP Modules</div>
          {Object.entries({
            inventory: 'Inventory',
            accounting: 'Accounting',
            hr: 'Human Resources',
            procurement: 'Procurement',
            manufacturing: 'Manufacturing',
            assets: 'Assets',
            payroll: 'Payroll',
            compliance: 'Compliance'
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center w-full p-4 ${activeTab === key ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            >
              {key === 'inventory' && <FiShoppingCart className="mr-3" />}
              {key === 'accounting' && <FiDollarSign className="mr-3" />}
              {key === 'hr' && <FiUsers className="mr-3" />}
              {key === 'procurement' && <FiPackage className="mr-3" />}
              {key === 'manufacturing' && <FiLayers className="mr-3" />}
              {key === 'assets' && <FiDatabase className="mr-3" />}
              {key === 'payroll' && <FiCreditCard className="mr-3" />}
              {key === 'compliance' && <FiShield className="mr-3" />}
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}

          {/* Common Modules */}
          <div className={`${sidebarOpen ? 'px-4 py-2 text-sm text-blue-200 mt-4' : 'hidden'}`}>System</div>
          {Object.entries({
            reports: 'Reports',
            settings: 'Settings'
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center w-full p-4 ${activeTab === key ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            >
              {key === 'reports' && <FiBarChart2 className="mr-3" />}
              {key === 'settings' && <FiSettings className="mr-3" />}
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none w-64"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <FiBell className="text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                A
              </div>
              {sidebarOpen && <span className="ml-2">Admin</span>}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {tabs[activeTab]}
        </main>
      </div>
    </div>
  );
};


// Placeholder components for each tab
const DashboardOverview = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Total Users" 
        value="0" 
        icon={<FiUsers className="text-blue-500" />} 
      />
      <MetricCard 
        title="Active Projects" 
        value="0" 
        icon={<FiBriefcase className="text-green-500" />} 
      />
      <MetricCard 
        title="Pending Tasks" 
        value="0" 
        icon={<FiCalendar className="text-yellow-500" />} 
      />
      <MetricCard 
        title="Revenue" 
        value="$0" 
        icon={<FiDollarSign className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-3">
          <ActivityItem time="Today, 10:30 AM" action="New user registered" />
          <ActivityItem time="Today, 09:15 AM" action="Project 'Website Redesign' updated" />
          <ActivityItem time="Yesterday, 03:45 PM" action="Task 'Database Migration' completed" />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="space-y-2">
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Add New User</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Create Project</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Generate Report</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">System Settings</button>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Projects</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Project Name</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Due Date</th>
              <th className="text-left p-2">Team</th>
            </tr>
          </thead>
          <tbody>
            <TableRow 
              name="Website Redesign" 
              status="In Progress" 
              dueDate="2023-12-15" 
              team="5 members" 
            />
            <TableRow 
              name="Mobile App Development" 
              status="Planning" 
              dueDate="2024-01-20" 
              team="3 members" 
            />
            <TableRow 
              name="CRM System Update" 
              status="Completed" 
              dueDate="2023-11-30" 
              team="8 members" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const UserManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">User Management</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Users</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add New User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Role</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <UserRow 
              name="Admin User" 
              email="admin@example.com" 
              role="Administrator" 
              status="Active" 
            />
            <UserRow 
              name="Manager User" 
              email="manager@example.com" 
              role="Manager" 
              status="Active" 
            />
            <UserRow 
              name="Employee User" 
              email="employee@example.com" 
              role="Employee" 
              status="Inactive" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ProjectManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Project Management</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Projects</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Project
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Project Name</th>
              <th className="text-left p-2">Client</th>
              <th className="text-left p-2">Start Date</th>
              <th className="text-left p-2">End Date</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ProjectRow 
              name="Website Redesign" 
              client="ABC Corp" 
              startDate="2023-11-01" 
              endDate="2023-12-15" 
              status="In Progress" 
            />
            <ProjectRow 
              name="Mobile App" 
              client="XYZ Inc" 
              startDate="2023-12-01" 
              endDate="2024-01-20" 
              status="Planning" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const TaskManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Task Management</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Tasks</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Task
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Task Name</th>
              <th className="text-left p-2">Project</th>
              <th className="text-left p-2">Assigned To</th>
              <th className="text-left p-2">Due Date</th>
              <th className="text-left p-2">Priority</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <TaskRow 
              name="Design Homepage" 
              project="Website Redesign" 
              assignedTo="John Doe" 
              dueDate="2023-11-15" 
              priority="High" 
              status="In Progress" 
            />
            <TaskRow 
              name="API Development" 
              project="Mobile App" 
              assignedTo="Jane Smith" 
              dueDate="2023-12-01" 
              priority="Medium" 
              status="Not Started" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const CustomerManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Customer Management</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Customers</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Customer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Company</th>
              <th className="text-left p-2">Contact Person</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Phone</th>
              <th className="text-left p-2">Value</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <CustomerRow 
              company="ABC Corp" 
              contact="John Smith" 
              email="john@abccorp.com" 
              phone="(123) 456-7890" 
              value="$50,000" 
            />
            <CustomerRow 
              company="XYZ Inc" 
              contact="Sarah Johnson" 
              email="sarah@xyzinc.com" 
              phone="(987) 654-3210" 
              value="$25,000" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const InventoryManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Inventory Items</h2>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Item
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Item Code</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Quantity</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <InventoryRow 
              code="ITM-001" 
              name="Laptop" 
              category="Electronics" 
              quantity="15" 
              price="$999.99" 
            />
            <InventoryRow 
              code="ITM-002" 
              name="Office Chair" 
              category="Furniture" 
              quantity="25" 
              price="$199.99" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ReportsAnalytics = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          <p>Sales chart will be displayed here</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Project Status</h2>
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          <p>Project status chart will be displayed here</p>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Generate Report</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Report Type</label>
          <select className="w-full p-2 border rounded">
            <option>Sales Report</option>
            <option>Project Report</option>
            <option>Inventory Report</option>
            <option>User Activity Report</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Start Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2">End Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Generate Report
        </button>
      </div>
    </div>
  </div>
);

const SystemSettings = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">System Settings</h1>
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">General Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Company Name</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Enter company name" />
        </div>
        <div>
          <label className="block mb-2">Timezone</label>
          <select className="w-full p-2 border rounded">
            <option>(UTC) Coordinated Universal Time</option>
            <option>(UTC-05:00) Eastern Time</option>
            <option>(UTC-08:00) Pacific Time</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Default User Role</label>
          <select className="w-full p-2 border rounded">
            <option>Administrator</option>
            <option>Manager</option>
            <option>Employee</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Settings
        </button>
      </div>
    </div>
  </div>
);


const MetricCard = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow flex items-center">
    <div className="p-3 rounded-full bg-gray-100 mr-4">
      {icon}
    </div>
    <div>
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const ActivityItem = ({ time, action }) => (
  <div className="flex items-start">
    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
    <div>
      <p className="text-gray-700">{action}</p>
      <p className="text-gray-400 text-sm">{time}</p>
    </div>
  </div>
);

const TableRow = ({ name, status, dueDate, team }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{name}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
        status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {status}
      </span>
    </td>
    <td className="p-2">{dueDate}</td>
    <td className="p-2">{team}</td>
  </tr>
);

const UserRow = ({ name, email, role, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{name}</td>
    <td className="p-2">{email}</td>
    <td className="p-2">{role}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    </td>
    <td className="p-2">
      <button className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
      <button className="text-red-500 hover:text-red-700">Delete</button>
    </td>
  </tr>
);

const ProjectRow = ({ name, client, startDate, endDate, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{name}</td>
    <td className="p-2">{client}</td>
    <td className="p-2">{startDate}</td>
    <td className="p-2">{endDate}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
        status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {status}
      </span>
    </td>
    <td className="p-2">
      <button className="text-blue-500 hover:text-blue-700 mr-2">View</button>
      <button className="text-gray-500 hover:text-gray-700">Edit</button>
    </td>
  </tr>
);

const TaskRow = ({ name, project, assignedTo, dueDate, priority, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{name}</td>
    <td className="p-2">{project}</td>
    <td className="p-2">{assignedTo}</td>
    <td className="p-2">{dueDate}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        priority === 'High' ? 'bg-red-100 text-red-800' :
        priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {priority}
      </span>
    </td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
        status === 'Not Started' ? 'bg-gray-100 text-gray-800' :
        'bg-green-100 text-green-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const CustomerRow = ({ company, contact, email, phone, value }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{company}</td>
    <td className="p-2">{contact}</td>
    <td className="p-2">{email}</td>
    <td className="p-2">{phone}</td>
    <td className="p-2">{value}</td>
    <td className="p-2">
      <button className="text-blue-500 hover:text-blue-700 mr-2">View</button>
      <button className="text-gray-500 hover:text-gray-700">Edit</button>
    </td>
  </tr>
);

const InventoryRow = ({ code, name, category, quantity, price }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{code}</td>
    <td className="p-2">{name}</td>
    <td className="p-2">{category}</td>
    <td className="p-2">{quantity}</td>
    <td className="p-2">{price}</td>
    <td className="p-2">
      <button className="text-blue-500 hover:text-blue-700 mr-2">View</button>
      <button className="text-gray-500 hover:text-gray-700">Edit</button>
    </td>
  </tr>
);



// NEW ERP COMPONENTS

const AccountingManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Accounting Management</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Total Revenue" 
        value="$125,000" 
        icon={<FiDollarSign className="text-green-500" />} 
      />
      <MetricCard 
        title="Expenses" 
        value="$45,000" 
        icon={<FiCreditCard className="text-red-500" />} 
      />
      <MetricCard 
        title="Profit" 
        value="$80,000" 
        icon={<FiBarChart2 className="text-blue-500" />} 
      />
      <MetricCard 
        title="Outstanding Invoices" 
        value="12" 
        icon={<FiFileText className="text-yellow-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Description</th>
                <th className="text-left p-2">Account</th>
                <th className="text-left p-2">Amount</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <AccountingRow 
                date="2023-11-15" 
                description="Website Development Payment" 
                account="Accounts Receivable" 
                amount="$5,000" 
                status="Paid" 
              />
              <AccountingRow 
                date="2023-11-14" 
                description="Office Rent" 
                account="Rent Expense" 
                amount="$2,500" 
                status="Paid" 
              />
              <AccountingRow 
                date="2023-11-10" 
                description="Software Subscription" 
                account="Software Expense" 
                amount="$300" 
                status="Pending" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="space-y-2">
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Create Invoice</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Record Expense</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Generate Financial Report</button>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Reconcile Accounts</button>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Financial Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <select className="p-2 border rounded">
          <option>Balance Sheet</option>
          <option>Income Statement</option>
          <option>Cash Flow Statement</option>
          <option>Trial Balance</option>
        </select>
        <div className="grid grid-cols-2 gap-4">
          <input type="date" className="p-2 border rounded" />
          <input type="date" className="p-2 border rounded" />
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Generate Report
      </button>
      <div className="mt-4 h-64 bg-gray-100 flex items-center justify-center">
        <p>Financial report visualization will appear here</p>
      </div>
    </div>
  </div>
);

const HRManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Human Resources</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Total Employees" 
        value="142" 
        icon={<FiUsers className="text-blue-500" />} 
      />
      <MetricCard 
        title="New Hires (30d)" 
        value="8" 
        icon={<FiUsers className="text-green-500" />} 
      />
      <MetricCard 
        title="Open Positions" 
        value="15" 
        icon={<FiBriefcase className="text-yellow-500" />} 
      />
      <MetricCard 
        title="Avg. Tenure" 
        value="3.2 yrs" 
        icon={<FiClock className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Employee Directory</h2>
          <div className="space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add Employee
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Position</th>
                <th className="text-left p-2">Department</th>
                <th className="text-left p-2">Join Date</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <HRRow 
                name="John Smith" 
                position="Software Engineer" 
                department="IT" 
                joinDate="2021-05-15" 
                status="Active" 
              />
              <HRRow 
                name="Sarah Johnson" 
                position="HR Manager" 
                department="Human Resources" 
                joinDate="2020-02-10" 
                status="Active" 
              />
              <HRRow 
                name="Michael Brown" 
                position="Sales Executive" 
                department="Sales" 
                joinDate="2023-01-20" 
                status="Probation" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          <HREvent 
            date="2023-11-20" 
            title="Performance Reviews" 
            description="Q4 performance review meetings"
          />
          <HREvent 
            date="2023-12-05" 
            title="Holiday Party" 
            description="Annual company holiday party"
          />
          <HREvent 
            date="2023-12-15" 
            title="Benefits Enrollment" 
            description="Deadline for benefits enrollment"
          />
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recruitment Pipeline</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Position</th>
              <th className="text-left p-2">Candidates</th>
              <th className="text-left p-2">Interview Stage</th>
              <th className="text-left p-2">Hiring Manager</th>
              <th className="text-left p-2">Target Date</th>
            </tr>
            </thead>
            <tbody>
              <RecruitmentRow 
                position="Frontend Developer" 
                candidates="12" 
                stage="Technical Round" 
                manager="Alex Johnson" 
                targetDate="2023-12-01" 
              />
              <RecruitmentRow 
                position="Accountant" 
                candidates="8" 
                stage="Final Round" 
                manager="Maria Garcia" 
                targetDate="2023-11-25" 
              />
              <RecruitmentRow 
                position="Marketing Specialist" 
                candidates="15" 
                stage="Screening" 
                manager="David Kim" 
                targetDate="2023-12-10" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
);

const ProcurementManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Procurement</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Open POs" 
        value="24" 
        icon={<FiFileText className="text-blue-500" />} 
      />
      <MetricCard 
        title="Pending Approvals" 
        value="8" 
        icon={<FiClock className="text-yellow-500" />} 
      />
      <MetricCard 
        title="This Month Spend" 
        value="$42,500" 
        icon={<FiDollarSign className="text-green-500" />} 
      />
      <MetricCard 
        title="Vendors" 
        value="56" 
        icon={<FiTruck className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Purchase Orders</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create PO
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">PO #</th>
                <th className="text-left p-2">Vendor</th>
                <th className="text-left p-2">Date</th>
                <th className="text-left p-2">Amount</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <ProcurementRow 
                poNumber="PO-2023-1142" 
                vendor="Tech Supplies Inc." 
                date="2023-11-15" 
                amount="$3,250" 
                status="Approved" 
              />
              <ProcurementRow 
                poNumber="PO-2023-1141" 
                vendor="Office World" 
                date="2023-11-14" 
                amount="$1,780" 
                status="Pending" 
              />
              <ProcurementRow 
                poNumber="PO-2023-1140" 
                vendor="Cloud Services LLC" 
                date="2023-11-10" 
                amount="$12,000" 
                status="Delivered" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Approval Queue</h2>
        <div className="space-y-3">
          <ApprovalItem 
            title="Laptop Purchase (25 units)" 
            requester="IT Department" 
            amount="$37,500" 
          />
          <ApprovalItem 
            title="Office Furniture" 
            requester="Facilities" 
            amount="$8,200" 
          />
          <ApprovalItem 
            title="Marketing Materials" 
            requester="Marketing" 
            amount="$2,400" 
          />
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View All (8)
        </button>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Supplier Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Supplier</th>
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Contact</th>
              <th className="text-left p-2">Last Order</th>
              <th className="text-left p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            <SupplierRow 
              supplier="Tech Supplies Inc." 
              category="IT Equipment" 
              contact="John Smith (john@techsupplies.com)" 
              lastOrder="2023-11-15" 
              rating="4.8" 
            />
            <SupplierRow 
              supplier="Office World" 
              category="Office Supplies" 
              contact="Sarah Johnson (sarah@officeworld.com)" 
              lastOrder="2023-11-14" 
              rating="4.5" 
            />
            <SupplierRow 
              supplier="Cloud Services LLC" 
              category="Software" 
              contact="Mike Brown (mike@cloudservices.com)" 
              lastOrder="2023-11-10" 
              rating="4.2" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ManufacturingManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Manufacturing</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Active Work Orders" 
        value="18" 
        icon={<FiFileText className="text-blue-500" />} 
      />
      <MetricCard 
        title="Today's Output" 
        value="245 units" 
        icon={<FiPackage className="text-green-500" />} 
      />
      <MetricCard 
        title="Machine Utilization" 
        value="78%" 
        icon={<FiBarChart2 className="text-yellow-500" />} 
      />
      <MetricCard 
        title="Quality Pass Rate" 
        value="98.5%" 
        icon={<FiShield className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Production Schedule</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create Work Order
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">WO #</th>
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Quantity</th>
                <th className="text-left p-2">Start Date</th>
                <th className="text-left p-2">End Date</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <ProductionRow 
                woNumber="WO-2023-1142" 
                product="Model X-200" 
                quantity="500" 
                startDate="2023-11-15" 
                endDate="2023-11-20" 
                status="In Progress" 
              />
              <ProductionRow 
                woNumber="WO-2023-1141" 
                product="Model Y-150" 
                quantity="300" 
                startDate="2023-11-18" 
                endDate="2023-11-22" 
                status="Scheduled" 
              />
              <ProductionRow 
                woNumber="WO-2023-1140" 
                product="Model Z-300" 
                quantity="200" 
                startDate="2023-11-10" 
                endDate="2023-11-15" 
                status="Completed" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Production Metrics</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Daily Output</h3>
            <div className="h-32 bg-gray-100 flex items-center justify-center mt-2">
              <p>Chart: Daily production output</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium">Defect Rate</h3>
            <div className="h-32 bg-gray-100 flex items-center justify-center mt-2">
              <p>Chart: Defect rate trend</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Inventory Requirements</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Material</th>
              <th className="text-left p-2">Current Stock</th>
              <th className="text-left p-2">Required</th>
              <th className="text-left p-2">Shortage</th>
              <th className="text-left p-2">Lead Time</th>
            </tr>
          </thead>
          <tbody>
            <MaterialRow 
              material="Steel Sheets" 
              currentStock="1,250" 
              required="2,000" 
              shortage="750" 
              leadTime="5 days" 
            />
            <MaterialRow 
              material="Electronic Components" 
              currentStock="8,500" 
              required="10,000" 
              shortage="1,500" 
              leadTime="7 days" 
            />
            <MaterialRow 
              material="Plastic Housings" 
              currentStock="3,200" 
              required="3,200" 
              shortage="0" 
              leadTime="3 days" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AssetManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Asset Management</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Total Assets" 
        value="1,245" 
        icon={<FiDatabase className="text-blue-500" />} 
      />
      <MetricCard 
        title="Active Maintenance" 
        value="18" 
        icon={<FiSettings className="text-yellow-500" />} 
      />
      <MetricCard 
        title="Asset Value" 
        value="$2.8M" 
        icon={<FiDollarSign className="text-green-500" />} 
      />
      <MetricCard 
        title="Upcoming Depreciation" 
        value="$45,000" 
        icon={<FiBarChart2 className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Asset Register</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Asset
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Asset ID</th>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Location</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <AssetRow 
                assetId="AST-1001" 
                name="CNC Machine" 
                category="Manufacturing Equipment" 
                location="Plant A" 
                status="Operational" 
              />
              <AssetRow 
                assetId="AST-1002" 
                name="Company Vehicle" 
                category="Transportation" 
                location="HQ Parking" 
                status="Maintenance" 
              />
              <AssetRow 
                assetId="AST-1003" 
                name="Server Rack" 
                category="IT Equipment" 
                location="Data Center" 
                status="Operational" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Maintenance Schedule</h2>
        <div className="space-y-3">
          <MaintenanceItem 
            asset="HVAC System (AST-1045)" 
            type="Preventive" 
            dueDate="2023-11-25" 
            status="Scheduled" 
          />
          <MaintenanceItem 
            asset="Forklift #3 (AST-1012)" 
            type="Corrective" 
            dueDate="2023-11-20" 
            status="In Progress" 
          />
          <MaintenanceItem 
            asset="Fire Suppression System" 
            type="Inspection" 
            dueDate="2023-12-01" 
            status="Pending" 
          />
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View All Maintenance
        </button>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Asset Depreciation</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Asset</th>
              <th className="text-left p-2">Purchase Date</th>
              <th className="text-left p-2">Purchase Value</th>
              <th className="text-left p-2">Current Value</th>
              <th className="text-left p-2">Depreciation Method</th>
            </tr>
          </thead>
          <tbody>
            <DepreciationRow 
              asset="CNC Machine (AST-1001)" 
              purchaseDate="2021-01-15" 
              purchaseValue="$120,000" 
              currentValue="$72,000" 
              method="Straight Line (5 yrs)" 
            />
            <DepreciationRow 
              asset="Company Vehicle (AST-1002)" 
              purchaseDate="2022-03-10" 
              purchaseValue="$45,000" 
              currentValue="$31,500" 
              method="Double Declining" 
            />
            <DepreciationRow 
              asset="Server Rack (AST-1003)" 
              purchaseDate="2020-11-20" 
              purchaseValue="$25,000" 
              currentValue="$10,000" 
              method="Straight Line (3 yrs)" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PayrollManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Payroll Management</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="This Payroll" 
        value="$125,000" 
        icon={<FiDollarSign className="text-blue-500" />} 
      />
      <MetricCard 
        title="Employees" 
        value="142" 
        icon={<FiUsers className="text-green-500" />} 
      />
      <MetricCard 
        title="Taxes" 
        value="$32,500" 
        icon={<FiCreditCard className="text-yellow-500" />} 
      />
      <MetricCard 
        title="Benefits" 
        value="$18,200" 
        icon={<FiShield className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Payroll Processing</h2>
          <div className="space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Run Payroll
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Pay Period</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Total Gross</th>
                <th className="text-left p-2">Total Net</th>
                <th className="text-left p-2">Process Date</th>
              </tr>
            </thead>
            <tbody>
              <PayrollRow 
                period="November 1-15, 2023" 
                status="Completed" 
                gross="$125,000" 
                net="$92,500" 
                processDate="2023-11-16" 
              />
              <PayrollRow 
                period="October 16-31, 2023" 
                status="Completed" 
                gross="$122,500" 
                net="$90,650" 
                processDate="2023-11-01" 
              />
              <PayrollRow 
                period="October 1-15, 2023" 
                status="Completed" 
                gross="$120,000" 
                net="$88,800" 
                processDate="2023-10-16" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Upcoming Payroll</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Next Pay Date</h3>
            <p className="text-xl font-bold">November 30, 2023</p>
          </div>
          <div>
            <h3 className="font-medium">Employees to Pay</h3>
            <p className="text-xl font-bold">142</p>
          </div>
          <div>
            <h3 className="font-medium">Estimated Total</h3>
            <p className="text-xl font-bold">$127,500</p>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Prepare Payroll
        </button>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Employee Deductions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Employee</th>
              <th className="text-left p-2">Base Salary</th>
              <th className="text-left p-2">Taxes</th>
              <th className="text-left p-2">Benefits</th>
              <th className="text-left p-2">Net Pay</th>
            </tr>
          </thead>
          <tbody>
            <DeductionRow 
              employee="John Smith" 
              salary="$6,500" 
              taxes="$1,625" 
              benefits="$450" 
              net="$4,425" 
            />
            <DeductionRow 
              employee="Sarah Johnson" 
              salary="$5,800" 
              taxes="$1,450" 
              benefits="$380" 
              net="$3,970" 
            />
            <DeductionRow 
              employee="Michael Brown" 
              salary="$4,200" 
              taxes="$1,050" 
              benefits="$275" 
              net="$2,875" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ComplianceManagement = () => (
  <div>
    <h1 className="text-2xl font-bold mb-6">Compliance Management</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard 
        title="Active Policies" 
        value="28" 
        icon={<FiFileText className="text-blue-500" />} 
      />
      <MetricCard 
        title="Pending Audits" 
        value="3" 
        icon={<FiClock className="text-yellow-500" />} 
      />
      <MetricCard 
        title="Training Due" 
        value="42" 
        icon={<FiUsers className="text-green-500" />} 
      />
      <MetricCard 
        title="Risk Level" 
        value="Medium" 
        icon={<FiShield className="text-purple-500" />} 
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Compliance Calendar</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Requirement
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Requirement</th>
                <th className="text-left p-2">Due Date</th>
                <th className="text-left p-2">Responsible</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <ComplianceRow 
                requirement="Q4 Safety Audit" 
                dueDate="2023-12-15" 
                responsible="Safety Team" 
                status="Pending" 
              />
              <ComplianceRow 
                requirement="Tax Filing" 
                dueDate="2024-01-31" 
                responsible="Finance" 
                status="In Progress" 
              />
              <ComplianceRow 
                requirement="Employee Handbook Update" 
                dueDate="2023-11-30" 
                responsible="HR" 
                status="Completed" 
              />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Policy Management</h2>
        <div className="space-y-3">
          <PolicyItem 
            title="Workplace Safety" 
            version="v3.2" 
            lastUpdated="2023-10-15" 
            status="Active" 
          />
          <PolicyItem 
            title="Data Protection" 
            version="v2.1" 
            lastUpdated="2023-09-20" 
            status="Under Review" 
          />
          <PolicyItem 
            title="Remote Work" 
            version="v1.5" 
            lastUpdated="2023-08-10" 
            status="Active" 
          />
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View All Policies
        </button>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Training Compliance</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Training</th>
              <th className="text-left p-2">Department</th>
              <th className="text-left p-2">Due By</th>
              <th className="text-left p-2">Completed</th>
              <th className="text-left p-2">Compliance %</th>
            </tr>
          </thead>
          <tbody>
            <TrainingRow 
              training="Workplace Safety" 
              department="All" 
              dueBy="2023-12-31" 
              completed="112/142" 
              compliance="79%" 
            />
            <TrainingRow 
              training="Data Protection" 
              department="IT, Finance" 
              dueBy="2023-11-30" 
              completed="45/52" 
              compliance="87%" 
            />
            <TrainingRow 
              training="Anti-Harassment" 
              department="All" 
              dueBy="2024-01-15" 
              completed="28/142" 
              compliance="20%" 
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);



const AccountingRow = ({ date, description, account, amount, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{date}</td>
    <td className="p-2">{description}</td>
    <td className="p-2">{account}</td>
    <td className="p-2">{amount}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const HRRow = ({ name, position, department, joinDate, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{name}</td>
    <td className="p-2">{position}</td>
    <td className="p-2">{department}</td>
    <td className="p-2">{joinDate}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Active' ? 'bg-green-100 text-green-800' :
        status === 'Probation' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const HREvent = ({ date, title, description }) => (
  <div className="border-b pb-3 last:border-0 last:pb-0">
    <div className="flex justify-between">
      <span className="font-medium">{title}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const RecruitmentRow = ({ position, candidates, stage, manager, targetDate }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{position}</td>
    <td className="p-2">{candidates}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        stage === 'Screening' ? 'bg-blue-100 text-blue-800' :
        stage === 'Technical Round' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {stage}
      </span>
    </td>
    <td className="p-2">{manager}</td>
    <td className="p-2">{targetDate}</td>
  </tr>
);

const ProcurementRow = ({ poNumber, vendor, date, amount, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{poNumber}</td>
    <td className="p-2">{vendor}</td>
    <td className="p-2">{date}</td>
    <td className="p-2">{amount}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Approved' ? 'bg-blue-100 text-blue-800' :
        status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const ApprovalItem = ({ title, requester, amount }) => (
  <div className="border-b pb-3 last:border-0 last:pb-0">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">Requested by: {requester}</p>
      </div>
      <span className="font-bold">{amount}</span>
    </div>
    <div className="flex justify-end space-x-2 mt-2">
      <button className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
        Approve
      </button>
      <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
        Reject
      </button>
    </div>
  </div>
);

const SupplierRow = ({ supplier, category, contact, lastOrder, rating }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{supplier}</td>
    <td className="p-2">{category}</td>
    <td className="p-2">{contact}</td>
    <td className="p-2">{lastOrder}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        parseFloat(rating) > 4.5 ? 'bg-green-100 text-green-800' :
        parseFloat(rating) > 4.0 ? 'bg-blue-100 text-blue-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {rating}/5.0
      </span>
    </td>
  </tr>
);

const ProductionRow = ({ woNumber, product, quantity, startDate, endDate, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{woNumber}</td>
    <td className="p-2">{product}</td>
    <td className="p-2">{quantity}</td>
    <td className="p-2">{startDate}</td>
    <td className="p-2">{endDate}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
        status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const MaterialRow = ({ material, currentStock, required, shortage, leadTime }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{material}</td>
    <td className="p-2">{currentStock}</td>
    <td className="p-2">{required}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        parseInt(shortage) > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
      }`}>
        {shortage}
      </span>
    </td>
    <td className="p-2">{leadTime}</td>
  </tr>
);

const AssetRow = ({ assetId, name, category, location, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{assetId}</td>
    <td className="p-2">{name}</td>
    <td className="p-2">{category}</td>
    <td className="p-2">{location}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Operational' ? 'bg-green-100 text-green-800' :
        status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const MaintenanceItem = ({ asset, type, dueDate, status }) => (
  <div className="border-b pb-3 last:border-0 last:pb-0">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-medium">{asset}</p>
        <p className="text-sm text-gray-600">Type: {type}</p>
      </div>
      <span className="text-sm text-gray-500">{dueDate}</span>
    </div>
    <div className="flex justify-between items-center mt-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
        status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {status}
      </span>
      <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
        View
      </button>
    </div>
  </div>
);

const DepreciationRow = ({ asset, purchaseDate, purchaseValue, currentValue, method }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{asset}</td>
    <td className="p-2">{purchaseDate}</td>
    <td className="p-2">{purchaseValue}</td>
    <td className="p-2">{currentValue}</td>
    <td className="p-2">{method}</td>
  </tr>
);

const PayrollRow = ({ period, status, gross, net, processDate }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{period}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    </td>
    <td className="p-2">{gross}</td>
    <td className="p-2">{net}</td>
    <td className="p-2">{processDate}</td>
  </tr>
);

const DeductionRow = ({ employee, salary, taxes, benefits, net }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{employee}</td>
    <td className="p-2">{salary}</td>
    <td className="p-2">{taxes}</td>
    <td className="p-2">{benefits}</td>
    <td className="p-2">{net}</td>
  </tr>
);

const ComplianceRow = ({ requirement, dueDate, responsible, status }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{requirement}</td>
    <td className="p-2">{dueDate}</td>
    <td className="p-2">{responsible}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Completed' ? 'bg-green-100 text-green-800' :
        status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const PolicyItem = ({ title, version, lastUpdated, status }) => (
  <div className="border-b pb-3 last:border-0 last:pb-0">
    <div className="flex justify-between items-start">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">Version: {version}</p>
      </div>
      <span className="text-sm text-gray-500">{lastUpdated}</span>
    </div>
    <div className="flex justify-between items-center mt-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Active' ? 'bg-green-100 text-green-800' :
        status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {status}
      </span>
      <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
        View
      </button>
    </div>
  </div>
);

const TrainingRow = ({ training, department, dueBy, completed, compliance }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="p-2">{training}</td>
    <td className="p-2">{department}</td>
    <td className="p-2">{dueBy}</td>
    <td className="p-2">{completed}</td>
    <td className="p-2">
      <span className={`px-2 py-1 rounded-full text-xs ${
        parseFloat(compliance) > 90 ? 'bg-green-100 text-green-800' :
        parseFloat(compliance) > 70 ? 'bg-blue-100 text-blue-800' :
        parseFloat(compliance) > 50 ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {compliance}
      </span>
    </td>
  </tr>
);


export default AdminDashboard;