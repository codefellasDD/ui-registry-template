"use client";
import Image from "next/image";
import {
  BentoCard,
  BentoGrid,
} from "@/registry/@fellas/ui/bento-grid/bento-grid";
import BlurIn from "@/registry/@fellas/ui/blur-in/blur-in";
import FadeIn from "@/registry/@fellas/ui/fade-in/fade-in";
import Marquee from "@/registry/@fellas/ui/marquee/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Mail, Sun } from "lucide-react";
import { Button } from "@/registry/@fellas/ui/button";

type defaultBgImages = {
  image: string;
}[];

const defaultDomains = [
  {
    name: "Crypto",
    body: "Interface with blockchains, create smart contracts, track market data, manage digital assets.",
    slug: "crypto",
    image: "crypto",
  },
  {
    name: "Commerce",
    body: "Sell your product or service online.",
    slug: "commerce",
    image: "crypto",
  },
  {
    name: "Web",
    body: "Create beautiful, responsive, and performant websites.",
    slug: "web",
    image: "crypto",
  },
  {
    name: "IOT",
    body: "Interface with things around you.",
    slug: "iot",
    image: "crypto",
  },
  {
    name: "AI",
    body: "Create intelligent, context-aware applications that understand your unique data.",
    slug: "ai",
    image: "crypto",
  },
  {
    name: "API",
    body: "Create APIs that power your applications.",
    slug: "api",
    image: "crypto",
  },
];

const defaultBgImages = [
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01541.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01551.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01539.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01530.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01500.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01455.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01459.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01436.jpg",
  },
  {
    image: "https://www.ddpix.de/wp-content/gallery/dresden/01435.jpg",
  },
];
const features = [
  {
    Icon: "",
    name: "",
    description: "",
    href: "",
    cta: "",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div
          id="hero"
          className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out"
        >
          <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50">
              <p className="font-display text-center text-6xl md:text-7xl lg:text-8xl font-bold leading-[5rem] tracking-tighter drop-shadow-sm">
                FellasUI
              </p>
              <div className="text-lg text-neutral-500 dark:text-neutral-400 lg:p-2 w-full ">
                <BlurIn className="w-3/4 sm:w-2/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  necessitatibus suscipit consequatur aspernatur nemo magni...
                </BlurIn>

                <FadeIn direction="down" className="my-class">
                  <div className="flex items-center gap-2 w-full lg:w-2/3 mt-6">
                    <a href={"#"} target="_blank" className="flex-1">
                      <Button
                        variant="default"
                        size="lg"
                        className="flex items-center gap-2 w-full group/Github"
                      >
                        <div>GitHub</div>
                        <Github className="h-5 w-5 lg:group-hover/Github:translate-x-1 transition-all duration-300" />
                      </Button>
                    </a>

                    <a
                      href="mailto:codefellasdd@gmail.com"
                      target="_blank"
                      className="flex-1"
                    >
                      <Button
                        variant="default"
                        size="lg"
                        className="flex items-center gap-2 w-full group/Mail"
                      >
                        <div>Email Me</div>
                        <Mail className="h-5 w-5 lg:group-hover/Mail:translate-x-1 transition-all duration-300" />
                      </Button>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-4 top-4 z-50">
          <FadeIn direction="down">
            <Sun />
          </FadeIn>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "",
    description:
      "software engineer & open-source contributor focused in gen-ai, web, linux, cybersecurity, and finance.",
    className: "col-span-3 md:col-span-1",
    href: ``,
    cta: "Visit portfolio",
    background: (
      <div>
        <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] group-hover:scale-105">
          <BlurIn duration={0.5} className="h-full">
            <Image
              className="object-cover object-center h-full w-full"
              src={process.env.AVATAR_URL || defaultBgImages[0].image}
              alt="avatar image"
              width={300}
              height={200}
              priority // Load image immediately
              quality={100} // Adjust quality for optimization
              placeholder="blur" // Placeholder to improve perceived performance
              blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
            />
          </BlurIn>
        </div>

        <FadeIn
          direction="right"
          framerProps={{
            show: { transition: { delay: 1.5 } },
          }}
        >
          <a
            href={"#"}
            className="absolute top-2 right-2 bg-background rounded-lg px-4 py-2 text-xs text-neutral-500 dark:text-neutral-300 max-w-3/4 w-fit"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full animate-pulse bg-emerald-400"></div>
              <div className="">aktiv</div>
            </div>
          </a>
        </FadeIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Tech Domain",
    description: "Sector-agnostic, focused on solving problems with code.",
    href: `#/projects`,
    cta: "View projects",
    className: "col-span-3 md:col-span-1",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Marquee
          className="absolute h-2/3 top-10 [--duration:40s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] w-full"
          pauseOnHover
        >
          {defaultDomains.map((f, idx) => (
            <a
              href={`#/tags/${f.slug}`}
              key={idx}
              className={cn(
                "relative w-40 h-full cursor-pointer overflow-hidden rounded-xl border p-4 hover:-translate-y-1",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu transition-all duration-300 ease-out hover:blur-none"
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-lg font-bold dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </a>
          ))}
        </Marquee>
      </motion.div>
    ),
  },
  {
    Icon: "",
    name: "Technologies",
    description:
      "Using a combination of cutting-edge, and time-tested technologies to build robust, scalable, and secure applications.",
    href: "/technologies",
    cta: "View all technologies",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[100%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] md:[mask-image:linear-gradient(to_top,transparent_50%,#000_70%)] group-hover:-translate-y-5 group-hover:scale-105">
        <FadeIn direction="up">
          <Image
            className="object-cover object-center h-full w-full"
            src={process.env.AVATAR_URL || defaultBgImages[1].image}
            alt="avatar image"
            width={300}
            height={200}
            priority // Load image immediately
            quality={100} // Adjust quality for optimization
            placeholder="blur" // Placeholder to improve perceived performance
            blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
          />
        </FadeIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "AI Integrations",
    description:
      "Generative UIs, LLMs, Transformers, Chatbots, Classification, and more.",
    href: `#/tags/ai`,
    cta: "Visit AI projects",
    className: "col-span-3 md:col-span-2",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <BlurIn duration={0.5} className="h-full">
          <Image
            className="object-cover object-center h-full w-full"
            src={process.env.AVATAR_URL || defaultBgImages[2].image}
            alt="avatar image"
            width={300}
            height={200}
            priority // Load image immediately
            quality={100} // Adjust quality for optimization
            placeholder="blur" // Placeholder to improve perceived performance
            blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
          />
        </BlurIn>
      </motion.div>
    ),
  },
  {
    Icon: "",
    name: "Seamless Deployments",
    description: "Push, build, deploy.",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/vercel`,
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_25%,#000_70%)] group-hover:scale-105">
        <BlurIn duration={0.5} className="h-full">
          <Image
            className="object-cover object-center h-full w-full"
            src={process.env.AVATAR_URL || defaultBgImages[3].image}
            alt="avatar image"
            width={300}
            height={200}
            priority // Load image immediately
            quality={100} // Adjust quality for optimization
            placeholder="blur" // Placeholder to improve perceived performance
            blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
          />
        </BlurIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Worldwide Reach",
    description:
      "Deploy to any region on earth. From remote servers, on-prem, in the cloud, or to the edge.",
    className: "col-span-3 md:col-span-3",
    href: `#/tags/vercel`,
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out  [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 group-hover:-translate-y-4">
        <BlurIn duration={0.5} className="h-full">
          <Image
            className="object-cover object-center h-full w-full"
            src={process.env.AVATAR_URL || defaultBgImages[4].image}
            alt="avatar image"
            width={300}
            height={200}
            priority // Load image immediately
            quality={100} // Adjust quality for optimization
            placeholder="blur" // Placeholder to improve perceived performance
            blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
          />
        </BlurIn>
      </div>
    ),
  },
  {
    Icon: "",
    name: "GitHub Stars",
    description: "Star this repository to show your support.",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.GITHUB_URL}/${process.env.REPO_NAME}`,
    cta: "Star repository",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] group-hover:scale-105 group-hover:-translate-y-4">
        <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 group-hover:-translate-y-2 transition-all duration-300">
          <a
            href={`${process.env.GITHUB_URL}/${process.env.REPO_NAME}`}
            className="flex items-center gap-2 border shadow-xl p-5 rounded-lg border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          >
            <BlurIn duration={0.5} className="h-full">
              <Image
                className="object-cover object-center h-full w-full"
                src={process.env.AVATAR_URL || defaultBgImages[5].image}
                alt="avatar image"
                width={120}
                height={90}
                priority // Load image immediately
                quality={100} // Adjust quality for optimization
                placeholder="blur" // Placeholder to improve perceived performance
                blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
              />
            </BlurIn>
          </a>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Project Showcase",
    description:
      "Here are a few of my recent projects, using the technologies mentioned above.",
    className: "col-span-3 md:col-span-2",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
    cta: "All projects",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 transition-all duration-300">
              <div className="flex items-center gap-2">
                <BlurIn duration={0.5} className="h-full">
                  <Image
                    className="object-cover object-center h-full w-full"
                    src={process.env.AVATAR_URL || defaultBgImages[6].image}
                    alt="avatar image"
                    width={300}
                    height={200}
                    priority // Load image immediately
                    quality={100} // Adjust quality for optimization
                    placeholder="blur" // Placeholder to improve perceived performance
                    blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
                  />
                </BlurIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "Daily Visitors",
    description:
      "Live visitor stats for this website, powered by Umami Analytics.",
    href: "https://umami.is",
    cta: "Umami",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
            <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
              <BlurIn duration={0.5} className="h-full">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={
                    process.env.AVATAR_URL || defaultBgImages[6].image}
                  alt="avatar image"
                  width={300}
                  height={200}
                  priority // Load image immediately
                  quality={100} // Adjust quality for optimization
                  placeholder="blur" // Placeholder to improve perceived performance
                  blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
                />
              </BlurIn>
            </div>
            <div className="sm:-translate-y-5"></div>
          </div>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/now`,
    cta: "Ideas",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[105%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <BlurIn duration={0.5} className="h-full">
              <Image
                className="object-cover object-center h-full w-full"
                src={
                  process.env.AVATAR_URL || defaultBgImages[7].image}
                alt="avatar image"
                width={300}
                height={200}
                priority // Load image immediately
                quality={100} // Adjust quality for optimization
                placeholder="blur" // Placeholder to improve perceived performance
                blurDataURL="data:image/svg+xml;base64,..." // Use a small base64-encoded placeholder image
              />
            </BlurIn>
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-3",
    href: "",
    cta: "",
    background: (
      <div
        id="contact-form"
        className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)]"
      >
        <div className="absolute inset-0 z-50 flex justify-center items-center gap-5 p-5">
          <div className="max-w-sm w-full flex flex-col gap-2">
            <div className="text-5xl md:text-6xl font-semibold text-neutral-700 dark:text-neutral-300 w-full flex justify-start">
              <BlurIn duration={0.5} className="h-full">
                Get in touch.
              </BlurIn>
            </div>
            <div className="w-full flex justify-center text-neutral-500 dark:text-neutral-400">
              Leave your email to get the conversation started. We&apos;ll be in
              touch soon.
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              *Your email will never be shared with anyone.
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    ),
  },
];
export function Bento() {
  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
