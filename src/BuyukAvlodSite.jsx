import React from 'react'

export default function BuyukAvlodSite() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Buyuk Avlod
      </h1>
      <p className="max-w-2xl text-gray-700 text-lg">
        A youth initiative uniting students and changemakers across Central Asia.
        Built with <span className="font-semibold text-blue-600">React</span> + <span className="font-semibold text-teal-600">Tailwind CSS</span>.
      </p>

      <a
        href="https://instagram.com/buyukavlod"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow us on Instagram
      </a>
    </div>
  )
}
