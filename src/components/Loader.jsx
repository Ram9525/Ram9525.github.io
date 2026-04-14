import { useState, useEffect } from 'react';
import { Terminal, Code2, Zap, CheckCircle2 } from 'lucide-react';
import logo from '../assets/Ram_bro.jpg';

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);

    const buildSteps = [
        { text: 'Initializing portfolio...', duration: 400, icon: Terminal },
        { text: 'Loading components...', duration: 500, icon: Code2 },
        { text: 'Compiling animations...', duration: 600, icon: Zap },
        { text: 'Rendering 3D elements...', duration: 500, icon: Code2 },
        { text: 'Optimizing experience...', duration: 400, icon: Zap },
        { text: 'Ready to launch!', duration: 300, icon: CheckCircle2 },
    ];

    useEffect(() => {
        let stepTimer;
        let progressTimer;

        const runStep = (stepIndex) => {
            if (stepIndex >= buildSteps.length) {
                setProgress(100);
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 500);
                return;
            }

            setCurrentStep(stepIndex);
            const step = buildSteps[stepIndex];
            const startProgress = (stepIndex / buildSteps.length) * 100;
            const endProgress = ((stepIndex + 1) / buildSteps.length) * 100;
            const progressIncrement = (endProgress - startProgress) / (step.duration / 16);

            let currentProgress = startProgress;
            progressTimer = setInterval(() => {
                currentProgress += progressIncrement;
                if (currentProgress >= endProgress) {
                    currentProgress = endProgress;
                    clearInterval(progressTimer);
                }
                setProgress(currentProgress);
            }, 16);

            stepTimer = setTimeout(() => {
                setCompletedSteps(prev => [...prev, stepIndex]);
                clearInterval(progressTimer);
                runStep(stepIndex + 1);
            }, step.duration);
        };

        runStep(0);

        return () => {
            clearTimeout(stepTimer);
            clearInterval(progressTimer);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }} />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-2xl w-full px-8">
                {/* Logo/Name */}
                <div className="text-center mb-12">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500 p-[3px] shadow-2xl animate-pulse">
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                            <img src={logo} alt="Ram Kumar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Terminal-style build log */}
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 shadow-2xl mb-6">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs text-gray-400 ml-2">portfolio.build</span>
                    </div>

                    <div className="space-y-3 font-mono text-sm">
                        {buildSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isCompleted = completedSteps.includes(index);
                            const isCurrent = currentStep === index;

                            return (
                                <div
                                    key={index}
                                    className={`flex items-center gap-3 transition-all duration-300 ${isCompleted ? 'text-green-400' :
                                        isCurrent ? 'text-cyan-400' :
                                            'text-gray-600'
                                        }`}
                                >
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                    ) : isCurrent ? (
                                        <Icon className="w-4 h-4 flex-shrink-0 animate-pulse" />
                                    ) : (
                                        <div className="w-4 h-4 flex-shrink-0 rounded-full border-2 border-current opacity-30" />
                                    )}
                                    <span className={isCurrent ? 'animate-pulse' : ''}>
                                        {step.text}
                                    </span>
                                    {isCurrent && (
                                        <span className="ml-auto text-cyan-400 animate-pulse">▊</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-300 ease-out relative"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>Building...</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                </div>

                {/* Tagline */}
                <p className="text-center mt-8 text-sm text-gray-500 animate-pulse">
                    Crafting your experience...
                </p>
            </div>

            <style jsx>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
}
