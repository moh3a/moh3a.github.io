import { useSignal, useSignalEffect } from "@preact/signals";

export default function MySkills() {
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
  ];

  const idx = useSignal(0);
  useSignalEffect(() => {
    const intervalId = setInterval(() => {
      idx.value = idx.value < skills.length - 1 ? idx.value + 1 : 0;
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div class="my-16">
      <p>
        I am a quick learner and specialize in
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
