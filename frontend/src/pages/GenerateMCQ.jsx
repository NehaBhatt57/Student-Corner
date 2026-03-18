import MCQGenerator from "../components/MCQGenerator";
import { Brain, Target, TrendingUp, Zap } from "lucide-react";

function GenerateMCQ() {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced AI analyzes your content and creates relevant questions"
    },
    {
      icon: Target,
      title: "Targeted Learning",
      description: "Focus on key concepts and important topics"
    },
    {
      icon: TrendingUp,
      title: "Improve Retention",
      description: "Active recall through practice questions"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get MCQs generated in seconds"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold">AI-Powered Question Generation</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Generate Practice MCQs
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your study materials into multiple-choice questions for effective exam preparation
          </p>
        </div>

        {/* MCQ Generator Component */}
        <div className="mb-12">
          <MCQGenerator />
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Paste Your Content</h4>
              <p className="text-sm text-orange-100">Enter your study material or notes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">AI Analysis</h4>
              <p className="text-sm text-orange-100">AI identifies key concepts and topics</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Get MCQs</h4>
              <p className="text-sm text-orange-100">Receive practice questions instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateMCQ;