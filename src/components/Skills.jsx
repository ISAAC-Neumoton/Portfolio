import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  BarChart3, 
  PieChart, 
  CheckCircle2, 
  GitBranch, 
  Container, 
  Bot, 
  Brain, 
  LayoutDashboard, 
  FileSpreadsheet, 
  TrendingUp, 
  DollarSign, 
  Share2, 
  Users 
} from 'lucide-react';

const ICON_MAP = {
  python: Code2,
  postgresql: Database,
  javascript: Terminal,
  code: Code2,
  microsoftsqlserver: Database,
  database: Database,
  'check-circle': CheckCircle2,
  scikitlearn: Cpu,
  openai: Bot,
  huggingface: Brain,
  'bar-chart': BarChart3,
  powerbi: BarChart3,
  microsoftexcel: FileSpreadsheet,
  tableau: PieChart,
  layout: LayoutDashboard,
  github: GitBranch,
  docker: Container,
  visualstudiocode: Terminal,
  cpu: Cpu,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  'share-2': Share2,
  users: Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-[#021024]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#C1E8FF] mb-4">
          Skills & Tools
        </h2>
        <p className="text-[#7DA0CA] max-w-lg mb-12">
          Tools, frameworks, and domain expertise I use to engineer end-to-end data pipelines and models.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="p-2 bg-transparent border-none"
            >
              {/* Bolder, Whiter Header */}
              <h3 className="text-sm font-display font-extrabold tracking-widest text-white uppercase mb-6 drop-shadow-sm">
                {group.category}
              </h3>

              {/* Vertical Timeline Structure */}
              <div className="relative pl-2 space-y-5">
                {/* Connecting vertical line passing through tool icons */}
                <div 
                  className="absolute left-[17px] top-3 bottom-3 w-[2px] bg-[#5483B3]/40" 
                  aria-hidden="true" 
                />

                {group.skills.map((skill) => {
                  const IconComponent = ICON_MAP[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="relative flex items-center gap-3.5 group">
                      
                      {/* Node Circle */}
                      <div className="relative z-10 w-8 h-8 rounded-full bg-[#021024] border-2 border-[#5483B3] flex items-center justify-center shrink-0 group-hover:border-[#C1E8FF] group-hover:scale-110 transition-all shadow-md">
                        <IconComponent className="text-[#5483B3] group-hover:text-[#C1E8FF] transition-colors" size={14} />
                      </div>

                      {/* Tool Name Pill */}
                      <div className="px-3 py-1.5 rounded-lg bg-[#052659]/40 border border-[#48729A]/30 text-xs font-medium text-[#C1E8FF] group-hover:border-[#5483B3]/80 group-hover:bg-[#052659]/70 transition-all">
                        {skill.name}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}