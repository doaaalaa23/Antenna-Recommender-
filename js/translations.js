/* STREAMING_CHUNK:Defining i18n Bilingual Translations Module... */
/**
 * Antenna Recommender - Bilingual Translation & i18n Engine
 * Branch: feature/i18n-bilingual
 */

let currentLanguage = 'en';

const translations = {
    en: {
        title: "Antenna Recommender - Smart Selection Guide",
        header_tagline: "Your smart guide to optimal antenna selection",
        nav_overview: "Overview",
        nav_app_header: "Application",
        nav_live: "Live Recommender",
        sidebar_tip_title: "RF Quick Reference",
        sidebar_tip_vhf: "Long range, obstacle diffraction, FM & Two-Way Radio.",
        sidebar_tip_uhf: "Balanced penetration, Cellular 4G/5G, WiFi & GPS.",
        sidebar_tip_shf: "High bandwidth, line-of-sight Satellite & Microwave links.",
        sponsored_by: "Sponsored by",
        overview_desc: "A data-driven web application guiding users to the optimal antenna configuration for their technical requirements.",
        start_now: "Start Recommendation",
        feature_1_title: "AI Analysis",
        feature_1_desc: "Advanced algorithms to interpret your project needs into technical specs.",
        feature_2_title: "Precise Matching",
        feature_2_desc: "Filters for frequency, polarization, and application to find the perfect fit.",
        feature_3_title: "Installation Guides",
        feature_3_desc: "Step-by-step AI generated guides for installing your selected antenna.",
        main_heading: "Find Your Ideal Antenna Setup",
        main_paragraph: "Select your criteria, or describe your project using our AI Analyzer.",
        ai_analyzer_title: "AI Project Analyzer",
        ai_analyzer_prompt: "Describe your goal (e.g., 'Long-range point-to-point satellite link', 'FM broadcasting station in VHF band', or 'Compact microstrip patch for 5G IoT node').",
        ai_analyzer_placeholder: "Enter your project description here...",
        ai_analyze_btn: "Analyze My Project",
        frequency_label: "Frequency Range",
        application_label: "Primary Application",
        polarization_label: "Polarization",
        coverage_label: "Coverage Pattern",
        environment_label: "Installation Environment",
        results_title: "Recommended Antennas",
        reset_filters: "Reset Filters",
        btn_guide: "Get AI Installation Guide",
        toggle_btn_text: "التبديل إلى العربية",
        advantages: "Advantages",
        disadvantages: "Disadvantages",
        no_results: "No antennas found matching your current filter criteria."
    },
    ar: {
        title: "مستشار الهوائيات - الدليل الذكي للاختيار",
        header_tagline: "دليلك الذكي لاختيار الهوائي الأمثل حسب احتياجك التقني",
        nav_overview: "نظرة عامة",
        nav_app_header: "التطبيق",
        nav_live: "مستشار الهوائيات المباشر",
        sidebar_tip_title: "مرجع سريع للترددات RF",
        sidebar_tip_vhf: "مدى طويل، حيود ممتاز للحواجز، الراديو والاتصال اللاسلكي.",
        sidebar_tip_uhf: "تغلغل متوازن، شبكات المحمول 4G/5G والـ WiFi والـ GPS.",
        sidebar_tip_shf: "نطاق ترددي عالي، اتصالات الأقمار الصناعية والميكروويف المباشرة.",
        sponsored_by: "تحت إشراف ورعاية",
        overview_desc: "تطبيق ويب يعتمد على البيانات والذكاء الاصطناعي لتوجيهك نحو التكوين الأمثل للهوائي لمشروعك.",
        start_now: "ابدأ التوصية الآن",
        feature_1_title: "تحليل الذكاء الاصطناعي",
        feature_1_desc: "خوارزميات متقدمة لتحويل متطلبات مشروعك إلى مواصفات تقنية دقيقة.",
        feature_2_title: "مطابقة دقيقة",
        feature_2_desc: "تصفية حسب التردد، الاستقطاب، والتطبيق للوصول للهوائي الأنسب.",
        feature_3_title: "أدلة التثبيت",
        feature_3_desc: "خطوات تثبيت تفاعلية واحتياطات سلامة يتم توليدها بالذكاء الاصطناعي.",
        main_heading: "حدد هوائيك المناسب بدقة",
        main_paragraph: "اختر معايير التصفية، أو اشرح مشروعك لمحلل الذكاء الاصطناعي.",
        ai_analyzer_title: "محلل المشاريع بالذكاء الاصطناعي",
        ai_analyzer_prompt: "اكتب وصفاً لمشروعك (مثال: 'محطة بث راديو FM في نطاق VHF' أو 'وصلة أقاليم صناعية طويلة المدى').",
        ai_analyzer_placeholder: "ادخل وصف مشروعك هنا...",
        ai_analyze_btn: "تحليل المشروع بالذكاء الاصطناعي",
        frequency_label: "نطاق التردد Frequency",
        application_label: "التطبيق الرئيسي Application",
        polarization_label: "الاستقطاب Polarization",
        coverage_label: "نمط التغطية Coverage",
        environment_label: "بيئة التثبيت Environment",
        results_title: "الهوائيات الموصى بها",
        reset_filters: "إعادة ضبط الفلاتر",
        btn_guide: "احصل على دليل التثبيت بالذكاء الاصطناعي",
        toggle_btn_text: "Switch to English",
        advantages: "المميزات",
        disadvantages: "السلبيات / القيود",
        no_results: "لا توجد هوائيات تطابق المعايير المختارة حالياً."
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    document.documentElement.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);
    
    updateUIStrings();
    if (typeof initFilterDropdowns === 'function') initFilterDropdowns();
    if (typeof renderAntennas === 'function') renderAntennas();
}

function updateUIStrings() {
    const lang = translations[currentLanguage];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (lang[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = lang[key];
            } else {
                el.textContent = lang[key];
            }
        }
    });
    const toggleBtnText = document.getElementById('button-text-toggle');
    if (toggleBtnText) toggleBtnText.textContent = lang.toggle_btn_text;
}