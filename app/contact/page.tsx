"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Check,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { BlurFade } from "@/components/ui/blur-fade";

const TeamMembers = [
  {
    initials: "KD",
    name: "Ing. Kwaku Duah",
    role: "Chief Executive Officer",
    description: "Strategic leadership and company vision",
    skill: "Strategic Planning",
    experience: "10+ years experience",
    email: "kwaku.duah@kayplexengineering.com",
  },
  {
    initials: "SA",
    name: "Dr. Stephen Adjei",
    role: "Engineering Director",
    description: "Driving innovative engineering solutions",
    skill: "Technical Leadership",
    experience: "15+ years experience",
    email: "stephen.adjei@kayplexengineering.com",
  },
  {
    initials: "FKA",
    name: "Ing. Felix Kofi Amindi",
    role: "Engineering Director",
    description: "Organizational growth & development",
    skill: "Project Management",
    experience: "12+ years experience",
    email: "felix.amindi@kayplexengineering.com",
  },
  {
    initials: "RY",
    name: "Mr. Reginald Yeboah",
    role: "Operations Officer",
    description: "Ensuring operational efficiency",
    skill: "Operations Management",
    experience: "8+ years experience",
    email: "reginald.yeboah@kayplexengineering.com",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      service: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message.", {
      description: "We will get back to you as soon as possible.",
      duration: 4000,
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      service: "",
    });
  };

  return (
    <div className="w-full py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <BlurFade delay={0.2}>
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
              Get in Touch
              <br />
              <span className="text-rose-950">with Our Team</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with our engineering experts for innovative and
              cost-efficient solutions tailored to your operational needs.
            </p>
          </div>
        </BlurFade>

        {/* Main Contact Section */}
        <BlurFade delay={0.3} inView>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="md:col-span-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-fit">
              <div className="bg-gradient-to-br from-rose-950 to-rose-900 text-white p-6">
                <h3 className="text-xl font-semibold mb-1">
                  Contact Information
                </h3>
                <p className="text-rose-100 text-sm">
                  Reach out to us via any of these channels
                </p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-rose-950 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+233200690434"
                      className="text-sm text-gray-600 hover:text-rose-950 hover:underline"
                    >
                      +233 200690434
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-rose-950 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:kwaku.duah@kayplexengineering.com"
                      className="text-sm text-gray-600 hover:text-rose-950 hover:underline"
                    >
                      kwaku.duah@kayplexengineering.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-rose-950 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t flex justify-start space-x-4">
                <a
                  href="#linkedin"
                  className="p-2 rounded-full bg-gray-100 hover:bg-rose-950 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 border-b p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Send us a message
                </h3>
                <p className="text-sm text-gray-600">
                  Fill in the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-rose-950 focus:ring-rose-950"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-gray-700 font-medium"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-rose-950 focus:ring-rose-950"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-gray-700 font-medium"
                      >
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-rose-950 focus:ring-rose-950"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-gray-700 font-medium"
                      >
                        Service of Interest
                      </Label>
                      <Select
                        onValueChange={handleSelectChange}
                        value={formData.service}
                      >
                        <SelectTrigger
                          className="w-full border-gray-200 focus:border-rose-950 focus:ring-rose-950"
                          id="service"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mining">
                            Mining Engineering Consultancy
                          </SelectItem>
                          <SelectItem value="road">
                            Road Construction Engineering
                          </SelectItem>
                          <SelectItem value="semiconductor">
                            Semiconductor Manufacturing
                          </SelectItem>
                          <SelectItem value="building">
                            Building and Construction
                          </SelectItem>
                          <SelectItem value="well">Well Engineering</SelectItem>
                          <SelectItem value="pipeline">
                            Pipeline Design and Engineering
                          </SelectItem>
                          <SelectItem value="risk">
                            Risk Assessment and Analysis
                          </SelectItem>
                          <SelectItem value="chemical">
                            Chemical Supply Chain
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-gray-700 font-medium"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-rose-950 focus:ring-rose-950"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-gray-700 font-medium"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-rose-950 focus:ring-rose-950"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="newsletter" />
                    <Label
                      htmlFor="newsletter"
                      className="text-sm text-gray-700"
                    >
                      Subscribe to our newsletter for industry updates
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rose-950 hover:bg-rose-900 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" /> Submit Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Team Cards Section */}
        <BlurFade delay={0.5} inView>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-2">
                Our Leadership Team
              </h2>
              <p className="text-gray-600">
                Meet the experts behind Kayplex Engineering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TeamMembers.map((member, index) => (
                <BlurFade key={index} delay={0.6 + index * 0.1} inView>
                  <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col">
                    <div className="bg-gradient-to-r from-rose-950 to-rose-900 p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-white">
                            {member.initials}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-base font-semibold text-white">
                            {member.name}
                          </p>
                          <p className="text-xs text-rose-100">{member.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex-grow">
                      <p className="text-sm text-gray-700">
                        {member.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>{member.skill}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Clock className="h-4 w-4 text-rose-600" />
                          <span>{member.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border-t p-4 flex justify-end gap-3">
                      <Link
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-gray-200 hover:bg-rose-950 hover:text-white transition-colors"
                        aria-label="Send email"
                      >
                        <Mail className="h-4 w-4" />
                      </Link>
                      <a
                        href="#linkedin"
                        className="p-2 rounded-full bg-gray-200 hover:bg-rose-950 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default ContactPage;
