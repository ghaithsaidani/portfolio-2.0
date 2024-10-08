import * as React from "react"

import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          rgba(37,99,235),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-[12px] placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-primary dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover:shadow-none transition duration-400
          group-invalid:ring-2 group-invalid:ring-error group-invalid:ring-opacity-50 group-invalid:ring-offset-2 group-invalid:ring-offset-error group-invalid:ring-offset-opacity-50
           `,
            className
          )}
          ref={ref}
          {...props}
        />


      </motion.div>
    );
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
