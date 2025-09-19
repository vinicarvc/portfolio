"use client"
import { motion } from "motion/react"
import { Spotlight } from "@/components/ui/spotlight"

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

// Dados das tecnologias - você pode personalizar conforme suas skills
export const TECHNOLOGIES = [
    {
        category: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Framer Motion",
            "Shadcn/ui",
        ],
    },
    {
        category: "Tools & Others",
        skills: [
            "Git",
            "GitHub",
            "Figma",
            "Prettier",
            "Responsive Design",
            "Acessibilidade (a11y)",
        ],
    },
]

export function SkillsSection() {
    return (
        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
            <h3 className="mb-5 text-lg font-medium">Skills & Technologies</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {TECHNOLOGIES.map((tech) => (
                    <div
                        key={tech.category}
                        className="relative overflow-hidden rounded-2xl bg-zinc-600/30 p-[1px] dark:bg-zinc-800/30"
                    >
                        <Spotlight
                        />

                        <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                            <h4 className="mb-3 font-medium text-zinc-900 dark:text-zinc-100">{tech.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {tech.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
