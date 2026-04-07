// import React, { useEffect, useMemo, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FileCode2, FolderTree, TerminalSquare } from 'lucide-react';

// const editorFiles = [
//   {
//     name: 'App.tsx',
//     language: 'tsx',
//     lines: [
//       "import React from 'react';",
//       "import { Hero } from './components/Hero';",
//       '',
//       'const developer = {',
//       '  name: "Vishal Singh",',
//       '  role: "Frontend Developer",',
//       '  location: "Pune, India",',
//       '  stack: ["React", "Node.js", "Tailwind", "Framer Motion"],',
//       '  focus: "Building polished, scalable UI experiences",',
//       '  status: "Available for opportunities",',
//       '};',
//       '',
//       'export default function App() {',
//       '  return <Hero developer={developer} />;',
//       '}',
//     ],
//   },
//   {
//     name: 'about.ts',
//     language: 'ts',
//     lines: [
//       'export const about = {',
//       '  experience: "2+ years",',
//       '  specialty: "Frontend engineering",',
//       '  strengths: [',
//       '    "Responsive UI",',
//       '    "Reusable components",',
//       '    "API integration",',
//       '    "Animation and interaction design",',
//       '  ],',
//       '};',
//     ],
//   },
//   {
//     name: 'skills.json',
//     language: 'json',
//     lines: [
//       '{',
//       '  "frontend": ["React", "JavaScript", "Tailwind CSS"],',
//       '  "backend": ["Node.js", "Express"],',
//       '  "tools": ["Git", "GitHub", "Postman", "Figma"],',
//       '  "learning": ["Advanced animation", "Scalable architecture"]',
//       '}',
//     ],
//   },
// ];

// function useTypedLines(lines, speed = 24, pause = 1200) {
//   const fullText = useMemo(() => lines.join('\n'), [lines]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timeout;

//     if (count < fullText.length) {
//       timeout = setTimeout(() => setCount((prev) => prev + 1), speed);
//     } else {
//       timeout = setTimeout(() => setCount(0), pause);
//     }

//     return () => clearTimeout(timeout);
//   }, [count, fullText, speed, pause]);

//   return fullText.slice(0, count);
// }

// function CodeLine({ line, index }) {
//   const getTokenizedLine = (text) => {
//     if (!text) return [{ text: ' ', className: 'text-transparent' }];

//     if (text.startsWith('import')) {
//       return [
//         { text: 'import', className: 'text-purple-400' },
//         { text: text.slice(6), className: 'text-slate-300' },
//       ];
//     }

//     if (
//       text.startsWith('export') ||
//       text.startsWith('const') ||
//       text.startsWith('return') ||
//       text.startsWith('function')
//     ) {
//       const firstWord = text.split(' ')[0];
//       return [
//         { text: firstWord, className: 'text-purple-400' },
//         { text: text.slice(firstWord.length), className: 'text-slate-300' },
//       ];
//     }

//     return [{ text, className: 'text-slate-300' }];
//   };

//   const tokens = getTokenizedLine(line);

//   return (
//     <div className="group flex min-h-[24px]">
//       <div className="w-10 shrink-0 select-none pr-4 text-right text-xs text-slate-500">
//         {index + 1}
//       </div>
//       <div className="flex-1 whitespace-pre-wrap break-words text-sm leading-6">
//         {tokens.map((token, i) => (
//           <span key={i} className={token.className}>
//             {token.text}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function CodeEditorPreview() {
//   const [activeTab, setActiveTab] = useState(0);
//   const activeFile = editorFiles[activeTab];
//   const typedText = useTypedLines(activeFile.lines, 18, 1600);
//   const visibleLines = typedText.split('\n');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTab((prev) => (prev + 1) % editorFiles.length);
//     }, 7000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40, scale: 0.98 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.7, delay: 0.5 }}
//       className="relative z-50 mx-auto w-full max-w-2xl"
//     >
//       <div className="absolute -inset-6 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_35%)] blur-2xl" />

//       <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0b1120]/85 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
//         {/* top bar */}
//         <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
//           <div className="flex items-center gap-2">
//             <span className="h-3 w-3 rounded-full bg-red-400/90" />
//             <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
//             <span className="h-3 w-3 rounded-full bg-green-400/90" />
//           </div>

//           <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">
//             portfolio workspace
//           </div>

//           <div className="flex items-center gap-2 text-slate-500">
//             <FolderTree className="h-4 w-4" />
//             <TerminalSquare className="h-4 w-4" />
//           </div>
//         </div>

//         {/* tabs */}
//         <div className="flex flex-wrap gap-2 border-b border-white/10 bg-[#0f172a]/80 px-3 py-2">
//           {editorFiles.map((file, index) => (
//             <button
//               key={file.name}
//               onClick={() => setActiveTab(index)}
//               className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs transition-all duration-300 ${
//                 activeTab === index
//                   ? 'bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20'
//                   : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
//               }`}
//             >
//               <FileCode2 className="h-3.5 w-3.5" />
//               {file.name}
//             </button>
//           ))}
//         </div>

//         {/* code body */}
//         <div className="grid min-h-[420px] grid-cols-[56px_1fr] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]">
//           <div className="border-r border-white/10 bg-white/[0.02]" />

//           <div className="relative overflow-hidden p-4 sm:p-5">
//             <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_24px] opacity-30" />

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeFile.name}
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -12 }}
//                 transition={{ duration: 0.35 }}
//                 className="relative z-10"
//               >
//                 {visibleLines.map((line, index) => (
//                   <CodeLine key={`${activeFile.name}-${index}`} line={line} index={index} />
//                 ))}

//                 <div className="mt-1 ml-10 h-5 w-2 animate-pulse rounded-sm bg-cyan-400/90" />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* footer */}
//         <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-4 py-2 font-mono text-[11px] text-slate-400">
//           <span>{activeFile.language}</span>
//           <span>React • Framer Motion • Tailwind</span>
//           <span className="text-emerald-400">Ready</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode2, FolderTree, TerminalSquare } from 'lucide-react';

const editorFiles = [
  {
    name: 'App.tsx',
    language: 'tsx',
    lines: [
      "import React from 'react';",
      "import { Hero } from './components/Hero';",
      '',
      'const developer = {',
      '  name: "Vishal Singh",',
      '  role: "Frontend Developer",',
      '  location: "Pune, India",',
      '  stack: ["React", "Node.js", "Tailwind", "Framer Motion"],',
      '  focus: "Building polished, scalable UI experiences",',
      '  status: "Available for opportunities",',
      '};',
      '',
      'export default function App() {',
      '  return <Hero developer={developer} />;',
      '}',
    ],
  },
  {
    name: 'about.ts',
    language: 'ts',
    lines: [
      'export const about = {',
      '  experience: "2+ years",',
      '  specialty: "Frontend engineering",',
      '  strengths: [',
      '    "Responsive UI",',
      '    "Reusable components",',
      '    "API integration",',
      '    "Animation and interaction design",',
      '  ],',
      '};',
    ],
  },
  {
    name: 'skills.json',
    language: 'json',
    lines: [
      '{',
      '  "frontend": ["React", "JavaScript", "Tailwind CSS"],',
      '  "backend": ["Node.js", "Express"],',
      '  "tools": ["Git", "GitHub", "Postman", "Figma"],',
      '  "learning": ["Advanced animation", "Scalable architecture"]',
      '}',
    ],
  },
];

function useTypedLines(lines, speed = 24, pause = 1200) {
  const fullText = useMemo(() => lines.join('\n'), [lines]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout;

    if (count < fullText.length) {
      timeout = setTimeout(() => setCount((prev) => prev + 1), speed);
    } else {
      timeout = setTimeout(() => setCount(0), pause);
    }

    return () => clearTimeout(timeout);
  }, [count, fullText, speed, pause]);

  return fullText.slice(0, count);
}

function CodeLine({ line, index }) {
  const getTokenizedLine = (text) => {
    if (!text) return [{ text: ' ', className: 'text-transparent' }];

    if (text.startsWith('import')) {
      return [
        { text: 'import', className: 'text-purple-400' },
        { text: text.slice(6), className: 'text-slate-300' },
      ];
    }

    if (
      text.startsWith('export') ||
      text.startsWith('const') ||
      text.startsWith('return') ||
      text.startsWith('function')
    ) {
      const firstWord = text.split(' ')[0];
      return [
        { text: firstWord, className: 'text-purple-400' },
        { text: text.slice(firstWord.length), className: 'text-slate-300' },
      ];
    }

    return [{ text, className: 'text-slate-300' }];
  };

  const tokens = getTokenizedLine(line);

  return (
    <div className="group flex min-h-[20px] sm:min-h-[22px]">
      <div className="w-8 shrink-0 select-none pr-2 text-right text-[10px] sm:text-xs text-slate-500">
        {index + 1}
      </div>
      <div className="flex-1 min-w-0 whitespace-pre-wrap break-words text-[11px] sm:text-xs lg:text-sm leading-5">
        {tokens.map((token, i) => (
          <span key={i} className={token.className}>
            {token.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CodeEditorPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const activeFile = editorFiles[activeTab];
  const typedText = useTypedLines(activeFile.lines, 18, 1600);
  const visibleLines = typedText.split('\n');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % editorFiles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative z-50 mx-auto w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_35%)] blur-2xl scale-110" />

      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-500/20 bg-[#0b1120]/85 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3 sm:px-4 py-2.5 sm:py-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-400/90" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400/90" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-400/90" />
          </div>

          <div className="max-w-[130px] sm:max-w-none truncate rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] text-slate-400">
            portfolio workspace
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-500">
            <FolderTree className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <TerminalSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 border-b border-white/10 bg-[#0f172a]/80 px-2.5 sm:px-3 py-2">
          {editorFiles.map((file, index) => (
            <button
              key={file.name}
              onClick={() => setActiveTab(index)}
              className={`inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 font-mono text-[10px] sm:text-xs transition-all duration-300 ${
                activeTab === index
                  ? 'bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              <FileCode2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              <span className="truncate">{file.name}</span>
            </button>
          ))}
        </div>

        <div className="grid min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[48px_minmax(0,1fr)] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]">
          <div className="border-r border-white/10 bg-white/[0.02]" />

          <div className="relative overflow-hidden p-3 sm:p-4">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_20px] sm:bg-[length:100%_22px] lg:bg-[length:100%_24px] opacity-30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFile.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                {visibleLines.map((line, index) => (
                  <CodeLine key={`${activeFile.name}-${index}`} line={line} index={index} />
                ))}

                <div className="mt-1 ml-8 h-4 sm:h-5 w-1.5 sm:w-2 animate-pulse rounded-sm bg-cyan-400/90" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-white/10 bg-black/20 px-3 sm:px-4 py-2 font-mono text-[10px] sm:text-[11px] text-slate-400">
          <span className="truncate">{activeFile.language}</span>
          <span className="hidden sm:inline truncate">React • Framer Motion • Tailwind</span>
          <span className="text-emerald-400 shrink-0">Ready</span>
        </div>
      </div>
    </motion.div>
  );
}