"use client";

import { icons } from "lucide-react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaLaravel,
    FaPhp,
    FaBootstrap,
    FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
        "Over the years, I have gained extensive experience in software development, working with diverse teams and projects that have honed my skills in various aspects of full-stack development.",
    items: [
        {
            company: "NextGen Solutions",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Innovative Tech Inc.",
            position: "Senior Developer",
            duration: "2020 - 2022",
        },
        {
            company: "AlphaSoft Technologies",
            position: "Junior Developer",
            duration: "2019 - 2020",
        },
        {
            company: "TechWave Systems",
            position: "Intern Developer",
            duration: "2018 - 2019",
        },
        {
            company: "Creative Coders",
            position: "Software Senior Engineer Intern",
            duration: "2017 - 2018",
        },
        {
            company: "Creative Coders",
            position: "Software Junior Engineer Intern",
            duration: "2015 - 2017",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
        "Throughout my academic journey, I have developed a strong foundation in software development and computer science, enhancing my skills through various projects and hands-on experiences.",
    items: [
        {
            company: "Innovative Coding ",
            degree: "Full Stack Web",
            duration: "2023",
        },
        {
            company: "Institute of Technology",
            degree: "Software Engineering",
            duration: "2022",
        },
        {
            company: "Tech University",
            degree: "Bachelor of Computer",
            duration: "2020",
        },
    ],
};

const skills = {
    title: "My skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officia ipsam harum voluptatibus, asperiores eum illo molestias. Quisquam optio harum ad dolor aut. Exercitationem nobis, tempora aliquam ab blanditiis provident.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap",
        },
        {
            icon: <FaLaravel />,
            name: "laravel",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
    ],
};

const about = {
    title: "About me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officia ipsam harum voluptatibus, asperiores eum illo molestias. Quisquam optio harum ad dolor aut. Exercitationem nobis, tempora aliquam ab blanditiis provident.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Wilfried Davo",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+229) 96 432 338",
        },

        {
            fieldName: "Nationality",
            fieldValue: "Beninese",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years",
        },
        {
            fieldName: "Email",
            fieldValue: "davowilfried58@gmail.com",
        },
        {
            fieldName: "Skype",
            fieldValue: "w@ly27",
        },
        {
            fieldName: "Languages",
            fieldValue: "French, English",
        },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    {/* tabcontent (BODY) */}
                    <div className="min-h-[70hv] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">
                                                        {item.duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold ">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((line, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {line.fieldName}
                                                </span>
                                                <span className="text-xl">
                                                    {line.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
