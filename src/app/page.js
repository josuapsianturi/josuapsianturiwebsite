'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  ChevronDown,
  ArrowDown,
  ExternalLink,
  Code,
  Rocket,
  Github,
  Heart,
  Dog,
  Sprout,
  Gamepad2,
  Zap,
  Guitar,
  Youtube,
  Twitter,
  Instagram,
  Box,
  Backpack,
  Popcorn,
} from "lucide-react";

export default function Home() {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 100) {
        setIsNavHidden(true);
      } else {
        setIsNavHidden(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-inter bg-slate-50 text-slate-900 leading-relaxed">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-transform duration-300 ${isNavHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-slate-900">Josua Sianturi</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("interests")}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Interests
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection("interests")}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
                >
                  Interests
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-slate-600 hover:text-slate-900 w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Hi, I'm <span className="text-blue-600">Josua</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
              A web developer at{" "}
              <a
                href="https://www.code050.nl/team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Code050
              </a>
              , based in Indonesia — working on{" "}
              <a
                href="https://ifsware.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Ifsware
              </a>, helping others build websites
              and sharing God's love through{" "}
              <a
                href="https://hatiuntuktuhan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Hati Untuk Tuhan
              </a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <span>Learn More About Me</span>
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("work")}
                className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors duration-200"
              >
                <span>View My Work</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-12 animate-bounce-gentle">
            <ChevronDown className="mx-auto text-slate-400 h-8 w-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My journey as a developer and the experiences that shaped who I am
              today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/josua.png"
                width="250"
                height="250"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto"
                alt="Josua Sianturi - Web Developer"
                loading="lazy"
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="prose prose-lg text-slate-700 space-y-4">
                <p>
                  Over the past few years, I've walked through some difficult
                  seasons — physically, mentally, and spiritually. Those
                  experiences humbled me and reshaped how I see life, faith, and
                  people.
                </p>
                <p>
                  That journey gave me a heart for people who are struggling
                  silently. If you're going through something difficult and need
                  someone to talk to, I'm here. I don't have all the answers,
                  but I've been there — and I'd be glad to listen.
                </p>
                <p>
                  I love helping people build their website — especially
                  those just starting a small business, a personal project, or
                  something meaningful to them. Whenever possible, I offer this
                  help freely — especially for causes or stories I believe in.
                </p>
              </div>

              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    💪 Fun Fact
                  </h3>
                  <p className="text-blue-800">
                    I like to joke that I'm the strongest man alive — though
                    Floki (my dog) might disagree. 😅
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              My Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Projects I'm currently working on and contributing to
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Code050 Card */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 h-8 w-8 mr-3" />

                  <h3 className="text-xl font-semibold text-slate-900">
                    Code050
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Currently working as a web developer at Code050, building
                  innovative web solutions.
                </p>
                <a
                  href="https://www.code050.nl/team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <span>View Team Page</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            {/* Ifsware.dev Card */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Rocket className="text-emerald-600 h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Ifsware.dev
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Working on Ifsware.dev, Crafting meaningful products.
                </p>
                <a
                  href="https://ifsware.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            {/* GitHub Projects Card */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Github className="text-slate-700 h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Open Source
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Contributing to various open-source projects and maintaining
                  repositories on GitHub.
                </p>
                <a
                  href="https://github.com/josuapsianturi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-700 hover:text-slate-800 font-medium transition-colors duration-200"
                >
                  <span>View GitHub</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            {/* Hati Untuk Tuhan Card */}
            <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="text-red-500 h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Hati Untuk Tuhan
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  A quiet space on the internet to help people reflect on God's
                  love and draw closer to Jesus.
                </p>
                <a
                  href="https://hatiuntuktuhan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Beyond Coding
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What I enjoy doing when I'm not building websites
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dog Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Dog className="text-amber-500 h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Floki & Me
                </h3>
                <p className="text-slate-600">
                  Enjoying quiet time with my dog Floki, who keeps me grounded
                  and happy.
                </p>
              </CardContent>
            </Card>

            {/* Rubik's Cube Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Box className="text-purple-500 h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Rubik's Cubes
                </h3>
                <p className="text-slate-600">
                  Solving puzzles and challenging my mind with different cube
                  combinations.
                </p>
              </CardContent>
            </Card>

            {/* Ping Pong Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="text-orange-500 h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Ping Pong
                </h3>
                <p className="text-slate-600">
                  Playing table tennis for fun, exercise, and to connect with others.
                </p>
              </CardContent>
            </Card>

            {/* Guitar Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Guitar className="text-blue-500 h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Guitar
                </h3>
                <p className="text-slate-600">
                  Occasionally strumming my guitar and creating music for
                  relaxation.
                </p>
              </CardContent>
            </Card>

            {/* YouTube Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Youtube className="text-red-500 h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  YouTube
                </h3>
                <p className="text-slate-600">
                  Sometimes sharing bits of my life and interests on my YouTube
                  channel.
                </p>
              </CardContent>
            </Card>

            {/* Hiking Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Backpack className="h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Hiking
                </h3>
                <p className="text-slate-600">
                  Enjoying nature, fresh air, and quiet moments while climbing mountains.
                </p>
              </CardContent>
            </Card>

            {/* Movies Card */}
            <Card className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Popcorn className="text-yellow-500 h-12 w-12 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Movies
                </h3>
                <p className="text-slate-600">
                  Unwinding with a good film — from lighthearted stories to thought-provoking ones.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <a
                href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="mr-2 h-4 w-4" />
                <span>Watch My YouTube Channel</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Whether you need help with your website, want to
              collaborate, or just need someone to talk to
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Twitter className="text-blue-400 h-6 w-6 mr-4" />
                  <div>
                    <p className="font-medium">Twitter</p>
                    <a
                      href="https://twitter.com/Josuapsianturi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      @josuapsianturi
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Github className="text-slate-300 h-6 w-6 mr-4" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/josuapsianturi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      @josuapsianturi
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Youtube className="text-red-400 h-6 w-6 mr-4" />
                  <div>
                    <p className="font-medium">YouTube</p>
                    <a
                      href="https://www.youtube.com/channel/UC9O9zYGp7EhgiqTg3rjtvKg/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      @josuapsianturi
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="text-pink-400 h-6 w-6 mr-4" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/josuapsianturi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      @josuapsianturi
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Need Help?</h3>
              <div className="space-y-4">
                <Card className="!bg-slate-800 !border-slate-700">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2 text-slate-200">
                      💼 Website
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Starting a small business or personal project? I'd love to
                      help you build your website.
                    </p>
                  </CardContent>
                </Card>

                <Card className="!bg-slate-800 !border-slate-700">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2 text-slate-200">
                      💬 Need Someone to Talk?
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Going through a difficult time? I'm here to listen. Feel
                      free to reach out.
                    </p>
                  </CardContent>
                </Card>

                <Card className="!bg-slate-800 !border-slate-700"
                  style={{ backgroundColor: '#1e293b' }}>
                  <CardContent className="!p-4">
                    <h4 className="font-medium mb-2 text-slate-200">
                      🙏 Spiritual Journey
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Visit{" "}
                      <a
                        href="https://hatiuntuktuhan.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        Hati Untuk Tuhan
                      </a>{" "}
                      for reflection and spiritual growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-slate-700">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Josua Sianturi. Built with love and purpose. 💙
            </p>
          </div>
        </div>
      </section >
    </div >
  );
}