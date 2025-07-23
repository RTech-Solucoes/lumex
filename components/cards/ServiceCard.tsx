import {motion} from "framer-motion";
import {LucideIcon} from "lucide-react";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

export default function ServiceCard({
  Icon,
  title,
  description,
  features,
  isInView,
  index
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  isInView: boolean;
  index: number;
}) {

  return (
    <motion.div
      key={title}
      initial={{opacity: 0, y: 50}}
      animate={isInView ? {opacity: 1, y: 0} : {}}
      transition={{duration: 0.8, delay: 0.5 + index * 0.1}}
      className="flex"
    >
      <CardContainer className="group card w-full h-full">
        <CardBody className="p-8 flex flex-col">
          <CardItem translateZ="100"
            className="inline-flex items-center justify-center w-16 h-16 gradient rounded-full mb-6  transition-all duration-200"
          >
            <Icon className="h-8 w-8 text-foreground"/>
          </CardItem>

          <CardItem
            as="h3"
            translateZ="100"
            className="w-fit text-xl font-medium text-foreground mb-4 group-hover:text-gradient"
          >
            {title}
          </CardItem>

          <CardItem
            as="p"
            translateZ="100"
            className="text-muted leading-relaxed mb-6 flex-grow">
            {description}
          </CardItem>

          <CardItem translateZ="100" className="space-y-2">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{opacity: 0, x: -20}}
                animate={isInView ? {opacity: 1, x: 0} : {}}
                transition={{duration: 0.5, delay: 0.8 + index * 0.1 + featureIndex * 0.1}}
                className="flex items-center space-x-2"
              >
                <span className="text-gradient text-lg font-normal"> {'-'} </span>
                <span className="text-lg text-foreground">{feature}</span>
              </motion.div>
            ))}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  )
}