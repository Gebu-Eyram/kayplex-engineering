import { LineChartIllustration } from "@/public/LineChartIllustration";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import Image from "next/image";

const summary = [
  {
    name: "North Field Corn",
    value: "21,349 bu",
    planted: "19,000 bu",
    water: "14,033 gal",
    yield: "+11.2%",
    efficiency: "+7.8%",
    nutrients: "+4.9%",
    bgColor: "bg-amber-500",
    changeType: "positive",
  },
  {
    name: "West Field Soybeans",
    value: "25,943 bu",
    planted: "23,600 bu",
    water: "11,033 gal",
    yield: "+3.1%",
    efficiency: "+5.6%",
    nutrients: "+2.9%",
    bgColor: "bg-emerald-500",
    changeType: "positive",
  },
  {
    name: "South Field Wheat",
    value: "9,443 bu",
    planted: "14,600 bu",
    water: "2,033 gal",
    yield: "-5.1%",
    efficiency: "-6.3%",
    nutrients: "-9.9%",
    bgColor: "bg-yellow-400",
    changeType: "negative",
  },
];

export default function FieldPerformance() {
  const oilFieldData = [
    {
      name: "Kayplex 1",
      bgColor: "bg-blue-500",
      production: "85,000 bpd",
      expected: "95,000 bpd",
      waterInjection: "120,000 bwpd",
      productionDiff: "-10.5%",
      efficiency: "89.5%",
      gasOilRatio: "1,200 scf/bbl",
      changeType: "negative",
    },
    {
      name: "Kayplex 2",
      bgColor: "bg-green-500",
      production: "50,000 bpd",
      expected: "48,000 bpd",
      waterInjection: "75,000 bwpd",
      productionDiff: "+4.2%",
      efficiency: "95.3%",
      gasOilRatio: "950 scf/bbl",
      changeType: "positive",
    },
    {
      name: "Kayplex 3",
      bgColor: "bg-purple-500",
      production: "65,000 bpd",
      expected: "60,000 bpd",
      waterInjection: "85,000 bwpd",
      productionDiff: "+8.3%",
      efficiency: "97.2%",
      gasOilRatio: "1,450 scf/bbl",
      changeType: "positive",
    },
  ];
  return (
    <div className=" shrink-0 overflow-hidden [mask-image:radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        {/* <h3 className="text-sm text-gray-500">Cummulative Production</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          32.227 MMSTB
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+13% increase in production</span>{" "}
          <span className="font-normal text-gray-500">, Field 3</span>
        </p> */}
        <Image
          src="/graph.png"
          alt="image"
          className="mt-8 w-full object-cover min-w-96 shrink-0 "
          width={1200}
          height={600}
        />

        <div className="mt-6 min-w-200 !overflow-hidden">
          <Table className="overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead>Field</TableHead>
                <TableHead className="text-right">Current Production</TableHead>
                <TableHead className="text-right">
                  Expected Production
                </TableHead>
                <TableHead className="text-right">Water Injection</TableHead>
                <TableHead className="text-right">Production Diff</TableHead>
                <TableHead className="text-right">Field Efficiency</TableHead>
                <TableHead className="text-right">Gas-Oil Ratio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {oilFieldData.map((field) => (
                <TableRow key={field.name}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-3">
                      <span
                        className={field.bgColor + " w-2 h-6 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{field.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {field.production}
                  </TableCell>
                  <TableCell className="text-right">{field.expected}</TableCell>
                  <TableCell className="text-right">
                    {field.waterInjection}
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        field.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500"
                      }
                    >
                      {field.productionDiff}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        parseFloat(field.efficiency) > 90
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-amber-700 dark:text-amber-500"
                      }
                    >
                      {field.efficiency}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span>{field.gasOilRatio}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
