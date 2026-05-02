(function () {
  'use strict';

  const CAMBODIA_KEYWORDS = [
    'Cambodia',
    'Campuchia',
    'Cambodian',
    'Kampuchea',
    'Kampuchea Krom',
    'Phnom Penh',
    'Siem Reap',
    'Battambang',
    'Sihanoukville',
    'Preah Sihanouk',
    'Kampong Cham',
    'Kampong Chhnang',
    'Kampong Speu',
    'Kampot',
    'Kep',
    'Koh Kong',
    'Kratie',
    'Mondulkiri',
    'Oddar Meanchey',
    'Pailin',
    'Preah Vihear',
    'Pursat',
    'Ratanakiri',
    'Stung Treng',
    'Svay Rieng',
    'Takeo',
    'Tbong Khmum',
    'Banteay Meanchey',
    'Poipet',
  ];

  const VIETNAM_KEYWORDS = [
    'Vietnam',
    'Viet Nam',
    'Việt Nam',
      'Vietnamese',
    'Hanoi',
    'Ha Noi',
    'Hà Nội',
    'Ho Chi Minh',
    'Saigon',
    'Da Nang',
    'Đà Nẵng',
    'Hai Phong',
    'Hải Phòng',
    'Can Tho',
    'Cần Thơ',
    'Nha Trang',
    'Hue',
    'Huế',
    'Bien Hoa',
    'Biên Hòa',
    'Vung Tau',
    'Vũng Tàu',
    'Quy Nhon',
    'Quy Nhơn',
    'Long Xuyen',
    'Long Xuyên',
    'Thai Nguyen',
    'Thái Nguyên',
    'Thanh Hoa',
    'Thanh Hóa',
    'Rach Gia',
    'Rạch Giá',
    'Cam Ranh',
    'Cam Ranh',
    'Cao Lanh',
    'Cao Lãnh',
    'My Tho',
    'Mỹ Tho',
    'Da Lat',
    'Đà Lạt',
    'Bac Lieu',
    'Bạc Liêu',
    'Dong Hoi',
    'Đồng Hới',
    'Pleiku',
    'Buon Ma Thuot',
    'Buôn Ma Thuột',
    'Vinh',
    'Nam Dinh',
    'Nam Định',
    'Bien Hoa',
    'Bien Hoa',
    'Thai Binh',
    'Thái Bình',
    'Phan Thiet',
    'Phan Thiết',
    'Tuy Hoa',
    'Tuy Hòa',
    'Bac Giang',
    'Bắc Giang',
    'Bac Ninh',
    'Bắc Ninh',
    'Bac Kan',
    'Bắc Kạn',
    'Cao Bang',
    'Cao Bằng',
    'Dien Bien',
    'Điện Biên',
    'Dong Ha',
    'Đông Hà',
    'Ha Giang',
    'Hà Giang',
    'Ha Long',
    'Hạ Long',
    'Ha Tinh',
    'Hà Tĩnh',
    'Hau Giang',
    'Hậu Giang',
    'Hoa Binh',
    'Hòa Bình',
    'Hung Yen',
    'Hưng Yên',
    'Khanh Hoa',
    'Khánh Hòa',
    'Kon Tum',
    'Lai Chau',
    'Lai Châu',
    'Lam Dong',
    'Lâm Đồng',
    'Lang Son',
    'Lạng Sơn',
    'Lao Cai',
    'Lào Cai',
    'Nghe An',
    'Nghệ An',
    'Ninh Binh',
    'Ninh Bình',
    'Ninh Thuan',
    'Ninh Thuận',
    'Phu Tho',
    'Phú Thọ',
    'Phu Yen',
    'Phú Yên',
    'Quang Binh',
    'Quảng Bình',
    'Quang Nam',
    'Quảng Nam',
    'Quang Ngai',
    'Quảng Ngãi',
    'Quang Ninh',
    'Quảng Ninh',
    'Quang Tri',
    'Quảng Trị',
    'Soc Trang',
    'Sóc Trăng',
    'Son La',
    'Sơn La',
    'Tay Ninh',
    'Tây Ninh',
    'Thai Nguyen',
    'Thái Nguyên',
    'Thua Thien Hue',
    'Thừa Thiên Huế',
    'Tien Giang',
    'Tiền Giang',
    'Tra Vinh',
    'Trà Vinh',
    'Tuyen Quang',
    'Tuyên Quang',
    'Vinh Long',
    'Vĩnh Long',
    'Vinh Phuc',
    'Vĩnh Phúc',
    'Yen Bai',
    'Yên Bái',
    'An Giang',
    'Ben Tre',
    'Bến Tre',
    'Binh Duong',
    'Bình Dương',
    'Binh Dinh',
    'Bình Định',
    'Binh Phuoc',
    'Bình Phước',
    'Binh Thuan',
    'Bình Thuận',
    'Ca Mau',
    'Cà Mau',
    'Dak Lak',
    'Đắk Lắk',
    'Dak Nong',
    'Đắk Nông',
    'Dong Nai',
    'Đồng Nai',
    'Dong Thap',
    'Đồng Tháp',
    'Gia Lai',
    'Kien Giang',
    'Kiên Giang',
    'Lam Dong',
    'Lâm Đồng',
  ];

  const CHECKED_PAGES = new Set();
  let bannerShown = false;
  let bodyPaddingBeforeWarning = '';

  const TRANSPARENCY_CONTEXT_KEYWORDS = [
    'page transparency',
    'about_profile_transparency',
    'page_transparency',
    'page managers',
    'people who manage this page',
    'primary country/region location',
    'country/region location',
    'country/region',
    'managed from',
    'manages this page',
    'transparency',
    'tính minh bạch của trang',
    'người quản lý trang',
    'quản lý trang',
    'quốc gia/khu vực',
    'vị trí quốc gia/khu vực',
  ];

  function isPageUrl(url) {
    const pagePatterns = [
      /facebook\.com\/profile\.php\?id=\d+/i,
      /facebook\.com\/[^\/]+\/about/i,
      /facebook\.com\/[^\/]+\/transparency/i,
      /facebook\.com\/[^\/]+\/about_profile_transparency/i,
      /facebook\.com\/pages\//i,
    ];

    for (const pattern of pagePatterns) {
      if (pattern.test(url)) return true;
    }

    if (url.match(/facebook\.com\/[^\/]+$/) && !url.includes('/profile.php') && !url.includes('/me') && !url.includes('/friends') && !url.includes('/photos') && !url.includes('/posts') && !url.includes('/videos') && !url.includes('/reel') && !url.includes('/live') && !url.includes('/groups') && !url.includes('/marketplace') && !url.includes('/watch') && !url.includes('/events') && !url.includes('/search')) {
      return true;
    }

    return false;
  }

  function containsCambodia(text) {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    for (const keyword of CAMBODIA_KEYWORDS) {
      if (lowerText.includes(keyword.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  function containsVietnam(text) {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    for (const keyword of VIETNAM_KEYWORDS) {
      if (lowerText.includes(keyword.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  function hasTransparencyContext(text) {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    return TRANSPARENCY_CONTEXT_KEYWORDS.some((keyword) => lowerText.includes(keyword.toLowerCase()));
  }

  function getTextWindow(text, keyword, radius) {
    const lowerText = text.toLowerCase();
    const lowerKeyword = keyword.toLowerCase();
    const index = lowerText.indexOf(lowerKeyword);

    if (index === -1) return '';

    const start = Math.max(0, index - radius);
    const end = Math.min(text.length, index + keyword.length + radius);
    return text.slice(start, end);
  }

  function findLocationEvidence(text, locationKeywords) {
    for (const keyword of locationKeywords) {
      if (!containsKeyword(text, keyword)) continue;

      const contextWindow = getTextWindow(text, keyword, 900);
      if (hasTransparencyContext(contextWindow)) {
        return { keyword, context: contextWindow };
      }
    }

    return null;
  }

  function containsKeyword(text, keyword) {
    if (!text || !keyword) return false;
    return text.toLowerCase().includes(keyword.toLowerCase());
  }

  function cleanupWarningUi() {
    document.querySelectorAll('.fb-scam-banner, .fb-scam-badge').forEach((el) => el.remove());
    document.querySelectorAll('.fb-scam-page-warning').forEach((el) => {
      el.classList.remove('fb-scam-page-warning');
    });

    document.body.style.paddingTop = bodyPaddingBeforeWarning;
    bannerShown = false;
  }

  function decodeFacebookText(text) {
    if (!text) return '';

    return text
      .replace(/\\u0025/g, '%')
      .replace(/\\u0026/g, '&')
      .replace(/\\u003C/g, '<')
      .replace(/\\u003E/g, '>')
      .replace(/\\u002F/g, '/')
      .replace(/\\\//g, '/')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }

  function extractJsonFromScripts() {
    const results = [];
    const scripts = document.querySelectorAll('script[type="application/json"], script[data-content-payload]');

    scripts.forEach((script) => {
      try {
        const text = script.textContent || '';
        if (text.length > 100 && text.length < 500000) {
          results.push(text);
        }
      } catch (e) {
        // ignore
      }
    });

    const allScripts = document.querySelectorAll('script');
    allScripts.forEach((script) => {
      try {
        const text = script.textContent || '';
        if (
          (text.includes('page_country') ||
            text.includes('page_location') ||
            text.includes('managed_from') ||
            text.includes('page_managers') ||
            text.includes('page_transparency') ||
            text.includes('Country/Region') ||
            text.includes('Country of')) &&
          text.length > 100 &&
          text.length < 500000
        ) {
          results.push(text);
        }
      } catch (e) {
        // ignore
      }
    });

    return results;
  }

  function extractTextFromDOM() {
    const textParts = [];

    const transparencyElements = document.querySelectorAll(
      '[class*="transparency"], [class*="about"], [class*="page_info"], [class*="pageLabel"]'
    );
    transparencyElements.forEach((el) => {
      textParts.push(el.textContent || '');
    });

    const spans = document.querySelectorAll('span, div, a, p, label');
    spans.forEach((el) => {
      const text = el.textContent || '';
      if (
        (text.includes('Country') ||
          text.includes('Page managers') ||
          text.includes('managed') ||
          text.includes('Location') ||
          text.includes('Campuchia') ||
          text.includes('Cambodia') ||
          text.includes('Vietnam')) &&
        text.length < 500
      ) {
        textParts.push(text);
      }
    });

    return textParts;
  }

  function parsePageInfo(text) {
    const locations = [];
    let hasCambodia = false;
    let hasVietnam = false;

    try {
      const countryRegex = /(?:country|Country|location|Location|Region)[:\s"']*([^"',}\]]+)/gi;
      let match;
      while ((match = countryRegex.exec(text)) !== null) {
        const value = match[1].trim();
        if (value) {
          locations.push(value);
          if (containsCambodia(value)) hasCambodia = true;
          if (containsVietnam(value)) hasVietnam = true;
        }
      }

      for (const keyword of CAMBODIA_KEYWORDS) {
        if (text.includes(keyword)) {
          hasCambodia = true;
          locations.push(keyword);
        }
      }

      for (const keyword of VIETNAM_KEYWORDS) {
        if (text.includes(keyword)) {
          hasVietnam = true;
          locations.push(keyword);
        }
      }
    } catch (e) {
      // ignore
    }

    return { hasCambodia, hasVietnam, locations };
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getCurrentPageName() {
    const heading = document.querySelector('h1');
    if (heading && heading.textContent.trim()) {
      return heading.textContent.trim();
    }

    const title = document.title.replace(/\s*\|\s*Facebook\s*$/i, '').trim();
    return title || extractPageId(window.location.href) || 'Unknown Facebook page';
  }

  function getCurrentPageUrl() {
    return window.location.href.split('#')[0];
  }

  function normalizeEvidenceContext(context) {
    return String(context || '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 220);
  }

  function findAnyLocationEvidence(text, locationKeywords, source) {
    for (const keyword of locationKeywords) {
      if (!containsKeyword(text, keyword)) continue;

      return {
        keyword,
        source,
        context: getTextWindow(text, keyword, 120),
      };
    }

    return null;
  }

  function findVietnameseManagerLocationEvidence(text, source) {
    const normalizedText = String(text || '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
    const hasManagerLocationLabel =
      normalizedText.includes('vị trí quốc gia/khu vực chính của những người quản lý trang này là') ||
      normalizedText.includes('vi tri quoc gia/khu vuc chinh cua nhung nguoi quan ly trang nay la');

    if (!hasManagerLocationLabel || !containsCambodia(text)) return null;

    return {
      keyword: 'Cambodia',
      source,
      context: getTextWindow(text, 'Cambodia', 180) || text,
    };
  }

  function formatEvidenceDetails(details) {
    const keyword = escapeHtml(details && details.keyword ? details.keyword : 'Cambodia');
    const source = escapeHtml(details && details.source ? details.source : 'Page Transparency');
    const context = escapeHtml(normalizeEvidenceContext(details && details.context));

    return {
      keyword,
      source,
      context,
    };
  }

  function showScamBanner(pageName, details) {
    if (bannerShown) return;
    bannerShown = true;

    const existingBanner = document.querySelector('.fb-scam-banner');
    if (existingBanner) existingBanner.remove();

    const banner = document.createElement('div');
    banner.className = 'fb-scam-banner';
    const displayPageName = escapeHtml(pageName && pageName !== 'Unknown' ? pageName : getCurrentPageName());
    const displayPageUrl = escapeHtml(getCurrentPageUrl());
    const evidence = formatEvidenceDetails(details);
    banner.innerHTML = `
      <span class="fb-scam-icon">⚠️</span>
      <div class="fb-scam-text">
        <span class="fb-scam-main">⚠️ SCAM WARNING ⚠️</span>
        <span class="fb-scam-detail">This page is managed from Cambodia — High Risk of Scam</span>
        <span class="fb-scam-detail" style="font-size: 12px; margin-top: 4px;">Trang này được quản lý từ Campuchia — Nguy cơ lừa đảo cao</span>
        <span class="fb-scam-detail fb-scam-page-name">Page: ${displayPageName}</span>
        <span class="fb-scam-detail fb-scam-page-url">URL: ${displayPageUrl}</span>
        <span class="fb-scam-detail fb-scam-reason">Lý do: phát hiện từ khóa "${evidence.keyword}" trong ${evidence.source}</span>
        <span class="fb-scam-detail fb-scam-context">Ngữ cảnh: ${evidence.context || 'Không có ngữ cảnh chi tiết'}</span>
      </div>
      <button class="fb-scam-close" type="button">✕</button>
    `;

    document.body.prepend(banner);
    banner.querySelector('.fb-scam-close').addEventListener('click', cleanupWarningUi);

    const bodyStyle = document.body.style;
    bodyPaddingBeforeWarning = bodyStyle.paddingTop || '';
    bodyStyle.paddingTop = '180px';

    const pageContainer =
      document.querySelector('[role="main"]') ||
      document.querySelector('#mount_0_0') ||
      document.querySelector('[class*="x1n2onr6"]') ||
      document.querySelector('div[aria-label]');

    if (pageContainer) {
      pageContainer.classList.add('fb-scam-page-warning');
    }
  }

  function showSafeBadge(pageName) {
    const existingBadge = document.querySelector('.fb-scam-badge');
    if (existingBadge) return;

    const badge = document.createElement('div');
    badge.className = 'fb-scam-badge';
    badge.style.background = '#00aa00';
    badge.textContent = '✓ Vietnam - Safe';
    badge.style.position = 'fixed';
    badge.style.top = '10px';
    badge.style.right = '10px';
    badge.style.zIndex = '999999';

    document.body.appendChild(badge);

    setTimeout(() => {
      if (badge.parentElement) badge.remove();
    }, 5000);
  }

  function checkPage() {
    const url = window.location.href;

    const pageId = extractPageId(url);
    if (CHECKED_PAGES.has(pageId)) return;

    CHECKED_PAGES.add(pageId);

    setTimeout(() => {
      performCheck(url);
    }, 1500);

    setTimeout(() => {
      performCheck(url);
    }, 4000);
  }

  function extractPageId(url) {
    const profileMatch = url.match(/facebook\.com\/profile\.php\?id=(\d+)/i);
    if (profileMatch) return profileMatch[1];

    const match = url.match(/facebook\.com\/([^\/\?]+)/);
    return match ? match[1] : url;
  }

  function buildTransparencyUrls(url) {
    const urls = [];
    const profileMatch = url.match(/facebook\.com\/profile\.php\?id=(\d+)/i);

    if (profileMatch) {
      urls.push(`https://www.facebook.com/profile.php?id=${profileMatch[1]}&sk=about_profile_transparency`);
      return urls;
    }

    const pageMatch = url.match(/facebook\.com\/([^\/\?#]+)/i);
    if (pageMatch && !['profile.php', 'groups', 'marketplace', 'watch', 'events', 'search'].includes(pageMatch[1])) {
      urls.push(`https://www.facebook.com/${pageMatch[1]}/about_profile_transparency`);
      urls.push(`https://www.facebook.com/${pageMatch[1]}/transparency`);
    }

    return urls;
  }

  async function fetchTransparencyText(url) {
    const urls = buildTransparencyUrls(url);
    const results = [];

    for (const transparencyUrl of urls) {
      try {
        const response = await fetch(transparencyUrl, { credentials: 'include' });
        if (!response.ok) continue;
        const text = await response.text();
        if (text && text.length > 100) results.push(decodeFacebookText(text).slice(0, 800000));
      } catch (e) {
        // Facebook may block some background fetches; DOM scanning still runs.
      }
    }

    return results;
  }

  async function performCheck(url) {
    if (!isPageUrl(url)) return;

    const allText = [];
    const fetchedText = [];

    const jsonContents = extractJsonFromScripts();
    jsonContents.forEach((content) => allText.push(content));

    const domTexts = extractTextFromDOM();
    domTexts.forEach((text) => allText.push(decodeFacebookText(text)));

    if (!url.includes('about_profile_transparency') && !url.includes('transparency')) {
      const fetchedTexts = await fetchTransparencyText(url);
      fetchedTexts.forEach((text) => {
        fetchedText.push(text);
        allText.push(text);
      });
    }

    const fullText = decodeFacebookText(allText.join(' '));
    const transparencyText = fetchedText.join(' ');

    const fetchedManagerLocationEvidence = findVietnameseManagerLocationEvidence(
      transparencyText,
      'dòng vị trí quốc gia/khu vực của người quản lý Trang'
    );
    if (fetchedManagerLocationEvidence) {
      showScamBanner('Unknown', fetchedManagerLocationEvidence);
      return;
    }

    const visibleManagerLocationEvidence = findVietnameseManagerLocationEvidence(
      fullText,
      'dòng vị trí quốc gia/khu vực của người quản lý Trang'
    );
    if (url.includes('about_profile_transparency') && visibleManagerLocationEvidence) {
      showScamBanner('Unknown', visibleManagerLocationEvidence);
      return;
    }

    if (transparencyText && containsCambodia(transparencyText)) {
      const evidence = findAnyLocationEvidence(transparencyText, CAMBODIA_KEYWORDS, 'fetched transparency page');
      showScamBanner('Unknown', evidence || { keyword: 'Cambodia', source: 'fetched transparency page', context: transparencyText });
      return;
    }

    if (url.includes('about_profile_transparency') && containsCambodia(fullText)) {
      const evidence = findAnyLocationEvidence(fullText, CAMBODIA_KEYWORDS, 'visible transparency page');
      showScamBanner('Unknown', evidence || { keyword: 'Cambodia', source: 'visible transparency page', context: fullText });
      return;
    }

    // Avoid false positives from regular posts/comments that mention Cambodia.
    if (!hasTransparencyContext(fullText)) return;

    const cambodiaEvidence = findLocationEvidence(fullText, CAMBODIA_KEYWORDS);
    if (cambodiaEvidence) {
      cambodiaEvidence.source = 'page transparency context';
      showScamBanner('Unknown', cambodiaEvidence);
      return;
    }

    const vietnamEvidence = findLocationEvidence(fullText, VIETNAM_KEYWORDS);
    if (vietnamEvidence) {
      showSafeBadge('Unknown');
    }
  }

  function init() {
    if (window.location.href.includes('facebook.com')) {
      checkPage();
    }

    let lastUrl = window.location.href;
    const observer = new MutationObserver(() => {
      const currentUrl = window.location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        cleanupWarningUi();
        CHECKED_PAGES.clear();
        checkPage();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('popstate', () => {
      cleanupWarningUi();
      CHECKED_PAGES.clear();
      setTimeout(checkPage, 500);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
