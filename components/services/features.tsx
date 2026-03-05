import { services } from "@/data/service";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ServiceFeatures() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full flex flex-col border border-gray-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col grow">
                <CardDescription className="text-base text-gray-700 mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3 mb-8 grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="cursor-pointer mt-auto rounded-full border-primary text-primary hover:bg-primary/10"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
