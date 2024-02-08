import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';



export default function Home() {
  return (
<main className="flex min-h-screen flex-col p-6 bg-slate-950	">
  <h1 className="text-4xl font-extrabold  tracking-tight sm:text-5xl text-white	">Unlock Your Career Potential with Interview Mentor AI</h1>
  <p
      className={`${lusitana.className} mt-6 text-xl text-white `}
    >
      Introducing Interview Mentor AI, your personalized interview companion powered by the advanced GPT-4 Turbo. Supercharge your job preparation as our AI conducts tailored interviews based on your resume or job preferences. Receive invaluable feedback, refine your responses, and boost your confidence for that dream job. Say goodbye to generic advice—embrace a smarter, more tailored approach with Interview Mentor AI.
    </p>
    <Image
        src="/main-desktop.png"
        width={787}
        height={532}
        className="hidden md:block"
        alt="Screenshot of the dashboard project "
      />
</main>
  );
}
