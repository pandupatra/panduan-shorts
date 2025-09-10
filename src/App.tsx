import React, { useState } from 'react';
import { 
  Play, 
  Camera, 
  Edit, 
  Share2, 
  CheckCircle, 
  BookOpen, 
  Users, 
  Clock,
  Video,
  Lightbulb,
  Download,
  Menu,
  X,
  Monitor,
  Smartphone,
  Mic,
  Settings
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'beranda', label: 'Beranda', icon: BookOpen },
    { id: 'persiapan', label: 'Persiapan', icon: Settings },
    { id: 'peralatan', label: 'Peralatan', icon: Camera },
    { id: 'perekaman', label: 'Perekaman', icon: Video },
    { id: 'editing', label: 'Editing', icon: Edit },
    { id: 'publikasi', label: 'Publikasi', icon: Share2 },
    { id: 'tips', label: 'Tips & Trik', icon: Lightbulb }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Hemat Waktu',
      description: 'Panduan ringkas yang dapat dipelajari dalam 30 menit'
    },
    {
      icon: Users,
      title: 'Mudah Dipahami',
      description: 'Bahasa sederhana tanpa jargon teknis yang rumit'
    },
    {
      icon: CheckCircle,
      title: 'Langkah Praktis',
      description: 'Checklist dan template siap pakai untuk implementasi'
    },
    {
      icon: Download,
      title: 'Sumber Daya',
      description: 'Template, checklist, dan panduan yang dapat diunduh'
    }
  ];

  const equipment = [
    {
      category: 'Dasar',
      items: [
        { name: 'Smartphone dengan kamera HD', required: true },
        { name: 'Tripod smartphone atau penyangga', required: true },
        { name: 'Pencahayaan natural (dekat jendela)', required: true }
      ]
    },
    {
      category: 'Menengah',
      items: [
        { name: 'Ring light atau lampu LED', required: false },
        { name: 'Mikrofon eksternal (clip-on/wireless)', required: false },
        { name: 'Background sederhana atau green screen', required: false }
      ]
    },
    {
      category: 'Lanjutan',
      items: [
        { name: 'Kamera DSLR atau mirrorless', required: false },
        { name: 'Perangkat lunak editing premium', required: false },
        { name: 'Set pencahayaan profesional', required: false }
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Perencanaan Konten',
      description: 'Tentukan tujuan pembelajaran, target audiens, dan struktur video Anda',
      details: [
        'Identifikasi tujuan pembelajaran spesifik',
        'Pilih durasi video (3-10 menit optimal)',
        'Buat outline atau storyboard sederhana',
        'Siapkan materi dan contoh yang dibutuhkan'
      ]
    },
    {
      number: '02',
      title: 'Persiapan Teknis',
      description: 'Setup peralatan dan lingkungan perekaman yang optimal',
      details: [
        'Pilih lokasi dengan pencahayaan baik',
        'Pastikan audio jernih tanpa noise',
        'Atur background yang bersih dan tidak mengganggu',
        'Test peralatan sebelum mulai merekam'
      ]
    },
    {
      number: '03',
      title: 'Proses Perekaman',
      description: 'Rekam video dengan teknik yang tepat untuk hasil maksimal',
      details: [
        'Mulai dengan salam dan perkenalan singkat',
        'Bicara dengan jelas dan tidak terlalu cepat',
        'Gunakan gerakan tangan yang natural',
        'Buat jeda sejenak antar topik untuk editing'
      ]
    },
    {
      number: '04',
      title: 'Editing & Finalisasi',
      description: 'Edit video untuk menghasilkan konten yang menarik dan profesional',
      details: [
        'Potong bagian yang tidak perlu',
        'Tambahkan intro dan outro sederhana',
        'Insert teks atau grafik pendukung jika diperlukan',
        'Export dengan kualitas yang sesuai platform'
      ]
    }
  ];

  const tips = [
    {
      category: 'Konten',
      items: [
        'Buat hook menarik di 10 detik pertama',
        'Gunakan storytelling untuk engagement',
        'Sertakan call-to-action yang jelas',
        'Berikan ringkasan di akhir video'
      ]
    },
    {
      category: 'Teknis',
      items: [
        'Rekam dalam orientasi landscape untuk fleksibilitas',
        'Gunakan aturan sepertiga untuk komposisi',
        'Pastikan audio 60% lebih penting dari visual',
        'Export dalam format MP4 untuk kompatibilitas'
      ]
    },
    {
      category: 'Engagement',
      items: [
        'Ajukan pertanyaan untuk interaksi',
        'Gunakan contoh relevan dengan siswa',
        'Variasikan intonasi suara',
        'Sertakan humor ringan jika sesuai'
      ]
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'beranda':
        return (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center py-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Panduan Lengkap<br />
                <span className="text-blue-600">Video Pendek</span> untuk Guru
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Pelajari cara membuat video edukatif yang menarik dan efektif dengan peralatan sederhana. 
                Dari perencanaan hingga publikasi, semua ada di sini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveSection('persiapan')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Play size={20} />
                  Mulai Sekarang
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Unduh Panduan
                </button>
              </div>
            </section>

            {/* Features */}
            <section>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Start */}
            <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4 Langkah Mudah</h2>
                <p className="text-gray-600">Ikuti langkah-langkah berikut untuk membuat video pendek yang efektif</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.slice(0, 4).map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'persiapan':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Persiapan Video</h1>
              <p className="text-xl text-gray-600">Langkah pertama menuju video yang sukses</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Checklist Persiapan</h3>
                  <div className="space-y-4">
                    {[
                      'Tentukan tujuan pembelajaran spesifik',
                      'Identifikasi target audiens (kelas berapa)',
                      'Pilih durasi video (3-10 menit optimal)',
                      'Buat outline atau script sederhana',
                      'Siapkan materi visual pendukung',
                      'Pilih contoh atau studi kasus yang relevan'
                    ].map((item, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                        <span className="text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="text-orange-600" size={24} />
                    <h4 className="font-semibold text-orange-800">Tips Pro</h4>
                  </div>
                  <p className="text-orange-700">
                    Video 5-7 menit terbukti memiliki engagement terbaik untuk konten edukatif. 
                    Siswa dapat fokus penuh tanpa merasa bosan.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Template Perencanaan</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Topik/Mata Pelajaran</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Contoh: Sistem Pernapasan Manusia" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Kelas</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Pilih Kelas</option>
                      <option>Kelas 1-3 SD</option>
                      <option>Kelas 4-6 SD</option>
                      <option>Kelas 7-9 SMP</option>
                      <option>Kelas 10-12 SMA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Durasi Target</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>3-5 menit</option>
                      <option>5-7 menit</option>
                      <option>7-10 menit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tujuan Pembelajaran</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24" placeholder="Setelah menonton video ini, siswa dapat..."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'peralatan':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Peralatan yang Dibutuhkan</h1>
              <p className="text-xl text-gray-600">Mulai dari yang sederhana hingga profesional</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {equipment.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.category}</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${item.required ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                        <div>
                          <span className="text-gray-700">{item.name}</span>
                          {item.required && <span className="text-red-500 text-xs ml-1">*Wajib</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4">
                <Monitor className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Rekomendasi Budget</h4>
                  <div className="text-blue-700 space-y-1">
                    <p><strong>Pemula (Rp 200rb - 500rb):</strong> Smartphone + tripod + ring light dasar</p>
                    <p><strong>Menengah (Rp 500rb - 2jt):</strong> + Mikrofon wireless + lighting set</p>
                    <p><strong>Profesional (2jt+):</strong> + Kamera DSLR + software editing premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'perekaman':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Teknik Perekaman</h1>
              <p className="text-xl text-gray-600">Panduan lengkap untuk hasil video yang maksimal</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Setup Dasar</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Camera className="text-blue-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Posisi Kamera</h4>
                        <p className="text-gray-600 text-sm">Sejajar mata atau sedikit di atas, jarak 1-1.5 meter</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="text-yellow-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Pencahayaan</h4>
                        <p className="text-gray-600 text-sm">Cahaya dari depan, hindari backlight, gunakan cahaya natural</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mic className="text-green-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-900">Audio</h4>
                        <p className="text-gray-600 text-sm">Rekam di tempat sunyi, mikrofon 15-30cm dari mulut</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="text-green-600" size={24} />
                    <h4 className="font-semibold text-green-800">Aturan 3-2-1</h4>
                  </div>
                  <div className="text-green-700 space-y-1">
                    <p><strong>3</strong> kali tes audio sebelum mulai</p>
                    <p><strong>2</strong> kali cek framing dan fokus</p>
                    <p><strong>1</strong> take deep breath sebelum action!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Script Template</h3>
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Opening (10-15 detik)</h4>
                    <p className="text-gray-600">"Halo adik-adik, Ibu/Bapak [Nama]. Hari ini kita akan belajar tentang [Topik]. Di akhir video ini, kalian akan bisa [Tujuan Pembelajaran]."</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Konten Utama (60-70%)</h4>
                    <p className="text-gray-600">• Penjelasan konsep dengan contoh<br />• Visual atau demonstrasi<br />• Interaksi dengan pertanyaan</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Closing (15-20 detik)</h4>
                    <p className="text-gray-600">"Jadi kesimpulannya... [Ringkasan]. Coba kalian praktikkan di rumah ya! Sampai jumpa di video berikutnya!"</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Tips Berbicara</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bicara 20% lebih lambat dari biasanya</li>
                    <li>• Gunakan jeda untuk penekanan</li>
                    <li>• Variasikan intonasi suara</li>
                    <li>• Tersenyum saat berbicara</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'editing':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Editing Video</h1>
              <p className="text-xl text-gray-600">Ubah rekaman mentah menjadi video yang menarik</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Software Rekomendasi</h3>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Smartphone className="text-blue-600" size={20} />
                        <h4 className="font-semibold text-gray-900">Mobile (Gratis)</h4>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• CapCut - Mudah & lengkap</li>
                        <li>• InShot - Simple & cepat</li>
                        <li>• KineMaster - Fitur pro</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Monitor className="text-green-600" size={20} />
                        <h4 className="font-semibold text-gray-900">Desktop (Gratis)</h4>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• DaVinci Resolve - Profesional</li>
                        <li>• OpenShot - User friendly</li>
                        <li>• Shotcut - Ringan</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Edit className="text-orange-600" size={24} />
                    <h4 className="font-semibold text-orange-800">Workflow Editing</h4>
                  </div>
                  <ol className="text-orange-700 space-y-2 text-sm">
                    <li>1. Import dan organize footage</li>
                    <li>2. Rough cut - potong bagian tidak perlu</li>
                    <li>3. Fine cut - timing dan transisi</li>
                    <li>4. Color correction (opsional)</li>
                    <li>5. Audio mixing dan cleanup</li>
                    <li>6. Export dengan setting yang tepat</li>
                  </ol>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Elemen Penting</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Intro (3-5 detik)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Logo sekolah atau nama guru</li>
                      <li>• Judul topik</li>
                      <li>• Musik intro ringan (opsional)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Konten Utama</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lower third dengan nama dan mata pelajaran</li>
                      <li>• Teks poin-poin penting</li>
                      <li>• Transisi sederhana antar scene</li>
                      <li>• Background music volume 10-15%</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Outro (5-10 detik)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ringkasan atau call-to-action</li>
                      <li>• Subscribe/follow social media</li>
                      <li>• Teaser video berikutnya</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Setting Export</h4>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm">
                    <p><strong>Format:</strong> MP4 (H.264)</p>
                    <p><strong>Resolusi:</strong> 1080p (1920x1080)</p>
                    <p><strong>Frame Rate:</strong> 30fps</p>
                    <p><strong>Bitrate:</strong> 8-10 Mbps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'publikasi':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Publikasi & Distribusi</h1>
              <p className="text-xl text-gray-600">Bagikan video Anda ke platform yang tepat</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Play className="text-red-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">YouTube</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Jangkauan luas & SEO friendly</li>
                  <li>• Fitur playlist untuk organize</li>
                  <li>• Analytics detail</li>
                  <li>• Monetisasi (jika memenuhi syarat)</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Best for: Public content, channel building</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Google Classroom</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Integrasi dengan Google Workspace</li>
                  <li>• Private & aman untuk siswa</li>
                  <li>• Assignment tracking</li>
                  <li>• Notification otomatis</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Best for: Class assignments, private sharing</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Share2 className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">WhatsApp/Telegram</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Distribusi cepat ke grup kelas</li>
                  <li>• Instant feedback dari siswa</li>
                  <li>• File sharing mudah</li>
                  <li>• Offline viewing</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Best for: Quick sharing, group discussions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Optimasi untuk Setiap Platform</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-semibold text-gray-900">Platform</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Durasi Ideal</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Format</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Tips Khusus</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">YouTube</td>
                      <td className="p-3">5-10 menit</td>
                      <td className="p-3">16:9, 1080p</td>
                      <td className="p-3">Thumbnail menarik, deskripsi lengkap</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Instagram</td>
                      <td className="p-3">15-60 detik</td>
                      <td className="p-3">9:16, vertical</td>
                      <td className="p-3">Hook kuat di 3 detik pertama</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">TikTok</td>
                      <td className="p-3">15-30 detik</td>
                      <td className="p-3">9:16, vertical</td>
                      <td className="p-3">Trend audio, hashtag relevan</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">WhatsApp</td>
                      <td className="p-3">3-5 menit</td>
                      <td className="p-3">Compressed</td>
                      <td className="p-3">{'File size <16MB'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'tips':
        return (
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Tips & Trik Pro</h1>
              <p className="text-xl text-gray-600">Rahasia untuk video yang lebih engaging dan profesional</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {tips.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <p className="text-gray-700 text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Troubleshooting Umum</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Audio tidak sinkron dengan video</h4>
                      <p className="text-gray-600 text-sm">Matikan bluetooth, close aplikasi lain, gunakan audio recorder terpisah</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Video buram/tidak fokus</h4>
                      <p className="text-gray-600 text-sm">Bersihkan lensa, tap screen untuk fokus manual, cukup pencahayaan</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">File video terlalu besar</h4>
                      <p className="text-gray-600 text-sm">Gunakan resolusi 720p untuk sharing, compress sebelum upload</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Template Siap Pakai</h3>
                  <div className="space-y-3">
                    <button className="w-full p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Checklist Pre-Production</span>
                        <Download size={16} className="text-gray-400" />
                      </div>
                    </button>
                    <button className="w-full p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Script Template</span>
                        <Download size={16} className="text-gray-400" />
                      </div>
                    </button>
                    <button className="w-full p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Storyboard Template</span>
                        <Download size={16} className="text-gray-400" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Video className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-gray-900">VideoGuru</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 VideoGuru - Panduan Lengkap Membuat Video Pendek untuk Guru</p>
            <p className="text-sm mt-2">Dibuat dengan ❤️ untuk para pendidik Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;