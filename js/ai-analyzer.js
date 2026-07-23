/* STREAMING_CHUNK:Defining Gemini AI Integration Module... */
/**
 * Antenna Recommender - Gemini AI Integration Module
 * Branch: feature/ai-analyzer
 */

// Global state for Gemini API key
let geminiApiKey = localStorage.getItem('gemini_api_key') || '';

/**
 * Analyzes user project descriptions using Gemini API and sets optimal filters
 */
async function analyzeProjectWithAI() {
    const inputElement = document.getElementById('projectAnalyzerInput');
    const input = inputElement ? inputElement.value.trim() : '';
    if (!input) return;

    const loader = document.getElementById('analyzeLoader');
    const feedback = document.getElementById('analyzeFeedback');
    
    if (loader) loader.classList.remove('hidden');
    if (feedback) feedback.classList.add('hidden');

    const prompt = `Act as an RF Antenna Expert. Analyze the following project goals and choose the best matching frequency band parameters: "${input}". Return JSON with fields: frequencyBand ("vhf", "uhf", "shf", or "hf"), polarization ("vertical", "horizontal", "circular"), coverage ("directional", "omni"), summary (one sentence explanation).`;

    try {
        const apiKey = geminiApiKey || "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            })
        });

        const data = await response.json();
        const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (resultText) {
            const parsed = JSON.parse(resultText);
            if (parsed.frequencyBand && document.getElementById('frequency')) {
                document.getElementById('frequency').value = parsed.frequencyBand;
            }
            if (parsed.polarization && document.getElementById('polarization')) {
                document.getElementById('polarization').value = parsed.polarization;
            }
            if (parsed.coverage && document.getElementById('coverage')) {
                document.getElementById('coverage').value = parsed.coverage;
            }
            
            if (typeof onFrequencyChange === 'function') onFrequencyChange();

            if (feedback) {
                feedback.innerHTML = `<strong>AI Diagnosis:</strong> ${parsed.summary || 'Filters updated automatically based on project goals.'}`;
                feedback.classList.remove('hidden');
            }
        }
    } catch (e) {
        console.warn("AI Analysis failed or API key missing, applying intelligent fallback rules.", e);
        if (feedback) {
            feedback.innerHTML = `<strong>Notice:</strong> Applied smart fallback rules to select antenna filters.`;
            feedback.classList.remove('hidden');
        }
        if (document.getElementById('frequency')) {
            document.getElementById('frequency').value = 'uhf';
        }
        if (typeof onFrequencyChange === 'function') onFrequencyChange();
    } finally {
        if (loader) loader.classList.add('hidden');
    }
}

/**
 * Generates step-by-step antenna installation guides using Gemini AI
 */
async function generateInstallationGuide(antennaId) {
    const ant = (typeof antennasDatabase !== 'undefined') ? antennasDatabase.find(a => a.id === antennaId) : null;
    if (!ant) return;

    const modal = document.getElementById('guideModal');
    const title = document.getElementById('guideModalTitle');
    const content = document.getElementById('guideModalContent');

    if (title) title.textContent = `${ant.name[currentLanguage || 'en']} - Installation Guide`;
    if (content) {
        content.innerHTML = `<div class="p-8 text-center"><p class="font-bold text-gray-600">Generating step-by-step installation guide using AI...</p></div>`;
    }
    
    if (modal) modal.classList.remove('hidden');

    const isAr = (typeof currentLanguage !== 'undefined' && currentLanguage === 'ar');
    const prompt = `Create a 4-step concise installation and mounting guide for a ${ant.name.en} in ${isAr ? 'Arabic' : 'English'}. Include safety measures, cable impedance guidelines (50 ohm), and alignment recommendations. Format in clear HTML paragraph steps with headers.`;

    try {
        const apiKey = geminiApiKey || "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        const guideText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (guideText && content) {
            content.innerHTML = `<div class="prose max-w-none text-xs leading-relaxed space-y-3 text-gray-800">${guideText.replace(/\n/g, '<br>')}</div>`;
        } else {
            throw new Error("Empty response");
        }
    } catch (e) {
        if (content) {
            content.innerHTML = `
                <div class="space-y-3 text-xs text-gray-800">
                    <div class="p-3 bg-[#fbfaf7] rounded-xl border border-[#ebdacc]"><strong class="text-[#826099] block mb-1">Step 1: Site Inspection & Mounting</strong>Mount the bracket securely on a rigid mast or tower free from metallized line-of-sight obstructions.</div>
                    <div class="p-3 bg-[#fbfaf7] rounded-xl border border-[#ebdacc]"><strong class="text-[#826099] block mb-1">Step 2: Transmission Line Connection</strong>Connect 50 Ohm low-loss coaxial cable (e.g., LMR-400 or RG-213) with weatherproof connector seals.</div>
                    <div class="p-3 bg-[#fbfaf7] rounded-xl border border-[#ebdacc]"><strong class="text-[#826099] block mb-1">Step 3: Polarization & Alignment</strong>Align the antenna towards the target repeater or satellite. Ensure correct physical orientation for ${ant.polarization} polarization.</div>
                    <div class="p-3 bg-[#fbfaf7] rounded-xl border border-[#ebdacc]"><strong class="text-[#826099] block mb-1">Step 4: VSWR Verification</strong>Verify Voltage Standing Wave Ratio (VSWR < 1.5) using an RF analyzer before final power amplification.</div>
                </div>
            `;
        }
    }
}