import { Github, Linkedin, FileUser   } from 'lucide-react';

export default function IdentitySticker() {
  return (
    <div className="absolute top-[-10px] right-4 transform rotate-2 z-20 group scale-75 md:scale-100">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/30 backdrop-blur-sm rotate-2"></div>
      
      <div className="bg-yellow-200 text-black px-4 py-3 rounded shadow-lg border border-yellow-400 font-handwriting text-sm leading-tight">
        <h3 className="font-bold text-lg border-b border-black/20 mb-1">Le Tan Dat</h3>
        <p>Frontend Developer</p>
        <p className="text-xs text-gray-600 mt-1">+84 70 794 3426</p>
        <p className="text-xs text-gray-600">ldat0909@gmail.com</p>

        <div className="flex gap-2 mt-2">
            <a href="https://github.com/datle04" target="_blank" className="hover:text-retro-primary"><Github className='w-5 h-5' /></a>
            <a href="www.linkedin.com/in/datle-85a4b3322" target="_blank" className="hover:text-retro-primary"><Linkedin className='w-5 h-5'/></a>
            <a href="https://drive.google.com/file/d/1XoW5Q-Nk8NqIWqoaFmyl-5jk9vRzERMI/view?usp=drive_link" target="_blank" className="hover:text-retro-primary"><FileUser className='w-5 h-5'/></a>
        </div>
      </div>
    </div>
  );
}