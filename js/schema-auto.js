// ================================================================
//  schema-auto.js - حقن الـ Schema تلقائياً لجميع الصفحات
//  (بدون الحاجة لتعديل init-page-root.js)
// ================================================================

(function() {
  'use strict';
  
  // إعدادات الموقع الأساسية (غيّرها إذا لزم)
  const BASE_URL = 'https://jabri-com.vercel.app';
  const AUTHOR_NAME = 'Abdulla Mohammed Nasser Al-Jabri';
  const ORG_NAME = 'واحة الجبري للبحث العلمي';
  const LOGO_URL = BASE_URL + '/image/Jabri-photo.webp';
  
  // تاريخ النشر الفعلي للأبحاث
  const PUBLISH_DATE = '2026-08-21';
  
  // 🗺️ خريطة روابط Zenodo (ضع روابطك الحقيقية هنا بدل الـ X)
  const pageZenodoMap = {
    '/theory-ar.html': 'https://zenodo.org/records/XXXXXXX',
    '/theory-en.html': 'https://zenodo.org/records/YYYYYYY',
    '/Page9.html': 'https://zenodo.org/records/ZZZZZZZ',
    '/Checkout.html': 'https://zenodo.org/records/AAAAAAA',
    // أضف باقي الصفحات هنا إن وجدت
  };
  
  function injectSchema() {
    // التحقق من عدم تكرار الحقن
    if (document.querySelector('script[data-schema-injected]')) return;
    
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentUrl = BASE_URL + '/' + currentPath;
    const today = new Date().toISOString().split('T')[0];
    
    // بناء الـ Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": "Jabri Z: From Riemann Zeros to Physical Reality",
      "description": "Unified theory connecting the Riemann Zeta zeros to the fundamental constants of physics via the Mother Function Z(x).",
      "author": {
        "@type": "Person",
        "name": AUTHOR_NAME,
        "affiliation": { "@type": "Organization", "name": ORG_NAME }
      },
      "publisher": {
        "@type": "Organization",
        "name": ORG_NAME,
        "logo": { "@type": "ImageObject", "url": LOGO_URL }
      },
      "datePublished": PUBLISH_DATE,
      "dateModified": today,
      "url": currentUrl,
      "inLanguage": document.documentElement.lang || 'ar',
      "keywords": ["Riemann Hypothesis", "Mother Function Z(x)", "Unified Theory", "Jabri Z", "Physics", "Mathematics"]
    };
    
    // إضافة رابط Zenodo من الخريطة
    const zenodoUrl = pageZenodoMap[currentPath];
    if (zenodoUrl) {
      schema.sameAs = zenodoUrl;
    }
    
    // حقن الكود في الـ Head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-injected', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    
    console.log('✅ Schema injected for:', currentPath);
  }
  
  // تشغيل الكود فور تحميل الصفحة
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSchema);
  } else {
    injectSchema();
  }
  
})();