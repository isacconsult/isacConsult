const articleData = [
  {
    title: 'Omul care se reglează prin risc',
    slug: 'unu',
    desc: 'Identitate, neurochimie și neocomportament',
    image: 'omul_risc.jpg',
    date: '22 Ian',
    index: 1
  },
  {
    title: 'A fost odată un om',
    slug: 'doi',
    desc: 'A fost odată un om care se mândrea cu un lucru: ca rezista ... ',
    image: 'om.jpg',
    date: '23 Ian',
    index: 2
  },
  {
    title: 'Felul în care am ajuns să înțeleg adaptarea umană',
    slug: 'trei',
    desc: 'Acest text nu este o teorie despre oameni și nu este o promisiune ...',
    image: 'adaptare.jpg',
    date: '24 Ian',
    index: 3
  },
  {
    title: 'Manifest pentru învățarea minții și a corpului',
    slug: 'patru',
    desc: 'Omul nu învață într-un singur fel. A spune ca învațarea este ...',
    image: 'manifest.jpg',
    date: '25 Ian',
    index: 4
  },
  {
    title: 'Consultanță comportamentală defensivă',
    slug: 'cinci',
    desc: 'Nu lucrez cu etichete. Nu lucrez cu vină ...',
    image: 'consultanta.jpg',
    date: '26 Ian',
    index: 5
  },
  {
    title: 'Comportamentele care ne țin împreună (până nu ne mai țin)',
    slug: 'sase',
    desc: 'Oamenii nu fac lucruri ca să strice relațiile. Fac lucruri ca să reziste in ele.',
    image: 'comportamente.jpg',
    date: '27 Ian',
    index: 6
  },
  {
    title: 'Nodul cel mai dureros din relații',
    slug: 'sapte',
    desc: 'Nu e o problemă de iubire, ci de structură de invățare.',
    image: 'nodul.jpg',
    date: '28 Ian',
    index: 7
  },
  {
    title: 'Funcția din spatele comportamentului',
    slug: 'opt',
    desc: 'Oamenii nu reacționează diferit pentru că sunt ...',
    image: 'functia.jpg',
    date: '29 Ian',
    index: 8
  },
  {
    title: 'De ce stau oamenii in relații',
    slug: 'noua',
    desc: 'În relațiile dintre oameni nu contează ce spui că simți sau ce intenții ai ...',
    image: 'relatii.jpg',
    date: '31 Ian',
    index: 9
  },
  {
    title: 'Costul biologic',
    slug: 'zece',
    desc: 'Un cost biologic înseamnă ce plătește corpul tău ca sã poată face față unei situații.',
    image: 'costul.jpg',
    date: '2 Feb',
    index: 10
  },
  {
    title: 'După despărțire',
    slug: 'unspe',
    desc: 'De aceea, după o despărțire, nu îți lipsește doar „el" sau „ea" ...',
    image: 'despartire.jpg',
    date: '2 Feb',
    index: 11
  },
  {
    title: 'Influența mediului familial cu alcoolism asupra adultului: o perspectivă comportamentală și biologică',
    slug: 'doispe',
    desc: 'Un copil care crește într-o familie în care unul dintre părinți este alcoolic',
    image: 'parinti.jpg',
    date: '3 Feb',
    index: 12
  },
  {
    title: 'Moduri diferite prin care oamenii privesc realitatea interpersonală',
    slug: 'treispe',
    desc: 'Unii privesc oamenii prin emoții și intenții, iar alții prin efecte și consecințe.',
    image: 'realitate_interpersonala.jpg',
    date: '9 Feb',
    index: 13
  },
  {
    title: 'Dinamica dintre stabilitatea funcțională și stabilitatea emoțională în cuplu',
    slug: 'paispe',
    desc: 'În multe relații de cuplu conflictele nu apar din lipsă de iubire ...',
    image: 'stabilitate.jpg',
    date: '10 Feb',
    index: 14
  },
  {
    title: 'Dinamica unui cuplu în care ambii parteneri caută stabilitate funcțională',
    slug: 'cinspe',
    desc: 'Există cupluri în care ambii parteneri își obțin liniștea ...',
    image: 'stabilitate_functionala.jpg',
    date: '11 Feb',
    index: 15
  },
  {
    title: 'Dinamica unui cuplu în care ambii parteneri caută stabilitate emoțională',
    slug: 'saispe',
    desc: 'Există cupluri în care ambii parteneri își obțin liniștea ...',
    image: 'stabilitate_emotionala.jpg',
    date: '12 Feb',
    index: 16
  },
  {
    title: 'Alte tipuri de relație',
    slug: 'saptespe',
    desc: 'Ce fel de relații mai sunt - până acum am vorbit de 3 tipuri:',
    image: 'alte_relatii.jpg',
    date: '13 Feb',
    index: 17
  },
  {
    title: 'Starea biologică, gândul și conflictul uman - explicație pe înțelesul oamenilor',
    slug: 'opspe',
    desc: 'Majoritatea oamenilor cred că viața lor este influențată de evenimente ...',
    image: 'starea.jpg',
    date: '16 Feb',
    index: 18
  },
  {
    title: 'De ce unii oameni nu te lasă în pace - ghid de prevenție (pe înțelesul oricui)',
    slug: 'nouaspe',
    desc: 'Mulți oameni cred că hărțuirea apare din ură ...',
    image: 'in_pace.jpg',
    date: '17 Feb',
    index: 19
  },
  {
    title: 'Mecanismul comportamentului de hărțuire și agresiune',
    slug: 'douazeci',
    desc: 'În analiza comportamentului uman, nu orice agresiune pornește din ură ...',
    image: 'hartuire.jpg',
    date: '17 Feb',
    index: 20
  },
  {
    title: 'Starea biologică și modul în care ne influențează viața',
    slug: 'douașunu',
    desc: 'Majoritatea oamenilor cred că neliniștea, conflictele și suferința apar direct din problemele vieții ...',
    image: 'stare_biologica.jpg',
    date: '18 Feb',
    index: 21
  },
  {
    title: 'Nu alegi după chef. Alegi după efect biologic',
    slug: 'douașdoi',
    desc: 'În viața de zi cu zi oamenii cred că deciziile pornesc din voință ...',
    image: 'chef.jpg',
    date: '21 Feb',
    index: 22
  },
  {
    title: 'Imaginea noastră despre oameni',
    slug: 'douaștrei',
    desc: 'În viața de zi cu zi oamenii cred că relațiile sunt simple ...',
    image: 'oameni.jpg',
    date: '22 Feb',
    index: 23
  },
  {
    title: 'Conștientizarea proiecției: ce se întâmplă când înțelegem că nu interacționăm cu persoana reală, ci cu imaginea noastră despre ea',
    slug: 'douașpatru',
    desc: 'În mod obișnuit, oamenii sunt convinși că relațiile lor se desfășoară direct între două persoane reale.',
    image: 'oameni_1.jpg',
    date: '22 Feb',
    index: 24
  },
  {
    title: 'De ce o relație bună se simte în corp, nu doar în inimă',
    slug: 'douașcinci',
    desc: 'Oamenii cred că relațiile se țin prin iubire, prin dor sau prin cât de mult te gândești la celălalt.',
    image: 'relatie_buna.jpg',
    date: '23 Feb',
    index: 25
  },
  {
    title: 'De ce oamenii nu fac ceea ce înțeleg - rolul stării biologice în decizie și comportament',
    slug: 'douașsase',
    desc: 'În viața de zi cu zi observăm frecvent un paradox ...',
    image: 'paradox.jpg',
    date: '23 Feb',
    index: 26
  },
  {
    title: 'De ce o persoană te alege, iar apoi se desparte - explicație biologică și psihică, pe înțelesul tuturor',
    slug: 'douașsapte',
    desc: 'Mulți oameni trăiesc aceeași nedumerire: la început cineva te cauta, te dorește ...',
    image: 'alegere_despartire.jpg',
    date: '24 Feb',
    index: 27
  },
  {
    title: 'Cum se aleg oamenii (Modelul ISAC CONSULT)',
    slug: 'douașopt',
    desc: 'Majoritatea oamenilor cred că aleg o relație pentru că iubesc, admiră sau se potrivesc cu cineva.',
    image: 'alegere.jpg',
    date: '25 Feb',
    index: 28
  }, 
  {
    title: 'De ce omul înțelege abia după ce face, nu înainte',
    slug: 'douașnoua',
    desc: 'În mod obișnuit oamenii cred că schimbarea apare prin explicații ...',
    image: 'actiune.jpg',
    date: '26 Feb',
    index: 29
  }, 
  {
    title: 'Comportamentul nou creează omul nou',
    slug: 'treizeci',
    desc: 'În mod obișnuit oamenii cred că schimbarea personală începe cu o idee',
    image: 'omul_nou.jpg',
    date: '26 Feb',
    index: 30
  }, 
  {
    title: 'Pe românește: ce face psihologul și ce fac eu',
    slug: 'treizeciunu',
    desc: 'Oamenii cred că atunci când au o problemă au nevoie doar sã o înțeleagă.',
    image: 'isac_creion.jpg',
    date: '27 Feb',
    index: 31
  },
  {
    title: 'Ce înseamnă de fapt „îți pasă"',
    slug: 'treizecidoi',
    desc: 'Oamenii cred că: îmi pasă = iubire / atașament / caracter ...',
    image: 'imi_pasa.jpg',
    date: '28 Feb',
    index: 32
  },
  {
    title: 'De ce creierul preferă impactul emoțional în locul liniștii - pacea psihică versus certitudinea biologică',
    slug: 'treizecitrei',
    desc: 'În relațiile umane apare frecvent un paradox ...',
    image: 'liniste_interna.jpg',
    date: '28 Feb',
    index: 33
  },
  {
    title: 'Certitudinea din punct de vedere biologic — de ce creierul caută reacția, nu liniștea',
    slug: 'treizecipatru',
    desc: 'Când vorbim despre „certitudine" oamenii se gândesc la ceva mental: sa știu sigur ...',
    image: 'creierul_reactie.jpg',
    date: '29 Feb',
    index: 34
  },
  {
    title: 'Intenția aparține celui care acționează, consecința aparține celui care trăiește acțiunea',
    slug: 'treizecicinci',
    desc: 'În majoritatea conflictelor dintre oameni apare aceeași neînțelegere ...',
    image: 'intentie_consecinta.jpg',
    date: '29 Feb',
    index: 35
  },
  {
    title: 'De ce creierul trebuie reglat biologic înainte de a fi înțeles psihologic',
    slug: 'treizecisase',
    desc: 'În viața de zi cu zi oamenii încearcă să-și rezolve stările prin explicații ...',
    image: 'creier_reglat.jpg',
    date: '1 Mar',
    index: 36
  },
  {
    title: 'De ce omul te înțelege abia dupa ce relația s-a terminat',
    slug: 'treizecisapte',
    desc: 'În multe relații apare aceeași situație: cât timp doi oameni sunt împreună ...',
    image: 'intelegere.jpg',
    date: '1 Mar',
    index: 37
  },
  {
    title: 'De ce oamenii reacționează la starea noastră și nu la intențiile noastre',
    slug: 'treizeciopt',
    desc: 'În viața socială apare frecvent o situație aparent nedreaptă ...',
    image: 'reactie.jpg',
    date: '1 Mar',
    index: 38
  },
  {
    title: 'De ce unele relații se mențin prin conflict — reglarea biologică interpersonală',
    slug: 'treizecinoua',
    desc: 'În mod obișnuit oamenii cred că o ceartă apare din neînțelegeri, orgoliu sau diferențe de caracter.',
    image: 'relatii_conflictuale.jpg',
    date: '2 Mar',
    index: 39
  },
  {
    title: 'Ce face creierul când apare o altă persoană',
    slug: 'patruzeci',
    desc: 'Creierul are o sarcină principală: să te mențină în viață cu consum minim de energie.',
    image: 'creier_persoana.jpg',
    date: '3 Mar',
    index: 40
  },
  {
    title: 'Cum se construiește stabilitatea bio-psiho-socială',
    slug: 'patruzeciunu',
    desc: 'Stabilitatea unei persoane nu este un dar genetic și nici un „caracter puternic"',
    image: 'stabilitate_bio_psiho_sociala.jpg',
    date: '4 Mar',
    index: 41
  },
  {
    title: 'De ce problemele nu se rezolvă prin gândire',
    slug: 'patruzecidoi',
    desc: 'În viața de zi cu zi, oamenii încearcă foarte des să rezolve problemele direct prin gândire.',
    image: 'gandire_probleme.jpg',
    date: '4 Mar',
    index: 42
  },
  {
    title: 'Cum și de ce corpul produce hormoni ai stresului și cum apare anxietatea',
    slug: 'patruzecitrei',
    desc: 'Organismul uman este construit pentru supraviețuire. Pentru a face față pericolelor sau situațillor ...',
    image: 'anxietate.jpg',
    date: '4 Mar',
    index: 43
  },
  {
    title: 'De ce nu trebuie să așteptăm viitorul și cum se construiește el prin acțiunile noastre',
    slug: 'patruzecipatru',
    desc: 'Mulți oameni trăiesc cu ideea că viitorul este ceva care va veni de la sine ...',
    image: 'viitor_actiuni.jpg',
    date: '4 Mar',
    index: 44
  }, 
  {
    title: 'De ce oamenii nu cred explicațille pe care le primesc',
    slug: 'patruzecicinci',
    desc: 'În viața de zi cu zi se întâmplă frecvent ca o persoană să primească o explicație clară despre o situație ...',
    image: 'explicatii.jpg',
    date: '5 Mar',
    index: 45
  }, 
  {
    title: 'Minciuna la persoanele cu trăsaturi psihopatice și narcisice',
    slug: 'patruzecisase',
    desc: 'Minciuna este un comportament întâlnit la mulți oameni în anumite situații ...',
    image: 'minciuna.jpg',
    date: '5 Mar',
    index: 46
  }, 
  {
    title: 'Negarea sociala - mecanismul prin care comunitățile refuză să accepte nedreptatea produsă în interiorul lor',
    slug: 'patruzecisapte',
    desc: 'Negarea socială este un fenomen care apare atunci când o comunitate află sau observă ...',
    image: 'negare_sociala.jpg',
    date: '9 Mar',
    index: 47
  }, 
  {
    title: 'Anxietatea anticipativă - teama produsă de ceea ce credem că se va întâmpla',
    slug: 'patruzeciopt',
    desc: 'Anxietatea anticipativă este o formă de anxietate care apare atunci când o persoană se teme de ...',
    image: 'anxietate_anticipativa.jpg',
    date: '9 Mar',
    index: 48
  },
  {
    title: 'Diferența dintre ceea ce văd oamenii și ceea ce vede o persoană orientată spre consecințe',
    slug: 'patruzecinoua',
    desc: 'Atunci când mai multe persoane privesc aceeași situație ...',
    image: 'persoana_orientata_consecinte.jpg',
    date: '9 Mar',
    index: 49
  },
  {
    title: 'Minciuna la personalitățile narcisice și antisociale',
    slug: 'cinzeci',
    desc: 'Minciuna este un comportament întâlnit la toți oamenii ...',
    image: 'minciune_antisocial.jpg',
    date: '10 Mar',
    index: 50
  },
  {
    title: 'Diferențele de comportament dintre personalitatea narcisică și personalitatea antisocială - exemple din viața de zi cu zi',
    slug: 'cinzeciunu',
    desc: 'În viața socială întâlnim persoane care par la prima vedere asemănătoare ...',
    image: 'narci_vs_antisoc.jpg',
    date: '11 Mar',
    index: 51
  },
  {
    title: 'Tipologii umane',
    slug: 'cinzecidoi',
    desc: 'Comportamentul uman nu apare intâmplător ...',
    image: 'tipare_umane.jpg',
    date: '11 Mar',
    index: 52
  },
  {
    title: 'Narcisismul',
    slug: 'cinzecitrei',
    desc: 'Narcisismul este un tip de structură de personalitate în care imaginea ...',
    image: 'narcisism.jpg',
    date: '16 Mar',
    index: 53
  },
  {
    title: 'Ce este Stresul',
    slug: 'cinzecipatru',
    desc: 'Corpul uman este construit pentru a reacționa la stimuli ...',
    image: 'stres_actiune.jpg',
    date: '19 Mar',
    index: 54
  },
  {
    title: 'Stresul - explicație chimică',
    slug: 'cinzecicinci',
    desc: 'Activarea biologică reprezintă răspunsul automat al organismului la un stimul perceput ca relevant ...',
    image: 'stresul_chimic.jpg',
    date: '19 Mar',
    index: 55
  },
  {
    title: 'Adaptarea la mediu',
    slug: 'cinzecisase',
    desc: 'Adaptarea unui om la un mediu nu este determinată doar de mediul ...',
    image: 'adaptare_mediu.jpg',
    date: '20 Mar',
    index: 56
  },
  {
    title: 'Percepția realității',
    slug: 'cinzecisapte',
    desc: 'Acest fenomen nu apare doar în relațiile dintre oameni ...',
    image: 'perceptia_realitatii.jpg',
    date: '23 Mar',
    index: 57
  },
  {
    title: 'Când corpul nu descarcă energie, mintea descarcă pe oameni',
    slug: 'cinzeciopt',
    desc: 'În viața de zi cu zi, multe dintre conflictele pe care le avem nu apar pentru că exista ...',
    image: 'miscare.jpg',
    date: '24 Mar',
    index: 58
  },
  {
    title: 'De ce este importantă poziția socială și cum ajunge omul să nu mai depindă de validarea celorlalți',
    slug: 'cinzecinoua',
    desc: 'Poziția socială este importantă pentru oameni nu din motive superficiale sau doar culturale ...',
    image: 'validare_sociala.jpg',
    date: '25 Mar',
    index: 59
  },
  {
    title: 'Acceptare vs înțelegere',
    slug: 'saizeci',
    desc: 'În viața de zi cu zi, oamenii confundă des ințelegerea cu acceptarea ...',
    image: 'intelegere_acceptare.jpg',
    date: '26 Mar',
    index: 60
  },
  {
    title: 'Victima reală vs victima psihologică vs comportamentul învățat care aduce beneficii',
    slug: 'saizeciunu',
    desc: 'În viața de zi cu zi, oamenii folosesc des termenul de „victimă" ...',
    image: 'victima.jpg',
    date: '27 Mar',
    index: 61
  },
  {
    title: 'Cum folosesc persoanele cu trăsături narcisice și psihopatice comportamentul de victimă',
    slug: 'saizecidoi',
    desc: 'În relațiile dintre oameni apare frecvent ideea de „victimă" ...',
    image: 'comportament_victima.jpg',
    date: '27 Mar',
    index: 62
  },
  {
    title: 'Persoane puternice fără a fi agresoare vs persoane fără putere, dar agresoare',
    slug: 'saizecitrei',
    desc: 'În viața de zi cu zi, mulți oameni confundă puterea cu agresivitatea ...',
    image: 'putere_agresiune.jpg',
    date: '28 Mar',
    index: 63
  },
  {
    title: 'Minciuna și moralitatea',
    slug: 'saizecipatru',
    desc: 'Minciuna pentru un om obișnuit este o problemă morală ...',
    image: 'minciuna_moralitate.jpg',
    date: '6 Apr',
    index: 64
  },
  {
    title: 'Minciuna, gândirea și comportamentul în tiparele antisociale și diferența față de observatorul lucid',
    slug: 'saizecicinci',
    desc: 'Minciuna este un comportament care apare la toți oamenii, dar nu are același sens pentru toata lumea.',
    image: 'minciuna_lucida.jpg',
    date: '6 Apr',
    index: 65
  },
  {
    title: 'Cum se formează comportamentele orientate spre viitor',
    slug: 'saizecisase',
    desc: 'Nu toți oamenii învață comportamentele în același mod.',
    image: 'comportamente_viitor.jpg',
    date: '15 Apr',
    index: 66
  },
  {
    title: 'De ce nu toți copiii fără plasă de siguranță dezvoltă gândirea anticipativă',
    slug: 'saizecisapte',
    desc: 'Se spune adesea că un copil care crește fără siguranță, fără sprijin și fără ...',
    image: 'copil_gandire_anticipata.jpg',
    date: '15 Apr',
    index: 67
  },
  {
    title: 'Oamenii nu aleg doar binele. Aleg ceea ce pot gestiona.',
    slug: 'saizeciopt',
    desc: 'O persoană care a crescut într-un mediu conflictual poate ajunge, mai târziu ...',
    image: 'alegerea.jpg',
    date: '16 Apr',
    index: 68
  },
  {
    title: 'Comportamentul nou și cum poate deveni stabil',
    slug: 'saizecinoua',
    desc: 'Schimbarea comportamentului este un proces dorit de multe persoane ...',
    image: 'comportament_nou.jpg',
    date: '21 Apr',
    index: 69
  },
  {
    title: 'Motivul te minte, funcția nu',
    slug: 'saptezeci',
    desc: 'Oamenii încearcă să își explice comportamentele prin motive ...',
    image: 'motivul_minte.jpg',
    date: '21 Apr',
    index: 70
  },
  {
    title: 'Comportamentele au mai multe funcții',
    slug: 'saptezeciunu',
    desc: 'Oamenii tind să creadă că un comportament are un singur motiv ...',
    image: 'functii_comportament.jpg',
    date: '21 Apr',
    index: 71
  },
  {
    title: 'Comportamentul se repetă din cauza funcției, nu a motivului sau a scopului',
    slug: 'saptezecidoi',
    desc: 'Oamenii cred că repetă anumite comportamente din cauza motivelor sau ...',
    image: 'comportament_repetitie.jpg',
    date: '22 Apr',
    index: 72
  },
  {
    title: 'Îți propui ceva și începi, dar continui doar dacă îți iese ceva din asta',
    slug: 'saptezecitrei',
    desc: 'Oamenii cred că schimbarea apare atunci când își stabilesc un scop ...',
    image: 'inceput_functionare.jpg',
    date: '23 Apr',
    index: 73
  },
  {
    title: 'Relațiile văzute prin gândirea în variante',
    slug: 'saptezecipatru',
    desc: 'Relațiile sunt adesea construite pe așteptări, speranțe și convingeri ...',
    image: 'relatii_variante.jpg',
    date: '23 Apr',
    index: 74
  },
  {
    title: 'Cum îți creezi realitatea',
    slug: 'saptezecicinci',
    desc: 'Oamenii cred că traiesc într-o realitate obiectivă, stabilă și identică pentru toți ...',
    image: 'realitate_creata.jpg',
    date: '23 Apr',
    index: 75
  },
  {
    title: 'Niveluri diferite în conflict și dificultatea rezolvării (bio-psiho-social)',
    slug: 'saptezecisase',
    desc: 'În interacțiunile umane, conflictele sunt frecvente și aparent greu de rezolvat.',
    image: 'niveluri_conflict.jpg',
    date: '24 Apr',
    index: 76
  },
  {
    title: 'Aplicarea modelului bio-psiho-social în comunicare și luarea deciziilor',
    slug: 'saptezecisapte',
    desc: 'Modelul bio-psiho-social oferă un cadru complex pentru înțelegerea comportamentului uman ...',
    image: 'model_bio_psiho_social.jpg',
    date: '24 Apr',
    index: 77
  },
  {
    title: 'Contextul similar activează comportamentele deja învățate',
    slug: 'saptezeciopt',
    desc: 'Oamenii cred, de cele mai multe ori, că reacțiile lor apar în funcție de situația prezentă ...',
    image: 'context_similar.jpg',
    date: '25 Apr',
    index: 78
  },
  {
    title: 'Funcționează vs. e bine',
    slug: 'saptezecinoua',
    desc: 'O confuzie frecventă în comportamentul uman este între ceea ce ...',
    image: 'functioneaza_ebine.jpg',
    date: '26 Apr',
    index: 79
  },
  {
    title: 'Comportamentele care apar după perioada de început a unei relații',
    slug: 'optzeci',
    desc: 'nu sunt create în acel moment, ci sunt rezultatul a ceea ce persoana a învățat înainte ...',
    image: 'comportament_inceput.jpg',
    date: '26 Apr',
    index: 80
  },
  {
    title: 'La început alegi cine ești. După apare cine ești invățat să fii',
    slug: 'optzeciunu',
    desc: 'În orice relație - personală, socială sau profesională - oamenii observă o diferență ...',
    image: 'alegere_invatare.jpg',
    date: '27 Apr',
    index: 81
  },
  {
    title: 'Siguranța in relații',
    slug: 'optzecidoi',
    desc: 'Siguranța în relații înseamnă ca oamenii să se simtă liniștiti unul lângă celălalt ...',
    image: 'siguranta_relatii.jpg',
    date: '3 Mai',
    index: 82
  },
  {
    title: 'Interacțiune vs construcție într-o relație',
    slug: 'optzecitrei',
    desc: 'În orice relație dintre doi oameni pot exista două niveluri diferite de funcționare ...',
    image: 'interactiune_constructie.jpg',
    date: '3 Mai',
    index: 83
  },
  {
    title: 'Efectele punerii unei persoane în fața faptului împlinit',
    slug: 'optzecipatru',
    desc: 'În relațiile dintre oameni, modul în care sunt luate deciziile influențează direct nivelul de ...',
    image: 'faptul_implinit.jpg',
    date: '3 Mai',
    index: 84
  },
  {
    title: 'Control vs siguranță într-o relație',
    slug: 'optzecicinci',
    desc: 'Controlul și siguranța sunt două lucruri diferite, deși multe persoane le ...',
    image: 'control_siguranta.jpg',
    date: '8 Mai',
    index: 85
  },
  {
    title: 'Determinismul simplificat și influența mediului asupra omului',
    slug: 'optzecisase',
    desc: 'În viața de zi cu zi, oamenii tind să explice comportamentul altora prin experiențele ...',
    image: 'determinism_simplificat.jpg',
    date: '11 Mai',
    index: 86
  },
  {
    title: 'Modelul biopsihosocial și influența factorilor asupra comportamentului uman',
    slug: 'optzecisapte',
    desc: 'Comportamentul și dezvoltarea unei persoane nu sunt determinate de ...',
    image: 'model_bps.jpg',
    date: '11 Mai',
    index: 87
  },
  {
    title: 'Cum pot oamenii să distrugă o relație fără conflicte directe',
    slug: 'optzeciopt',
    desc: 'Mulți oameni cred că relațiile se termină doar din cauza certurilor ...',
    image: 'relatie_conflict.jpg',
    date: '18 Mai',
    index: 88
  },
  {
    title: 'Neimplicarea totală într-o relație și ce arată ea despre dinamica dintre parteneri',
    slug: 'optzecinoua',
    desc: 'În unele relații, problema nu este conflictul, ci absența aproape completă a ...',
    image: 'neimplicare.jpg',
    date: '18 Mai',
    index: 89
  },
  {
    title: 'Relația susținută unilateral și lipsa reciprocității reale',
    slug: 'nouazeci',
    desc: 'Există relații în care, la suprafață, cei doi oameni par împreună, însă în realitate ...',
    image: 'sustinere_unilaterala.jpg',
    date: '19 Mai',
    index: 90
  },
  {
    title: 'Deconectarea relațională și investiția emoțională orientată în afara relației',
    slug: 'nouazeciunu',
    desc: 'În unele relații, problema principală nu este conflictul direct, ci lipsa aproape completă de ...',
    image: 'deconectare_relationala.jpg',
    date: '19 Mai',
    index: 91
  },
  {
    title: 'Când o persoană percepe orice discuție despre relație ca atac',
    slug: 'nouazecidoi',
    desc: 'Într-o relație sănătoasă, cei doi parteneri trebuie să poată discuta despre probleme ...',
    image: 'atac_personal.jpg',
    date: '26 Mai',
    index: 92
  },
  {
    title: 'Diferența dintre comportament și valoarea personală',
    slug: 'nouazecitrei',
    desc: 'Una dintre cele mai importante diferențe psihologice pe care mulți oameni nu reușesc să o facă ...',
    image: 'comportament_valoare.jpg',
    date: '28 Mai',
    index: 93
  },
  {
    title: 'Putere și Respect',
    slug: 'nouazecipatru',
    desc: 'Fundamentul relațiilor sănătoase și al funcționării umane ...',
    image: 'putere_respect.jpg',
    date: '28 Mai',
    index: 94
  },
  {
    title: 'Control vs Siguranță în relații (2)',
    slug: 'nouazecicinci',
    desc: 'Mulți oameni confundă controlul cu siguranța emoțională ...',
    image: 'control_siguranta2.jpg',
    date: '29 Mai',
    index: 95
  },
  {
    title: 'Rolul și poziția în relația dintre părinți și copii',
    slug: 'nouazecisase',
    desc: 'Mulți oameni cred că atunci când devin parinți primesc automat și ...',
    image: 'rol_pozitie.jpg',
    date: '22 Iun',
    index: 96
  },
  {
    title: 'Rolul și poziția în relația de iubire',
    slug: 'nouazecisapte',
    desc: 'Mulți oameni cred că atunci când doi parteneri intră într-o relație și ...',
    image: 'rol_pozitie_iubire.jpg',
    date: '27 Iun',
    index: 97
  },
  {
    title: 'Rolul, poziția și interpretarea celuilalt',
    slug: 'nouazeciopt',
    desc: 'În relațiile dintre oameni, mulți cred că poziția pe care o au este determinată ...',
    image: 'rol_pozitie_interpretare.jpg',
    date: '27 Iun',
    index: 98
  },
  {
    title: 'Despre poziție, roluri negative și felul în care sunt perceput',
    slug: 'nouazecinoua',
    desc: 'De-a lungul timpului am observat un fenomen interesant în relațiile dintre oameni ...',
    image: 'isac_creion.jpg',
    date: '27 Iun',
    index: 99
  },
  {
    title: 'Când poziția este confundată cu puterea de decizie',
    slug: 'osuta',
    desc: 'De-a lungul activității mele de consultant comportamental am observat un ...',
    image: 'pozitie_decizie.jpg',
    date: '27 Iun',
    index: 100
  },
  {
    title: 'Am dovezi că este adevărat sau doar mi se pare convingător?',
    slug: 'osutaunu',
    desc: 'În fiecare zi auzim sute de informații. Le vedem la televizor ...',
    image: 'adevar_convingere.jpg',
    date: '13 Iul',
    index: 101
  },
  {
    title: 'De ce îi credem mai ușor pe cei care seamănă cu noi?',
    slug: 'osutadoi',
    desc: 'În fiecare zi întâlnim oameni care ne spun ce cred despre viață, despre oameni și despre lume ...',
    image: 'adevar_convingere.jpg',
    date: '13 Iul',
    index: 102
  },
  {
    title: 'De ce nu este suficient că cineva seamănă cu noi pentru a avea încredere în el?',
    slug: 'osutatrei',
    desc: 'În viață întâlnim oameni care, încă de la prima discuție, par foarte asemănători cu noi ...',
    image: 'adevar_convingere.jpg',
    date: '13 Iul',
    index: 103
  },
  {
    title: 'Vorbele îți spun cine spune că este. Faptele îți arată cine este cu adevărat.',
    slug: 'osutapatru',
    desc: 'În fiecare zi întâlnim oameni care vorbesc despre ei. Unii spun că sunt sinceri ...',
    image: 'adevar_convingere.jpg',
    date: '13 Iul',
    index: 104
  },
]

export default articleData;