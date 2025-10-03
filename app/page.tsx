import Link from 'next/link';

export default function Home() {
  // 攝影作品資料
  const photos = [
    {
      id: 'portrait-session',
      title: '人像攝影系列',
      description: '捕捉真實情感與個性光輝',
      image: 'https://picsum.photos/800/600?random=1',
      dimensions: '800x600',
      category: '人像攝影'
    },
    {
      id: 'landscape-morning',
      title: '晨光山水',
      description: '清晨第一道光線的溫柔擁抱',
      image: 'https://picsum.photos/600/800?random=2',
      dimensions: '600x800',
      category: '風景攝影'
    },
    {
      id: 'urban-architecture',
      title: '都市建築藝術',
      description: '現代建築與光影的完美結合',
      image: 'https://picsum.photos/1200/800?random=3',
      dimensions: '1200x800',
      category: '建築攝影'
    },
    {
      id: 'nature-details',
      title: '自然細節特寫',
      description: '微觀世界中的驚人發現',
      image: 'https://picsum.photos/800/1000?random=4',
      dimensions: '800x1000',
      category: '微距攝影'
    },
    {
      id: 'street-life',
      title: '街頭生活剪影',
      description: '捕捉城市脈動與人文故事',
      image: 'https://picsum.photos/1000/600?random=5',
      dimensions: '1000x600',
      category: '街頭攝影'
    },
    {
      id: 'product-showcase',
      title: '產品商業攝影',
      description: '展現產品質感與品牌價值',
      image: 'https://picsum.photos/600/400?random=6',
      dimensions: '600x400',
      category: '商業攝影'
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center parallax-hero">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            OpenLens
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            捕捉瞬間，透過鏡頭講述故事
          </p>
          <Link
            href="#gallery"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            查看作品集
          </Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </section>

      {/* Gallery Section with Parallax */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">攝影作品集</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                id={photo.id}
                className={`group relative overflow-hidden rounded-lg bg-gray-800 parallax-item`}
                style={{
                  aspectRatio: photo.dimensions.includes('x')
                    ? `${photo.dimensions.split('x')[0]} / ${photo.dimensions.split('x')[1]}`
                    : '1'
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* 圖片資訊覆蓋層 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-between p-6">
                  {/* 頂部資訊 */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm text-gray-300 mb-2">
                      <span className="bg-blue-600 px-2 py-1 rounded text-xs mr-2">
                        {photo.category}
                      </span>
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                        {photo.dimensions}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                    <p className="text-sm text-gray-300">{photo.description}</p>
                  </div>

                  {/* 底部按鈕 */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => {
                        // 由於使用 Picsum 範例圖片，提供說明
                        alert(`這是範例圖片 (${photo.dimensions})\n\n類別：${photo.category}\n標題：${photo.title}\n\n請替換為您的實際攝影作品！`);
                      }}
                      className="flex-1 bg-white text-black px-3 py-2 rounded font-semibold text-sm hover:bg-gray-200 transition-colors"
                    >
                      下載原圖
                    </button>
                    <button
                      onClick={() => {
                        // 複製分享連結到剪貼簿
                        const shareUrl = `${window.location.origin}${window.location.pathname}#${photo.id}`;
                        navigator.clipboard.writeText(shareUrl);
                        alert('分享連結已複製到剪貼簿！');
                      }}
                      className="px-3 py-2 bg-gray-700 text-white rounded font-semibold text-sm hover:bg-gray-600 transition-colors"
                    >
                      分享
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className="py-20 px-4 bg-gray-900 parallax-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">關於我</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            熱衷於捕捉真實時刻並創作與觀眾產生共鳴的視覺敘事。
            專精於人像攝影、風景攝影和商業攝影。
          </p>
        </div>
      </section>

      {/* Contact Section with Parallax */}
      <section className="py-20 px-4 parallax-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            準備好捕捉你的故事了嗎？聯繫我們以獲取攝影服務。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@openlens.com"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              聯繫我
            </a>
            <a
              href="#gallery"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              查看作品集
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .parallax-hero {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }

        .parallax-section {
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }

        .parallax-item {
          transition: transform 0.3s ease;
        }

        .parallax-item:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </main>
  );
}
