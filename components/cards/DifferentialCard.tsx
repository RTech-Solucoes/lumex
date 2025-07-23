import {motion} from "framer-motion";
import {LucideIcon} from "lucide-react";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

export default function DifferentialCard({
  Icon,
  title,
  description,
  isInView,
  index
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
  isInView: boolean;
  index: number;
}) {

  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
      className="group"
    >
      <CardContainer className="group card p-8 w-full h-full">
        <CardBody className="space-y-2">
          <CardItem
            translateZ="100"
            className="inline-flex items-center justify-center w-16 h-16 gradient rounded-full mb-6"
          >
            <Icon className="h-8 w-8 text-foreground" />
          </CardItem>

          <CardItem
            translateZ="100"
            as="h3" className="w-fit text-xl font-medium text-foreground mb-4 group-hover:text-gradient"
          >
            {title}
          </CardItem>

          <CardItem
            translateZ="100"
            as="p"
            className="text-muted leading-relaxed"
          >
            {description}
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}