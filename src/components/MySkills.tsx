import { useSignal, useSignalEffect } from "@preact/signals";
import { useTranslations } from "../i18n/utils";

interface MySkillsProps {
  lang: "en" | "fr" | "ar";
}

export default function MySkills({ lang }: MySkillsProps) {
  const skills = [
    {
      gradient: "from-pink-500 to-violet-500",
      value: "Full-stack web development",
    },
    {
      gradient: "from-violet-500 to-cyan-500",
      value: "Front-end web development",
    },
    {
      gradient: "from-cyan-500 to-emerald-500",
      value: "Node.js back-end development",
    },
    {
      gradient: "from-amber-500 to-pink-500",
      value: "Website and landing page design",
    },
  ] as const;

  const idx = useSignal(0);
  useSignalEffect(() => {
    const intervalId = setInterval(() => {
      idx.value = idx.value < skills.length - 1 ? idx.value + 1 : 0;
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const t = useTranslations(lang);

  return (
    <div class="my-16">
      <p>
        {t("home.sell")}
        <br />
        <span
          class={`bg-clip-text font-bold text-transparent bg-gradient-to-r ${
            skills[idx.value]?.gradient
          } `}
        >
          {skills[idx.value]?.value}
        </span>
      </p>
    </div>
  );
}
