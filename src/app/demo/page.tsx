'use client';

import { EmailInput } from '@/components/ui/emailInput';
import { useState } from 'react';

export default function DemoPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* SVG filters for blur */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
            <feColorMatrix type="saturate" values="1.5"/>
          </filter>
        </defs>
      </svg>
      
      {/* Beautiful gradient background for glass effect demonstration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4facfe] via-[#00f2fe] to-[#43e97b] z-0 opacity-60"></div>
      
      {/* Decorative shapes with blur and animation */}
      <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0] rounded-full top-[10vh] left-[10vw] z-0 blur-md bg-float-1"></div>
      <div className="absolute w-[200px] h-[200px] bg-gradient-to-b from-[#d4a4eb] to-[#a265d6] rounded-full bottom-[15vh] right-[15vw] z-0 blur-md bg-float-2"></div>
      <div className="absolute w-[180px] h-[180px] bg-gradient-to-r from-[#a8edea] to-[#fed6e3] rounded-full top-[50vh] left-[60vw] z-0 blur-md bg-float-3"></div>
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] rounded-full bottom-[30vh] left-[5vw] z-0 blur-lg bg-float-1"></div>
      
      {/* Additional blurred elements for depth */}
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#ff9a9e] to-[#fecfef] rounded-full top-[60vh] left-[5vw] z-0 blur-xl opacity-60"></div>
      <div className="absolute w-[150px] h-[150px] bg-gradient-to-b from-[#a8edea] to-[#fed6e3] rounded-full top-[20vh] right-[5vw] z-0 blur-lg opacity-70"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 p-8">
        <h1 className="font-qedysans text-4xl text-white mb-8 text-center drop-shadow-lg">
          Демонстрация компонента EmailInput
        </h1>
        
        <div className="space-y-8">
          {/* Basic example */}
          <div className="space-y-4">
            <h2 className="font-jetbrains-mono text-xl text-white uppercase drop-shadow-md">
              Базовый пример (Desktop)
            </h2>
            <div className="w-full max-w-md">
              <EmailInput variant="desktop" />
            </div>
          </div>

          {/* Mobile version */}
          <div className="space-y-4">
            <h2 className="font-jetbrains-mono text-xl text-white uppercase drop-shadow-md">
              Мобильная версия
            </h2>
            <div className="w-full max-w-md">
              <EmailInput variant="mobile" />
            </div>
          </div>

          {/* Interactive example */}
          <div className="space-y-4">
            <h2 className="font-jetbrains-mono text-xl text-white uppercase drop-shadow-md">
              Интерактивный пример
            </h2>
            <div className="w-full max-w-md">
              <EmailInput 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onButtonClick={handleEmailSubmit}
                placeholder="your email"
                variant="desktop"
              />
            </div>
            {submitted && (
              <p className="font-raleway-medium text-green-300 drop-shadow-sm">
                Email успешно отправлен: {email}
              </p>
            )}
          </div>

          {/* Custom glassmorphism style */}
          <div className="space-y-4">
            <h2 className="font-jetbrains-mono text-xl text-white uppercase drop-shadow-md">
              Эффект стекла (Glassmorphism)
            </h2>
            <div className="w-full max-w-lg">
              <EmailInput 
                placeholder="your email"
                onButtonClick={() => console.log('Button clicked')}
                variant="desktop"
              />
            </div>
            <p className="font-raleway-medium text-white/90 text-sm drop-shadow-sm">
              Продвинутый эффект стекла: двойная тень (внутренняя + внешняя), backdrop-blur-md, прозрачная граница
            </p>
          </div>

          {/* Strong glass effect */}
          <div className="space-y-4">
            <h2 className="font-jetbrains-mono text-xl text-white uppercase drop-shadow-md">
              Сильный эффект стекла
            </h2>
            <div className="w-full max-w-lg">
              <EmailInput 
                placeholder="strong glass effect"
                onButtonClick={() => console.log('Strong glass clicked')}
                className="bg-[rgba(255,251,249,0.15)] backdrop-blur-md border border-[rgba(255,251,249,0.3)] shadow-2xl"
                variant="desktop"
              />
            </div>
            <p className="font-raleway-medium text-white/90 text-sm drop-shadow-sm">
              Более выраженный эффект стекла с увеличенной прозрачностью и размытием
            </p>
          </div>

          {/* Component code */}
          <div className="space-y-4">
            <h2 className="font-jetbrains-mono text-xl text-white uppercase drop-shadow-md">
              Код компонента
            </h2>
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 text-white p-4 rounded-lg overflow-x-auto shadow-lg">
              <pre className="font-jetbrains-mono text-sm">
{`import { EmailInput } from '@/components/ui/emailInput';
import { useState } from 'react';

export function MyComponent() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = () => {
    console.log('Email submitted:', email);
  };

  return (
    <EmailInput 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onButtonClick={handleSubmit}
      placeholder="your email"
      className="w-full max-w-md"
    />
  );
}

/* Advanced glass effect includes:
 * - Double shadow: 0 0 0 2px rgba(255,255,255,0.6), 0 16px 32px rgba(0,0,0,0.12)
 * - Blur: backdrop-filter: blur(12px)
 * - Transparency: background: rgba(255,255,255,0.08)
 * - Transparent border: border: 2px solid transparent
 * - Enhanced hover effects
 */`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
