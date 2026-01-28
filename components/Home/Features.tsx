import React from "react";
import { Button } from "../ui/button";

// Define types for our icons
type IconType = "engineering" | "maintenance" | "logistics" | "default";

// Define the icon renderer with proper typing
const iconRender = (val: IconType): React.ReactNode => {
  switch (val) {
    case "engineering":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "maintenance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "logistics":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 002 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 006.5 3zM2 12v2.5A1.5 1.5 0 003.5 16h.041a3 3 0 015.918 0h.791a.75.75 0 00.75-.75V12H2z" />
          <path d="M6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM13.25 5a.75.75 0 00-.75.75v8.514a3.001 3.001 0 014.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 00-1.784-8.549A1.486 1.486 0 0014.823 5H13.25zM14.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

// Define interface for advantage items
interface AdvantageItem {
  id: number;
  text: string;
}

// Define interface for feature items
interface FeatureItemProps {
  id: number;
  title: string;
  description: string;
  advantages: AdvantageItem[];
  icon: IconType;
  image: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  id,
  title,
  description,
  advantages,
  icon,
  image,
}) => {
  return (
    <div
      className={`flex flex-col md:items-center gap-10 lg:gap-14 ${
        id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-12 space-y-8">
        <div className="space-y-6">
          <p className="mt-2 max-w-xl text-3xl font-medium tracking-tighter md:text-balance text-gray-900 md:text-4xl">
            {title}
          </p>
          <p className=" text-lg">{description}</p>
        </div>
        <ul
          role="list"
          className="space-y-5 children:flex children:items-start children:gap-4 children:text-gray-600 dark:children:text-gray-400"
        >
          {advantages.map((advantage) => (
            <li key={advantage.id} className="flex items-center gap-2">
              <Button size="icon" variant="outline">
                {advantage.id}
              </Button>
              <span className="leading-tight lg:text-lg">
                {" "}
                {advantage.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="flex-1 relative bg-linear-to-tr from-sky-100 to-blue-300 
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden"
      >
        <img
          src={image}
          alt={`${title} illustration`}
          width={1800}
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

// Define the features data array with the correct type
const features: FeatureItemProps[] = [
  {
    id: 1,
    title: "Engineering Services for Oil & Gas Industry",
    icon: "engineering",
    description:
      "Comprehensive engineering consultancy services including petroleum, pipeline, and mining engineering with a focus on operational excellence and safety.",
    advantages: [
      {
        id: 1,
        text: "Project planning, scheduling and detailed estimates for successful execution",
      },
      {
        id: 2,
        text: "Operational excellence strategies ensuring safety of people, environment and assets",
      },
      {
        id: 3,
        text: "Well engineering consultancy tailored to specific geological conditions",
      },
    ],
    image:
      "https://qjobsindia.com/blog/wp-content/uploads/2022/11/What-Is-the-Difference-Between-Blue-and-white-collar-Jobs.jpg",
  },
  {
    id: 2,
    title: "Maintenance and Equipment Calibration",
    icon: "maintenance",
    description:
      "End-to-end maintenance services for process plants with precision calibration to ensure maximum uptime and operational reliability.",
    advantages: [
      {
        id: 1,
        text: "Scheduled shutdowns and emergency repairs with minimal disruption",
      },
      {
        id: 2,
        text: "Precision calibration for critical equipment including flow meters",
      },
      {
        id: 3,
        text: "Plant performance optimization through proactive diagnostics",
      },
    ],
    image:
      "https://media.istockphoto.com/id/1411009609/photo/young-female-professional-carpenter-posing-with-protective-wear-equipped.jpg?s=612x612&w=0&k=20&c=O3EQ-Vk-pQR6QK34wMFslo8wmpnYMtLwIYrTBTetuuw=",
  },
  {
    id: 3,
    title: "Logistics and Supply Chain Solutions",
    icon: "logistics",
    description:
      "Specialized logistics services supporting the unique demands of offshore and onshore operations in the oil and gas sector.",
    advantages: [
      {
        id: 1,
        text: "Safe and reliable personnel transportation including helicopter and marine transfers",
      },
      {
        id: 2,
        text: "Supply of equipment and chemicals designed for specific operational needs",
      },
      {
        id: 3,
        text: "Efficient supply chain management including customs clearance and warehousing",
      },
    ],
    image:
      "https://th.bing.com/th/id/R.fe3267487829ae7b2634d378bfa1ecc4?rik=huR3kTpxk5oXfw&pid=ImgRaw&r=0",
  },
];

const Features: React.FC = () => {
  return (
    <section className="pb-8 md:pb-12 lg:pb-16 px-4 " id="features">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col space-y-16">
          <div className="grid divide-y divide-gray-300/60 dark:divide-gray-800/30 gap-12 children:py-5 first:pt-0 last:pb-0 max-w-6xl mx-auto">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
