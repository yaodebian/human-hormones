/**
 * Language switcher for the hormone education website
 * This is just a template to demonstrate how the language switching might work
 * In a real implementation, this would be integrated with Next.js internationalization
 */

document.addEventListener('DOMContentLoaded', function() {
  const languageSelect = document.getElementById('language-select');
  
  if (languageSelect) {
    // Set the initial language based on URL or localStorage
    const currentLang = getCurrentLanguage();
    languageSelect.value = currentLang;
    
    // Listen for language changes
    languageSelect.addEventListener('change', function() {
      const selectedLang = this.value;
      changeLanguage(selectedLang);
    });
  }
  
  // Also handle language links in footer
  const langLinks = document.querySelectorAll('.footer-links a[href*="?lang="]');
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const langCode = this.href.split('?lang=')[1];
      changeLanguage(langCode);
    });
  });
});

/**
 * Get current language from URL or localStorage
 */
function getCurrentLanguage() {
  // First check URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam) {
    return langParam;
  }
  
  // Then check localStorage
  const storedLang = localStorage.getItem('preferred-language');
  if (storedLang) {
    return storedLang;
  }
  
  // Default to Chinese
  return 'zh-CN';
}

/**
 * Change the website language
 */
function changeLanguage(langCode) {
  // Save preference
  localStorage.setItem('preferred-language', langCode);
  
  // In a real implementation, we would either:
  // 1. Redirect to the appropriate language version (e.g., /en/dopamine.html)
  // 2. Use client-side translation
  // 3. Use Next.js internationalization features
  
  // For this demo, we'll just reload the page with a language parameter
  const url = new URL(window.location.href);
  url.searchParams.set('lang', langCode);
  window.location.href = url.toString();
}

/**
 * Language data structure example (for client-side translation)
 * In a real implementation, this would be loaded from a JSON file or API
 */
const translations = {
  'zh-CN': {
    'nav.home': '首页',
    'nav.dopamine': '多巴胺',
    'nav.endorphin': '内啡肽',
    'nav.serotonin': '血清素',
    'nav.oxytocin': '催产素',
    'nav.cortisol': '皮质醇',
    'nav.resources': '资源库',
    // ... more translations
  },
  'en-US': {
    'nav.home': 'Home',
    'nav.dopamine': 'Dopamine',
    'nav.endorphin': 'Endorphin',
    'nav.serotonin': 'Serotonin',
    'nav.oxytocin': 'Oxytocin',
    'nav.cortisol': 'Cortisol',
    'nav.resources': 'Resources',
    // ... more translations
  },
  'ja-JP': {
    'nav.home': 'ホーム',
    'nav.dopamine': 'ドーパミン',
    'nav.endorphin': 'エンドルフィン',
    'nav.serotonin': 'セロトニン',
    'nav.oxytocin': 'オキシトシン',
    'nav.cortisol': 'コルチゾール',
    'nav.resources': 'リソース',
    // ... more translations
  },
  'ko-KR': {
    'nav.home': '홈',
    'nav.dopamine': '도파민',
    'nav.endorphin': '엔도르핀',
    'nav.serotonin': '세로토닌',
    'nav.oxytocin': '옥시토신',
    'nav.cortisol': '코르티솔',
    'nav.resources': '자료실',
    // ... more translations
  }
}; 