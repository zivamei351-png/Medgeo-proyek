// Data daerah Indonesia (contoh untuk beber


const regionData = {
    "Aceh": {
        cities: ["Banda Aceh", "Langsa", "Lhokseumawe", "Sabang", "Subulussalam"],
        districts: {
            "Banda Aceh": ["Baiturrahman", "Jaya Baru", "Meuraxa", "Syiah Kuala", "Ulee Kareng"],
            "Langsa": ["Langsa Barat", "Langsa Kota", "Langsa Lama", "Langsa Timur"],
            "Lhokseumawe": ["Banda Sakti", "Blang Mangat", "Muara Dua", "Muara Satu"],
            "Sabang": ["Sukajaya", "Sukakarya"],
            "Subulussalam": ["Longkib", "Simpang Kiri"]
        }
    },
    "Sumatera Utara": {
        cities: ["Medan", "Binjai", "Tebing Tinggi", "Padangsidempuan", "Gunungsitoli"],
        districts: {
            "Medan": ["Medan Kota", "Medan Baru", "Medan Selayang", "Medan Tuntungan"],
            "Binjai": ["Binjai Kota", "Binjai Selatan", "Binjai Timur", "Binjai Utara"],
            "Tebing Tinggi": ["Padang Hulu", "Rambutan", "Tebing Tinggi Kota"],
            "Padangsidempuan": ["Padangsidempuan Angkola Julu", "Padangsidempuan Batunadua", "Padangsidempuan Hutaimbaru"],
            "Gunungsitoli": ["Gunungsitoli", "Gunungsitoli Alo'oa", "Gunungsitoli Barat"]
        }
    },
    "DKI Jakarta": {
        cities: ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur"],
        districts: {
            "Jakarta Pusat": ["Tanah Abang", "Menteng", "Senen", "Johar Baru", "Cempaka Putih"],
            "Jakarta Utara": ["Penjaringan", "Tanjung Priok", "Koja", "Cilincing", "Pademangan"],
            "Jakarta Barat": ["Cengkareng", "Grogol Petamburan", "Taman Sari", "Tambora", "Kebon Jeruk"],
            "Jakarta Selatan": ["Tebet", "Setiabudi", "Mampang Prapatan", "Pasar Minggu", "Cilandak"],
            "Jakarta Timur": ["Matraman", "Pulogadung", "Jatinegara", "Duren Sawit", "Makasar"]
        }
    },
    "Jawa Barat": {
        cities: ["Bandung", "Bekasi", "Bogor", "Depok", "Cirebon"],
        districts: {
            "Bandung": ["Bandung Wetan", "Bandung Kulon", "Bandung Kidul", "Bandung Utara"],
            "Bekasi": ["Bekasi Utara", "Bekasi Barat", "Bekasi Selatan", "Bekasi Timur"],
            "Bogor": ["Bogor Barat", "Bogor Tengah", "Bogor Timur", "Bogor Utara"],
            "Depok": ["Depok", "Cimanggis", "Sawangan", "Beji"],
            "Cirebon": ["Cirebon Utara", "Cirebon Selatan", "Lemahwungkuk", "Harjamukti"]
        }
    },
    "Jawa Tengah": {
        cities: ["Semarang", "Surakarta", "Salatiga", "Magelang", "Pekalongan"],
        districts: {
            "Semarang": ["Semarang Tengah", "Semarang Utara", "Semarang Timur", "Semarang Selatan", "Semarang Barat"],
            "Surakarta": ["Banjarsari", "Jebres", "Laweyan", "Pasar Kliwon", "Serengan"],
            "Salatiga": ["Argomulyo", "Sidorejo", "Tingkir"],
            "Magelang": ["Magelang Selatan", "Magelang Tengah", "Magelang Utara"],
            "Pekalongan": ["Pekalongan Barat", "Pekalongan Timur", "Pekalongan Utara"]
        }
    },
    "DI Yogyakarta": {
        cities: ["Yogyakarta", "Sleman", "Bantul", "Gunungkidul", "Kulon Progo"],
        districts: {
            "Yogyakarta": ["Danurejan", "Gedongtengen", "Gondokusuman", "Jetis", "Mantrijeron", "Mergangsan", "Ngampilan", "Pakualaman", "Tegalrejo", "Umbulharjo", "Wirobrajan"],
            "Sleman": ["Berbah", "Cangkringan", "Depok", "Gamping", "Godean", "Kalasan", "Minggir", "Mlati", "Moyudan", "Ngaglik", "Ngemplak", "Pakem", "Prambanan", "Seyegan", "Sleman", "Tempel", "Turi"],
            "Bantul": ["Bambanglipuro", "Banguntapan", "Bantul", "Dlingo", "Imogiri", "Jetis", "Kasihan", "Kretek", "Pajangan", "Pandak", "Piyungan", "Pleret", "Pundong", "Sanden", "Sedayu", "Sewon", "Srandakan"],
            "Gunungkidul": ["Gedangsari", "Girisubo", "Karangmojo", "Ngawen", "Nglipar", "Paliyan", "Panggang", "Patuk", "Playen", "Ponjong", "Purwosari", "Rongkop", "Saptosari", "Semanu", "Semin", "Tanjungsari", "Tepus", "Wonosari"],
            "Kulon Progo": ["Alian", "Galur", "Girimulyo", "Kalibawang", "Kokap", "Lendah", "Nanggulan", "Panjatan", "Pengasih", "Samigaluh", "Sentolo", "Temon", "Wates"]
        }
    },
    "Jawa Timur": {
        cities: ["Surabaya", "Malang", "Kediri", "Blitar", "Madiun"],
        districts: {
            "Surabaya": ["Asemrowo", "Benowo", "Bubutan", "Bulak", "Dukuh Pakis", "Gayungan", "Genteng", "Gubeng", "Gunung Anyar", "Jambangan", "Karang Pilang", "Kenjeran", "Krembangan", "Lakarsantri", "Mulyorejo", "Pabean Cantian", "Pakal", "Rungkut", "Sambikerep", "Sawahan", "Semampir", "Simokerto", "Sukolilo", "Sukomanunggal", "Tambaksari", "Tandes", "Tegalsari", "Tenggilis Mejoyo", "Wiyung", "Wonocolo", "Wonokromo"],
            "Malang": ["Blimbing", "Kedungkandang", "Klojen", "Lowokwaru", "Sukun"],
            "Kediri": ["Kediri Kota", "Mojoroto", "Pesantren"],
            "Blitar": ["Kepanjenkidul", "Sananwetan", "Sukorejo"],
            "Madiun": ["Kartoharjo", "Manguharjo", "Taman"]
        }
    },
    "Bali": {
        cities: ["Denpasar", "Badung", "Gianyar", "Tabanan", "Jembrana"],
        districts: {
            "Denpasar": ["Denpasar Barat", "Denpasar Selatan", "Denpasar Timur", "Denpasar Utara"],
            "Badung": ["Abiansemal", "Kuta", "Kuta Selatan", "Kuta Utara", "Mengwi", "Petang"],
            "Gianyar": ["Blahbatuh", "Gianyar", "Payangan", "Sukawati", "Tampaksiring", "Tegallalang", "Ubud"],
            "Tabanan": ["Baturiti", "Kediri", "Kerambitan", "Marga", "Penebel", "Pupuan", "Selemadeg", "Selemadeg Barat", "Selemadeg Timur", "Tabanan"],
            "Jembrana": ["Jembrana", "Melaya", "Mendoyo", "Negara", "Pekutatan"]
        }
    },
    "Sumatera Selatan": {
        cities: ["Palembang", "Lubuklinggau", "Prabumulih", "Pagar Alam", "Lahat"],
        districts: {
            "Palembang": ["Alang-Alang Lebar", "Bukit Kecil", "Gandus", "Ilir Barat I", "Ilir Barat II", "Ilir Timur I", "Ilir Timur II", "Kalidoni", "Kemuning", "Kertapati", "Plaju", "Sako", "Seberang Ulu I", "Seberang Ulu II", "Sematang Borang", "Sukarami"],
            "Lubuklinggau": ["Lubuklinggau Barat I", "Lubuklinggau Barat II", "Lubuklinggau Selatan I", "Lubuklinggau Selatan II", "Lubuklinggau Timur I", "Lubuklinggau Timur II", "Lubuklinggau Utara I", "Lubuklinggau Utara II"],
            "Prabumulih": ["Cambai", "Prabumulih Barat", "Prabumulih Selatan", "Prabumulih Timur", "Prabumulih Utara", "Rambang Dangku"],
            "Pagar Alam": ["Dempo Selatan", "Dempo Tengah", "Dempo Utara", "Pagar Alam Selatan", "Pagar Alam Utara"],
            "Lahat": ["Gumay Talang", "Gumay Ulu", "Jarai", "Kikim Barat", "Kikim Selatan", "Kikim Tengah", "Kikim Timur", "Kota Lahat", "Merapi Barat", "Merapi Selatan", "Merapi Timur", "Merapi Utara", "Muara Payang", "Mulak Ulu", "Pagar Gunung", "Pajar Bulan", "Pulau Pinang", "Sukamerindu", "Tanjung Sakti Pumi", "Tanjung Sakti Pumu", "Tanjung Tebat"]
        }
    },
    "Lampung": {
        cities: ["Bandar Lampung", "Metro", "Lampung Selatan", "Lampung Tengah", "Lampung Utara"],
        districts: {
            "Bandar Lampung": ["Bumi Waras", "Enggal", "Kedamaian", "Kedaton", "Kemiling", "Labuhan Ratu", "Langkapura", "Panjang", "Rajabasa", "Sukabumi", "Sukarame", "Tanjung Karang Barat", "Tanjung Karang Pusat", "Tanjung Karang Timur", "Tanjung Senang", "Telukbetung Barat", "Telukbetung Selatan", "Telukbetung Timur", "Telukbetung Utara", "Way Halim"],
            "Metro": ["Metro Barat", "Metro Pusat", "Metro Selatan", "Metro Timur", "Metro Utara"],
            "Lampung Selatan": ["Bakauheni", "Candipuro", "Jati Agung", "Kalianda", "Katibung", "Natar", "Palas", "Penengahan", "Rajabasa", "Sidomulyo", "Tanjung Bintang", "Tanjung Sari", "Way Panji", "Way Sulan"],
            "Lampung Tengah": ["Anak Tuha", "Bandar Mataram", "Bandar Surabaya", "Bangunrejo", "Bekri", "Bumi Nabung", "Gunung Sugih", "Kalirejo", "Padang Ratu", "Pubian", "Punggur", "Putra Rumbia", "Selagai Lingga", "Sendang Agung", "Seputih Agung", "Seputih Banyak", "Seputih Mataram", "Seputih Raman", "Seputih Surabaya", "Terbanggi Besar", "Terusan Nunyai", "Trimurjo", "Way Pengubuan", "Way Seputih"],
            "Lampung Utara": ["Abung Barat", "Abung Kunang", "Abung Pekurun", "Abung Selatan", "Abung Semuli", "Abung Tengah", "Abung Timur", "Abung Tinggi", "Blambangan Pagar", "Bukit Kemuning", "Bukit Khusus", "Kotabumi", "Kotabumi Selatan", "Kotabumi Utara", "Sungkai Barat", "Sungkai Jaya", "Sungkai Selatan", "Sungkai Tengah", "Sungkai Utara"]
        }
    },
    "Kalimantan Timur": {
        cities: ["Samarinda", "Balikpapan", "Bontang", "Tarakan", "Nunukan"],
        districts: {
            "Samarinda": ["Loa Janan Ilir", "Palaran", "Samarinda Ilir", "Samarinda Kota", "Samarinda Seberang", "Samarinda Ulu", "Samarinda Utara", "Sungai Kunjang", "Sungai Pinang"],
            "Balikpapan": ["Balikpapan Barat", "Balikpapan Kota", "Balikpapan Selatan", "Balikpapan Tengah", "Balikpapan Timur", "Balikpapan Utara"],
            "Bontang": ["Bontang Barat", "Bontang Selatan", "Bontang Utara"],
            "Tarakan": ["Tarakan Barat", "Tarakan Tengah", "Tarakan Timur", "Tarakan Utara"],
            "Nunukan": ["Nunukan", "Nunukan Selatan", "Sebatik", "Sebatik Barat", "Sebatik Tengah", "Sebatik Timur", "Sebatik Utara", "Seimenggaris", "Tulin Onsoi"]
        }
    },
    "Sulawesi Selatan": {
        cities: ["Makassar", "Parepare", "Palopo", "Bulukumba", "Bantaeng"],
        districts: {
            "Makassar": ["Biringkanaya", "Bontoala", "Makassar", "Mamajang", "Manggala", "Mariso", "Panakkukang", "Rappocini", "Tallo", "Tamalanrea", "Tamalate", "Ujung Pandang", "Ujung Tanah", "Wajo"],
            "Parepare": ["Bacukiki", "Bacukiki Barat", "Soreang"],
            "Palopo": ["Bara", "Tellu Limpoe", "Wara", "Wara Barat", "Wara Selatan", "Wara Timur", "Wara Utara"],
            "Bulukumba": ["Bonto Bahari", "Bonto Tiro", "Bulukumba", "Gantarang", "Hero Lange-lange", "Kajang", "Kindang", "Rilau Ale", "Ujung Bulu", "Ujung Loe"],
            "Bantaeng": ["Bantaeng", "Bissappu", "Eremerasa", "Gantarangkeke", "Pajukukang", "Sinoa", "Tompobulu", "Uluere"]
        }
    },
    "Kalimantan Selatan": {
        cities: ["Banjarmasin", "Banjarbaru", "Martapura", "Kandangan", "Barabai"],
        districts: {
            "Banjarmasin": ["Banjarmasin Barat", "Banjarmasin Selatan", "Banjarmasin Tengah", "Banjarmasin Timur", "Banjarmasin Utara"],
            "Banjarbaru": ["Banjarbaru Selatan", "Banjarbaru Utara", "Cempaka", "Landasan Ulin", "Liang Anggang"],
            "Martapura": ["Aluh-Aluh", "Aranio", "Astambul", "Beruntung Baru", "Gambut", "Karang Intan", "Kertak Hanyar", "Martapura Barat", "Martapura Kota", "Martapura Timur", "Mataraman", "Pengaron", "Sambung Makmur", "Sebulu", "Simpang Empat", "Sungai Tabuk", "Sungai Tabukan", "Telaga Bauntung"],
            "Kandangan": ["Angsana", "Daha Barat", "Daha Selatan", "Daha Utara", "Kalumpang", "Kandangan", "Loksado", "Padang Batung", "Simpur", "Telaga Langsat"],
            "Barabai": ["Amuntai Selatan", "Amuntai Tengah", "Amuntai Utara", "Babirik", "Haur Gading", "Paminggir", "Sungai Pandan", "Sungai Tabukan"]
        }
    },
    "Sulawesi Utara": {
        cities: ["Manado", "Bitung", "Tomohon", "Kotamobagu", "Langowan"],
        districts: {
            "Manado": ["Bunaken", "Malalayang", "Mapanget", "Paal Dua", "Sario", "Singkil", "Tikala", "Tuminting", "Wanea", "Wenang"],
            "Bitung": ["Aertembaga", "Girian", "Lembeh Selatan", "Lembeh Utara", "Madidir", "Maesa", "Ranowulu"],
            "Tomohon": ["Tomohon Barat", "Tomohon Selatan", "Tomohon Tengah", "Tomohon Timur", "Tomohon Utara"],
            "Kotamobagu": ["Kotamobagu Barat", "Kotamobagu Selatan", "Kotamobagu Timur", "Kotamobagu Utara"],
            "Langowan": ["Bintauna", "Bolangitang Barat", "Bolangitang Timur", "Kaidipang", "Langowan Barat", "Langowan Selatan", "Langowan Timur", "Langowan Utara", "Pineleng", "Remboken", "Sonder", "Tombatu", "Tombatu Timur", "Tombatu Utara", "Tombariri", "Tombariri Timur", "Tondano Barat", "Tondano Selatan", "Tondano Timur", "Tondano Utara"]
        }
    },
    "Nusa Tenggara Barat": {
        cities: ["Mataram", "Bima", "Sumbawa Besar", "Praya", "Dompu"],
        districts: {
            "Mataram": ["Ampenan", "Cakranegara", "Mataram", "Sandubaya", "Sekarbela"],
            "Bima": ["Asakota", "Bolo", "Donggo", "Lambitu", "Lambu", "Langgudu", "Madapangga", "Monta", "Palibelo", "Parado", "Sanggar", "Sape", "Soromandi", "Tambora", "Wawo", "Wera", "Woha"],
            "Sumbawa Besar": ["Alas", "Alas Barat", "Batulanteh", "Buer", "Empang", "Labangka", "Labuhan Badas", "Lape", "Lopok", "Lunyuk", "Maronge", "Moyo Hilir", "Moyo Hulu", "Moyo Utara", "Orong Telu", "Plampang", "Rhee", "Ropang", "Ropang", "Sumbawa", "Tarano", "Utan", "Wera Botu"],
            "Praya": ["Batukliang", "Batukliang Utara", "Janapria", "Jonggat", "Kopang", "Praya", "Praya Barat", "Praya Barat Daya", "Praya Tengah", "Praya Timur", "Pringgarata", "Pujut"],
            "Dompu": ["Dompu", "Hu'u", "Kempo", "Kilo", "Manggelewa", "Pajo", "Pekat", "Woja"]
        }
    },
    "Papua": {
        cities: ["Jayapura", "Merauke", "Timika", "Nabire", "Biak"],
        districts: {
            "Jayapura": ["Abepura", "Heram", "Jayapura Selatan", "Jayapura Utara", "Muara Tami"],
            "Merauke": ["Animha", "Elikobel", "Ilyawab", "Jagebob", "Kaptel", "Kimaam", "Kurik", "Malind", "Merauke", "Muting", "Naukenjerai", "Ngguti", "Okaba", "Semangga", "Sota", "Tabonji", "Tanah Miring", "Tubang", "Waan", "Wakuo"],
            "Timika": ["Agimuga", "Jila", "Jita", "Kuala Kencana", "Mimika Barat", "Mimika Barat Jauh", "Mimika Barat Tengah", "Mimika Baru", "Mimika Timur", "Mimika Timur Jauh", "Mimika Timur Tengah", "Tembagapura"],
            "Nabire": ["Dipa", "Makimi", "Menou", "Moora", "Nabire", "Nabire Barat", "Napan", "Siriwo", "Teluk Kimi", "Teluk Umar", "Uwapa", "Wanggar", "Wapoga", "Yaro", "Yaur"],
            "Biak": ["Aimando Padaido", "Andey", "Biak Barat", "Biak Kota", "Biak Timur", "Biak Utara", "Bondifuar", "Bruyadori", "Numfor Barat", "Numfor Timur", "Oridek", "Orkeri", "Padaido", "Poiru", "Samofa", "Swandiwe", "Warsa", "Yendidori", "Yewena"]
        }
    },
    "Sumatera Barat": {
        cities: ["Padang", "Bukittinggi", "Payakumbuh", "Pariaman", "Padang Panjang"],
        districts: {
            "Padang": ["Bungus Teluk Kabung", "Koto Tangah", "Kuranji", "Lubuk Begalung", "Lubuk Kilangan", "Nanggalo", "Padang Barat", "Padang Selatan", "Padang Timur", "Padang Utara", "Pauh"],
            "Bukittinggi": ["Aur Birugo Tigo Baleh", "Guguak Panjang", "Mandiangin Koto Selayan"],
            "Payakumbuh": ["Akabiluru", "Guguak", "Harau", "Payakumbuh Barat", "Payakumbuh Selatan", "Payakumbuh Timur", "Payakumbuh Utara", "Lamposi Tigo Nagari"],
            "Pariaman": ["Pariaman Selatan", "Pariaman Tengah", "Pariaman Timur", "Pariaman Utara"],
            "Padang Panjang": ["Padang Panjang Barat", "Padang Panjang Timur"]
        }
    },
    "Riau": {
        cities: ["Pekanbaru", "Dumai", "Duri", "Siak Sri Indrapura", "Selatpanjang"],
        districts: {
            "Pekanbaru": ["Bukit Raya", "Lima Puluh", "Marpoyan Damai", "Payung Sekaki", "Pekanbaru Kota", "Rumbai", "Rumbai Pesisir", "Sail", "Senapelan", "Sukajadi", "Tampan", "Tenayan Raya"],
            "Dumai": ["Bukit Kapur", "Dumai Barat", "Dumai Kota", "Dumai Selatan", "Dumai Timur", "Medang Kampai", "Sungai Sembilan"],
            "Duri": ["Bantan", "Bengkalis", "Bukit Batu", "Mandau", "Pinggir", "Rupat", "Rupat Utara", "Siak Kecil", "Tanjung Keramat"],
            "Siak Sri Indrapura": ["Dayun", "Kerinci Kanan", "Koto Gasib", "Lubuk Dalam", "Mempura", "Minas", "Pusako", "Sabak Auh", "Siak", "Sungai Apit", "Sungai Mandau", "Tualang"],
            "Selatpanjang": ["Batang Anai", "Batang Gasan", "Lubuk Alung", "Nan Sabaris", "Padang Sago", "Patamuan", "Sintuk Toboh Gadang", "Sungai Limau", "Sungai Rumbai", "Ulakan Tapakis"]
        }
    },
    "Banten": {
        cities: ["Serang", "Tangerang", "Cilegon", "Tangerang Selatan", "Lebak"],
        districts: {
            "Serang": ["Baros", "Cikande", "Cikeusal", "Cikeusik", "Gunungsari", "Jawilan", "Kibin", "Kopo", "Kragilan", "Petir", "Serang", "Tunjung Teja"],
            "Tangerang": ["Batu Ceper", "Benda", "Cibodas", "Ciledug", "Cipondoh", "Jatiuwung", "Karang Tengah", "Karawaci", "Larangan", "Neglasari", "Periuk", "Pinang", "Tangerang", "Tigaraksa"],
            "Cilegon": ["Cibeber", "Cilegon", "Citangkil", "Ciwandan", "Gerogol", "Jombang", "Pulomerak", "Purwakarta"],
            "Tangerang Selatan": ["Ciputat", "Ciputat Timur", "Pamulang", "Pondok Aren", "Serpong", "Serpong Utara", "Setu"],
            "Lebak": ["Banjarsari", "Bayah", "Bojongmanik", "Cibadak", "Cibeber", "Cigemblong", "Cihara", "Cijaku", "Cikulur", "Cileles", "Cilograng", "Cimarga", "Cipanas", "Cirinten", "Curugbitung", "Gunungkencana", "Kalanganyar", "Lebakgedong", "Leuwidamar", "Maja", "Malingping", "Muncang", "Pabuaran", "Pagelaran", "Panggarangan", "Petir", "Pulau Dua", "Rangkasbitung", "Sajira", "Sobang", "Wanasalam", "Warunggunung"]
        }
    },
    "Nusa Tenggara Timur": {
        cities: ["Kupang", "Maumere", "Ende", "Waingapu", "Ruteng"],
        districts: {
            "Kupang": ["Alak", "Kelapa Lima", "Kota Lama", "Kota Raja", "Maulafa", "Oebobo", "Sulamu"],
            "Maumere": ["Alor Barat Daya", "Alor Barat Laut", "Alor Selatan", "Alor Tengah Utara", "Alor Timur", "Alor Timur Laut", "Kabola", "Lembur", "Mataru", "Pantar", "Pantar Barat", "Pantar Barat Laut", "Pantar Tengah", "Pantar Timur", "Pulau Pura", "Pureman", "Teluk Mutiara"],
            "Ende": ["Detukeli", "Detusoko", "Ende", "Ende Selatan", "Ende Tengah", "Ende Timur", "Ende Utara", "Kelimutu", "Kota Baru", "Lepembusu Kelisoke", "Lio Timur", "Maurole", "Nangapanda", "Ndona", "Ndona Timur", "Ndori", "Pulau Ende", "Rindi", "Rote Barat", "Rote Barat Daya", "Rote Barat Laut", "Rote Tengah", "Rote Timur", "Rote Utara", "Sabu Barat", "Sabu Liae", "Sabu Timur", "Wulanggitang"],
            "Waingapu": ["Hawu Mehara", "Raijua", "Sabu Liae", "Sabu Timur"],
            "Ruteng": ["Borong", "Elar", "Elar Selatan", "Kota Komba", "Lamba Leda", "Poco Ranaka", "Rana Mese", "Sambi Rampas"]
        }
    },
    "Kalimantan Barat": {
        cities: ["Pontianak", "Singkawang", "Sambas", "Ketapang", "Sintang"],
        districts: {
            "Pontianak": ["Pontianak Barat", "Pontianak Kota", "Pontianak Selatan", "Pontianak Tenggara", "Pontianak Timur", "Pontianak Utara"],
            "Singkawang": ["Singkawang Barat", "Singkawang Kota", "Singkawang Selatan", "Singkawang Tengah", "Singkawang Timur", "Singkawang Utara"],
            "Sambas": ["Galing", "Jawai", "Jawai Selatan", "Paloh", "Pemangkat", "Sajad", "Sajingan Besar", "Salatiga", "Sambas", "Sebawi", "Sejangkung", "Selakau", "Selakau Timur", "Semparuk", "Subah", "Tanjung Keramat", "Tebas", "Teluk Keramat", "Temajuk"],
            "Ketapang": ["Air Upas", "Arut Selatan", "Arut Utara", "Delta Pawan", "Hulu Sungai", "Jelai Hulu", "Kendawangan", "Manis Mata", "Marau", "Matan Hilir Selatan", "Matan Hilir Utara", "Muara Pawan", "Nanga Tayap", "Pemahan", "Sandai", "Simpang Dua", "Simpang Hulu", "Singkup", "Sungai Laur", "Sungai Melayu Rayak", "Sungai Raya", "Sungai Raya Kepulauan", "Tumbang Titi"],
            "Sintang": ["Ambalau", "Binjai Hulu", "Dedai", "Kayan Hilir", "Kayan Hulu", "Kayan Selatan", "Kelam Permai", "Ketungau Hilir", "Ketungau Hulu", "Ketungau Tengah", "Sepauk", "Serawai", "Sintang", "Sungai Tebelian", "Tempunak", "Toba"]
        }
    },
    "Sulawesi Tengah": {
        cities: ["Palu", "Donggala", "Poso", "Toli-Toli", "Buol"],
        districts: {
            "Palu": ["Mantikulore", "Palu Barat", "Palu Selatan", "Palu Timur", "Palu Utara", "Tatanga", "Tawaeli", "Ulujadi"],
            "Donggala": ["Balaesang", "Balaesang Tanjung", "Banawa", "Banawa Selatan", "Banawa Tengah", "Dampelas", "Labuan", "Pinembani", "Rio Pakava", "Sindue", "Sindue Tobata", "Sindue Tombusabora", "Sirenja", "Sojol", "Sojol Utara", "Tanantovea"],
            "Poso": ["Lage", "Lore Barat", "Lore Piore", "Lore Selatan", "Lore Tengah", "Lore Timur", "Lore Utara", "Pamona Barat", "Pamona Puselemba", "Pamona Selatan", "Pamona Tenggara", "Pamona Timur", "Pamona Utara", "Poso Kota", "Poso Kota Selatan", "Poso Kota Utara", "Poso Pesisir", "Poso Pesisir Selatan", "Poso Pesisir Utara"],
            "Toli-Toli": ["Baolan", "Basidondo", "Dako Pemean", "Dampal Selatan", "Dampal Utara", "Dondo", "Galang", "Ogodeide", "Toli-Toli Utara"],
            "Buol": ["Biau", "Bokat", "Bukal", "Bunobogu", "Gadung", "Lakea", "Momunu", "Paleleh", "Paleleh Barat", "Tiloan"]
        }
    },
    "Maluku": {
        cities: ["Ambon", "Tual", "Masohi", "Namlea", "Dobo"],
        districts: {
            "Ambon": ["Baguala", "Leihitu", "Leihitu Barat", "Nusaniwe", "Sirimau", "Teluk Ambon"],
            "Tual": ["Amahai", "Banda", "Kepulauan Aru Barat", "Kepulauan Aru Selatan", "Kepulauan Aru Tengah", "Kepulauan Aru Timur", "Kepulauan Aru Utara", "Pulau-Pulau Aru", "Salahutu", "Tehoru"],
            "Masohi": ["Air Buaya", "Batabual", "Lilialy", "Lolong Guba", "Waelata", "Waplau"],
            "Namlea": ["Air Buaya", "Batabual", "Lilialy", "Lolong Guba", "Waelata", "Waplau"],
            "Dobo": ["Amahai", "Banda", "Kepulauan Aru Barat", "Kepulauan Aru Selatan", "Kepulauan Aru Tengah", "Kepulauan Aru Timur", "Kepulauan Aru Utara", "Pulau-Pulau Aru", "Salahutu", "Tehoru"]
        }
    },
    "Papua Barat": {
        cities: ["Manokwari", "Sorong", "Fakfak", "Kaimana", "Raja Ampat"],
        districts: {
            "Manokwari": ["Manokwari Barat", "Manokwari Selatan", "Manokwari Timur", "Manokwari Utara", "Prafi", "Sidey", "Tanah Rubuh", "Warmare"],
            "Sorong": ["Aimas", "Bagun", "Beraur", "Botain", "Fokour", "Inanwatan", "Kais", "Kais Darat", "Kambraw", "Klayili", "Makbon", "Mariat", "Maudus", "Mayamuk", "Moisegen", "Salawati", "Salawati Selatan", "Sayosa", "Segun", "Seremuk", "Sunook", "Taige", "Wayer", "Wondiboy"],
            "Fakfak": ["Arguni", "Bomberay", "Fakfak", "Fakfak Barat", "Fakfak Tengah", "Fakfak Timur", "Karas", "Kayauni", "Kokas", "Kramongmongga", "Teluk Patipi", "Tomage"],
            "Kaimana": ["Burmeso", "Kaimana", "Kambrau", "Teluk Arguni Atas", "Teluk Etna", "Yamor"],
            "Raja Ampat": ["Ayau", "Batanta Selatan", "Batanta Utara", "Kepulauan Ayau", "Kepulauan Sembilan", "Kofiau", "Kofiau Timur", "Meos Mansar", "Misool", "Misool Barat", "Misool Selatan", "Misool Timur", "Misool Utara", "Salawati Barat", "Salawati Tengah", "Salawati Utara", "Supnin", "Teluk Mayalibit", "Tiplol Mayalibit", "Waigeo Barat", "Waigeo Barat Kepulauan", "Waigeo Selatan", "Waigeo Timur", "Waigeo Utara", "Warwabomi"]
        }
    },
    "Jambi": {
        cities: ["Jambi", "Sungai Penuh", "Muaro Bungo", "Sarolangun", "Tebo"],
        districts: {
            "Jambi": ["Alam Barajo", "Danau Sipin", "Danau Teluk", "Jambi Luar Kota", "Jambi Selatan", "Jambi Timur", "Pasar Jambi", "Pelayangan", "Telanaipura"],
            "Sungai Penuh": ["Hamparan Rawang", "Kumun Debai", "Pesisir Bukit", "Pondok Tinggi", "Sungai Bungkal", "Sungai Penuh"],
            "Muaro Bungo": ["Bungo Dani", "Jujuhan", "Jujuhan Ilir", "Lubuk Landai", "Muara Bungo", "Pasar Muara Bungo", "Pelepat", "Rantau Pandan", "Rimbo Tengah", "Rimbo Ulu", "Rimbo Bujang", "Senyerang", "Singkut", "Tabir", "Tabir Barat", "Tabir Ilir", "Tabir Lintas", "Tabir Selatan", "Tabir Timur", "Tabir Ulu", "Tebo Ilir", "Tebo Tengah", "Tebo Ulu", "Tengah Ilir", "Tengah Tiga"],
            "Sarolangun": ["Air Hitam", "Bathin VIII", "Batang Asai", "Batang Asam", "Batu Kuning", "Cermin Nan Gedang", "Limun", "Mandiangin", "Pauh", "Pelawan", "Sarolangun", "Singkut"],
            "Tebo": ["Rimbo Bujang", "Rimbo Ilir", "Rimbo Ulu", "Serai Serumpun", "Sumay", "Tebo Ilir", "Tebo Tengah", "Tebo Ulu", "Tengah Ilir", "VII Koto", "VII Koto Ilir"]
        }
    },
    "Bengkulu": {
        cities: ["Bengkulu", "Curup", "Arga Makmur", "Mukomuko", "Rejang Lebong"],
        districts: {
            "Bengkulu": ["Bengkulu Selatan", "Bengkulu Tengah", "Bengkulu Utara", "Kampung Melayu", "Kota Bengkulu", "Muara Bangka Hulu", "Ratu Agung", "Ratu Samban", "Selebar", "Singaran Pati", "Sungai Serut", "Teluk Segara"],
            "Curup": ["Bermani Ilir", "Binduriang", "Curup", "Curup Selatan", "Curup Tengah", "Curup Timur", "Curup Utara", "Kaur Selatan", "Kaur Tengah", "Kaur Utara", "Kelam Tengah", "Keluas", "Kinal", "Merigi", "Merigi Kelindang", "Merigi Sakti", "Muara Sahung", "Nasal", "Padang Guci Hilir", "Padang Guci Hulu", "Pematang Tiga", "Pondok Kelapa", "Semidang Alas", "Semidang Alas Maras", "Sintang", "Taba Penanjung", "Talang Empat", "Tanjung Agung Palik", "Tebat Karai"],
            "Arga Makmur": ["Air Besi", "Air Napal", "Air Padang", "Arga Makmur", "Arma Jaya", "Batik Nau", "Enggano", "Giri Mulia", "Kerkap", "Ketahun", "Napal Putih", "Padang Jaya", "Putri Hijau", "Tanjung Agung Palik"],
            "Mukomuko": ["Air Dikit", "Air Majunto", "Air Rami", "Ipuh", "Kota Mukomuko", "Lubuk Pinang", "Malin Deman", "Penarik", "Pondok Suguh", "Selagan Raya", "Sungai Rumbai", "Teramang Jaya", "Teramang Jaya", "V Koto"],
            "Rejang Lebong": ["Bermani Ulu", "Bermani Ulu Raya", "Binduriang", "Curup", "Curup Selatan", "Curup Tengah", "Curup Timur", "Curup Utara", "Kaur Selatan", "Kaur Tengah", "Kaur Utara", "Kelam Tengah", "Keluas", "Kinal", "Merigi", "Merigi Kelindang", "Merigi Sakti", "Muara Sahung", "Nasal", "Padang Guci Hilir", "Padang Guci Hulu", "Pematang Tiga", "Pondok Kelapa", "Semidang Alas", "Semidang Alas Maras", "Sintang", "Taba Penanjung", "Talang Empat", "Tanjung Agung Palik", "Tebat Karai"]
        }
    },
    "Kepulauan Bangka Belitung": {
        cities: ["Pangkal Pinang", "Tanjung Pandan", "Manggar", "Sungai Liat", "Muntok"],
        districts: {
            "Pangkal Pinang": ["Bukit Intan", "Gabek", "Gerunggang", "Girimaya", "Pangkal Balam", "Rangkui", "Taman Sari"],
            "Tanjung Pandan": ["Belinyu", "Mendo Barat", "Merawang", "Pemali", "Riau Silip", "Sungai Liat"],
            "Manggar": ["Air Gegas", "Badau", "Baturusa", "Belinyu", "Gantung", "Jebus", "Kelapa", "Koba", "Lubuk Besar", "Mendo Barat", "Merawang", "Pemali", "Riau Silip", "Sungai Liat", "Simpang Teritip", "Toboali"],
            "Sungai Liat": ["Belinyu", "Mendo Barat", "Merawang", "Pemali", "Riau Silip", "Sungai Liat"],
            "Muntok": ["Damar", "Kepulauan Pongok", "Pulau Besar", "Riau Silip", "Simpang Teritip", "Sungai Selan", "Toboali"]
        }
    },
    "Kepulauan Riau": {
        cities: ["Tanjung Pinang", "Batam", "Tanjung Balai Karimun", "Tanjung Batu", "Ranai"],
        districts: {
            "Tanjung Pinang": ["Bintan Pesisir", "Bintan Timur", "Bintan Utara", "Gunung Kijang", "Mantang", "Tanjung Pinang Barat", "Tanjung Pinang Kota", "Tanjung Pinang Timur"],
            "Batam": ["Batu Aji", "Batu Ampar", "Belakang Padang", "Bengkong", "Bulang", "Galang", "Lubuk Baja", "Nongsa", "Sagulung", "Sei Beduk", "Sekupang", "Singkep", "Tambelan"],
            "Tanjung Balai Karimun": ["Belat", "Buru", "Durai", "Karimun", "Meral", "Meral Barat", "Tebing"],
            "Tanjung Batu": ["Bintan Pesisir", "Bintan Timur", "Bintan Utara", "Gunung Kijang", "Mantang", "Tanjung Pinang Barat", "Tanjung Pinang Kota", "Tanjung Pinang Timur"],
            "Ranai": ["Belat", "Buru", "Durai", "Karimun", "Meral", "Meral Barat", "Tebing"]
        }
    },
    "Kalimantan Tengah": {
        cities: ["Palangka Raya", "Sampit", "Pangkalan Bun", "Kuala Kapuas", "Sukamara"],
        districts: {
            "Palangka Raya": ["Bukit Batu", "Cempaga", "Jekan Raya", "Mentawa Baru Ketapang", "Pahandut", "Rakumpit", "Sebangau", "Seruyan Hilir", "Seruyan Hilir Timur", "Seruyan Raya"],
            "Sampit": ["Baamang", "Babirik", "Bukit Makmur", "Cempaga Hulu", "Kota Besi", "Mentaya Hilir Selatan", "Mentaya Hilir Utara", "Mentaya Hulu", "Parenggean", "Pulau Hanaut", "Seranau", "Telawang", "Teluk Sampit"],
            "Pangkalan Bun": ["Arut Selatan", "Arut Utara", "Kotawaringin Lama", "Kumai", "Pangkalan Banteng", "Pangkalan Lada"],
            "Kuala Kapuas": ["Basarang", "Dadahup", "Kapuas Barat", "Kapuas Hilir", "Kapuas Hulu", "Kapuas Murung", "Kapuas Timur", "Mandau Talawang", "Pasak Talawang", "Pulau Petak", "Selat", "Tamban Catur", "Timpah"],
            "Sukamara": ["Balai Riam", "Jelai", "Pantai Lunci", "Permata Kecubung", "Sukamara"]
        }
    },
    "Kalimantan Utara": {
        cities: ["Tanjung Selor", "Tarakan", "Nunukan", "Malinau", "Bulungan"],
        districts: {
            "Tanjung Selor": ["Peso", "Peso Hilir", "Peso Ilir", "Pulau Bunyu", "Sekatak", "Tanjung Palas", "Tanjung Palas Barat", "Tanjung Palas Tengah", "Tanjung Palas Timur", "Tanjung Palas Utara", "Tanjung Selor"],
            "Tarakan": ["Tarakan Barat", "Tarakan Tengah", "Tarakan Timur", "Tarakan Utara"],
            "Nunukan": ["Krayan", "Krayan Barat", "Krayan Selatan", "Lumbis", "Lumbis Ogong", "Nunukan", "Nunukan Selatan", "Sebatik", "Sebatik Barat", "Sebatik Tengah", "Sebatik Timur", "Sebatik Utara", "Seimenggaris", "Sembakung", "Tulin Onsoi"],
            "Malinau": ["Bahau Hulu", "Kayan Hilir", "Kayan Hulu", "Kayan Selatan", "Malinau Barat", "Malinau Kota", "Malinau Selatan", "Malinau Utara", "Mentarang", "Mentarang Hulu", "Pujungan", "Sungai Boh", "Sungai Tubu"],
            "Bulungan": ["Bunyu", "Peso", "Peso Hilir", "Sekatak", "Tanjung Palas", "Tanjung Palas Barat", "Tanjung Palas Tengah", "Tanjung Palas Timur", "Tanjung Palas Utara", "Tanjung Selor"]
        }
    },
    "Sulawesi Tenggara": {
        cities: ["Kendari", "Baubau", "Raha", "Kolaka", "Wakatobi"],
        districts: {
            "Kendari": ["Abeli", "Baruga", "Kadia", "Kambu", "Kendari", "Kendari Barat", "Mandonga", "Poasia", "Puuwatu", "Wua-Wua"],
            "Baubau": ["Batupoaro", "Betoambari", "Bungi", "Kokalukuna", "Lea-Lea", "Murhum", "Sampolawa", "Soropia", "Talaga Raya", "Tongkuno", "Wolio"],
            "Raha": ["Andoolo", "Angata", "Baito", "Basala", "Benua", "Buke", "Kolono", "Laeya", "Lalembuu", "Landono", "Lalontara", "Lowea", "Moramo", "Moramo Utara", "Palangga", "Palangga Selatan", "Ranomeeto", "Ranomeeto Barat", "Tinanggea", "Wawonii Barat", "Wawonii Selatan", "Wawonii Tengah", "Wawonii Tenggara", "Wawonii Timur", "Wawonii Timur Laut", "Wawonii Utara"],
            "Kolaka": ["Baula", "Kolaka", "Lalonggasumeeto", "Lati", "Poli Polia", "Samaturu", "Toari", "Wolo"],
            "Wakatobi": ["Binongko", "Kaledupa", "Kaledupa Selatan", "Togo Binongko", "Tomia", "Tomia Timur", "Wangi-Wangi", "Wangi-Wangi Selatan"]
        }
    },
    "Gorontalo": {
        cities: ["Gorontalo", "Limboto", "Tilamuta", "Marisa", "Kwandang"],
        districts: {
            "Gorontalo": ["Dungingi", "Gorontalo", "Gorontalo Utara", "Kwandang", "Limboto", "Limboto Barat", "Paguyaman", "Paguyaman Pantai", "Suwozero", "Telaga", "Telaga Biru", "Tibawa", "Tilango", "Tolangohula"],
            "Limboto": ["Batudaa", "Batudaa Pantai", "Biluhu", "Bongomeme", "Dungingi", "Limboto", "Limboto Barat", "Mootilango", "Pulubala", "Tabongo", "Telaga", "Telaga Jaya", "Tibawa", "Tilango", "Tolangohula"],
            "Tilamuta": ["Dungingi", "Limboto", "Limboto Barat", "Paguyaman", "Paguyaman Pantai", "Suwozero", "Telaga", "Telaga Biru", "Tibawa", "Tilango", "Tolangohula"],
            "Marisa": ["Batudaa", "Batudaa Pantai", "Biluhu", "Bongomeme", "Dungingi", "Limboto", "Limboto Barat", "Mootilango", "Pulubala", "Tabongo", "Telaga", "Telaga Jaya", "Tibawa", "Tilango", "Tolangohula"],
            "Kwandang": ["Dungingi", "Gorontalo", "Gorontalo Utara", "Kwandang", "Limboto", "Limboto Barat", "Paguyaman", "Paguyaman Pantai", "Suwozero", "Telaga", "Telaga Biru", "Tibawa", "Tilango", "Tolangohula"]
        }
    },
    "Sulawesi Barat": {
        cities: ["Mamuju", "Polewali Mandar", "Majene", "Mamasa", "Pasangkayu"],
        districts: {
            "Mamuju": ["Budong-Budong", "Kalukku", "Kalumpang", "Kepulauan Bala Balakang", "Mamuju", "Pangale", "Papalang", "Sampaga", "Tapalang", "Tapalang Barat", "Tobadak"],
            "Polewali Mandar": ["Alu", "Anreapi", "Balanipa", "Binuang", "Bulo", "Campalagian", "Limboro", "Luyo", "Mapilli", "Matakali", "Matangnga", "Polewali", "Tapango", "Tinambung", "Tubbi Taramanu", "Wonomulyo"],
            "Majene": ["Banggae", "Banggae Timur", "Malunda", "Pamboang", "Sendana", "Tammerodo Sendana", "Tubo Sendana", "Ulumanda"],
            "Mamasa": ["Aralle", "Balla", "Bambang", "Buntumalangka", "Mamasa", "Mambi", "Mehalaan", "Messawa", "Nosu", "Pana", "Rantebulahan Timur", "Sesenapadang", "Sumarorong", "Tabang", "Tabulahan", "Tanduk Kalua", "Tawalian"],
            "Pasangkayu": ["Bambaira", "Bambalamotu", "Baras", "Bulu Taba", "Duripoku", "Lariang", "Pasangkayu", "Sarjo", "Sarudu", "Tikke Raya", "Wonomulyo"]
        }
    },
    "Maluku Utara": {
        cities: ["Ternate", "Tidore Kepulauan", "Sofifi", "Tobelo", "Galela"],
        districts: {
            "Ternate": ["Kota Ternate Selatan", "Kota Ternate Tengah", "Kota Ternate Utara", "Moti", "Pulau Batang Dua", "Pulau Hiri", "Pulau Ternate", "Ternate Selatan", "Ternate Tengah", "Ternate Utara"],
            "Tidore Kepulauan": ["Oba", "Oba Selatan", "Oba Tengah", "Oba Utara", "Tidore", "Tidore Selatan", "Tidore Timur", "Tidore Utara"],
            "Sofifi": ["Galela", "Galela Barat", "Galela Selatan", "Galela Utara", "Kao", "Kao Barat", "Kao Teluk", "Kao Utara", "Loloda", "Loloda Tengah", "Loloda Utara", "Tobelo", "Tobelo Barat", "Tobelo Selatan", "Tobelo Tengah", "Tobelo Timur", "Tobelo Utara"],
            "Tobelo": ["Galela", "Galela Barat", "Galela Selatan", "Galela Utara", "Kao", "Kao Barat", "Kao Teluk", "Kao Utara", "Loloda", "Loloda Tengah", "Loloda Utara", "Tobelo", "Tobelo Barat", "Tobelo Selatan", "Tobelo Tengah", "Tobelo Timur", "Tobelo Utara"],
            "Galela": ["Galela", "Galela Barat", "Galela Selatan", "Galela Utara", "Kao", "Kao Barat", "Kao Teluk", "Kao Utara", "Loloda", "Loloda Tengah", "Loloda Utara", "Tobelo", "Tobelo Barat", "Tobelo Selatan", "Tobelo Tengah", "Tobelo Timur", "Tobelo Utara"]
        }
    }
    // Semua 34 provinsi Indonesia sudah lengkap
};

function initializeRegionSelectors(provinceId, cityId, districtId) {
    const provinceField = document.getElementById(provinceId);
    const cityField = document.getElementById(cityId);
    const districtField = document.getElementById(districtId);

    if (!provinceField || !cityField || !districtField) {
        return;
    }

    provinceField.addEventListener('change', function() {
        const province = this.value;

        cityField.innerHTML = '<option value="">Pilih Kota / Kabupaten</option>';
        districtField.innerHTML = '<option value="">Pilih Kecamatan</option>';

        if (regionData[province]) {
            regionData[province].cities.forEach(function(city) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityField.appendChild(option);
            });
        }
    });

    cityField.addEventListener('change', function() {
        const province = provinceField.value;
        const city = this.value;

        districtField.innerHTML = '<option value="">Pilih Kecamatan</option>';

        if (regionData[province] && regionData[province].districts[city]) {
            regionData[province].districts[city].forEach(function(district) {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtField.appendChild(option);
            });
        }
    });
}

initializeRegionSelectors('province', 'city', 'district');
initializeRegionSelectors('googleProvince', 'googleCity', 'googleDistrict');

const signupForm = document.getElementById('signupForm');
if (signupForm) {
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const to_name = document.getElementById('fullname').value;
    const to_email = document.getElementById('email').value;
    const province = document.getElementById('province').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const address = document.getElementById('address').value;
    const postalCode = document.getElementById('postalCode').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!to_name || !to_email || !province || !city || !district || !address || !postalCode || !password || !confirmPassword) {
        alert('Harap isi semua field!');
        return;
    }
    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password harus sama.');
        return;
    }

    const signupButton = document.getElementById('signupButton');
    if (signupButton) {
        signupButton.disabled = true;
        signupButton.classList.add('sending');
    }

    // Simpan data pendaftaran ke localStorage
    const userData = {
        fullname: to_name,
        to_name: to_name,
        email: to_email,
        province: province,
        city: city,
        district: district,
        address: address,
        postalCode: postalCode,
        password: password,
        loginMethod: 'password',
        isRegistered: true,
        registrationDate: new Date().toISOString()
    };
    
    localStorage.setItem('userRegistration', JSON.stringify(userData));
    if (window.MedGeoAuth) {
        window.MedGeoAuth.setAuthenticatedUser(userData, 'password');
    }

    showRegistrationMessage('Pendaftaran berhasil. Akun Anda sudah aktif dan Anda akan masuk ke beranda MedGeo dalam 3 detik...');
    setTimeout(function() {
        redirectToLoginDashboard();
    }, 3000);
});
}

function showRegistrationMessage(message) {
    const msgBox = document.getElementById('registrationMessage');
    if (msgBox) {
        msgBox.textContent = message;
        msgBox.style.display = 'block';
    }
}

const GOOGLE_PENDING_STORAGE_KEY = 'pendingGoogleRegistration';
const MEDGEO_WELCOME_REDIRECT_KEY = 'medgeoShowRecommendations';

function redirectToPharmacyRecommendations() {
    try {
        sessionStorage.setItem(MEDGEO_WELCOME_REDIRECT_KEY, '1');
    } catch (error) {
        console.warn('Gagal menyimpan status rekomendasi:', error);
    }

    window.location.href = 'apotekterdekat.html';
}

function redirectToLoginDashboard() {
    window.location.href = 'beranda.html';
}

function showGoogleAddressMessage(message, isError) {
    const messageBox = document.getElementById('googleAddressMessage');
    if (!messageBox) {
        return;
    }

    messageBox.textContent = message;
    messageBox.className = isError ? 'google-address-message error' : 'google-address-message';
    messageBox.style.display = 'block';
}

function getPendingGoogleProfile() {
    try {
        return JSON.parse(sessionStorage.getItem(GOOGLE_PENDING_STORAGE_KEY)) || null;
    } catch (error) {
        return null;
    }
}

function setPendingGoogleProfile(profile) {
    sessionStorage.setItem(GOOGLE_PENDING_STORAGE_KEY, JSON.stringify(profile));
}

function clearPendingGoogleProfile() {
    sessionStorage.removeItem(GOOGLE_PENDING_STORAGE_KEY);
}

function openGoogleAddressSection(profile) {
    const fullnameField = document.getElementById('googleFullname');
    const emailField = document.getElementById('googleEmail');

    if (!fullnameField || !emailField) {
        return;
    }

    fullnameField.value = profile.name || profile.email || '';
    emailField.value = profile.email || '';
    showGoogleAddressMessage('Login Google berhasil. Lengkapi alamat Anda untuk mengaktifkan pencarian apotek.', false);
}

function completeGoogleRegistration() {
    const googleAddressForm = document.getElementById('googleAddressForm');
    if (!googleAddressForm) {
        return;
    }

    const pendingGoogleProfile = getPendingGoogleProfile();
    if (!pendingGoogleProfile) {
        showGoogleAddressMessage('Data login Google tidak ditemukan. Silakan kembali ke halaman pendaftaran dan login ulang dengan Google.', true);
        const submitButton = document.getElementById('googleAddressButton');
        if (submitButton) {
            submitButton.disabled = true;
        }
        return;
    }

    openGoogleAddressSection(pendingGoogleProfile);

    googleAddressForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const province = document.getElementById('googleProvince').value;
        const city = document.getElementById('googleCity').value;
        const district = document.getElementById('googleDistrict').value;
        const address = document.getElementById('googleAddress').value.trim();
        const postalCode = document.getElementById('googlePostalCode').value.trim();
        const submitButton = document.getElementById('googleAddressButton');

        if (!province || !city || !district || !address || !postalCode) {
            showGoogleAddressMessage('Harap lengkapi semua data alamat Google Anda.', true);
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add('sending');
        }

        const userData = {
            fullname: pendingGoogleProfile.name || pendingGoogleProfile.email,
            to_name: pendingGoogleProfile.name || pendingGoogleProfile.email,
            email: pendingGoogleProfile.email,
            googleId: pendingGoogleProfile.sub,
            profilePicture: pendingGoogleProfile.picture,
            loginMethod: 'google',
            province: province,
            city: city,
            district: district,
            address: address,
            postalCode: postalCode,
            isRegistered: true,
            registrationDate: new Date().toISOString()
        };

        localStorage.setItem('userRegistration', JSON.stringify(userData));
        if (window.MedGeoAuth) {
            window.MedGeoAuth.setAuthenticatedUser(userData, 'google');
        }

        showGoogleAddressMessage('Alamat berhasil disimpan. Anda akan diarahkan ke beranda utama MedGeo dalam 3 detik...', false);
        clearPendingGoogleProfile();
        setTimeout(function() {
            window.location.href = 'beranda.html';
        }, 3000);

        if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove('sending');
        }
    });
}

// Fungsi untuk toggle visibility password
function togglePassword(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const eyeIcon = document.getElementById(fieldId + '-eye');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '🙈'; // Closed eye emoji
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '👁️'; // Open eye emoji
    }
}

// ========== GOOGLE SIGN-IN FUNCTIONS ==========

// Trigger Google Sign-In saat halaman load
window.addEventListener('load', function() {
    if (document.getElementById('google-signin-container')) {
        setTimeout(initializeGoogleSignIn, 500);
    }
    setupConsultationAccess();
    setupConsultationForm();
    setupChatRoom();
    completeGoogleRegistration();
});

function initializeGoogleSignIn() {
    if (typeof google === 'undefined') {
        console.error('Google SDK belum dimuat');
        return;
    }

    if (CONFIG.GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
        console.warn('⚠️ Google Client ID belum dikonfigurasi di config.js');
        return;
    }

    google.accounts.id.initialize({
        client_id: CONFIG.GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse
    });

    // Render Google Sign-In button
    const container = document.getElementById('google-signin-container');
    if (container) {
        google.accounts.id.renderButton(container, {
            theme: 'outline',
            size: 'large',
            text: 'signin_with'
        });
    }
}

// Handle button click untuk manual trigger
function handleGoogleSignIn() {
    if (typeof google === 'undefined') {
        alert('Google SDK tidak tersedia');
        return;
    }

    if (CONFIG.GOOGLE_CLIENT_ID === '514089865210-a9uf2r3kh9jmutt1dq9v4j070o2faba5.apps.googleusercontent.com') {
        alert('⚠️ Error: Google Client ID belum dikonfigurasi!\n\nSilakan:\n1. Buka Google Cloud Console\n2. Buat OAuth 2.0 Client ID\n3. Copy Client ID ke config.js');
        return;
    }

    google.accounts.id.prompt();
}

// Handle Google Response
function handleGoogleResponse(response) {
    if (!response.credential) {
        alert('Gagal login dengan Google');
        return;
    }

    try {
        // Decode JWT token
        const token = response.credential;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
        );
        const userGoogleData = JSON.parse(jsonPayload);

        setPendingGoogleProfile(userGoogleData);
        window.location.href = 'google-address.html';
    } catch (error) {
        console.error('Error processing Google token:', error);
        alert('Gagal memproses login Google. Silakan coba lagi.');
    }
}

function setupConsultationForm() {
    const consultForm = document.getElementById('consultationForm');
    if (!consultForm) {
        return;
    }

    consultForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const consultName = document.getElementById('consultName').value.trim();
        const consultEmail = document.getElementById('consultEmail').value.trim();
        const consultTopic = document.getElementById('consultTopic').value;
        const consultMessage = document.getElementById('consultMessage').value.trim();

        if (!consultName || !consultEmail || !consultTopic || !consultMessage) {
            alert('Harap isi semua field konsultasi!');
            return;
        }

        const submitButton = consultForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add('sending');
        }

        showConsultationMessage('Konsultasi berhasil disimpan. Terima kasih, ' + consultName + '.');
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.classList.remove('sending');
        }
        consultForm.reset();
    });
}

function setupChatRoom() {
    const startButton = document.getElementById('startConsultButton');
    const chatRoomForm = document.getElementById('chatRoomForm');
    const consultationLanding = document.getElementById('consultationLanding');
    const chatRoomSection = document.getElementById('consultationRoomSection');
    const chatMessages = document.getElementById('chatMessages');
    const chatSubtitle = document.getElementById('chatSubtitle');
    const backButton = document.getElementById('backToConsultationButton');
    const clearButton = document.getElementById('clearChatButton');
    const topicButtons = document.querySelectorAll('.chat-topic-chip');

    if (!startButton || !chatRoomForm || !consultationLanding || !chatRoomSection || !chatMessages || !chatSubtitle) {
        return;
    }

    startButton.addEventListener('click', function() {
        if (!isUserRegistered()) {
            showConsultationMessage('Fitur konsultasi hanya tersedia untuk pengguna yang sudah terdaftar.');
            return;
        }

        showConsultationRoom();
    });

    if (backButton) {
        backButton.addEventListener('click', function() {
            consultationLanding.style.display = 'block';
            chatRoomSection.style.display = 'none';
            consultationLanding.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function() {
            localStorage.removeItem('medgeoChatRoom');
            localStorage.removeItem('medgeoConsultationInsights');
            renderChatMessages({ messages: [] });
            showConsultationMessage('Riwayat chat berhasil dihapus.');
        });
    }

    topicButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const input = document.getElementById('chatInput');
            if (!input) {
                return;
            }

            input.value = button.dataset.message || '';
            input.focus();
        });
    });

    chatRoomForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (!message) {
            return;
        }

        const state = loadChatState() || { messages: [] };
        state.messages = state.messages || [];
        state.messages.push({ author: 'Anda', text: message, timestamp: new Date().toISOString(), user: true });
        saveChatState(state);
        saveConsultationInsights(state.messages);
        renderChatMessages(state);

        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(function() {
            const botMessage = 'Terima kasih, pesan Anda sudah kami terima. Tim kami akan segera membalas dalam waktu singkat.';
            state.messages.push({ author: 'MedGeo', text: botMessage, timestamp: new Date().toISOString(), user: false });
            saveChatState(state);
            renderChatMessages(state);
        }, 800);
    });
}

function showConsultationRoom() {
    if (!isUserRegistered()) {
        showConsultationLockedState();
        return;
    }

    const consultationLanding = document.getElementById('consultationLanding');
    const chatRoomSection = document.getElementById('consultationRoomSection');
    const chatMessages = document.getElementById('chatMessages');

    if (!consultationLanding || !chatRoomSection || !chatMessages) {
        return;
    }

    consultationLanding.style.display = 'none';
    chatRoomSection.style.display = 'block';

    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.focus();
    }

    chatRoomSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const state = loadChatState() || { messages: [] };
    renderChatMessages(state);
}

function appendChatMessage(author, text, isUser, timestamp, index) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    const time = timestamp
        ? new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageEl = document.createElement('div');
    messageEl.className = 'chat-message ' + (isUser ? 'user' : 'agent');
    let actions = '';

    if (isUser) {
        actions = `
            <div class="chat-message-actions">
                <button type="button" class="chat-message-action" data-action="edit" data-index="${index}">Edit</button>
                <button type="button" class="chat-message-action delete" data-action="delete" data-index="${index}">Hapus</button>
            </div>
        `;
    }

    messageEl.innerHTML = `
        <div class="chat-message-bubble">
            <strong class="chat-message-author">${author}</strong>
            <p class="chat-message-text">${text}</p>
            <small class="chat-message-time">${time}</small>
            ${actions}
        </div>
    `;
    chatMessages.appendChild(messageEl);
}

function renderChatMessages(state) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) {
        return;
    }

    chatMessages.innerHTML = '';

    if (!state.messages || !state.messages.length) {
        chatMessages.innerHTML = `
            <div class="chat-empty-state">
                <strong>Ruang konsultasi siap digunakan</strong>
                <p>Tulis pertanyaan Anda atau pilih salah satu topik cepat di atas untuk memulai percakapan.</p>
            </div>
        `;
        return;
    }

    state.messages.forEach(function(msg, index) {
        appendChatMessage(msg.author, msg.text, msg.user, msg.timestamp, index);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function editChatMessage(index) {
    const state = loadChatState() || { messages: [] };
    const targetMessage = state.messages[index];

    if (!targetMessage || !targetMessage.user) {
        return;
    }

    const updatedText = prompt('Edit pesan Anda:', targetMessage.text);
    if (updatedText === null) {
        return;
    }

    const trimmedText = updatedText.trim();
    if (!trimmedText) {
        alert('Pesan tidak boleh kosong.');
        return;
    }

    targetMessage.text = trimmedText;
    targetMessage.editedAt = new Date().toISOString();
    saveChatState(state);
    saveConsultationInsights(state.messages);
    renderChatMessages(state);
    showConsultationMessage('Pesan berhasil diperbarui.');
}

function deleteChatMessage(index) {
    const state = loadChatState() || { messages: [] };
    const targetMessage = state.messages[index];

    if (!targetMessage || !targetMessage.user) {
        return;
    }

    if (!confirm('Hapus pesan ini?')) {
        return;
    }

    state.messages.splice(index, 1);
    saveChatState(state);
    saveConsultationInsights(state.messages);
    renderChatMessages(state);
    showConsultationMessage('Pesan berhasil dihapus.');
}

document.addEventListener('click', function(event) {
    const actionButton = event.target.closest('.chat-message-action');
    if (!actionButton) {
        return;
    }

    const index = Number(actionButton.dataset.index);
    const action = actionButton.dataset.action;

    if (action === 'edit') {
        editChatMessage(index);
    }

    if (action === 'delete') {
        deleteChatMessage(index);
    }
});

function saveChatState(state) {
    localStorage.setItem('medgeoChatRoom', JSON.stringify(state));
}

function saveConsultationInsights(messages) {
    const userMessages = (messages || []).filter(function(message) {
        return message && message.user && message.text;
    });

    if (!userMessages.length) {
        localStorage.removeItem('medgeoConsultationInsights');
        return;
    }

    const latestQuestion = userMessages[userMessages.length - 1].text;
    const combinedText = userMessages.map(function(message) {
        return message.text.toLowerCase();
    }).join(' ');
    const topicLibrary = [
        {
            id: 'demam',
            label: 'Demam dan nyeri',
            keywords: ['demam', 'panas', 'nyeri', 'sakit kepala', 'meriang'],
            categories: ['Obat Demam', 'Pemulihan'],
            products: ['Paracetamol 500 mg', 'Oralit Sachet']
        },
        {
            id: 'batuk',
            label: 'Batuk dan flu',
            keywords: ['batuk', 'flu', 'pilek', 'tenggorokan'],
            categories: ['Perawatan Harian', 'Suplemen'],
            products: ['Sirup Batuk Herbal', 'Vitamin C 1000 mg']
        },
        {
            id: 'antibiotik',
            label: 'Tebus resep dan antibiotik',
            keywords: ['antibiotik', 'resep', 'infeksi', 'amoxicillin', 'amoxilin'],
            categories: ['Antibiotik'],
            products: ['Amoxicillin 500 mg']
        },
        {
            id: 'alat',
            label: 'Alat kesehatan',
            keywords: ['alat kesehatan', 'termometer', 'masker', 'cek suhu'],
            categories: ['Alat Kesehatan'],
            products: ['Thermometer Digital', 'Masker Medis 1 Box']
        },
        {
            id: 'harian',
            label: 'Kebutuhan harian',
            keywords: ['mual', 'masuk angin', 'perjalanan', 'harian', 'vitamin'],
            categories: ['Perawatan Harian', 'Suplemen'],
            products: ['Minyak Angin Roll On', 'Vitamin C 1000 mg']
        }
    ];

    const matchedTopics = topicLibrary.filter(function(topic) {
        return topic.keywords.some(function(keyword) {
            return combinedText.includes(keyword);
        });
    });
    const categories = Array.from(new Set(matchedTopics.flatMap(function(topic) {
        return topic.categories;
    })));
    const products = Array.from(new Set(matchedTopics.flatMap(function(topic) {
        return topic.products;
    })));
    const labels = matchedTopics.map(function(topic) {
        return topic.label;
    });

    localStorage.setItem('medgeoConsultationInsights', JSON.stringify({
        latestQuestion: latestQuestion,
        topics: labels,
        categories: categories,
        products: products,
        updatedAt: new Date().toISOString()
    }));
}

function loadChatState() {
    try {
        return JSON.parse(localStorage.getItem('medgeoChatRoom')) || null;
    } catch (error) {
        return null;
    }
}

function getRegisteredUser() {
    if (window.MedGeoAuth) {
        const authenticatedUser = window.MedGeoAuth.getAuthenticatedUser();
        if (authenticatedUser) {
            return authenticatedUser;
        }
    }

    try {
        return JSON.parse(localStorage.getItem('userRegistration')) || null;
    } catch (error) {
        return null;
    }
}

function isUserRegistered() {
    if (window.MedGeoAuth) {
        return !!window.MedGeoAuth.getAuthenticatedUser();
    }

    const registeredUser = getRegisteredUser();
    return !!(registeredUser && registeredUser.isRegistered);
}

function setupConsultationAccess() {
    const consultationLanding = document.getElementById('consultationLanding');
    const chatRoomSection = document.getElementById('consultationRoomSection');

    if (!consultationLanding && !chatRoomSection) {
        return;
    }

    if (isUserRegistered()) {
        const registeredUser = getRegisteredUser();
        const chatSubtitle = document.getElementById('chatSubtitle');
        const chatUserBadge = document.getElementById('chatUserBadge');

        if (chatSubtitle && registeredUser && registeredUser.fullname) {
            chatSubtitle.textContent = 'Mulai obrolan Anda sekarang, ' + registeredUser.fullname + '.';
        }

        if (chatUserBadge && registeredUser) {
            chatUserBadge.textContent = registeredUser.fullname || registeredUser.email || 'Pengguna MedGeo';
        }

        return;
    }

    showConsultationLockedState();
}

function showConsultationLockedState() {
    const consultationLanding = document.getElementById('consultationLanding');
    const chatRoomSection = document.getElementById('consultationRoomSection');

    if (consultationLanding) {
        consultationLanding.innerHTML = `
            <section class="hero">
                <div class="hero-copy">
                    <span class="eyebrow">Akses Dibatasi</span>
                    <h1>Fitur Konsultasi Hanya untuk Pengguna Terdaftar</h1>
                    <p>Sama seperti fitur apotik, konsultasi hanya bisa dibuka setelah Anda terdaftar. Silakan daftar atau login terlebih dahulu untuk mulai konsultasi.</p>
                    <div class="hero-buttons">
                        <a href="index.html" class="button primary">Login atau Daftar</a>
                    </div>
                </div>
                <div class="hero-card">
                    <h2>Mengapa perlu daftar?</h2>
                    <ul>
                        <li>Data konsultasi tersimpan lebih aman</li>
                        <li>Riwayat chat bisa dikaitkan ke akun Anda</li>
                        <li>Akses fitur MedGeo jadi lebih konsisten</li>
                    </ul>
                </div>
            </section>
        `;
        consultationLanding.style.display = 'block';
    }

    if (chatRoomSection) {
        chatRoomSection.style.display = 'none';
    }
}

function showConsultationMessage(message) {
    const statusBox = document.getElementById('consultationStatus');
    if (statusBox) {
        statusBox.textContent = message;
        statusBox.style.display = 'block';
    }
}

// Override Google Sign-In flow so the configured Client ID is retried reliably
// even when the Google SDK loads later than the window load event.
let googleSignInInitAttempts = 0;
const GOOGLE_SIGN_IN_MAX_ATTEMPTS = 20;

initializeGoogleSignIn = function() {
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
        googleSignInInitAttempts += 1;

        if (googleSignInInitAttempts < GOOGLE_SIGN_IN_MAX_ATTEMPTS) {
            setTimeout(initializeGoogleSignIn, 400);
        } else {
            console.error('Google SDK belum dimuat');
        }
        return;
    }

    if (!window.CONFIG || !CONFIG.GOOGLE_CLIENT_ID || CONFIG.GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
        console.warn('Google Client ID belum dikonfigurasi di config.js');
        return;
    }

    google.accounts.id.initialize({
        client_id: CONFIG.GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse
    });

    const container = document.getElementById('google-signin-container');
    if (container) {
        container.innerHTML = '';
        google.accounts.id.renderButton(container, {
            theme: 'outline',
            size: 'large',
            text: 'signin_with'
        });
    }
};

handleGoogleSignIn = function() {
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
        alert('Google SDK tidak tersedia');
        return;
    }

    if (!window.CONFIG || !CONFIG.GOOGLE_CLIENT_ID || CONFIG.GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
        alert('Google Client ID belum dikonfigurasi di config.js.');
        return;
    }

    google.accounts.id.prompt();
};

// Final override: accept the configured Client ID from config.js correctly
// and show a clearer warning when the page is opened from file://.
initializeGoogleSignIn = function() {
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
        googleSignInInitAttempts += 1;

        if (googleSignInInitAttempts < GOOGLE_SIGN_IN_MAX_ATTEMPTS) {
            setTimeout(initializeGoogleSignIn, 400);
        } else {
            console.error('Google SDK belum dimuat');
        }
        return;
    }

    if (typeof CONFIG === 'undefined' || !CONFIG.GOOGLE_CLIENT_ID || CONFIG.GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
        console.warn('Google Client ID belum dikonfigurasi di config.js');
        return;
    }

    const container = document.getElementById('google-signin-container');
    if (container) {
        container.innerHTML = '';
    }

    google.accounts.id.initialize({
        client_id: CONFIG.GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse
    });

    if (container) {
        google.accounts.id.renderButton(container, {
            theme: 'outline',
            size: 'large',
            text: 'signin_with'
        });
    }
};

handleGoogleSignIn = function() {
    if (window.location.protocol === 'file:') {
        alert('Google Sign-In tidak bisa dijalankan dari file langsung. Jalankan project lewat http://localhost terlebih dahulu.');
        return;
    }

    if (typeof google === 'undefined' || !google.accounts || !google.accounts.id) {
        alert('Google SDK tidak tersedia');
        return;
    }

    if (typeof CONFIG === 'undefined' || !CONFIG.GOOGLE_CLIENT_ID || CONFIG.GOOGLE_CLIENT_ID === 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com') {
        alert('Google Client ID belum dikonfigurasi di config.js.');
        return;
    }

    google.accounts.id.prompt();
};
