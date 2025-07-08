import {motion} from "framer-motion";
import {LucideIcon} from "lucide-react";

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
      <div className="card p-8 h-full">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 gradient rounded-full mb-6 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300"
        >
          <Icon className="h-8 w-8 text-foreground" />
        </motion.div>

        <h3 className="w-fit text-xl font-semibold text-foreground mb-4 group-hover:text-gradient transition-all duration-100">
          {title}
        </h3>

        <p className="text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}