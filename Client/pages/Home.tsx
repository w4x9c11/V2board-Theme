import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
    return (
        <div className="pt-0 md:pt-16 relative">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative">
                    <div className="text-center max-w-4xl mx-auto relative">
                        <div
                            className="absolute -right-[30%] top-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none hidden md:block"
                            style={{ zIndex: 1 }}
                        >
                        </div>

                        <div className="relative" style={{ zIndex: 2 }}>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                便宜机场 - 高性能的代理服务
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8">
                                稳定、快速、安全的网络加速服务
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/plans"
                                    className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    查看套餐
                                </Link>
                                <Link
                                    to="/help"
                                    className="w-full md:w-auto px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                >
                                    使用教程
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 md:py-20 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">高性能服务</h3>
                            <p className="text-gray-600">提供稳定快速的全球网络连接服务</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">安全可靠</h3>
                            <p className="text-gray-600">企业级安全防护，数据加密传输</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">简单易用</h3>
                            <p className="text-gray-600">一键部署，快速配置，专业技术支持</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home