import { Link } from "react-router-dom";
import {
  FaBrain,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';
import logo from "../assets/logo/logo-no-name.png";

export default function LandingPage() {
  const features = [
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Smart Learning",
      desc: "Create and manage interactive quizzes that support remote education."
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "AI Quiz Builder",
      desc: "Generate intelligent quizzes in seconds using advanced AI models."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Secure Exams",
      desc: "Randomized questions and anti-cheating features for fair assessments."
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Performance Insights",
      desc: "Track learning progress with analytics and actionable data."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-gray-900">Quizzital</h1>
          </div>
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI-powered Quiz Platform for 
              <span className="text-blue-600"> Modern Classrooms</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionize the way you assess and engage students — generate intelligent quizzes, 
              monitor performance, and secure your exams with ease.
            </p>
            <Link to="/register">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                <span>Get Started for Free</span>
                <FaArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and analyze quizzes in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Quizzital?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built for educators, powered by AI — Quizzital bridges the gap between 
                teaching and technology with simplicity, speed, and security.
              </p>
              
              <div className="space-y-4">
                {[
                  "AI-driven question generation that's actually relevant",
                  "Save hours of manual work with automated grading",
                  "Scalable solution that grows with your needs"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">4.9/5</span>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Quizzital has transformed how I create assessments. The AI generates 
                  thoughtful questions and saves me hours every week."
                </blockquote>
                <div className="text-sm text-gray-500">
                  — Sarah Chen, High School Teacher
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Empower Your Class?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start using Quizzital for free — no credit card required.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
            <span>Start Now</span>
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-white">Quizzital</span>
          </div>
          <p className="text-gray-400">© 2025 Quizzital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}