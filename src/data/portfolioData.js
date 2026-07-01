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
    image: null, // akan di-generate
  },
  {
    id: 2,
    title: "Veil Dashboard",
    description:
      "Dashboard analitik real-time untuk monitoring data bisnis. Visualisasi data interaktif dengan Chart.js dan notifikasi live menggunakan WebSocket.",
    tags: ["React", "Node.js", "WebSocket", "Chart.js"],
    liveUrl: "https://example.com/veil-dashboard",
    githubUrl: "https://github.com/username/veil-dashboard",
    featured: true,
    image: null,
  },
  {
    id: 3,
    title: "Runic Blog CMS",
    description:
      "Content Management System custom dengan editor markdown, sistem kategori, komentar, dan panel admin yang intuitif.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    liveUrl: "https://example.com/runic-blog",
    githubUrl: "https://github.com/username/runic-blog",
    featured: false,
    image: null,
  },
  {
    id: 4,
    title: "Phantom Task Manager",
    description:
      "Aplikasi manajemen tugas dengan fitur drag-and-drop, kolaborasi tim real-time, dan notifikasi berbasis push notification.",
    tags: ["React", "Firebase", "Tailwind", "DnD Kit"],
    liveUrl: "https://example.com/phantom-tasks",
    githubUrl: "https://github.com/username/phantom-tasks",
    featured: false,
    image: null,
  },
  {
    id: 5,
    title: "Aether Weather",
    description:
      "Aplikasi cuaca minimalis dengan animasi latar yang menyesuaikan kondisi cuaca, forecast 7 hari, dan lokasi otomatis.",
    tags: ["React", "OpenWeather API", "Framer Motion"],
    liveUrl: "https://example.com/aether-weather",
    githubUrl: "https://github.com/username/aether-weather",
    featured: false,
    image: null,
  },
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Phantom Tech Studio",
    period: "2023 — Present",
    description:
      "Membangun dan memelihara aplikasi web skala besar menggunakan React dan Laravel. Berkolaborasi dengan tim desain untuk menghadirkan UI yang konsisten dan berperforma tinggi.",
    type: "work",
  },
  {
    id: 2,
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    period: "2022 — 2023",
    description:
      "Mengerjakan berbagai proyek freelance untuk klien dari berbagai industri. Spesialisasi di landing page, e-commerce, dan dashboard.",
    type: "work",
  },
  {
    id: 3,
    role: "S1 Teknik Informatika",
    company: "Universitas Nusantara",
    period: "2019 — 2023",
    description:
      "Menyelesaikan studi dengan fokus di Rekayasa Perangkat Lunak. Skripsi: Implementasi Machine Learning untuk Sistem Rekomendasi Produk.",
    type: "education",
  },
];

