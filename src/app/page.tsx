import Image from "next/image";
import { Phone, Mail, Github, Linkedin } from "lucide-react";


const images = [
  { src: "/project/login.png", caption: "Login Screen" },
  { src: "/project/home.png", caption: "Dashboard" },
  { src: "/project/membership.png", caption: "Membership Info" },
  { src: "/project/voucher.png", caption: "Voucher Page" },
  { src: "/project/register.png", caption: "Register" }
];


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
        <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center p-10 relative overflow-hidden">
          <div className="text-sm opacity-90 mb-1">Universitas Amikom Yogyakarta</div>
          <div className="text-xs opacity-80 mb-4">(Mahasiswa - Semester 10)</div>
          <h1 className="text-3xl font-bold mb-2 drop-shadow">Muhammad Bill Fedro Saputra</h1>
          <div className="text-base opacity-90">Portfolio Submission for</div>
          <div className="text-xl font-semibold text-yellow-400">Apple Developer Academy</div>
        </header>

        <section className="bg-gray-100 p-8 border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-800" />
              <span>082314495433</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-800" />
              <a href="mailto:muhammadbillfedros@gmail.com" className="text-blue-500 hover:underline">
                muhammadbillfedros@gmail.com
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-2">
              <Github className="w-4 h-4 text-blue-800" />
              <a href="https://github.com" className="text-blue-500 hover:underline" target="_blank">
                github.com
              </a>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-800" />
              <a href="https://www.linkedin.com/in/muhammad-bill-fedro-saputra-66636a281/" className="text-blue-500 hover:underline" target="_blank">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>

        <section className="p-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-indigo-500 text-white px-4 py-1 rounded-full font-semibold mb-3">Project 1 of 5</div>
            <h2 className="text-2xl font-bold text-blue-900">Featured Project</h2>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-blue-800 mb-10 shadow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-xs uppercase text-gray-500 mb-1">Year</div>
                <div className="font-semibold">2025</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500 mb-1">Role</div>
                <div className="font-semibold">Fullstack Developer</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500 mb-1">Tech Stack</div>
                <div className="font-semibold">Laravel, Next.js, TypeScript</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-blue-800 mb-3">Pembuatan Aplikasi Loyalty B2B</h3>
            <p className="text-sm text-gray-700 text-justify mb-6">
              Aplikasi Loyalty B2B ini dibuat untuk memudahkan dan menguntungkan mitra bisnis melalui sistem poin,
              voucher, dan riwayat transaksi. Proyek dimulai dengan riset kebutuhan mitra, dan dikembangkan
              menggunakan Laravel untuk backend serta Next.js + TypeScript untuk frontend.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {images.map((img, idx) => (
  <div key={idx} className="bg-white rounded-xl p-3 shadow hover:shadow-md transition">
    <div className="bg-gray-100 aspect-[9/16] rounded-md overflow-hidden mb-3">
      <Image
        src={img.src}
        alt={img.caption}
        width={300}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>
    <p className="text-xs text-gray-600">{img.caption}</p>
  </div>
))}
            </div>

            <a
              href="#"
              className="inline-block mt-6 bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600"
            >
              🔗 View Project (localhost)
            </a>
          </div>

          <div className="text-center text-sm text-gray-500 bg-gray-50 py-6 rounded-xl">
            {/* <p>Projects 2-5 Placeholder – add more project cards here</p> */}
          </div>
        </section>

        <footer className="bg-blue-800 text-white text-center text-sm py-5">
          <p>Portfolio for Apple Developer Academy</p>
          <p>© 2025 Muhammad Bill Fedro Saputra - Universitas Amikom Yogyakarta</p>
        </footer>
      </div>
    </div>
  );
}
