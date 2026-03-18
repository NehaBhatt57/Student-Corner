import { Upload, MessageCircle, ListChecks, Sparkles, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const features = [
    {
      icon: Upload,
      title: "Upload PDFs",
      description: "Seamlessly upload your study materials and documents for AI-powered analysis",
      color: "from-blue-500 to-cyan-500",
      link: "/upload"
    },
    {
      icon: MessageCircle,
      title: "Ask AI",
      description: "Get instant answers to your questions from uploaded PDFs with intelligent responses",
      color: "from-purple-500 to-pink-500",
      link: "/ask"
    },
    {
      icon: ListChecks,
      title: "Generate MCQs",
      description: "Automatically create multiple-choice questions from your study content",
      color: "from-orange-500 to-red-500",
      link: "/mcq"
    }
  ];

  const stats = [
    { label: "Documents Processed", value: "1,234", icon: Upload },
    { label: "Questions Answered", value: "5,678", icon: MessageCircle },
    { label: "MCQs Generated", value: "890", icon: ListChecks },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">AI-Powered Learning Platform</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Welcome to Student Corner AI
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your learning experience with AI-powered tools. Upload PDFs, get instant answers, 
            and generate practice questions to ace your studies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div className="mt-3 flex items-center text-green-600 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+12% this week</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Quick Tip</h3>
              <p className="text-blue-100 text-lg">
                Upload your lecture notes or textbook chapters to get instant summaries and create 
                personalized study materials. The AI understands context and can answer complex questions!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;