import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { CalendarDays, ChevronLeft, ChevronRight, Home, Monitor, Search, Sparkles } from 'lucide-react';
import { Button } from './components/ui/button';
import './styles.css';

type Course = { title: string; tags: string[]; classes: number; running: number; upcoming: number; accent: string; dark?: boolean };

const courses: Course[] = [
  { title: 'Generative AI & Prompt Engineering', tags: ['ML', 'Python', 'Gen AI', '+3 more'], classes: 52, running: 1, upcoming: 2, accent: '#E9EDFF' },
  { title: 'Advanced DSA with JavaScript', tags: ['DSA', 'JS', 'Arrays', '+4 more'], classes: 48, running: 2, upcoming: 1, accent: '#F0FFE8' },
  { title: 'Full Stack Backend APIs', tags: ['Node', 'SQL', 'APIs', '+3 more'], classes: 64, running: 1, upcoming: 3, accent: '#FFF8D7' },
  { title: 'Frontend React Mastery', tags: ['React', 'CSS', 'UI', '+2 more'], classes: 44, running: 3, upcoming: 2, accent: '#EEF2FF' },
];

const sections = ['Placement Preparation', 'DSA', 'AI', 'Backend', 'Frontend', 'Cloud & DevOps', 'Interview Readiness', 'Data Science'];

function cn(...x: (string | false | undefined)[]) { return x.filter(Boolean).join(' '); }

function Illustration({ big=false }: { big?: boolean }) {
  return <div className={cn('relative mx-auto grid place-items-center', big ? 'h-72 w-[420px]' : 'h-56 w-full')}>
    <div className="absolute h-28 w-52 rotate-[-18deg] rounded-[28px] bg-[#1845FF] opacity-90 shadow-2xl" />
    <div className="absolute h-24 w-48 rotate-[-18deg] translate-y-[-18px] rounded-[24px] bg-[#78F0C1]" />
    <div className="absolute h-28 w-24 translate-y-[-42px] rounded-[20px] border-4 border-white bg-gradient-to-br from-white to-[#CFE0FF] shadow-xl" />
    <div className="absolute h-16 w-16 translate-x-24 translate-y-[-86px] rounded-full bg-[#D9F3E2] text-center text-4xl shadow-lg">?</div>
    <div className="absolute h-20 w-20 -translate-x-24 translate-y-2 rounded-2xl bg-white/80 shadow-lg" />
  </div>;
}

function CourseCard({ course, compact=false }: { course: Course; compact?: boolean }) {
  return <motion.article whileHover={{ y: -8 }} className="group min-w-[360px] flex-1 overflow-hidden rounded-[32px] border border-[#D7E0F3] bg-white p-4 shadow-[0_10px_30px_rgba(16,34,77,0.05)] md:min-w-[410px]">
    <div className="grid h-80 place-items-center rounded-[24px]" style={{ background: course.accent }}><Illustration /></div>
    <div className="p-8">
      <h3 className={cn('font-bold leading-[1.1] text-[#060D24]', compact ? 'text-3xl' : 'text-[42px] xl:text-[54px]')}>{course.title}</h3>
      <div className="mt-5 flex flex-wrap gap-4 text-2xl text-[#667892]">{course.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="mt-6 flex items-center gap-3 text-2xl text-[#060D24]"><Monitor className="h-7 w-7 text-[#1845FF]" />{course.classes} Classes</div>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-2xl"><span className="font-semibold">Batches:</span><span className="rounded-full bg-[#D9F3E2] px-4 py-2 text-lg font-semibold">{course.running} Running</span><span className="rounded-full bg-[#F6EDB8] px-4 py-2 text-lg font-semibold">{course.upcoming} Upcoming</span></div>
      <motion.div initial={{ opacity: 0, y: 8 }} whileHover={{ opacity: 1, y: 0 }} className="mt-8 opacity-0 transition group-hover:opacity-100"><Button className="h-[84px] w-full bg-[linear-gradient(90deg,#173EFF,#238BFF)] text-[32px] text-white">Enroll Now →</Button></motion.div>
    </div>
  </motion.article>;
}

function Carousel({ items = courses, compact=false }: { items?: Course[]; compact?: boolean }) {
  return <div className="relative"><div className="flex snap-x gap-8 overflow-x-auto pb-4 [scrollbar-width:none]">{items.map((c,i)=><div className="snap-start" key={c.title+i}><CourseCard course={c} compact={compact}/></div>)}</div><button className="absolute -left-5 top-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow"><ChevronLeft/></button><button className="absolute -right-5 top-1/2 grid h-12 w-12 place-items-center rounded-full bg-white shadow"><ChevronRight/></button></div>;
}

function App(){return <div className="min-h-screen bg-white text-[#060D24]"><aside className="fixed inset-y-0 left-0 z-10 hidden w-64 bg-[#07152D] p-8 text-white lg:block"><div className="mb-14 text-2xl font-bold">NXTWAVE</div>{['Dashboard','Live Classes','Practice','Jobs','Mentors','Settings'].map((n,i)=><div className={cn('mb-3 flex items-center gap-3 rounded-2xl px-4 py-4 text-lg',i===1&&'bg-[#1A2A55] text-white')} key={n}><Home className="h-5"/>{n}</div>)}</aside><main className="lg:ml-64"><header className="sticky top-0 z-20 flex h-16 items-center justify-end gap-6 border-b bg-white/90 px-10 backdrop-blur"><Search/><CalendarDays/><div className="h-10 w-10 rounded-full bg-[#FFC34D]"/></header><div className="mx-auto max-w-[1580px] space-y-16 p-8 xl:p-12"><section className="relative flex h-[280px] overflow-hidden rounded-[32px] bg-[#10224D] p-[72px] text-white"><div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_80%_30%,#238BFF,transparent_28%),repeating-radial-gradient(circle_at_80%_60%,transparent_0_55px,#8FA4FF_57px_58px)]"/><div className="relative z-10"><h1 className="text-[64px] font-bold leading-none">Live Classes</h1><p className="mt-8 text-[32px] font-medium">Join at any stage <span className="mx-5">&gt;&gt;</span> Learn with mentors <span className="mx-5">&gt;&gt;</span> Ask doubts live</p></div><div className="absolute right-16 top-0 hidden lg:block"><Illustration big/></div></section><Section title="My Enrolled Courses"><Carousel items={courses.slice(0,3)} compact/></Section><Section title="For Your Journey" badge="Recommended"><Carousel compact/></Section><section className="rounded-[32px] bg-[#10224D] p-10 text-white"><div className="mb-8 flex gap-4"><div className="flex h-16 flex-1 items-center gap-3 rounded-2xl bg-white px-6 text-[#667892]"><Search/>Search live classes</div>{['All','Running','Upcoming','Free','Premium'].map((c,i)=><button className={cn('rounded-full px-8 text-xl',i===0?'bg-white text-[#10224D]':'bg-[#20345F]')}>{c}</button>)}</div><div className="grid grid-cols-2 gap-4 md:grid-cols-5">{['Placement','DSA','AI','Backend','Frontend'].map(x=><div className="rounded-2xl bg-[#1A2A55] p-5 text-center text-xl">{x}</div>)}</div></section>{sections.map((s,i)=><Section key={s} title={s} badge={i%2?'New':'Live now'}><Carousel items={courses.map((c,j)=>({...c,title:j%2?c.title:`${s}: ${c.title}`}))} compact/></Section>)}<section className="relative overflow-hidden rounded-[32px] bg-[#10224D] p-16 text-white"><h2 className="max-w-xl text-5xl font-bold leading-tight text-[#B9FF89]">One Class. One Topic. No Long Commitment.</h2><p className="mt-4 text-2xl">Pick focused sessions built for your learning journey.</p><div className="absolute right-20 top-8"><CourseCard course={courses[0]} compact/></div></section><footer className="py-16 text-center text-[#667892]">© 2026 NxtWave Live Classes • Built for focused learning</footer></div></main></div>}
function Section({title,badge,children}:{title:string;badge?:string;children:React.ReactNode}){return <section><div className="mb-6 flex items-center gap-3"><Sparkles className="text-[#1845FF]"/><h2 className="text-3xl font-bold">{title}</h2>{badge&&<span className="rounded-full bg-[#D9F3E2] px-3 py-1 text-sm font-semibold text-[#060D24]">{badge}</span>}<a className="ml-auto text-[#1845FF]">View all</a></div>{children}</section>}

createRoot(document.getElementById('root')!).render(<App />);
