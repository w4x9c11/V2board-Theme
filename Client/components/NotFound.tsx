import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <h2 className="mt-6 text-9xl font-extrabold text-blue-600">404</h2>
                    <p className="mt-2 text-3xl font-bold text-gray-900">页面未找到</p>
                    <p className="mt-2 text-sm text-gray-600">
                        抱歉，您访问的页面不存在或已被移除
                    </p>
                </div>
                <div className="mt-8 space-y-4">
                    <Link
                        to="/"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        返回首页
                    </Link>
                    <Link
                        to="/help"
                        className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        查看帮助文档
                    </Link>
                    <div className="text-sm text-gray-500">
                        如果您认为这是一个错误，请
                        <Link to="/contact" className="text-blue-600 hover:text-blue-500 ml-1">
                            联系我们
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound