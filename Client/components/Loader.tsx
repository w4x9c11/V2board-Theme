import { FC, useEffect, useState } from 'react'

interface LoaderProps {
    onLoadComplete: () => void;
}

const Loader: FC<LoaderProps> = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 1500
        const interval = 10
        const steps = duration / interval
        const increment = 100 / steps

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment
                if (next >= 100) {
                    clearInterval(timer)
                    setTimeout(() => {
                        onLoadComplete()
                    }, 0)
                    return 100
                }
                return next
            })
        }, interval)

        return () => clearInterval(timer)
    }, [onLoadComplete])

    return (
        <>
            {/* 动态模糊遮罩 - 排除导航栏和页脚 */}
            <div
                className="fixed left-0 right-0 backdrop-blur-xl bg-white/30 transition-all duration-300"
                style={{
                    top: '64px', // 导航栏高度
                    bottom: '60px', // 页脚高度
                    zIndex: 40
                }}
            />

            {/* 加载动画容器 */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 50 }}>
                <div className="relative">
                    {/* 外部光晕效果 */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />

                    {/* 主容器 */}
                    <div className="relative w-32 h-32 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center">
                        {/* 火箭图标 */}
                        <img
                            src="/loading.gif"
                            alt="loading"
                            className="w-16 h-16 drop-shadow-lg"
                        />

                        {/* 环形进度条 */}
                        <svg
                            className="absolute inset-0 w-full h-full -rotate-90"
                            viewBox="0 0 100 100"
                        >
                            {/* 未加载部分 - 亮紫色 */}
                            <circle
                                className="text-violet-400"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="none"
                                r="46"
                                cx="50"
                                cy="50"
                            />
                            {/* 已加载部分 - 亮绿色 */}
                            <circle
                                className="text-green-400 transition-all duration-300 ease-in-out"
                                strokeWidth="3"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="none"
                                r="46"
                                cx="50"
                                cy="50"
                                style={{
                                    strokeDasharray: `${2 * Math.PI * 46}`,
                                    strokeDashoffset: `${2 * Math.PI * 46 * (1 - progress / 100)}`,
                                }}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader