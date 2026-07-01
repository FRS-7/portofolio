// ============================================================
// PORTFOLIO DATA — Edit sesuai informasi Anda
// ============================================================

export const personalInfo = {
  name: "Faris Manaf",
  title: "Full Stack Developer",
  subtitle: "Weaver of Code & Digital Realms",
  bio: "Seorang pengembang yang bersemangat dalam membangun pengalaman digital yang imersif dan berkesan. Dengan keahlian di frontend dan backend, saya mencipta solusi yang tidak hanya fungsional, tetapi juga memikat secara visual.",
  location: "Indonesia",
  email: "farismanaf7@gmail.com",
  cvFile: "/cv.pdf", // Ganti dengan nama file CV Anda di folder /public
  avatar: null, // Ganti dengan path foto Anda, contoh: "/photo.jpg"
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/FRS-7",
    icon: "GitBranch",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "Briefcase",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/This_Is7",
    icon: "Camera",
  },
];

export const stats = [
  { label: "Projects Completed", value: "24", suffix: "+" },
  { label: "Years Experience", value: "3", suffix: "+" },
  { label: "Technologies", value: "15", suffix: "+" },
  { label: "Clients Served", value: "12", suffix: "" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 88, color: "#61dafb" },
      { name: "JavaScript", level: 85, color: "#f7df1e" },
      { name: "HTML / CSS", level: 92, color: "#c9a84c" },
      { name: "Vue.js", level: 70, color: "#42b883" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel / PHP", level: 82, color: "#ff2d20" },
      { name: "Node.js", level: 75, color: "#6cc24a" },
      { name: "MySQL", level: 80, color: "#4479a1" },
      { name: "REST API", level: 85, color: "#c9a84c" },
    ],
  },
  {
    category: "Tools & Other",
    items: [
      { name: "Git / GitHub", level: 88, color: "#f05032" },
      { name: "Blender 3D", level: 65, color: "#e87d0d" },
      { name: "Figma", level: 72, color: "#a259ff" },
      { name: "Docker", level: 60, color: "#2496ed" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "SiPuskesmas",
    description:
      "Aplikasi Sistem Informasi Puskesmas berbasis web untuk membantu petugas kesehatan dalam mengelola data pasien, rekam medis, dan administrasi puskesmas. Dibangun dengan React.js",
    tags: ["React.js"],
    liveUrl: "https://sipuskesmas.vercel.app/",
    githubUrl: "https://github.com/FRS-7/SiPuskesmas",
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "Gallery 3D Web",
    description:
      "Website galeri berbasis 3D menggunakan Three.js",
    tags: ["React", "Three.js", "Blender 3D"],
    liveUrl: "https://gallery3d-web.vercel.app/",
    githubUrl: "https://github.com/FRS-7/Gallery3D",
    featured: true,
    image: null,
  },
  {
    id: 3,
    title: "Sistem Watermarking Berbasis Web Menggunakan Algoritma LSB ",
    description:
      "Sistem watermarking berbasis web menggunakan algoritma LSB (Least Significant Bit) berbasis seed untuk menyisipkan watermark ke dalam citra digital. Sistem ini memungkinkan pengguna untuk menyisipkan dan mengekstrak watermark dari citra digital.",
    tags: ["html", "css", "javascript"],
    liveUrl: "https://frs-7.github.io/watermarking/",
    githubUrl: "https://github.com/FRS-7/watermarking",
    featured: false,
    image: null,
  },
];

export const experience = [
  {
    id: 1,
    role: "Teknik Kendaraan Ringan Otomotif",
    company: "SMK Syafi'i Akrom Kota Pekalongan",
    period: "2019 - 2022",
    description:
      "Mempelajari teknik-teknik otomotif, termasuk mesin, kelistrikan, dan sistem transmisi.",
    type: "education",
  },
  {
    id: 2,
    role: "Mahasiswa",
    company: "Institut Teknologi dan Sains Nahdlatul Ulama Pekalongan",
    period: "2023 — Sekarang",
    description:
      "Mempelajari teknik-teknik informatika, termasuk pemrograman, basis data, dan sistem informasi.",
    type: "education",
  },
  {
    id: 3,
    role: "Magang di bidang Kebudayaan",
    company: "Dinas Pariwisata, Kebudayaan, Kepemudaan dan Olahraga Kota Pekalongan",
    period: "2026",
    description:
      "Membuat sistem watermarking berbasis seed untuk melindungi dokumen digital kebudayaan Kota Pekalongan.",
    type: "work",
  },
];

