/**
 * BDTours - Premium European Vacations & City Breaks Interactive Logic
 * Centralizes image configurations, bilingual translations (EN/HE RTL),
 * cost estimators, urgency countdown clocks, slider carousels, and success overlays.
 */

// ==========================================
// 1. CENTRAL IMAGE CONFIGURATOR (UNSPLASH)
// ==========================================
// Paste new image URLs here to swap them periodically on the website instantly!
window.BDToursConfig = {
  images: {
    hero: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",        // Santorini Caldera Sunset
    santorini: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",   // Rhodes Family Pool Resort [NEW]
    transylvania: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80", // Cozy mountain A-frame cabin (for blog)
    bucharest: "assets/images/bucharest.jpg",    // Bucharest Athenaeum (User Uploaded) [NEW]
    rome: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",         // Rome Colosseum Sunset
    budapest: "assets/images/budapest.jpg",     // Fisherman's Bastion sunset (User Uploaded) [NEW]
    bulgaria: "assets/images/bulgaria.jpg",     // Varna Family Resort (User Uploaded Resort Aerial Photo) [NEW]
    cyprus: "assets/images/cyprus.jpg",          // Larnaca sandy beach resort (User Uploaded) [NEW]
    mykonos: "assets/images/mykonos.jpg",         // Mykonos beachfront hotel Erato (User Uploaded) [NEW]
    canopy: "assets/images/canopy_lodge.png",     // Canopy Jungle Treehouse Lodge [NEW]
    kayak: "assets/images/coastal_kayak.png"       // Coastal Kayak Active Adventure [NEW]
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Dynamic Scroll Handler to scale down the navbar and floating logo on scroll
  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger immediately to sync initial load state

  // ==========================================
  // CURRENCY TRANSFORMER (NIS is real fare, converted to USD)
  // ==========================================
  const EXCHANGE_RATE = 3.035; // User's real rate (e.g. 100 USD = 303.5 NIS)
  const EXPENSE_PERCENT = 0.05; // 0.05% expenses to NIS

  const convertNISToUSD = (nisAmount) => {
    const nisWithExpense = nisAmount * (1 + EXPENSE_PERCENT / 100);
    return nisWithExpense / EXCHANGE_RATE;
  };

  // Bind Configured Unsplash Images to elements on load
  const bindImages = () => {
    const heroImg = document.getElementById('hero-img');
    const santoriniImg = document.getElementById('img-santorini');
    const bucharestImg = document.getElementById('img-bucharest');
    const romeImg = document.getElementById('img-rome');
    const budapestImg = document.getElementById('img-budapest');
    const bulgariaImg = document.getElementById('img-bulgaria');
    const cyprusImg = document.getElementById('img-cyprus');
    const mykonosImg = document.getElementById('img-mykonos');
    const canopyImg = document.getElementById('img-canopy');
    const kayakImg = document.getElementById('img-kayak');
    
    // Blog and testimonial avatars mapping
    const avatarEmma = document.getElementById('avatar-emma');
    const avatarMarcus = document.getElementById('avatar-marcus');
    const blogImg0 = document.getElementById('blog-img-0');
    const blogImg1 = document.getElementById('blog-img-1');
    const blogImg2 = document.getElementById('blog-img-2');
    const modalImg0 = document.getElementById('modal-img-0');
    const modalImg1 = document.getElementById('modal-img-1');
    const modalImg2 = document.getElementById('modal-img-2');

    if (heroImg) heroImg.src = window.BDToursConfig.images.hero;
    if (santoriniImg) santoriniImg.src = window.BDToursConfig.images.santorini;
    if (bucharestImg) bucharestImg.src = window.BDToursConfig.images.bucharest;
    if (romeImg) romeImg.src = window.BDToursConfig.images.rome;
    if (budapestImg) budapestImg.src = window.BDToursConfig.images.budapest;
    if (bulgariaImg) bulgariaImg.src = window.BDToursConfig.images.bulgaria;
    if (cyprusImg) cyprusImg.src = window.BDToursConfig.images.cyprus;
    if (mykonosImg) mykonosImg.src = window.BDToursConfig.images.mykonos;
    if (canopyImg) canopyImg.src = window.BDToursConfig.images.canopy;
    if (kayakImg) kayakImg.src = window.BDToursConfig.images.kayak;
    
    // Testimonial & Blog bindings (uses matched, high-quality real photography)
    if (avatarEmma) avatarEmma.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80";
    if (avatarMarcus) avatarMarcus.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80";
    if (blogImg0) blogImg0.src = window.BDToursConfig.images.santorini;
    if (modalImg0) modalImg0.src = window.BDToursConfig.images.santorini;
    if (blogImg1) blogImg1.src = window.BDToursConfig.images.transylvania;
    if (modalImg1) modalImg1.src = window.BDToursConfig.images.transylvania;
    if (blogImg2) blogImg2.src = window.BDToursConfig.images.rome;
    if (modalImg2) modalImg2.src = window.BDToursConfig.images.rome;
  };

  bindImages();

  // ==========================================
  // 2. BILINGUAL ENGLISH & HEBREW DICTIONARY
  // ==========================================
  const dictionary = {
    en: {
      site_title: "BDTours | Premium Couples & Family Vacations in Europe & City Breaks",
      nav_home: "Home",
      nav_vacations: "Vacations",
      nav_deals: "Special Deals",
      nav_booking: "Quick Booking",
      nav_blog: "Travel Blog",
      btn_inquire: "Inquire Now",
      btn_book_direct: "Book Direct",
      hero_badge: "<i class='fa-solid fa-plane-departure'></i> Premium European Getaways",
      hero_title: "Quality Vacations at <span class='gradient-text-teal-orange'>Fair Prices</span>",
      hero_desc: "Unforgettable vacations, exclusive deals, and tailored city breaks for couples and families. With a dedicated 24/7 personal agent, VIP treatment, and zero hidden costs, we handle every detail so you can focus on the journey.",
      hero_cta_primary: "View Packages <i class='fa-solid fa-arrow-right'></i>",
      hero_cta_secondary: "Custom Quote",
      stat_countries: "Core Countries",
      stat_verified: "Verified Stays",
      stat_trust: "Client Trust",
      floating_card_title: "Direct-Rate Guarantee",
      floating_card_desc: "Best price guarantee. Zero hidden agency commissions.",
      dest_badge: "<i class='fa-solid fa-hotel'></i> Handpicked Stays",
      dest_title: "Couples & Family Vacation Packages",
      dest_desc: "Book directly to enjoy fully coordinated excursions, local guide access, and handpicked hotel upgrades at clear, fair prices.",
      tab_all: "All Vacations",
      tab_beach: "Beach & Islands",
      tab_mountain: "Mountain Escapes",
      tab_city: "City Breaks",
      tag_greece: "Greece & Islands",
      tag_romantic: "Romantic Couples",
      price_unit_night: "/ night",
      meta_santorini_time: "3 Nights Min",
      meta_santorini_guests: "Perfect for 2",
      title_santorini: "Santorini Romantic Sunset Escape",
      desc_santorini: "Spend magical evenings in a caldera-view cave suite featuring a private heated plunge pool, panoramic twilight sun loungers, and custom organic local wine tours.",
      btn_book_now: "Book Deal <i class='fa-solid fa-arrow-right'></i>",
      tag_greece: "Greece Family",
      tag_family_deal: "All Inclusive",
      meta_rhodes_time: "6 Nights",
      meta_rhodes_guests: "2 Adults + 2 Kids",
      title_rhodes: "Rhodes All-Inclusive Family Resort",
      desc_rhodes: "Luxury family retreat (Rodos Palace / Lindos Royal)<br>Price includes:<br>• Direct flights with Aegean Airlines<br>• Hand bag, 7kg trolley & 20kg luggage per passenger<br>• 5-star resort on an All-Inclusive basis<br>• Private airport transfers & 24/7 personal agent support",
      reviews_count_1: "(112 reviews)",
      tag_romania: "Romania",
      tag_bucharest: "Bucharest Deal",
      meta_bucharest_time: "4 Nights",
      meta_bucharest_guests: "2 Adults",
      meta_bucharest_flights: "Wizz Air Included",
      title_bucharest: "Bucharest 4-Night Relaxing Getaway",
      desc_bucharest: "Relaxing weekend break in central boutique hotels<br>Price includes:<br>• Direct flights with Wizz Air<br>• Hand bag & up to 20kg luggage per passenger<br>• Premium hotel on a Bed & Breakfast basis<br>• 24/7 personal agent support & VIP priority car rental",
      reviews_count_2: "(92 reviews)",
      tag_bulgaria: "Bulgaria Beach",
      tag_family_choice: "Family Choice",
      meta_bulgaria_time: "6 Nights",
      meta_bulgaria_guests: "2 Adults + 2 Kids",
      title_bulgaria: "Varna All-Inclusive Family Resort",
      desc_bulgaria: "Premium family beach resort (Prestige Deluxe / International)<br>Price includes:<br>• Direct flights with Israir Airlines<br>• Hand bag, 8kg trolley & 20kg luggage per passenger<br>• 4/5-star hotel on an All-Inclusive / Full Board basis<br>• Private airport transfers & 24/7 personal agent support",
      reviews_count_4: "(104 reviews)",
      tab_family: "Family Vacations",
      dest_row_family_title: "Family longer holiday for 2 adults and up to 2 children",
      dest_row_couples_title: "Couples short city break escape",
      reviews_count_5: "(41 reviews)",
      whatsapp_floating_text: "Chat with Agent",
      
      // Budapest Destination Card additions
      tag_hungary: "Budapest Deal",
      tag_deal_price: "2520 NIS / Person",
      price_unit_package: "/ package",
      price_unit_person: "/ person",
      meta_budapest_time: "4 Nights",
      meta_budapest_guests: "2 Adults",
      meta_budapest_flights: "Wizz Air Included",
      title_budapest: "Budapest 4-Night Weekend Getaway",
      desc_budapest: "Boutique weekend city break in central Budapest<br>Price includes:<br>• Direct flights with Wizz Air<br>• Hand bag & 10kg trolley bag per passenger<br>• Highly-rated hotel on a Bed & Breakfast basis<br>• 24/7 personal agent support",
      
      // Budapest Urgency Section additions
      deal_badge_budapest: "<i class='fa-solid fa-fire'></i> Bomb Price Deal! 2520 NIS / Person",
      deal_title_budapest: "June 2026 Weekend in Budapest!",
      deal_desc_budapest: "An incredible 4-night couples and family urban getaway! 25-29 June 2026 (Thursday to Monday) in high-rated central hotels, direct Wizz Air flights, and personal agent support included.",
      btn_claim_deal_budapest: "Lock in This Deal <i class='fa-solid fa-check'></i>",
      timer_tag_budapest: "<i class='fa-solid fa-hourglass-half'></i> Special Budapest Deal Ends In:",
      timer_days: "Days",
      timer_hours: "Hours",
      timer_mins: "Mins",
      timer_secs: "Secs",
      deal_hotels_title_budapest: "Select Your Budapest Hotel Option:",
      deal_hotel_1_budapest: "<i class='fa-solid fa-hotel'></i> <strong>K+K Hotel Opera ★★★★</strong> — Starting from 5040 NIS Couple (2520 NIS / person) Bed & Breakfast",
      deal_hotel_2_budapest: "<i class='fa-solid fa-hotel'></i> <strong>Park Plaza Budapest ★★★★</strong> — Starting from 5170 NIS Couple (2585 NIS / person) Bed & Breakfast",
      deal_hotel_3_budapest: "<i class='fa-solid fa-hotel'></i> <strong>La Prima Fashion Hotel ★★★★</strong> — Starting from 5360 NIS Couple (2680 NIS / person) Room Only",
      deal_includes_budapest: "<i class='fa-solid fa-plane'></i> Includes: Wizz Air flights (10:10 TLV -> BUD / 05:00 BUD -> TLV), hand bag + 10kg trolley, and 24/7 personal agent accompaniment.",

      // Estimator Booking additions
      opt_budapest: "Budapest 4-Night Weekend Break, Hungary ($680/p)",
      opt_cyprus: "Cyprus 4-Night Beach & City Break, Larnaca ($565/p)",
      tag_cyprus: "Cyprus Deal",
      tag_deal_price_cyprus: "2100 NIS / Person",
      meta_cyprus_time: "4 Nights",
      meta_cyprus_guests: "2 Adults",
      meta_cyprus_flights: "Aegean/Arkia Included",
      title_cyprus: "Cyprus Larnaca 4-Night Beach & City Break",
      desc_cyprus: "Summer beach & city break in Larnaca select hotels<br>Price includes:<br>• Direct flights with Aegean Airlines / Arkia<br>• Hand bag & 8kg trolley suitcase per passenger<br>• Curated hotel on a Bed & Breakfast basis<br>• 24/7 personal agent support",

      // Cyprus deals urgency additions
      deal_badge_cyprus: "<i class='fa-solid fa-fire'></i> Special Cyprus Break! 2100 NIS / Person",
      deal_title_cyprus: "June 2026 Summer Weekend in Larnaca!",
      deal_desc_cyprus: "Sensational 4-night beach & city summer escape! 18-22 June 2026 (Thursday to Monday) in premium beachside Larnaca hotels, direct flights, and 24/7 VIP personal agent support included.",
      btn_claim_deal_cyprus: "Secure Larnaca Deal <i class='fa-solid fa-check'></i>",
      timer_tag_cyprus: "<i class='fa-solid fa-hourglass-half'></i> Special Cyprus Deal Ends In:",
      deal_hotels_title_cyprus: "Select Your Cyprus Hotel Option:",
      deal_hotel_1_cyprus: "<i class='fa-solid fa-hotel'></i> <strong>Best Western Plus Larco ★★★★</strong> — Starting from 4200 NIS Couple (2100 NIS / person) Bed & Breakfast",
      deal_hotel_2_cyprus: "<i class='fa-solid fa-hotel'></i> <strong>Radisson Blu Hotel Larnaca ★★★★★</strong> — Starting from 4460 NIS Couple (2230 NIS / person) Bed & Breakfast",
      deal_hotel_3_cyprus: "<i class='fa-solid fa-hotel'></i> <strong>Golden Bay Beach Hotel ★★★★★</strong> — Starting from 4780 NIS Couple (2390 NIS / person) Bed & Breakfast",
      deal_includes_cyprus: "<i class='fa-solid fa-plane'></i> Includes: Direct flights (13:05 TLV -> LCA / 14:50 LCA -> TLV), hand bag + 8kg trolley suitcase, and 24/7 personal agent accompaniment.",

      reviews_count_6: "(58 reviews)",
      benefits_badge: "<i class='fa-solid fa-shield-halved'></i> BDTours Integrity Guarantee",
      benefits_title: "Quality European Vacations, Zero Hidden Agent Commissions",
      benefits_desc: "BDTours is built on direct partner relationships. By coordinating directly with verified boutique hotels, lodges, and excursion partners, we deliver premium travel quality at extremely fair rates.",
      benefit_1_title: "Honest and Best Pricing",
      benefit_1_desc: "Enjoy boutique luxury and fully custom packages without bloated agency markups or hidden fees.",
      benefit_2_title: "Couples & Families VIP Treatment",
      benefit_2_desc: "Access carefully coordinated local guides, room upgrades, and custom excursions designed specifically for your group.",
      success_title: "Inquiry Submitted!",
      success_desc: "Your BDTours vacation guide has been notified. A custom itinerary and direct quote proposal is on its way to your inbox!",
      btn_new_form: "New Booking Form",
      form_title: "Calculate Your Custom Holiday",
      form_desc: "Choose your travel package and comfort add-ons to see our transparent cost estimate in real-time.",
      label_name: "Your Full Name",
      label_email: "Email Address",
      label_package: "Choose Destination",
      label_qty: "Quantity (Guests / Nights)",
      label_addons: "Enhance Your Stay (Optional Add-ons)",
      addon_meals: "<strong>Premium All-Inclusive Dining Pack (+$40)</strong>: Gourmet local dining and chef-selected regional wines daily.",
      addon_guide: "<strong>Private Local Excursion Guide (+$80)</strong>: Certified local historical or outdoor guide for custom private tours.",
      addon_transfer: "<strong>VIP Airport Private Transfer (+$35)</strong>: Door-to-door luxury air-conditioned transport directly to your hotel.",
      
      reviews_badge: "<i class='fa-solid fa-star'></i> Happy Travelers",
      reviews_title: "Verified Client Experiences",
      reviews_desc: "Read honest feedback from couples and families who enjoyed Europe directly with BDTours vacation planning.",
      quote_1: "\"The caldera balcony suite in Santorini was magical. Booking directly via BDTours cut out unnecessary online agency markups, and the private local wine tour inclusion was exceptional. Best vacation ever.\"",
      role_1: "Romantic getaway lovers, UK",
      quote_2: "\"We had an amazing romantic weekend getaway in Bucharest! Leonardo Hotel was luxurious and central, our flights were perfectly on-time, and our agent helped us with everything. Unbeatable value!\"",
      role_2: "Family travel organizers, Canada",
      blog_badge: "<i class='fa-solid fa-earth-europe'></i> Explorer Insights",
      blog_title: "The BDTours Travel Blog",
      blog_desc: "Pro guides and packing checklists curated to help you plan the absolute best European romantic breaks and family getaways.",
      blog_date_0: "May 23, 2026 • 5 Min Read",
      blog_title_0: "The Ultimate Packing List for a Greek Islands Getaway",
      blog_desc_0: "From sun-protective resort clothing to essential walking accessories, master the perfect light-luggage checklist for your romantic Santorini caldera vacation.",
      blog_btn_read: "Read Article <i class='fa-solid fa-arrow-right'></i>",
      blog_date_1: "May 18, 2026 • 7 Min Read",
      blog_title_1: "Top 5 Hidden Mountain Gems in Romania for Families",
      blog_desc_1: "Escape crowded tourist trails. Discover pristine forest chalets, spectacular wildlife trails, and traditional Romanian hospitality in Apuseni and Carpathians.",
      blog_date_2: "May 15, 2026 • 6 Min Read",
      blog_title_2: "How to Maximize a 3-Day City Break in Rome & Venice",
      blog_desc_2: "Avoid massive crowds, book the best direct terrace restaurants, and plan a seamless couple's itinerary connecting Italy's two most romantic historic cities.",
      modal_meta_0: "Greek Islands • May 23, 2026",
      modal_meta_1: "Mountain Travel • May 18, 2026",
      modal_meta_2: "Italy Breaks • May 15, 2026",
      footer_desc: "Premium couples retreats, high-quality family vacations, and curated European city breaks. Built on direct partner relationships, transparent fair rates, and outstanding local support.",
      footer_col_explore: "Explore",
      footer_home: "Home Banner",
      footer_vacations: "Vacation Packages",
      footer_deals: "Spring Sanctuary Deal",
      footer_booking: "Dynamic Inquiry Form",
      footer_blog: "Travel Blog",
      footer_col_partners: "Our Trust Partners",
      partner_dir: "Partner Directory",
      footer_col_newsletter: "VIP Explorer Club",
      newsletter_desc: "Subscribe for 10% off your first BDTours European retreat and get our free Wilderness Packing Guide instantly!",
      badge_direct: "Direct Rates",
      badge_secure: "100% Secure",
      footer_copyright: "&copy; 2026 Best Deal Tours&reg; | BDTours. All Rights Reserved. All bookings made directly protect standard-setting quality travel integrity.",
      terms: "Terms of Use",
      cookies: "Cookies Policy",
      privacy: "Privacy Policy",
      tag_rome: "Rome Deal",
      meta_rome_time: "3 Nights",
      meta_rome_guests: "2 Adults",
      meta_rome_flights: "Ryanair Flights Included",
      title_rome: "Rome Colosseum Sunset City Break",
      desc_rome: "Romantic getaway in Italy! 3 nights in central boutique hotel (Hotel Anglo Americano / Trevi). Includes direct Ryanair flights, priority boarding + trolley, private transfers, and personal agent support!",
      reviews_count_rome: "(84 reviews)",
      
      tag_panama: "Panama Eco",
      meta_canopy_time: "5 Nights",
      meta_canopy_guests: "2 Adults + 2 Kids",
      title_canopy: "Canopy Jungle Treehouse Lodge",
      desc_canopy: "Unforgettable eco family retreat! 5 nights in a spectacular treehouse cabin in Panama. Includes direct flights, private transfers, daily guided jungle tours, and all organic meals included!",
      reviews_count_canopy: "(36 reviews)",
      
      tag_adventure: "Active Adventure",
      meta_kayak_time: "5 Nights",
      meta_kayak_guests: "2 Adults",
      title_kayak: "Coastal Kayak Active Adventure",
      desc_kayak: "Active couples adventure! 5 nights navigating the crystal clear waters of the Greek Islands. Includes specialized sea kayak gear, certified outdoor guides, boutique seaside lodging, and daily breakfasts!",
      reviews_count_kayak: "(45 reviews)",

      tag_mykonos: "Mykonos Deal",
      meta_mykonos_time: "5 Nights",
      meta_mykonos_guests: "2 Adults",
      meta_mykonos_flights: "Blue Bird Direct Flights",
      title_mykonos: "Mykonos Erato Hotel 5-Night Couples Escape",
      desc_mykonos: "Midsummer beachfront getaway (Erato Hotel Mykonos)<br>Price includes:<br>• Direct flights with Blue Bird<br>• Hand bag & up to 20kg luggage per passenger<br>• Beachfront hotel on a Bed & Breakfast basis<br>• 24/7 personal agent support",
      reviews_count_7: "(76 reviews)",
      opt_mykonos: "Mykonos Erato Hotel 5-Night Couples Escape, Greece ($1266/p)",
      funnel_step: "Step",
      funnel_back: "Back",
      funnel_continue: "Continue",
      funnel_all_fits: "Open to all options / All fits me",
      funnel_opt_family: "Family",
      funnel_opt_couple: "Couple",
      funnel_opt_solo: "Just me",
      funnel_opt_friends: "Friends",
      month_june: "June",
      month_july: "July",
      month_august: "August",
      month_september: "September",
      month_october: "October",
      month_november: "November",
      month_december: "December",
      month_january: "January",
      month_february: "February",
      month_march: "March",
      month_april: "April",
      month_may: "May",
      dest_greece: "Greece & Islands",
      dest_cyprus: "Cyprus (Larnaca)",
      dest_hungary: "Hungary (Budapest)",
      dest_romania: "Romania (Bucharest)",
      dest_bulgaria: "Bulgaria (Varna)",
      dest_europe: "Other Europe",
      style_beach: "Beach & Islands",
      style_romantic: "Couples & Romantic",
      style_city: "Urban City Break",
      style_exotic: "Exotic Destinations",
      style_shopping: "Shopping & Fashion",
      style_kosher: "Kosher Vacations",
      meals_none: "Room Only",
      meals_bb: "Bed & Breakfast",
      meals_hb: "Half Board",
      meals_all: "All-Inclusive",
      label_phone: "Contact Phone",
      label_budget: "Estimated Budget ($)",
      btn_submit_inquiry: "Submit Inquiry"
    },
    he: {
      site_title: "BDTours | חופשות פרימיום לזוגות ומשפחות באירופה וסיטי ברייק",
      nav_home: "בית",
      nav_vacations: "חופשות",
      nav_deals: "דילים מיוחדים",
      nav_booking: "הזמנה מהירה",
      nav_blog: "בלוג נסיעות",
      btn_inquire: "צור קשר",
      btn_book_direct: "הזמנה ישירה",
      hero_badge: "<i class='fa-solid fa-plane-departure'></i> חופשות פרימיום באירופה",
      hero_title: "חופשות איכותיות ב<span class='gradient-text-teal-orange'>מחירים הוגנים</span>",
      hero_desc: "החופשה הבאה שלכם מתחילה כאן: דילים זוגיים, חופשות משפחתיות בלתי נשכחות וסופי שבוע עירוניים בהתאמה אישית. ללא עלויות נסתרות, עם יחס VIP וסוכן אישי שמלווה אתכם 24/7.",
      hero_cta_primary: "צפה בחבילות <i class='fa-solid fa-arrow-left'></i>",
      hero_cta_secondary: "הצעת מחיר אישית",
      stat_countries: "מדינות יעד",
      stat_verified: "שהות מאומתת",
      stat_trust: "אמון לקוחות",
      floating_card_title: "התחייבות למחיר ישיר",
      floating_card_desc: "התחייבות למחיר הטוב ביותר. אפס עמלות סוכנות סמויות.",
      dest_badge: "<i class='fa-solid fa-hotel'></i> שהות מובחרת",
      dest_title: "חבילות נופש לזוגות ומשפחות",
      dest_desc: "הזמינו ישירות ותיהנו מסיורים מתואמים לחלוטין, גישה למדריכים מקומיים ושדרוגי מלונות שנבחרו בקפידה במחירים ברורים והוגנים.",
      tab_all: "כל החופשות",
      tab_beach: "חופים ואיים",
      tab_mountain: "נופש הרים",
      tab_city: "סיטי ברייק",
      tag_greece: "יוון והאיים",
      tag_romantic: "זוגות רומנטיים",
      price_unit_night: "/ לילה",
      meta_santorini_time: "מינימום 3 לילות",
      meta_santorini_guests: "מושלם ל-2",
      title_santorini: "חופשת שקיעה רומנטית בסנטוריני",
      desc_santorini: "בלו ערבים קסומים בסוויטת מערה עם נוף לקלדרה, הכוללת בריכת טבילה פרטית מחוממת, מיטות שיזוף פנורמיות בשעת בין הערביים וסיורי יין מקומיים אורגניים מותאמים אישית.",
      btn_book_now: "הזמן דיל <i class='fa-solid fa-arrow-left'></i>",
      tab_family: "חופשות משפחתיות",
      dest_row_family_title: "חופשות משפחתיות ארוכות ל-2 מבוגרים ועד 2 ילדים",
      dest_row_couples_title: "חופשות סיטי ברייק קצרות לזוגות",
      tag_greece: "יוון למשפחות",
      tag_family_deal: "הכל כלול",
      meta_rhodes_time: "6 לילות",
      meta_rhodes_guests: "2 מבוגרים + 2 ילדים",
      title_rhodes: "אתר נופש משפחתי יוקרתי ברודוס - הכל כלול",
      desc_rhodes: "נופש משפחתי יוקרתי (Rodos Palace / Lindos Royal)<br>המחיר כולל:<br>• טיסות ישירות עם Aegean Airlines<br>• תיק יד, טרולי 7 ק\"ג ומזוודה 20 ק\"ג לכל נוסע<br>• מלון 5 כוכבים ע\"ב הכל כלול<br>• העברות פרטיות וליווי אישי וצמוד של סוכן 24/7",
      btn_book_now: "הזמן דיל <i class='fa-solid fa-arrow-left'></i>",
      reviews_count_1: "(112 חוות דעת)",
      tag_romania: "רומניה",
      tag_bucharest: "דיל לבוקרשט",
      meta_bucharest_time: "4 לילות",
      meta_bucharest_guests: "זוג מבוגרים",
      meta_bucharest_flights: "טיסות Wizz Air כלולות",
      title_bucharest: "חופשה זוגית מדהימה בבוקרשט",
      desc_bucharest: "סופ\"ש מפנק במלונות בוטיק במרכז בוקרשט<br>המחיר כולל:<br>• טיסות ישירות עם Wizz Air<br>• תיק יד ומזוודה עד 20 ק\"ג לכל נוסע<br>• מלון ע\"ב לינה וארוחת בוקר<br>• ליווי אישי וצמוד של סוכן 24/7 ועדיפות רכב VIP",
      reviews_count_2: "(92 חוות דעת)",
      tag_bulgaria: "חופי בולגריה",
      tag_family_choice: "בחירת המשפחות",
      meta_bulgaria_time: "6 לילות",
      meta_bulgaria_guests: "2 מבוגרים + 2 ילדים",
      title_bulgaria: "וארנה משפחתי - הכל כלול / פנסיון מלא",
      desc_bulgaria: "חופשת חוף משפחתית (Prestige Deluxe / International)<br>המחיר כולל:<br>• טיסות ישירות עם Israir ישראייר<br>• תיק יד, טרולי 8 ק\"ג ומזוודה 20 ק\"ג לכל נוסע<br>• מלון 4/5 כוכבים ע\"ב הכל כלול / פנסיון מלא<br>• העברות פרטיות וליווי אישי וצמוד של סוכן 24/7",
      reviews_count_4: "(104 חוות דעת)",
      reviews_count_5: "(41 חוות דעת)",
      whatsapp_floating_text: "צ'אט עם נציג",

      tag_hungary: "דיל לבודפשט",
      tag_deal_price: "2520 ש\"ח לאדם",
      price_unit_package: "/ חבילה",
      price_unit_person: "/ לאדם",
      meta_budapest_time: "4 לילות",
      meta_budapest_guests: "זוג מבוגרים",
      meta_budapest_flights: "טיסות ישירות כלולות",
      title_budapest: "סופ\"ש 4 לילות מדהים בבודפשט!",
      desc_budapest: "סופ\"ש מדהים במלונות בוטיק מרכזיים בבודפשט<br>המחיר כולל:<br>• טיסות ישירות עם Wizz Air<br>• תיק יד ומזוודת טרולי 10 ק\"ג לכל נוסע<br>• מלון ע\"ב לינה וארוחת בוקר<br>• ליווי אישי וצמוד של סוכן 24/7",

      deal_badge_budapest: "<i class='fa-solid fa-fire'></i> דיל במחיר פצצה! 2520 ש\"ח לאדם!",
      deal_title_budapest: "יוני 2026 בבודפשט - סופ\"ש מהסרטים!",
      deal_desc_budapest: "חופשה זוגית מדהימה או חופשה עירונית משפחתית! 25-29 ביוני 2026 (ימי חמישי עד שני) במלונות מרכזיים מצוינים, טיסות ישירות עם חברת Wizz Air וליווי צמוד של סוכן!",
      btn_claim_deal_budapest: "שריינו את הדיל עכשיו <i class='fa-solid fa-check'></i>",
      timer_tag_budapest: "<i class='fa-solid fa-hourglass-half'></i> הדיל המטורף לבודפשט מסתיים בעוד:",
      timer_days: "ימים",
      timer_hours: "שעות",
      timer_mins: "דקות",
      timer_secs: "שניות",
      deal_hotels_title_budapest: "בחרו את אופציית המלון בבודפשט:",
      deal_hotel_1_budapest: "<i class='fa-solid fa-hotel'></i> <strong>K+K Hotel Opera ★★★★</strong> — החל מ-5040 ש\"ח לזוג (2520 ש\"ח לאדם) לינה וארוחת בוקר",
      deal_hotel_2_budapest: "<i class='fa-solid fa-hotel'></i> <strong>Park Plaza Budapest ★★★★</strong> — החל מ-5170 ש\"ח לזוג (2585 ש\"ח לאדם) לינה וארוחת בוקר",
      deal_hotel_3_budapest: "<i class='fa-solid fa-hotel'></i> <strong>La Prima Fashion Hotel ★★★★</strong> — החל מ-5360 ש\"ח לזוג (2680 ש\"ח לאדם) ללא ארוחות",
      deal_includes_budapest: "<i class='fa-solid fa-plane'></i> כולל: טיסות ישירות עם Wizz Air (הלוך: 10:10 TLV -> BUD / חזור: 05:00 BUD -> TLV), תיק גב + טרולי 10 ק\"ג וליווי אישי של סוכן.",

      opt_budapest: "בודפשט 4 לילות סופ\"ש אורבני, הונגריה (2520 ש\"ח)",
      opt_cyprus: "לרנקה קפריסין 4 לילות חוף וסיטי, קפריסין (2100 ש\"ח)",
      tag_cyprus: "דיל לקפריסין",
      tag_deal_price_cyprus: "2100 ש\"ח לאדם",
      meta_cyprus_time: "4 לילות",
      meta_cyprus_guests: "זוג מבוגרים",
      meta_cyprus_flights: "טיסות ישירות כלולות",
      title_cyprus: "קפריסין לרנקה - 4 לילות חוף וסיטי!",
      desc_cyprus: "חופשת חוף וסיטי ברייק במלונות נבחרים בלרנקה<br>המחיר כולל:<br>• טיסות ישירות עם Aegean Airlines / Arkia<br>• תיק יד ומזוודת טרולי 8 ק\"ג לכל נוסע<br>• מלון ע\"ב לינה וארוחת בוקר<br>• ליווי אישי וצמוד של סוכן 24/7",

      deal_badge_cyprus: "<i class='fa-solid fa-fire'></i> דיל מטורף לקפריסין! 2100 ש\"ח לאדם!",
      deal_title_cyprus: "יוני 2026 בלרנקה - חופשת קיץ לוהטת!",
      deal_desc_cyprus: "נופש חלומי של 4 לילות ו-5 ימים מלאים! 18-22 ביוני 2026 (ימי חמישי עד שני) במלונות מצוינים בקרבת חוף הים, טיסות ישירות וליווי צמוד של סוכן 24/7!",
      btn_claim_deal_cyprus: "שריינו את הדיל לקפריסין <i class='fa-solid fa-check'></i>",
      timer_tag_cyprus: "<i class='fa-solid fa-hourglass-half'></i> הדיל המטורף לקפריסין מסתיים בעוד:",
      deal_hotels_title_cyprus: "בחרו את אופציית המלון בלרנקה:",
      deal_hotel_1_cyprus: "<i class='fa-solid fa-hotel'></i> <strong>Best Western Plus Larco ★★★★</strong> — החל מ-4200 ש\"ח לזוג (2100 ש\"ח לאדם) לינה וארוחת בוקר",
      deal_hotel_2_cyprus: "<i class='fa-solid fa-hotel'></i> <strong>Radisson Blu Hotel Larnaca ★★★★★</strong> — החל מ-4460 ש\"ח לזוג (2230 ש\"ח לאדם) לינה וארוחת בוקר",
      deal_hotel_3_cyprus: "<i class='fa-solid fa-hotel'></i> <strong>Golden Bay Beach Hotel ★★★★★</strong> — החל מ-4780 ש\"ח לזוג (2390 ש\"ח לאדם) לינה וארוחת בוקר",
      deal_includes_cyprus: "<i class='fa-solid fa-plane'></i> כולל: טיסות ישירות (הלוך: 13:05 TLV -> LCA / חזור: 14:50 LCA -> TLV), תיק גב + מזוודת טרולי 8 ק\"ג וליווי אישי של סוכן.",

      reviews_count_6: "(58 חוות דעת)",
      benefits_badge: "<i class='fa-solid fa-shield-halved'></i> התחייבות לאמינות BDTours",
      benefits_title: "חופשות פרימיום, ללא עמלות סוכנות מנופחות",
      benefits_desc: "BDTours מבוססת על מערכות יחסים ישירות עם שותפים. על ידי תיאום ישיר עם מלונות בוטיק מאומתים, בקתות וחברות טיולים, אנו מספקים איכות נסיעה פרימיום במחירים הוגנים במיוחד.",
      benefit_1_title: "תמחור טוב והוגן",
      benefit_1_desc: "תהנו מיוקרה ונוחות ללא פערי תיווך מוגזמים או עמלות נסתרות.",
      benefit_2_title: "טיפול מושלם בזוגות ומשפחות",
      benefit_2_desc: "תיהנו משדרוגים ותוספות מותאמים אישית שעוצבו במיוחד לדייטים רומנטיים או לטיולים משפחתיים.",
      success_title: "הפנייה נשלחה בהצלחה!",
      success_desc: "סוכן הנסיעות של BDTours קיבל את פנייתכם. מסלול טיול מותאם אישית והצעת מחיר ישירה בדרך לתיבת הדואר הנכנס שלכם!",
      btn_new_form: "טופס הזמנה חדש",
      form_title: "חשבו את הנופש האירופי שלכם",
      form_desc: "בחרו את חבילת הנופש שלכם ואת תוספות הנוחות כדי לראות הערכת מחיר בזמן אמת באופן מיידי.",
      label_name: "השם שלך",
      label_email: "כתובת אימייל",
      label_package: "בחירת חופשה",
      label_qty: "כמות (אורחים / לילות)",
      label_addons: "שדרגו את השהות (תוספות אופציונליות)",
      addon_meals: "<strong>חבילת סעודה פרימיום הכל כלול (+$40)</strong>: ארוחות גורמה מקומיות ויינות אזוריים שנבחרו על ידי שף מדי יום.",
      addon_guide: "<strong>מדריך סיורים פרטי מקומי (+$80)</strong>: מדריך היסטורי או שטח מוסמך לסיורים פרטיים מותאמים אישית.",
      addon_transfer: "<strong>העברה פרטית בדרגת VIP משדה התעופה (+$35)</strong>: הסעה יוקרתית ממוזגת מדלת לדלת ישירות למלון שלכם.",
      
      reviews_badge: "<i class='fa-solid fa-star'></i> מטיילים מאושרים",
      reviews_title: "חוויות לקוח מאומתות",
      reviews_desc: "קראו משוב כנה מזוגות ומשפחות שנהנו מאירופה ישירות עם תכנון החופשות של BDTours.",
      quote_1: "\"סוויטת המערה עם המרפסת לקלדרה בסנטוריני הייתה קסומה. הזמנה ישירה דרך BDTours חסכה עמלות סוכנות מיותרות באינטרנט, והכללת סיור היין המקומי הפרטי הייתה יוצאת דופן. החופשה הכי טובה אי פעם.\"",
      role_1: "אוהבי חופשות רומנטיות, בריטניה",
      quote_2: "\"הייתה לנו חופשה זוגית מדהימה ורומנטית בבוקרשט! מלון לאונרדו היה יוקרתי ומרכזי, הטיסות היו סופר נוחות, והליווי האישי הצמוד של הסוכן עזר לנו בכל שלב. תמורה מטורפת למחיר!\"",
      role_2: "מארגני טיולים משפחתיים, קנדה",
      blog_badge: "<i class='fa-solid fa-earth-europe'></i> תובנות מטיילים",
      blog_title: "בלוג הנסיעות של BDTours",
      blog_desc: "מדריכים מקצועיים ורשימות ציוד שנבקדו בקפידה כדי לעזור לכם לתכנן את החופשות הרומנטיות והמשפחתיות הטובות ביותר באירופה.",
      blog_date_0: "23 במאי 2026 • 5 דקות קריאה",
      blog_title_0: "רשימת הציוד האולטימטיבית לחופשה באיי יוון",
      blog_desc_0: "מבגדי נופש מוגני שמש ועד לאביזרי הליכה חיוניים, שלטו ברשימת הציוד המושלמת למטען קל עבור חופשת הקלדרה הרומנטית שלכם בסנטוריני.",
      blog_btn_read: "לקריאת המאמר <i class='fa-solid fa-arrow-left'></i>",
      blog_date_1: "18 במאי 2026 • 7 דקות קריאה",
      blog_title_1: "5 פניני הרים נסתרות ברומניה למשפחות",
      blog_desc_1: "הימלטו ממסלולי תיירות צפופים. גלו בקתות יער בתוליות, שבילי חיות בר מרהיבים ואירוח רומני מסורתי באפוסני ובקרפטים.",
      blog_date_2: "15 במאי 2026 • 6 דקות קריאה",
      blog_title_2: "כיצד למקסם סיטי ברייק של 3 ימים ברומא וונציה",
      blog_desc_2: "הימנעו מהמוני אדם, הזמינו את מסעדות המרפסת הישירות הטובות ביותר, ותכננו מסלול זוגי חלק המחבר בין שתי הערים ההיסטוריות הרומנטיות ביותר באיטליה.",
      modal_meta_0: "איי יוון • 23 במאי 2026",
      modal_meta_1: "טיולי הרים • 18 במאי 2026",
      modal_meta_2: "חופשות באיטליה • 15 במאי 2026",
      footer_desc: "נופש פרימיום לזוגות, חופשות משפחתיות באיכות גבוהה וסיטי ברייק מותאמים אישית באירופה. מבוסס על קשרים ישירים עם שותפים, תעריפים הוגנים ושקופים ותמיכה מקומית יוצאת דופן.",
      footer_col_explore: "ניווט",
      footer_home: "ראשי",
      footer_vacations: "חבילות נופש",
      footer_deals: "דילים מיוחדים",
      footer_booking: "טופס הזמנה",
      footer_blog: "בלוג",
      footer_col_partners: "השותפים שלנו",
      partner_dir: "ספריית שותפים",
      footer_col_newsletter: "מועדון המטיילים VIP",
      newsletter_desc: "הירשמו לקבלת 10% הנחה על החופשה הראשונה שלכם עם BDTours באירופה וקבלו את מדריך רשימת הציוד שלנו בחינם באופן מיידי!",
      badge_direct: "תעריפים ישירים",
      badge_secure: "100% מאובטח",
      footer_copyright: "&copy; 2026 Best Deal Tours&reg; | BDTours. כל הזכויות שמורות. כל ההזמנות המבוצעות ישירות שומרות על שלמות הנסיעה האיכותית.",
      terms: "תנאי שימוש",
      cookies: "מדיניות קוקיז",
      privacy: "מדיניות פרטיות",
      tag_rome: "דיל רומא",
      meta_rome_time: "3 לילות",
      meta_rome_guests: "זוג מבוגרים",
      meta_rome_flights: "טיסות ריינאייר כלולות",
      title_rome: "סופ\"ש רומנטי ברומא - קוליסאום ושקיעה",
      desc_rome: "חופשה רומנטית מדהימה ברומא! 3 לילות במלונות בוטיק נבחרים במרכז העיר (Anglo Americano / Trevi). כולל טיסות ישירות עם Ryanair, טרולי והעברות פרטיות וליווי של סוכן אישי 24/7!",
      reviews_count_rome: "(84 חוות דעת)",
      
      tag_panama: "פנמה אקולוגי",
      meta_canopy_time: "5 לילות",
      meta_canopy_guests: "2 מבוגרים + 2 ילדים",
      title_canopy: "מלון בקתת עץ בצמרות הג'ונגל - פנמה",
      desc_canopy: "חופשה אקולוגית משפחתית בלתי נשכחת! 5 לילות בבקתת עץ מפוארת בצמרות הג'ונגל של פנמה. כולל טיסות, העברות, סיורי שטח מודרכים יומיים וכל הארוחות ע\"ב רכיבים אורגניים!",
      reviews_count_canopy: "(36 חוות דעת)",
      
      tag_adventure: "הרפתקה אקטיבית",
      meta_kayak_time: "5 לילות",
      meta_kayak_guests: "זוג מבוגרים",
      title_kayak: "הרפתקת קיאקים ושיוט באיי יוון",
      desc_kayak: "הרפתקת ספורט מים זוגית! 5 לילות של שיוט וחתירה בקיאקים סביב האיים הקסומים של יוון. כולל ציוד קיאקים מקצועי, ליווי של מדריכי שטח מוסמכים, מלונות בוטיק ולינה וארוחת בוקר!",
      reviews_count_kayak: "(45 חוות דעת)",

      tag_mykonos: "דיל למיקונוס",
      meta_mykonos_time: "5 לילות",
      meta_mykonos_guests: "זוג מבוגרים",
      meta_mykonos_flights: "טיסות Blue Bird ישירות",
      title_mykonos: "חלום ליל קיץ במיקונוס - 5 לילות זוגי!",
      desc_mykonos: "חלום ליל קיץ במיקונוס (Erato Hotel Mykonos)<br>המחיר כולל:<br>• טיסות ישירות עם Blue Bird<br>• תיק יד ומזוודה עד 20 ק\"ג לכל נוסע<br>• מלון ע\"ב לינה וארוחת בוקר (קרוב לים)<br>• ליווי אישי וצמוד של סוכן 24/7",
      reviews_count_7: "(76 חוות דעת)",
      opt_mykonos: "חלום ליל קיץ במיקונוס, יוון (3840 ש\"ח לאדם)",
      funnel_step: "שלב",
      funnel_back: "חזרה",
      funnel_continue: "ממשיכים",
      funnel_all_fits: "הכל מתאים לי / פתוח להצעות",
      funnel_opt_family: "משפחה",
      funnel_opt_couple: "זוג",
      funnel_opt_solo: "רק אני",
      funnel_opt_friends: "חברים",
      month_june: "יוני",
      month_july: "יולי",
      month_august: "אוגוסט",
      month_september: "ספטמבר",
      month_october: "אוקטובר",
      month_november: "נובמבר",
      month_december: "דצמבר",
      month_january: "ינואר",
      month_february: "פברואר",
      month_march: "מרץ",
      month_april: "אפריל",
      month_may: "מאי",
      dest_greece: "יוון והאיים",
      dest_cyprus: "קפריסין (לרנקה)",
      dest_hungary: "הונגריה (בודפשט)",
      dest_romania: "רומניה (בוקרשט)",
      dest_bulgaria: "בולגריה (וארנה)",
      dest_europe: "שאר אירופה",
      style_beach: "בטן-גב וחופים",
      style_romantic: "זוגית ורומנטית",
      style_city: "סיטי ברייק אורבני",
      style_exotic: "יעדים אקזוטיים",
      style_shopping: "שופינג וקניות",
      style_kosher: "נופש כשר",
      meals_none: "ללא ארוחות",
      meals_bb: "לינה וארוחת בוקר",
      meals_hb: "חצי פנסיון (בוקר+ערב)",
      meals_all: "הכל כלול",
      label_phone: "טלפון ליצירת קשר",
      label_budget: "תקציב מוערך לאדם (₪)",
      btn_submit_inquiry: "שלח בקשת הזמנה"
    }
  };

  // ==========================================
  // 3. SEAMLESS LANGUAGE TOGGLE CONTROLLER
  // ==========================================
  const langButtons = document.querySelectorAll('.lang-btn');

  const setLanguage = (lang) => {
    // Save state locally
    localStorage.setItem('bdtours_language', lang);

    // Toggle html document properties
    if (lang === 'he') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'he');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }

    // Toggle active selector highlight buttons
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('remove'); // cleanup standard active class
        btn.classList.remove('active');
      }
    });

    // Translate all standard data-translate elements
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (dictionary[lang] && dictionary[lang][key]) {
        el.innerHTML = dictionary[lang][key];
      }
    });

    // Translate Inputs Placeholders
    const nameInput = document.getElementById('funnel-name');
    const emailInput = document.getElementById('funnel-email');
    const phoneInput = document.getElementById('funnel-phone');
    const budgetInput = document.getElementById('funnel-budget');
    if (nameInput) {
      nameInput.placeholder = lang === 'he' ? "אלכס כרטר" : "Alex Carter";
    }
    if (emailInput) {
      emailInput.placeholder = lang === 'he' ? "alex@travel.co.il" : "alex@travel.com";
    }
    if (phoneInput) {
      phoneInput.placeholder = lang === 'he' ? "052-1234567" : "052-1234567";
    }
    if (budgetInput) {
      budgetInput.placeholder = lang === 'he' ? "למשל: 3,000 ₪" : "e.g., $1,000";
    }

    // Render exact destination card prices based on currency transformer
    const updateCardPrice = (id, nisPrice) => {
      const el = document.getElementById(id);
      if (el) {
        el.innerText = lang === 'he' ? `${nisPrice} ש"ח` : `$${Math.round(convertNISToUSD(nisPrice))}`;
      }
    };
    updateCardPrice('card-price-santorini', 15350);
    updateCardPrice('card-price-bucharest', 2340);
    updateCardPrice('card-price-budapest', 2520);
    updateCardPrice('card-price-bulgaria', 14160);
    updateCardPrice('card-price-cyprus', 2100);
    updateCardPrice('card-price-mykonos', 3840);
    updateCardPrice('card-price-rome', 2275);
    updateCardPrice('card-price-canopy', 12740);
    updateCardPrice('card-price-kayak', 4400);

    // Sync assistant text
    if (typeof updateAssistantText === 'function') {
      updateAssistantText();
    }
    
    // Sync WhatsApp Floating widget text
    const waTextEl = document.querySelector('.floating-whatsapp-btn span');
    if (waTextEl) {
      waTextEl.innerText = dictionary[lang]['whatsapp_floating_text'];
    }
  };

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // ==========================================
  // 4. DYNAMIC DEALS REAL-TIME COUNTDOWN
  // ==========================================
  // Set targeted deals clock ending June 25, 2026 (Budapest)
  const countdownTarget = new Date("Jun 25, 2026 10:10:00").getTime();

  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownTarget - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownInterval);
      const currentLang = localStorage.getItem('bdtours_language') || 'en';
      const extendMsg = currentLang === 'he' ? "ההטבה המיוחדת הועברה להזמנות ישירות!" : "VOUCHER EXTENDED! BOOK DIRECT NOW";
      const timerNumbersEl = document.querySelector('.timer-numbers');
      if (timerNumbersEl) timerNumbersEl.innerHTML = `<h3 style='color: var(--sunset-orange); font-family: var(--font-headings); font-weight:800; text-align:center; width:100%;'>${extendMsg}</h3>`;
    }
  }, 1000);

  // Set Cyprus deals clock ending June 18, 2026
  const countdownTargetCyprus = new Date("Jun 18, 2026 13:05:00").getTime();

  const countdownIntervalCyprus = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownTargetCyprus - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('cyprus-days');
    const hoursEl = document.getElementById('cyprus-hours');
    const minutesEl = document.getElementById('cyprus-minutes');
    const secondsEl = document.getElementById('cyprus-seconds');

    if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.innerText = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownIntervalCyprus);
      const currentLang = localStorage.getItem('bdtours_language') || 'en';
      const extendMsg = currentLang === 'he' ? "ההטבה המיוחדת הועברה להזמנות ישירות!" : "VOUCHER EXTENDED! BOOK DIRECT NOW";
      const timerNumbersEl = document.querySelector('.cyprus-timer-numbers');
      if (timerNumbersEl) timerNumbersEl.innerHTML = `<h3 style='color: var(--sunset-orange); font-family: var(--font-headings); font-weight:800; text-align:center; width:100%;'>${extendMsg}</h3>`;
    }
  }, 1000);

  // ==========================================
  // 5. CATEGORY TABS FILTERING & ROW HEADERS HIDING
  // ==========================================
  const tabButtons = document.querySelectorAll('.filter-tabs button.tab-btn');
  const destCards = document.querySelectorAll('.dest-card');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active tab button
      document.querySelectorAll('.filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      const grid = document.querySelector('.destination-grid');
      
      if (grid) {
        grid.classList.remove('compact-view');
        grid.classList.remove('single-card-view');
      }
      
      destCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (categories.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Clean up the URL search parameters so it doesn't keep the single card view on page reload
      window.history.replaceState({}, document.title, window.location.pathname + `?filter=${filter}`);
    });
  });

  // ==========================================
  // 6. VACATION CARD CLICK HANDLER (Direct WhatsApp Payload & Redirection)
  // ==========================================
  const selectRetreatButtons = document.querySelectorAll('.select-retreat-btn');
  selectRetreatButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const retreatCode = btn.getAttribute('data-retreat');
      const currentLang = localStorage.getItem('bdtours_language') || 'he';
      const isHebrew = currentLang === 'he';
      
      let retreatName = "";
      let price = "";
      
      if (retreatCode === 'santorini') {
        retreatName = isHebrew ? "חבילת משפחה לרודוס יוון (6 לילות, 2 מבוגרים + 2 ילדים)" : "Rhodes Family Package, Greece (6 Nights, 2 Adults + 2 Kids)";
        price = isHebrew ? "15,350 ₪" : "$5,060";
      } else if (retreatCode === 'bulgaria') {
        retreatName = isHebrew ? "חבילת משפחה לוארנה בולגריה (6 לילות, הכל כלול, 2 מבוגרים + 2 ילדים)" : "Varna Family Package, Bulgaria (6 Nights, All-Inclusive, 2+2)";
        price = isHebrew ? "14,160 ₪" : "$4,668";
      } else if (retreatCode === 'budapest') {
        retreatName = isHebrew ? "חבילת סופ\"ש זוגי בבודפשט הונגריה (4 לילות)" : "Budapest Couples Weekend, Hungary (4 Nights)";
        price = isHebrew ? "2,520 ₪ לאדם" : "$831 / person";
      } else if (retreatCode === 'bucharest') {
        retreatName = isHebrew ? "חבילת סופ\"ש רגוע בבוקרשט רומניה (4 לילות)" : "Bucharest Couples Getaway, Romania (4 Nights)";
        price = isHebrew ? "2,340 ₪ לאדם" : "$771 / person";
      } else if (retreatCode === 'cyprus') {
        retreatName = isHebrew ? "חבילת סופ\"ש חוף וסיטי בלרנקה קפריסין (4 לילות)" : "Cyprus Larnaca Beach & City Weekend (4 Nights)";
        price = isHebrew ? "2,100 ₪ לאדם" : "$692 / person";
      } else if (retreatCode === 'mykonos') {
        retreatName = isHebrew ? "חלום ליל קיץ במיקונוס יוון (5 לילות, מלון על החוף)" : "Mykonos Beachfront Couples Escape, Greece (5 Nights)";
        price = isHebrew ? "3,840 ₪ לאדם / 7,680 ₪ לזוג" : "$1,266 / person";
      } else if (retreatCode === 'rome') {
        retreatName = isHebrew ? "חבילת סופ\"ש רומנטי ברומא איטליה (3 לילות)" : "Rome Couples Weekend Break, Italy (3 Nights)";
        price = isHebrew ? "2,275 ₪ לאדם" : "$750 / person";
      } else if (retreatCode === 'canopy') {
        retreatName = isHebrew ? "חבילת נופש אקולוגי בבית על העץ בפנמה (5 לילות)" : "Canopy Jungle Treehouse Lodge, Panama (5 Nights)";
        price = isHebrew ? "12,740 ₪" : "$4,200";
      } else if (retreatCode === 'kayak') {
        retreatName = isHebrew ? "חבילת הרפתקאות שיוט וקיאקים באיי יוון (5 לילות)" : "Coastal Kayak Active Adventure, Greece (5 Nights)";
        price = isHebrew ? "4,400 ₪ לאדם" : "$1,450 / person";
      }
      
      let msg = "";
      if (isHebrew) {
        msg = `שלום! אני מעוניין לקבל פרטים נוספים ולבצע הזמנה לחבילה הבאה באתר BDTours:
• חבילה: ${retreatName}
• מחיר מפורסם: ${price}

אשמח אם סוכן נסיעות יחזור אליי כדי לתאם את פרטי הטיסות והמלון בהקדם!`;
      } else {
        msg = `Hello! I am interested in booking the following holiday package on BDTours:
• Package: ${retreatName}
• Price: ${price}

Please contact me to finalize flights and accommodation details!`;
      }
      
      const whatsappUrl = `https://wa.me/972523279179?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, '_blank');
      
      // Also pre-select the destination in the step-3 funnel!
      let destVal = "";
      if (retreatCode === 'santorini' || retreatCode === 'mykonos' || retreatCode === 'kayak') destVal = "יוון והאיים";
      else if (retreatCode === 'cyprus') destVal = "קפריסין";
      else if (retreatCode === 'budapest') destVal = "הונגריה (בודפשט)";
      else if (retreatCode === 'bucharest') destVal = "רומניה (בוקרשט)";
      else if (retreatCode === 'bulgaria') destVal = "בולגריה (וארנה)";
      else if (retreatCode === 'rome' || retreatCode === 'canopy') destVal = "אירופה";

      if (destVal) {
        choices.destinations.clear();
        choices.destinations.add(destVal);
        document.querySelectorAll('.funnel-step[data-step="3"] .funnel-btn').forEach(b => {
          if (b.getAttribute('data-val') === destVal) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      }
      
      // Scroll to the wizard form container so they can complete the rest of the options
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Cross-page routing via URL query parameters and compact-view click redirection
  const isAllVacationsPage = window.location.pathname.includes('all-vacations.html');
  const destCardsElements = document.querySelectorAll('.dest-card');
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  const retreatParam = urlParams.get('retreat');

  if (isAllVacationsPage) {
    // Force compact-view class on grid
    const grid = document.querySelector('.destination-grid');
    if (grid) {
      grid.classList.add('compact-view');
    }
    
    // Clicking any card on all-vacations page redirects to index.html with query parameters
    destCardsElements.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        
        const retreat = card.getAttribute('data-retreat');
        const categories = card.getAttribute('data-category').split(' ');
        
        let targetFilter = 'family';
        if (categories.includes('family')) targetFilter = 'family';
        else if (categories.includes('city')) targetFilter = 'city';
        else if (categories.includes('beach')) targetFilter = 'beach';
        
        window.location.href = `index.html?filter=${targetFilter}&retreat=${retreat}`;
      });
    });
  } else {
    // Router logic for index.html
    const grid = document.querySelector('.destination-grid');
    if (grid) {
      grid.classList.remove('compact-view');
      if (retreatParam) {
        grid.classList.add('single-card-view');
      } else {
        grid.classList.remove('single-card-view');
      }
    }

    let activeFilter = filterParam || 'family';
    
    // Programmatically select tab and hide other category cards
    const targetTab = document.querySelector(`.filter-tabs button[data-filter="${activeFilter}"]`);
    if (targetTab) {
      document.querySelectorAll('.filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      targetTab.classList.add('active');
    }
    
    destCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(' ');
      const retreat = card.getAttribute('data-retreat');
      
      // If we are showing a specific retreat, hide all other cards!
      if (retreatParam) {
        if (retreat === retreatParam) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      } else {
        // Otherwise filter by category normally
        if (categories.includes(activeFilter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });

    if (retreatParam) {
      const targetCard = document.querySelector(`.dest-card[data-retreat="${retreatParam}"]`);
      if (targetCard) {
        setTimeout(() => {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('highlight-glow');
          setTimeout(() => {
            targetCard.classList.remove('highlight-glow');
          }, 2000);
        }, 300);
      }
    }
  }

  // Claim Deal (Countdown Urgency clicks)
  const claimBudapestBtn = document.getElementById('claim-budapest-btn');
  if (claimBudapestBtn) {
    claimBudapestBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem('bdtours_language') || 'he';
      const isHebrew = currentLang === 'he';
      const msg = isHebrew
        ? "שלום! אני רוצה להזמין את דיל הבזק לבודפשט (סופ\"ש 25-29 ביוני 2026) במחיר 2,520 ₪ לאדם. אנא חזרו אליי בהקדם!"
        : "Hello! I would like to book the Budapest flash deal (25-29 June 2026) for 2520 NIS per person. Please contact me to secure this!";
      window.open(`https://wa.me/972523279179?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  const claimCyprusBtn = document.getElementById('claim-cyprus-btn');
  if (claimCyprusBtn) {
    claimCyprusBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem('bdtours_language') || 'he';
      const isHebrew = currentLang === 'he';
      const msg = isHebrew
        ? "שלום! אני רוצה להזמין את דיל הבזק לקפריסין (סופ\"ש 18-22 ביוני 2026) במחיר 2,100 ₪ לאדם. אנא חזרו אליי בהקדם!"
        : "Hello! I would like to book the Cyprus flash deal (18-22 June 2026) for 2100 NIS per person. Please contact me to secure this!";
      window.open(`https://wa.me/972523279179?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // ==========================================
  // 7. INTERACTIVE FUNNEL STATE ENGINE & CONTROLLER
  // ==========================================
  const funnelContainer = document.getElementById('funnel-container');
  const funnelSteps = document.querySelectorAll('.funnel-step');
  const funnelPrevButtons = document.querySelectorAll('.funnel-prev');
  const funnelNextButtons = document.querySelectorAll('.funnel-next');
  const funnelStepNum = document.getElementById('funnel-step-num');
  const funnelProgressBar = document.getElementById('funnel-progress');
  const assistantBubbleText = document.getElementById('assistant-text');
  const cursorFollower = document.getElementById('cursor-follower');

  // Funnel State variables
  let currentStep = 1;
  const maxSteps = 8;
  const choices = {
    composition: '',
    months: new Set(),
    destinations: new Set(),
    nights: new Set(),
    styles: new Set(),
    meals: new Set(),
    stars: new Set()
  };

  // Funnel Assistant Question Strings
  const assistantQuestions = {
    he: {
      q1: "היי! בואו נתחיל. מי מצטרף אליכם לחופשה החלומית שלכם?",
      q2: "מתי אתם מתכננים לטוס? (אפשר לבחור כמה חודשים מועדפים)",
      q3: "לאילו יעדים הייתם רוצים לטוס?",
      q4: "לכמה לילות בערך תרצו שהחופשה תהיה?",
      q5: "מהו סגנון החופשה שאתם הכי אוהבים?",
      q6: "איזה בסיס אירוח מועדף עליכם במלון?",
      q7: "מהי דרגת הדירוג (כוכבים) של המלון שתרצו?",
      q8: "כמעט סיימנו! השאירו פרטים ותקציב כדי שאוכל לתפור לכם את הדיל המושלם!"
    },
    en: {
      q1: "Hey! Let's start. Who is joining your dream holiday?",
      q2: "When are you planning to fly? (You can select multiple months)",
      q3: "Which destinations would you like to fly to?",
      q4: "For about how many nights would you like the holiday to be?",
      q5: "What style of vacation do you love the most?",
      q6: "Which dining board option do you prefer at the hotel?",
      q7: "What hotel star rating would you like?",
      q8: "Almost done! Leave your details and budget so I can tailor the perfect deal for you!"
    }
  };

  // Sync assistant text based on current language and step (declared globally in scope for setLanguage)
  window.updateAssistantText = () => {
    const lang = localStorage.getItem('bdtours_language') || 'he';
    const qKey = `q${currentStep}`;
    if (assistantBubbleText && assistantQuestions[lang] && assistantQuestions[lang][qKey]) {
      // Smooth fade text transition
      assistantBubbleText.style.opacity = 0;
      setTimeout(() => {
        assistantBubbleText.innerHTML = assistantQuestions[lang][qKey];
        assistantBubbleText.style.opacity = 1;
      }, 150);
    }
  };

  // Update Progress Bar
  const updateProgress = () => {
    if (funnelStepNum) funnelStepNum.innerText = currentStep;
    if (funnelProgressBar) {
      const percentage = (currentStep / maxSteps) * 100;
      funnelProgressBar.style.width = `${percentage}%`;
    }
    window.updateAssistantText();
  };

  // Slide Step Transition
  const goToStep = (targetStep, direction) => {
    const currentActive = document.querySelector('.funnel-step.active');
    const target = document.querySelector(`.funnel-step[data-step="${targetStep}"]`);
    
    if (currentActive && target) {
      // Clear previous classes
      funnelSteps.forEach(step => {
        step.classList.remove('active', 'slide-in', 'slide-out');
      });
      
      currentActive.classList.add('slide-out');
      target.classList.add('slide-in');
      
      setTimeout(() => {
        currentActive.classList.remove('slide-out');
        target.classList.remove('slide-in');
        target.classList.add('active');
        
        // Re-bind cursor hover events on new visible buttons
        if (typeof bindCursorHoverEvents === 'function') {
          bindCursorHoverEvents();
        }
      }, 400);
    }
  };

  // Step 1: Composition selection (Single select)
  const step1Buttons = document.querySelectorAll('.funnel-step[data-step="1"] .funnel-btn');
  step1Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      step1Buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      choices.composition = btn.getAttribute('data-val');
      
      // Auto-advance after 400ms
      setTimeout(() => {
        currentStep = 2;
        goToStep(2, 'next');
        updateProgress();
      }, 400);
    });
  });

  // Step 2-7: Multi-select button click handlers
  const multiSelectButtons = document.querySelectorAll('.funnel-btn.multi-select');
  multiSelectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepVal = btn.closest('.funnel-step').getAttribute('data-step');
      const val = btn.getAttribute('data-val');
      let targetSet = null;
      
      if (stepVal === '2') targetSet = choices.months;
      else if (stepVal === '3') targetSet = choices.destinations;
      else if (stepVal === '4') targetSet = choices.nights;
      else if (stepVal === '5') targetSet = choices.styles;
      else if (stepVal === '6') targetSet = choices.meals;
      else if (stepVal === '7') targetSet = choices.stars;
      
      if (targetSet) {
        if (targetSet.has(val)) {
          targetSet.delete(val);
          btn.classList.remove('active');
        } else {
          targetSet.add(val);
          btn.classList.add('active');
        }
      }
    });
  });

  // Step 3 and 5: "All fits / Open to all" clicks
  const destAllFits = document.getElementById('dest-all-fits');
  if (destAllFits) {
    destAllFits.addEventListener('click', () => {
      choices.destinations.clear();
      document.querySelectorAll('.funnel-step[data-step="3"] .funnel-btn.multi-select').forEach(b => b.classList.remove('active'));
      currentStep = 4;
      goToStep(4, 'next');
      updateProgress();
    });
  }

  const styleAllFits = document.getElementById('style-all-fits');
  if (styleAllFits) {
    styleAllFits.addEventListener('click', () => {
      choices.styles.clear();
      document.querySelectorAll('.funnel-step[data-step="5"] .funnel-btn.multi-select').forEach(b => b.classList.remove('active'));
      currentStep = 6;
      goToStep(6, 'next');
      updateProgress();
    });
  }

  // Navigation buttons
  funnelPrevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        goToStep(currentStep, 'prev');
        updateProgress();
      }
    });
  });

  funnelNextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < maxSteps) {
        currentStep++;
        goToStep(currentStep, 'next');
        updateProgress();
      }
    });
  });

  // Form submission handler
  const funnelContactForm = document.getElementById('funnel-contact-form');
  const successOverlay = document.getElementById('success-overlay');
  
  if (funnelContactForm) {
    funnelContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('funnel-name').value;
      const phone = document.getElementById('funnel-phone').value;
      const email = document.getElementById('funnel-email').value;
      const budget = document.getElementById('funnel-budget').value;
      
      const currentLang = localStorage.getItem('bdtours_language') || 'he';
      const isHebrew = currentLang === 'he';
      
      // Parse Sets into highly readable text summaries
      const parseSet = (setObj, fallbackText) => {
        return setObj.size > 0 ? Array.from(setObj).join(', ') : fallbackText;
      };
      
      const monthsText = parseSet(choices.months, isHebrew ? "גמיש" : "Flexible");
      const destinationsText = parseSet(choices.destinations, isHebrew ? "הכל מתאים לי / פתוח להצעות" : "Open to all options");
      const nightsText = parseSet(choices.nights, isHebrew ? "גמיש" : "Flexible");
      const stylesText = parseSet(choices.styles, isHebrew ? "הכל מתאים לי / פתוח להצעות" : "Open to all options");
      const mealsText = parseSet(choices.meals, isHebrew ? "גמיש" : "Flexible");
      const starsText = parseSet(choices.stars, isHebrew ? "גמיש" : "Flexible");
      
      // Show success screen and trigger confetti
      if (successOverlay) {
        successOverlay.classList.add('active');
        spawnConfetti();
      }
      
      // WhatsApp message formulation
      let msg = "";
      if (isHebrew) {
        msg = `שלום! אני מעוניין לקבל הצעת מחיר מותאמת אישית מ-BDTours.
הנה הבחירות שלי מהעוזר הדיגיטלי:
• הרכב נוסעים: ${choices.composition || "לא נבחר"}
• חודשי טיסה מועדפים: ${monthsText}
• יעדים מועדפים: ${destinationsText}
• כמות לילות מועדפת: ${nightsText}
• סגנון החופשה: ${stylesText}
• בסיס אירוח מועדף: ${mealsText}
• דירוג מלון מבוקש: ${starsText}

פרטי קשר ותקציב:
• שם מלא: ${name}
• טלפון: ${phone}
• אימייל: ${email}
• תקציב מוערך: ${budget}

אשמח אם תחזרו אליי עם הצעות מתאימות בהקדם!`;
      } else {
        msg = `Hello! I would like to get a tailored holiday quote from BDTours.
Here are my choices from the Digital Assistant:
• Guests: ${choices.composition || "Not specified"}
• Preferred Months: ${monthsText}
• Preferred Destinations: ${destinationsText}
• Duration (Nights): ${nightsText}
• Vacation Style: ${stylesText}
• Hotel Meals Plan: ${mealsText}
• Hotel Star Rating: ${starsText}

Contact & Budget:
• Full Name: ${name}
• Phone: ${phone}
• Email: ${email}
• Estimated Budget: ${budget}

Please get back to me with the best direct rate deals!`;
      }
      
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/972523279179?text=${encodeURIComponent(msg)}`;
        window.open(whatsappUrl, '_blank');
      }, 1500);
    });
  }

  // Reset button logic
  const resetFormBtn = document.getElementById('reset-form-btn');
  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      // Hide success overlay
      if (successOverlay) successOverlay.classList.remove('active');
      
      // Reset form
      if (funnelContactForm) funnelContactForm.reset();
      
      // Reset state choices
      choices.composition = '';
      choices.months.clear();
      choices.destinations.clear();
      choices.nights.clear();
      choices.styles.clear();
      choices.meals.clear();
      choices.stars.clear();
      
      // Remove active classes on all buttons
      document.querySelectorAll('.funnel-btn').forEach(btn => btn.classList.remove('active'));
      
      // Go to step 1
      currentStep = 1;
      goToStep(1, 'prev');
      updateProgress();
    });
  }

  // Confetti Particles Generator
  const spawnConfetti = () => {
    const parent = document.getElementById('success-overlay');
    if (!parent) return;

    const colors = ['#00F2FE', '#4FACFE', '#FF0844', '#FFB199', '#FAD961', '#F76B1C', '#30C7EC', '#3F5EFB'];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = `${Math.random() * 8 + 4}px`;
      confetti.style.height = `${Math.random() * 10 + 6}px`;
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '100% 0 100% 0';
      confetti.style.left = '50%';
      confetti.style.top = '50%';
      confetti.style.transform = 'translate(-50%, -50%)';
      confetti.style.opacity = '1';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '12';

      parent.appendChild(confetti);

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 250 + 100;
      const targetX = Math.cos(angle) * velocity;
      const targetY = Math.sin(angle) * velocity - 100;

      confetti.animate([
        { transform: 'translate(-50%, -50%) translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${targetX}px, ${targetY}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
      ], {
        duration: Math.random() * 1200 + 800,
        easing: 'cubic-bezier(0.1, 1, 0.1, 1)',
        fill: 'forwards'
      });

      setTimeout(() => confetti.remove(), 2500);
    }
  };

  // Trailing Lerping Cursor Follower & Magnetic Suction logic
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;
  let isHovering = false;
  let isMagnetic = false;
  let targetBtn = null;

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  
  // Custom cursor follower only runs on desktop (non-touch) to guarantee performance
  if (!isTouchDevice && cursorFollower) {
    document.body.classList.add('cursor-active');

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const tick = () => {
      if (isMagnetic && targetBtn) {
        const rect = targetBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        followerX += (btnCenterX - followerX) * 0.25;
        followerY += (btnCenterY - followerY) * 0.25;
      } else {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
      }

      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;

      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    window.bindCursorHoverEvents = () => {
      const interactiveEls = document.querySelectorAll('a, button, .funnel-btn, input, select, textarea');
      interactiveEls.forEach(el => {
        // If magnetic button
        if (el.classList.contains('magnetic-button')) {
          el.addEventListener('mouseenter', () => {
            isMagnetic = true;
            targetBtn = el;
            cursorFollower.classList.add('magnetic');
          });
          el.addEventListener('mouseleave', () => {
            isMagnetic = false;
            targetBtn = null;
            cursorFollower.classList.remove('magnetic');
            el.style.transform = '';
          });
          
          el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const elCenterX = rect.left + rect.width / 2;
            const elCenterY = rect.top + rect.height / 2;
            const deltaX = e.clientX - elCenterX;
            const deltaY = e.clientY - elCenterY;
            
            const pullForce = 8;
            const pullX = (deltaX / (rect.width / 2)) * pullForce;
            const pullY = (deltaY / (rect.height / 2)) * pullForce;
            
            el.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.02)`;
          });
        } else {
          el.addEventListener('mouseenter', () => {
            isHovering = true;
            cursorFollower.classList.add('hovering');
          });
          el.addEventListener('mouseleave', () => {
            isHovering = false;
            cursorFollower.classList.remove('hovering');
          });
        }
      });
    };
    
    // Initial binding
    window.bindCursorHoverEvents();
  }

  // Modals click setup
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('close-modal')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Newsletter submission
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input');
      const currentLang = localStorage.getItem('bdtours_language') || 'he';
      
      const alertMsg = currentLang === 'he' 
        ? `✈️ ברוכים הבאים למועדון המטיילים! שלחנו קוד הנחה ישיר של 10% ורשימת ציוד חיונית לחופשות באירופה בחינם לכתובת: ${emailInput.value}`
        : `✈️ Welcome Explorer! We've sent a 10% direct discount code and your free "European Getaway packing checklist" PDF to: ${emailInput.value}`;
      
      alert(alertMsg);
      emailInput.value = '';
    });
  }

  // Initial call to set up Step 1 Progress and Assistant Bubble Text and load language
  const savedLang = localStorage.getItem('bdtours_language') || 'he';
  setLanguage(savedLang);

});
