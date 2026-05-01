const MEDGEO_SELECTED_PHARMACY_KEY = 'medgeoSelectedPharmacy';
const MEDGEO_RECEIPT_KEY = 'medgeoLatestReceipt';
const MEDGEO_CHECKOUT_STATUS_KEY = 'medgeoCheckoutStatus';
const SHOPPING_SERVICE_FEE = 2500;
const PRODUCT_IMAGE_BASE_PATH = '';

// Edit gambar produk di sini dengan format:
// imageFile: 'nama-file-gambar.jpeg'
// Kosongkan jika belum ada gambar.
const SHOPPING_PRODUCT_LIBRARY = [
    {
        slug: 'paracetamol',
        name: 'Paracetamol 500 mg',
        department: 'Demam & Nyeri',
        category: 'Obat Demam',
        price: 10000,
        tags: ['demam', 'nyeri', 'sakit kepala'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Membantu meredakan demam dan nyeri ringan sampai sedang.',
        prescription: false,
        imageFile: 'paracetamol.jpeg',
        featured: true
    },
    {
        slug: 'lecozinc',
        name: 'Lecozinc Tablet',
        department: 'Pencernaan',
        category: 'Pemulihan Diare',
        price: 28000,
        tags: ['diare', 'zinc', 'pemulihan'],
        dosage: 'Tablet dispersible 20 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Sering dipilih sebagai pendamping oralit untuk membantu pemulihan saat diare.',
        prescription: false,
        imageFile: 'lecozinc.jpeg',
        featured: true
    },
    {
        slug: 'antasida-doen',
        name: 'Antasida DOEN Tablet',
        department: 'Pencernaan',
        category: 'Asam Lambung',
        price: 12000,
        tags: ['mual', 'asam lambung', 'maag'],
        dosage: 'Tablet kunyah',
        pack: '1 strip isi 10 tablet',
        note: 'Cocok untuk keluhan perut begah, mual, dan nyeri ulu hati ringan.',
        prescription: false,
        imageFile: 'antasida-doen.jpeg',
        featured: true
    },
    {
        slug: 'masker',
        name: 'Masker Medis 3 Ply',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 18000,
        tags: ['masker', 'alat kesehatan', 'harian'],
        dosage: 'Masker sekali pakai',
        pack: '1 box isi 50 pcs',
        note: 'Perlengkapan kesehatan harian untuk perlindungan dasar.',
        prescription: false,
        imageFile: 'masker-3ply.jpeg',
        featured: true
    },
    {
        slug: 'attapulgite',
        name: 'Attapulgite 600 mg',
        department: 'Pencernaan',
        category: 'Pencernaan',
        price: 15000,
        tags: ['diare', 'pencernaan', 'perut'],
        dosage: 'Tablet 600 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Membantu meredakan gejala diare ringan dan rasa tidak nyaman pada perut.',
        prescription: false,
        imageFile: 'attapulgite.jpeg',
        featured: false
    },
    {
        slug: 'oralit',
        name: 'Oralit 200 Sachet',
        department: 'Pencernaan',
        category: 'Pemulihan',
        price: 8000,
        tags: ['pemulihan', 'diare', 'muntah', 'dehidrasi'],
        dosage: 'Serbuk oralit 200 ml',
        pack: '1 sachet',
        note: 'Membantu mengganti cairan tubuh saat dehidrasi akibat diare atau muntah.',
        prescription: false,
        imageFile: 'oralit.png',
        featured: false
    },
    {
        slug: 'amoxicillin',
        name: 'Amoxicillin 500 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 22000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Kapsul 500 mg',
        pack: '1 strip isi 10 kapsul',
        note: 'Antibiotik untuk kebutuhan tertentu dan sebaiknya digunakan sesuai anjuran tenaga medis.',
        prescription: true,
        imageFile: 'amoxilin.jpeg',
        featured: true
    },
    {
        slug: 'cefalexina',
        name: 'Cefalexina 250 mg/5 mL',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 33000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Suspensi oral 250 mg/5 mL',
        pack: '1 botol 100 ml',
        note: 'Antibiotik generik cefalexina untuk penggunaan tertentu sesuai resep tenaga medis.',
        prescription: true,
        imageFile: 'cefalexina-250mg-5ml.jpeg',
        featured: false
    },
    {
        slug: 'cefixime',
        name: 'Cefixime 100 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 36000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Kapsul 100 mg',
        pack: '1 strip isi 10 kapsul',
        note: 'Antibiotik yang umum dicari dan digunakan sesuai resep tenaga medis.',
        prescription: true,
        imageFile: 'cefixime-100mg.jpeg',
        featured: false
    },
    {
        slug: 'azithromycin',
        name: 'Azithromycin 500 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 42000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 3 tablet',
        note: 'Pilihan antibiotik populer untuk kebutuhan tertentu sesuai arahan dokter.',
        prescription: true,
        imageFile: 'azithromycin-500mg.jpeg',
        featured: false
    },
    {
        slug: 'ciprofloxacin',
        name: 'Ciprofloxacin 500 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 30000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Antibiotik resep yang sering tersedia di apotek untuk kondisi tertentu.',
        prescription: true,
        imageFile: 'ciprofloxacin-500mg.jpeg',
        featured: false
    },
    {
        slug: 'clindamycin',
        name: 'Clindamycin 300 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 39000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Kapsul 300 mg',
        pack: '1 strip isi 10 kapsul',
        note: 'Obat antibiotik yang umum dicari dan perlu digunakan dengan resep.',
        prescription: true,
        imageFile: 'clindamycin-300mg.jpeg',
        featured: false
    },
    {
        slug: 'flexible-digital-thermometer',
        name: 'Flexible Digital Thermometer',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 52000,
        tags: ['termometer', 'alat kesehatan', 'cek suhu'],
        dosage: 'Digital',
        pack: '1 unit',
        note: 'Termometer digital fleksibel untuk membantu memantau suhu tubuh di rumah.',
        prescription: false,
        imageFile: 'flexible-digital-thermometer.jpeg',
        featured: false
    },
    {
        slug: 'vitamin-c',
        name: 'Vitamin C 1000 mg',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 35000,
        tags: ['vitamin', 'imun', 'harian'],
        dosage: 'Tablet effervescent',
        pack: '1 tube isi 10 tablet',
        note: 'Membantu menjaga daya tahan tubuh dan cocok untuk kebutuhan harian.',
        prescription: false,
        imageFile: 'vitamin c.jpeg',
        featured: true
    },
    {
        slug: 'sirup-batuk',
        name: 'OB Herbal Sirup Obat Batuk 60 ml',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 27000,
        tags: ['batuk', 'flu', 'tenggorokan'],
        dosage: 'Sirup 60 ml',
        pack: '1 botol',
        note: 'Membantu meredakan batuk dan melegakan tenggorokan dengan formula herbal.',
        prescription: false,
        imageFile: 'ob-herbal-sirup-60ml.jpeg',
        featured: true
    },
    {
        slug: 'ambroxol',
        name: 'Ambroxol Couxin 30 mg Tablet',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 18000,
        tags: ['batuk', 'dahak', 'flu'],
        dosage: 'Tablet 30 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Membantu meredakan batuk berdahak dan membuat tenggorokan terasa lebih lega.',
        prescription: false,
        imageFile: 'ambroxol-couxin-30mg.jpeg',
        featured: false
    },
    {
        slug: 'loratadine',
        name: 'Good Neighbor Pharmacy Loratadine Tablets 10 mg',
        department: 'Batuk, Flu & Alergi',
        category: 'Alergi',
        price: 15000,
        tags: ['alergi', 'bersin', 'gatal'],
        dosage: 'Tablet 10 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Pilihan antihistamin untuk membantu gejala alergi harian seperti bersin dan gatal.',
        prescription: false,
        imageFile: 'gnp-loratadine-10mg.jpeg',
        featured: false
    },
    {
        slug: 'ibuprofen',
        name: 'GoodSense Ibuprofen Tablets 200 mg',
        department: 'Demam & Nyeri',
        category: 'Nyeri & Peradangan',
        price: 16000,
        tags: ['nyeri', 'radang', 'demam'],
        dosage: 'Tablet 200 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Membantu meredakan nyeri ringan hingga sedang dan menurunkan demam.',
        prescription: false,
        imageFile: 'goodsense-ibuprofen-200mg.jpeg',
        featured: false
    },
    {
        slug: 'paracetamol-anak',
        name: 'Panadol Anak-anak Paracetamol Syrup 60 ml',
        department: 'Demam & Nyeri',
        category: 'Obat Demam',
        price: 24000,
        tags: ['demam', 'anak', 'sirup'],
        dosage: 'Sirup 60 ml',
        pack: '1 botol',
        note: 'Varian sirup untuk membantu penanganan demam anak sesuai dosis usia.',
        prescription: false,
        imageFile: 'panadol-anak-60ml.jpeg',
        featured: false
    },
    {
        slug: 'bodrex',
        name: 'Bodrex Tablet',
        department: 'Demam & Nyeri',
        category: 'Sakit Kepala',
        price: 9000,
        tags: ['sakit kepala', 'nyeri', 'demam'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Obat populer untuk membantu meredakan sakit kepala dan nyeri ringan.',
        prescription: false,
        imageFile: 'bodrex-tablet.jpeg',
        featured: false
    },
    {
        slug: 'sanmol',
        name: 'Sanmol Tablet 500 mg',
        department: 'Demam & Nyeri',
        category: 'Obat Demam',
        price: 12000,
        tags: ['demam', 'nyeri', 'paracetamol'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Produk paracetamol yang sering dibeli untuk demam dan nyeri ringan.',
        prescription: false,
        imageFile: 'sanmol-tablet.jpeg',
        featured: false
    },
    {
        slug: 'ponstan',
        name: 'Ponstan 500 mg',
        department: 'Demam & Nyeri',
        category: 'Nyeri',
        price: 28000,
        tags: ['nyeri', 'sakit gigi', 'resep'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Obat nyeri yang dikenal luas dan sebaiknya digunakan sesuai anjuran tenaga medis.',
        prescription: true,
        imageFile: 'ponstan-500mg.jpeg',
        featured: false
    },
    {
        slug: 'tempra',
        name: 'Tempra Syrup 60 ml',
        department: 'Demam & Nyeri',
        category: 'Obat Demam',
        price: 32000,
        tags: ['demam', 'anak', 'sirup'],
        dosage: 'Sirup 60 ml',
        pack: '1 botol',
        note: 'Sirup penurun demam anak yang sering dicari untuk kebutuhan keluarga.',
        prescription: false,
        imageFile: 'tempra-syrup-60ml.jpeg',
        featured: false
    },
    {
        slug: 'trust-cetirizine',
        name: 'Trust Cetirizine Antihistamine 10 mg',
        department: 'Batuk, Flu & Alergi',
        category: 'Alergi',
        price: 14000,
        tags: ['alergi', 'gatal', 'bersin'],
        dosage: 'Tablet 10 mg',
        pack: '1 box isi 30 tablet',
        note: 'Sering dipilih untuk membantu meredakan gejala alergi seperti gatal dan bersin.',
        prescription: false,
        imageFile: 'trust-cetirizine-10mg-30-tablets.jpeg',
        featured: false
    },
    {
        slug: 'mixagrip',
        name: 'Mixagrip Flu dan Batuk',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 11000,
        tags: ['flu', 'batuk', 'pilek'],
        dosage: 'Kaplet',
        pack: '1 strip isi 4 kaplet',
        note: 'Obat flu dan batuk yang populer untuk gejala ringan sehari-hari.',
        prescription: false,
        imageFile: 'mixagrip-flu-batuk.jpeg',
        featured: false
    },
    {
        slug: 'decolgen',
        name: 'Decolgen Tablet',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 10000,
        tags: ['flu', 'pilek', 'hidung tersumbat'],
        dosage: 'Tablet',
        pack: '1 strip isi 4 tablet',
        note: 'Pilihan umum untuk membantu gejala flu seperti pilek dan hidung tersumbat.',
        prescription: false,
        imageFile: 'decolgen-tablet.jpeg',
        featured: false
    },
    {
        slug: 'obh-combi',
        name: 'OBH Combi Batuk Berdahak 100 ml',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 26000,
        tags: ['batuk', 'dahak', 'sirup'],
        dosage: 'Sirup 100 ml',
        pack: '1 botol',
        note: 'Sirup batuk populer untuk membantu meredakan batuk berdahak.',
        prescription: false,
        imageFile: 'obh-combi-batuk-berdahak-100ml.jpeg',
        featured: false
    },
    {
        slug: 'woods-peppermint',
        name: 'Woods Peppermint Antitussive 60 ml',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 24000,
        tags: ['batuk', 'tenggorokan', 'sirup'],
        dosage: 'Sirup 60 ml',
        pack: '1 botol',
        note: 'Sirup batuk yang sering dicari untuk membantu melegakan tenggorokan.',
        prescription: false,
        imageFile: 'woods-peppermint-antitussive-60ml.jpeg',
        featured: false
    },
    {
        slug: 'omeprazole',
        name: 'Omeprazole Delayed Release Tablets 20 mg',
        department: 'Pencernaan',
        category: 'Asam Lambung',
        price: 19000,
        tags: ['asam lambung', 'maag', 'perut'],
        dosage: 'Tablet lepas lambat 20 mg',
        pack: '1 box isi 14 tablet',
        note: 'Membantu mengurangi produksi asam lambung pada keluhan tertentu.',
        prescription: false,
        imageFile: 'omeprazole-delayed-release-20mg.jpeg',
        featured: false
    },
    {
        slug: 'promag',
        name: 'Promag Tablet Kunyah',
        department: 'Pencernaan',
        category: 'Asam Lambung',
        price: 11000,
        tags: ['maag', 'mual', 'asam lambung'],
        dosage: 'Tablet kunyah',
        pack: '1 strip isi 10 tablet',
        note: 'Pilihan praktis untuk membantu keluhan maag, mual, dan perut tidak nyaman.',
        prescription: false,
        imageFile: 'promag-tablet-kunyah.jpeg',
        featured: false
    },
    {
        slug: 'diapet',
        name: 'Diapet Kapsul',
        department: 'Pencernaan',
        category: 'Pemulihan Diare',
        price: 13000,
        tags: ['diare', 'pencernaan', 'perut'],
        dosage: 'Kapsul',
        pack: '1 strip isi 10 kapsul',
        note: 'Produk pendamping untuk membantu meredakan gejala diare ringan.',
        prescription: false,
        imageFile: 'diapet-kapsul.jpeg',
        featured: false
    },
    {
        slug: 'entrostop',
        name: 'Entrostop Tablet',
        department: 'Pencernaan',
        category: 'Pemulihan Diare',
        price: 14000,
        tags: ['diare', 'pencernaan', 'perut'],
        dosage: 'Tablet',
        pack: '1 strip isi 12 tablet',
        note: 'Obat diare yang sering dibeli untuk membantu keluhan pencernaan ringan.',
        prescription: false,
        imageFile: 'entrostop-tablet.jpeg',
        featured: false
    },
    {
        slug: 'mylanta',
        name: 'Mylanta Cair 50 ml',
        department: 'Pencernaan',
        category: 'Asam Lambung',
        price: 18000,
        tags: ['maag', 'asam lambung', 'mual'],
        dosage: 'Suspensi 50 ml',
        pack: '1 botol',
        note: 'Produk populer untuk membantu keluhan maag dan asam lambung.',
        prescription: false,
        imageFile: 'mylanta-cair-50ml.jpeg',
        featured: false
    },
    {
        slug: 'polysilane',
        name: 'Polysilane Tablet Kunyah',
        department: 'Pencernaan',
        category: 'Asam Lambung',
        price: 13000,
        tags: ['maag', 'kembung', 'asam lambung'],
        dosage: 'Tablet kunyah',
        pack: '1 strip isi 8 tablet',
        note: 'Obat maag yang sering tersedia untuk keluhan perut kembung dan tidak nyaman.',
        prescription: false,
        imageFile: 'polysilane-tablet-kunyah.jpeg',
        featured: false
    },
    {
        slug: 'dulcolax',
        name: 'Dulcolax Tablet',
        department: 'Pencernaan',
        category: 'Sembelit',
        price: 17000,
        tags: ['sembelit', 'pencernaan', 'perut'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Obat pencahar populer untuk membantu keluhan sembelit.',
        prescription: false,
        imageFile: 'dulcolax-tablet.jpeg',
        featured: false
    },
    {
        slug: 'salep-luka',
        name: 'Betadine Antiseptic Ointment 5 g',
        department: 'Perawatan Harian',
        category: 'Perawatan Luka',
        price: 18000,
        tags: ['luka', 'antiseptik', 'kulit'],
        dosage: 'Ointment 5 g',
        pack: '1 tube',
        note: 'Membantu perawatan luka ringan dan goresan pada kulit.',
        prescription: false,
        imageFile: 'betadine-antiseptic-ointment-5g.jpeg',
        featured: false
    },
    {
        slug: 'finger-clip-pulse-oximeter',
        name: 'Finger Clip Pulse Oximeter',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 85000,
        tags: ['oksigen', 'alat kesehatan', 'cek saturasi'],
        dosage: 'Digital',
        pack: '1 unit',
        note: 'Alat bantu untuk memantau saturasi oksigen dan denyut nadi di rumah.',
        prescription: false,
        imageFile: 'finger-clip-pulse-oximeter.jpeg',
        featured: false
    },
    {
        slug: 'minyak-angin',
        name: 'Safe Care Roll On Minyak Angin Aromatherapy 10 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Harian',
        price: 12000,
        tags: ['harian', 'mual', 'perjalanan'],
        dosage: 'Roll on 10 ml',
        pack: '1 botol',
        note: 'Pilihan praktis untuk kebutuhan harian dan dibawa saat bepergian.',
        prescription: false,
        imageFile: 'safecare-roll-on-10ml.jpeg',
        featured: false
    },
    {
        slug: 'plester-luka',
        name: 'Hansaplast Kain Elastis 100 Lembar',
        department: 'Perawatan Harian',
        category: 'Perawatan Luka',
        price: 9000,
        tags: ['plester', 'luka', 'harian'],
        dosage: '100 lembar',
        pack: '1 box',
        note: 'Perlengkapan sederhana untuk menutup luka kecil saat beraktivitas.',
        prescription: false,
        imageFile: 'hansaplast-kain-elastis-100.jpeg',
        featured: false
    },
    {
        slug: 'betadine-solution',
        name: 'Betadine Antiseptic Solution 15 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Luka',
        price: 17000,
        tags: ['antiseptik', 'luka', 'harian'],
        dosage: 'Cairan antiseptik 15 ml',
        pack: '1 botol',
        note: 'Antiseptik luka yang sering dibeli untuk perlengkapan rumah.',
        prescription: false,
        imageFile: 'betadine-antiseptic-solution-15ml.jpeg',
        featured: false
    },
    {
        slug: 'minyak-kayu-putih-cap-lang',
        name: 'Minyak Kayu Putih Cap Lang 60 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Harian',
        price: 25000,
        tags: ['minyak kayu putih', 'hangat', 'harian'],
        dosage: 'Minyak 60 ml',
        pack: '1 botol',
        note: 'Produk harian yang populer untuk rasa hangat dan kebutuhan keluarga.',
        prescription: false,
        imageFile: 'minyak-kayu-putih-cap-lang-60ml.jpeg',
        featured: false
    },
    {
        slug: 'counterpain',
        name: 'Counterpain Cream 15 g',
        department: 'Perawatan Harian',
        category: 'Perawatan Otot',
        price: 36000,
        tags: ['nyeri otot', 'pegal', 'cream'],
        dosage: 'Krim 15 g',
        pack: '1 tube',
        note: 'Krim gosok yang sering dicari untuk membantu pegal dan nyeri otot.',
        prescription: false,
        imageFile: 'counterpain-cream-15g.jpeg',
        featured: false
    },
    {
        slug: 'freshcare',
        name: 'FreshCare Minyak Angin Roll On 10 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Harian',
        price: 15000,
        tags: ['minyak angin', 'roll on', 'harian'],
        dosage: 'Roll on 10 ml',
        pack: '1 botol',
        note: 'Minyak angin roll on populer untuk dibawa bepergian.',
        prescription: false,
        imageFile: 'freshcare-roll-on-10ml.jpeg',
        featured: false
    },
    {
        slug: 'lens-cleaning-kit',
        name: 'ZEISS Lens Cleaning Kit 30 ml',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 17000,
        tags: ['kacamata', 'alat kesehatan', 'lens cleaner'],
        dosage: 'Spray 30 ml',
        pack: '1 kit',
        note: 'Pembersih lensa kacamata lengkap dengan kain microfiber untuk pemakaian harian.',
        prescription: false,
        imageFile: 'zeiss-lens-cleaning-kit-30ml.jpeg',
        featured: false
    },
    {
        slug: 'tensimeter-digital',
        name: 'Omron Digital Blood Pressure Monitor',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 320000,
        tags: ['tensimeter', 'tekanan darah', 'alat kesehatan'],
        dosage: 'Digital',
        pack: '1 unit',
        note: 'Alat cek tekanan darah yang sering dicari untuk pemantauan di rumah.',
        prescription: false,
        imageFile: 'omron-digital-blood-pressure-monitor.jpeg',
        featured: false
    },
    {
        slug: 'test-pack',
        name: 'Sensitif Compact Test Pack',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 26000,
        tags: ['test pack', 'alat kesehatan', 'kehamilan'],
        dosage: 'Strip test',
        pack: '1 pcs',
        note: 'Produk alat tes yang populer dan mudah ditemukan di apotek.',
        prescription: false,
        imageFile: 'sensitif-compact-test-pack.jpeg',
        featured: false
    },
    {
        slug: 'alkohol-swab',
        name: 'OneMed Alcohol Swab',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 12000,
        tags: ['alcohol swab', 'steril', 'alat kesehatan'],
        dosage: 'Swab alkohol',
        pack: '1 box isi 100 pcs',
        note: 'Perlengkapan medis ringan untuk membersihkan area kulit sebelum tindakan kecil.',
        prescription: false,
        imageFile: 'onemed-alcohol-swab-100.jpeg',
        featured: false
    },
    {
        slug: 'kasa-steril',
        name: 'Kasa Steril OneMed',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 10000,
        tags: ['kasa', 'luka', 'steril'],
        dosage: 'Kasa steril',
        pack: '1 pack',
        note: 'Perlengkapan perawatan luka yang sering dibeli untuk stok rumah.',
        prescription: false,
        imageFile: 'kasa-steril-onemed.jpeg',
        featured: false
    },
    {
        slug: 'multivitamin-anak',
        name: 'Natures Aid Mini Drops Multi-vitamin 50 ml',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 29000,
        tags: ['vitamin', 'anak', 'nafsu makan'],
        dosage: 'Drops 50 ml',
        pack: '1 botol',
        note: 'Suplemen harian untuk membantu memenuhi kebutuhan vitamin anak.',
        prescription: false,
        imageFile: 'natures-aid-mini-drops-50ml.jpeg',
        featured: false
    },
    {
        slug: 'vitamin-b-complex',
        name: 'New Leaf Vitamin B-Complex High Strength',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 22000,
        tags: ['vitamin', 'stamina', 'harian'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Cocok untuk menunjang kebutuhan vitamin harian dan menjaga stamina tubuh.',
        prescription: false,
        imageFile: 'vitamin-b-complex-high-strength.jpeg',
        featured: false
    },
    {
        slug: 'enervon-c',
        name: 'Enervon-C Tablet',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 28000,
        tags: ['vitamin', 'stamina', 'imun'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Vitamin populer untuk membantu menjaga stamina dan kebutuhan harian.',
        prescription: false,
        imageFile: 'enervon-c-tablet.jpeg',
        featured: false
    },
    {
        slug: 'imboost',
        name: 'Imboost Tablet',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 42000,
        tags: ['vitamin', 'imun', 'suplemen'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Suplemen daya tahan tubuh yang sering dicari di apotek.',
        prescription: false,
        imageFile: 'imboost-tablet.jpeg',
        featured: false
    },
    {
        slug: 'redoxon',
        name: 'Redoxon Vitamin C Effervescent',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 45000,
        tags: ['vitamin c', 'imun', 'effervescent'],
        dosage: 'Tablet effervescent',
        pack: '1 tube isi 10 tablet',
        note: 'Vitamin C effervescent populer untuk kebutuhan daya tahan tubuh.',
        prescription: false,
        imageFile: 'redoxon-vitamin-c-effervescent.jpeg',
        featured: false
    },
    {
        slug: 'sangobion',
        name: 'Sangobion Kapsul',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 30000,
        tags: ['zat besi', 'vitamin', 'suplemen'],
        dosage: 'Kapsul',
        pack: '1 strip isi 10 kapsul',
        note: 'Suplemen zat besi yang dikenal luas dan sering dibeli.',
        prescription: false,
        imageFile: 'sangobion-kapsul.jpeg',
        featured: false
    },
    {
        slug: 'ampicillin',
        name: 'Ampicillin 500 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 26000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Kapsul 500 mg',
        pack: '1 strip isi 10 kapsul',
        note: 'Antibiotik resep yang umum dicari untuk kondisi tertentu.',
        prescription: true,
        imageFile: 'ampicillin-500mg.jpeg',
        featured: false
    },
    {
        slug: 'doxycycline',
        name: 'Doxycycline 100 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 34000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Kapsul 100 mg',
        pack: '1 strip isi 10 kapsul',
        note: 'Obat antibiotik yang perlu digunakan sesuai resep tenaga medis.',
        prescription: true,
        imageFile: 'doxycycline-100mg.jpeg',
        featured: false
    },
    {
        slug: 'erythromycin',
        name: 'Erythromycin 500 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 37000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Antibiotik populer yang tersedia di banyak apotek dengan resep dokter.',
        prescription: true,
        imageFile: 'erythromycin-500mg.jpeg',
        featured: false
    },
    {
        slug: 'metronidazole',
        name: 'Metronidazole 500 mg',
        department: 'Antibiotik',
        category: 'Antibiotik',
        price: 24000,
        tags: ['antibiotik', 'infeksi', 'resep'],
        dosage: 'Tablet 500 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Obat resep yang sering dicari untuk terapi infeksi tertentu.',
        prescription: true,
        imageFile: 'metronidazole-500mg.jpeg',
        featured: false
    },
    {
        slug: 'panadol-biru',
        name: 'Panadol Biru Tablet',
        department: 'Demam & Nyeri',
        category: 'Obat Demam',
        price: 14000,
        tags: ['demam', 'nyeri', 'sakit kepala'],
        dosage: 'Kaplet',
        pack: '1 strip isi 10 kaplet',
        note: 'Obat populer untuk membantu meredakan sakit kepala, demam, dan nyeri ringan.',
        prescription: false,
        imageFile: 'panadol-biru-tablet.jpeg',
        featured: false
    },
    {
        slug: 'panadol-extra',
        name: 'Panadol Extra Tablet',
        department: 'Demam & Nyeri',
        category: 'Sakit Kepala',
        price: 18000,
        tags: ['sakit kepala', 'nyeri', 'demam'],
        dosage: 'Kaplet',
        pack: '1 strip isi 10 kaplet',
        note: 'Varian populer untuk membantu nyeri kepala dan rasa tidak nyaman ringan.',
        prescription: false,
        imageFile: 'panadol-extra-tablet.jpeg',
        featured: false
    },
    {
        slug: 'proris',
        name: 'Proris Ibuprofen 200 mg',
        department: 'Demam & Nyeri',
        category: 'Nyeri & Peradangan',
        price: 17000,
        tags: ['nyeri', 'demam', 'ibuprofen'],
        dosage: 'Tablet 200 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Obat nyeri dan demam yang sering tersedia di apotek.',
        prescription: false,
        imageFile: 'proris-ibuprofen-200mg.jpeg',
        featured: false
    },
    {
        slug: 'panadol-femina',
        name: 'Panadol Femina Tablet',
        department: 'Demam & Nyeri',
        category: 'Nyeri',
        price: 15000,
        tags: ['nyeri', 'haid', 'perut'],
        dosage: 'Tablet',
        pack: '1 strip isi 4 tablet',
        note: 'Obat yang sering dicari untuk membantu nyeri haid.',
        prescription: false,
        imageFile: 'panadol-femina-tablet.jpeg',
        featured: false
    },
    {
        slug: 'neozep-forte',
        name: 'Neozep Forte Tablet',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 12000,
        tags: ['flu', 'pilek', 'hidung tersumbat'],
        dosage: 'Tablet',
        pack: '1 strip isi 4 tablet',
        note: 'Obat flu populer untuk membantu keluhan pilek dan hidung tersumbat.',
        prescription: false,
        imageFile: 'neozep-forte-tablet.jpeg',
        featured: false
    },
    {
        slug: 'procold',
        name: 'Procold Flu Tablet',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 10000,
        tags: ['flu', 'pilek', 'demam'],
        dosage: 'Kaplet',
        pack: '1 strip isi 6 kaplet',
        note: 'Pilihan umum untuk membantu gejala flu ringan.',
        prescription: false,
        imageFile: 'procold-flu-tablet.jpeg',
        featured: false
    },
    {
        slug: 'vicks-formula-44',
        name: 'Vicks Formula 44 Sirup 54 ml',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 28000,
        tags: ['batuk', 'sirup', 'tenggorokan'],
        dosage: 'Sirup 54 ml',
        pack: '1 botol',
        note: 'Sirup batuk populer yang mudah dikenali dan dicari gambarnya.',
        prescription: false,
        imageFile: 'vicks-formula-44-sirup-54ml.jpeg',
        featured: false
    },
    {
        slug: 'vicks-cough-2in1',
        name: 'Vicks Cough 2 in 1 Syrup 200 ml',
        department: 'Batuk, Flu & Alergi',
        category: 'Batuk & Flu',
        price: 32000,
        tags: ['batuk', 'sirup', 'flu'],
        dosage: 'Sirup 200 ml',
        pack: '1 botol',
        note: 'Sirup batuk populer untuk membantu batuk kering dan batuk berdahak.',
        prescription: false,
        imageFile: 'vicks-cough-2in1-syrup-200ml.jpeg',
        featured: false
    },
    {
        slug: 'insto',
        name: 'Insto Regular Eye Drops 7.5 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Mata',
        price: 18000,
        tags: ['mata', 'tetes mata', 'harian'],
        dosage: 'Tetes mata 7.5 ml',
        pack: '1 botol',
        note: 'Tetes mata populer untuk membantu mata kering atau iritasi ringan.',
        prescription: false,
        imageFile: 'insto-regular-eye-drops-75ml.jpeg',
        featured: false
    },
    {
        slug: 'rohto',
        name: 'Rohto Eye Drops 7 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Mata',
        price: 19000,
        tags: ['mata', 'tetes mata', 'harian'],
        dosage: 'Tetes mata 7 ml',
        pack: '1 botol',
        note: 'Tetes mata yang sering dicari untuk perawatan mata harian.',
        prescription: false,
        imageFile: 'rohto-dryfresh-eye-drop-7ml.jpeg',
        featured: false
    },
    {
        slug: 'salonpas',
        name: 'Salonpas Koyo',
        department: 'Perawatan Harian',
        category: 'Perawatan Otot',
        price: 12000,
        tags: ['koyo', 'pegal', 'nyeri otot'],
        dosage: 'Koyo tempel',
        pack: '1 pack isi 10 lembar',
        note: 'Koyo populer untuk membantu rasa pegal dan nyeri otot ringan.',
        prescription: false,
        imageFile: 'salonpas-koyo.jpeg',
        featured: false
    },
    {
        slug: 'hansaplast-spray',
        name: 'Hansaplast Wound Spray 50 ml',
        department: 'Perawatan Harian',
        category: 'Perawatan Luka',
        price: 42000,
        tags: ['luka', 'spray', 'antiseptik'],
        dosage: 'Spray 50 ml',
        pack: '1 botol',
        note: 'Produk perawatan luka modern yang mudah dicari visual produknya.',
        prescription: false,
        imageFile: 'hansaplast-wound-spray-50ml.jpeg',
        featured: false
    },
    {
        slug: 'diatabs',
        name: 'Diatabs Tablet',
        department: 'Pencernaan',
        category: 'Pemulihan Diare',
        price: 12000,
        tags: ['diare', 'pencernaan', 'perut'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Obat diare populer untuk membantu keluhan pencernaan ringan.',
        prescription: false,
        imageFile: 'diatabs-tablet.jpeg',
        featured: false
    },
    {
        slug: 'lacto-b',
        name: 'Lacto-B Sachet',
        department: 'Pencernaan',
        category: 'Probiotik',
        price: 7500,
        tags: ['probiotik', 'diare', 'anak'],
        dosage: 'Sachet',
        pack: '1 sachet',
        note: 'Probiotik populer untuk membantu menjaga keseimbangan pencernaan.',
        prescription: false,
        imageFile: 'lacto-b-sachet.jpeg',
        featured: false
    },
    {
        slug: 'lansoprazole',
        name: 'Lansoprazole 30 mg',
        department: 'Pencernaan',
        category: 'Asam Lambung',
        price: 24000,
        tags: ['asam lambung', 'maag', 'perut'],
        dosage: 'Kapsul 30 mg',
        pack: '1 strip isi 10 kapsul',
        note: 'Obat lambung yang sering dicari untuk keluhan asam lambung tertentu.',
        prescription: false,
        imageFile: 'lansoprazole-30mg.jpeg',
        featured: false
    },
    {
        slug: 'glibenclamide',
        name: 'Glibenclamide 5 mg',
        department: 'Pencernaan',
        category: 'Obat Diabetes',
        price: 18000,
        tags: ['diabetes', 'gula darah', 'resep'],
        dosage: 'Tablet 5 mg',
        pack: '1 strip isi 10 tablet',
        note: 'Obat diabetes yang perlu digunakan sesuai resep dan arahan tenaga medis.',
        prescription: true,
        imageFile: 'glibenclamide-5mg.jpeg',
        featured: false
    },
    {
        slug: 'autocheck-glucose',
        name: 'Autocheck Blood Glucose Meter',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 165000,
        tags: ['gula darah', 'alat kesehatan', 'diabetes'],
        dosage: 'Digital',
        pack: '1 set',
        note: 'Alat cek gula darah yang sering dicari untuk pemantauan mandiri.',
        prescription: false,
        imageFile: 'autocheck-blood-glucose-meter.jpeg',
        featured: false
    },
    {
        slug: 'accu-chek',
        name: 'Accu-Chek Instant Meter',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 245000,
        tags: ['gula darah', 'alat kesehatan', 'diabetes'],
        dosage: 'Digital',
        pack: '1 set',
        note: 'Alat cek gula darah populer dengan gambar produk yang mudah ditemukan.',
        prescription: false,
        imageFile: 'accu-chek-instant-meter.jpeg',
        featured: false
    },
    {
        slug: 'micropore',
        name: '3M Micropore Surgical Tape',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 18000,
        tags: ['plester', 'tape', 'luka'],
        dosage: 'Surgical tape',
        pack: '1 roll',
        note: 'Plester medis yang sering dibeli untuk perawatan luka ringan.',
        prescription: false,
        imageFile: '3m-micropore-surgical-tape.jpeg',
        featured: false
    },
    {
        slug: 'surgical-mask-sensi',
        name: 'Sensi Surgical Mask 3 Ply',
        department: 'Alat Kesehatan',
        category: 'Alat Kesehatan',
        price: 22000,
        tags: ['masker', 'alat kesehatan', 'harian'],
        dosage: 'Masker sekali pakai',
        pack: '1 box isi 50 pcs',
        note: 'Masker medis populer untuk perlindungan harian.',
        prescription: false,
        imageFile: 'sensi-surgical-mask-3ply.jpeg',
        featured: false
    },
    {
        slug: 'blackmores-vitamin-c',
        name: 'Blackmores Vitamin C 500 mg',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 78000,
        tags: ['vitamin c', 'imun', 'suplemen'],
        dosage: 'Tablet 500 mg',
        pack: '1 botol',
        note: 'Suplemen vitamin C populer untuk kebutuhan daya tahan tubuh.',
        prescription: false,
        imageFile: 'blackmores-vitamin-c-500mg.jpeg',
        featured: false
    },
    {
        slug: 'holisticare-ester-c',
        name: 'Holisticare Ester-C Tablet',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 52000,
        tags: ['vitamin c', 'imun', 'suplemen'],
        dosage: 'Tablet',
        pack: '1 strip isi 10 tablet',
        note: 'Vitamin C populer yang sering tersedia di apotek.',
        prescription: false,
        imageFile: 'holisticare-ester-c-tablet.jpeg',
        featured: false
    },
    {
        slug: 'scotts-emulsion',
        name: 'Scotts Emulsion Original 200 ml',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 56000,
        tags: ['vitamin', 'anak', 'suplemen'],
        dosage: 'Sirup 200 ml',
        pack: '1 botol',
        note: 'Suplemen anak yang dikenal luas dan mudah dicari gambarnya.',
        prescription: false,
        imageFile: 'scotts-emulsion-original-200ml.jpeg',
        featured: false
    },
    {
        slug: 'cerebrofort',
        name: 'Cerebrofort Gold Syrup 100 ml',
        department: 'Vitamin & Suplemen',
        category: 'Vitamin & Suplemen',
        price: 34000,
        tags: ['vitamin', 'anak', 'suplemen'],
        dosage: 'Sirup 100 ml',
        pack: '1 botol',
        note: 'Vitamin anak populer untuk kebutuhan suplemen harian.',
        prescription: false,
        imageFile: 'cerebrofort-gold-syrup-100ml.jpeg',
        featured: false
    },
];

function hashText(text) {
    return Array.from(text).reduce(function(total, char, index) {
        return total + (char.charCodeAt(0) * (index + 1));
    }, 0);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(amount);
}

function formatDistance(distanceKm) {
    return `${Number(distanceKm).toFixed(1)} km`;
}

function slugifyLabel(text) {
    return String(text || '')
        .toLowerCase()
        .replace(/&/g, 'dan')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function resolveProductImage(product) {
    const imageFile = String(product.imageFile || product.image || '').trim();
    if (!imageFile) {
        return '';
    }

    return `${PRODUCT_IMAGE_BASE_PATH}${imageFile}`;
}

function getSelectedPharmacy() {
    try {
        return JSON.parse(sessionStorage.getItem(MEDGEO_SELECTED_PHARMACY_KEY) || 'null');
    } catch (error) {
        console.warn('Gagal membaca apotek terpilih:', error);
        return null;
    }
}

function buildShoppingProducts(pharmacy) {
    return SHOPPING_PRODUCT_LIBRARY.map(function(product, index) {
        return {
            id: `${pharmacy.id}-${product.slug}-${index}`,
            slug: product.slug,
            name: product.name,
            department: product.department,
            departmentSlug: slugifyLabel(product.department),
            category: product.category,
            categorySlug: slugifyLabel(product.category),
            price: product.price,
            badge: product.prescription ? 'Butuh resep' : (index === 0 ? 'Paling dicari' : (index % 2 === 0 ? 'Siap kirim' : 'Stok aman')),
            pharmacyName: pharmacy.name,
            dosage: product.dosage,
            pack: product.pack,
            note: product.note,
            prescription: product.prescription,
            image: resolveProductImage(product),
            imageFile: String(product.imageFile || product.image || '').trim(),
            featured: !!product.featured,
            tags: product.tags || [],
            priorityScore: (product.featured ? 3 : 0) + (product.prescription ? 0 : 1)
        };
    }).sort(function(first, second) {
        if (second.priorityScore !== first.priorityScore) {
            return second.priorityScore - first.priorityScore;
        }

        return first.price - second.price;
    });
}

function getDepartmentSummaries() {
    const grouped = SHOPPING_PRODUCT_LIBRARY.reduce(function(result, product) {
        if (!result[product.department]) {
            result[product.department] = {
                name: product.department,
                slug: slugifyLabel(product.department),
                description: `Pilihan ${product.department.toLowerCase()} untuk kebutuhan harian dan kondisi ringan.`,
                itemCount: 0,
                featuredCount: 0,
                startingPrice: product.price
            };
        }

        result[product.department].itemCount += 1;
        result[product.department].featuredCount += product.featured ? 1 : 0;
        result[product.department].startingPrice = Math.min(result[product.department].startingPrice, product.price);
        return result;
    }, {});

    return Object.keys(grouped).map(function(key) {
        return grouped[key];
    }).sort(function(first, second) {
        return first.name.localeCompare(second.name, 'id');
    });
}

function findDepartmentBySlug(slug) {
    return getDepartmentSummaries().find(function(item) {
        return item.slug === slug;
    }) || null;
}

window.MedGeoCatalogData = {
    MEDGEO_SELECTED_PHARMACY_KEY: MEDGEO_SELECTED_PHARMACY_KEY,
    MEDGEO_RECEIPT_KEY: MEDGEO_RECEIPT_KEY,
    MEDGEO_CHECKOUT_STATUS_KEY: MEDGEO_CHECKOUT_STATUS_KEY,
    SHOPPING_SERVICE_FEE: SHOPPING_SERVICE_FEE,
    SHOPPING_PRODUCT_LIBRARY: SHOPPING_PRODUCT_LIBRARY,
    hashText: hashText,
    formatCurrency: formatCurrency,
    formatDistance: formatDistance,
    slugifyLabel: slugifyLabel,
    resolveProductImage: resolveProductImage,
    getSelectedPharmacy: getSelectedPharmacy,
    buildShoppingProducts: buildShoppingProducts,
    getDepartmentSummaries: getDepartmentSummaries,
    findDepartmentBySlug: findDepartmentBySlug
};
