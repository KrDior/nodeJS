const fs = require('fs');
const { isNumber } = require('util');
const data = {
  "data": [
    {
      "id": 447365,
      "title": "Guardians of the Galaxy Vol. 3",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 9,
      "release_date": "2020-05-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
      "overview": "The third film based on Marvel's Guardians of the Galaxy.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 424785,
      "title": "Transformers 7",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2019-06-26",
      "poster_path": "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
      "overview": "Plot unknown.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Science Fiction",
        "Action",
        "Adventure"
      ],
      "runtime": null
    },
    {
      "id": 299534,
      "title": "Untitled Avengers",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 9,
      "release_date": "2019-04-24",
      "poster_path": "https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg",
      "overview": "The culmination of the Marvel Cinematic Universe.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 287947,
      "title": "Shazam!",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 5,
      "release_date": "2019-04-05",
      "poster_path": "https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg",
      "overview": "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Fantasy",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 320288,
      "title": "X-Men: Dark Phoenix",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2019-02-14",
      "poster_path": "https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg",
      "overview": "Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 181790,
      "title": "Journey 3: From the Earth to the Moon",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 7,
      "release_date": "2018-12-31",
      "poster_path": "https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg",
      "overview": "Sean and Hank go on their biggest adventure yet, to the moon.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Fantasy",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 297802,
      "title": "Aquaman",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-12-19",
      "poster_path": "https://image.tmdb.org/t/p/w500/sshNRCbtU2ON8SiWLycQzr05doX.jpg",
      "overview": "Following the events of Justice League, Arthur Curry, the reluctant ruler of the underwater kingdom of Atlantis, is caught between surface dwellers and his own people who are ready to lash out and invade the surface.",
      "budget": 160000000,
      "revenue": 0,
      "genres": [
        "Action",
        "Fantasy",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 353081,
      "title": "Mission: Impossible - Fallout",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 3,
      "release_date": "2018-07-26",
      "poster_path": "https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg",
      "overview": "The sixth installment in the \"Mission: Impossible\". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Adventure",
        "Action",
        "Thriller"
      ],
      "runtime": null
    },
    {
      "id": 351286,
      "title": "Jurassic World: Fallen Kingdom",
      "tagline": "Life finds a way",
      "vote_average": 0,
      "vote_count": 28,
      "release_date": "2018-06-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg",
      "overview": "A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Drama",
        "Science Fiction",
        "Thriller"
      ],
      "runtime": null
    },
    {
      "id": 348350,
      "title": "Solo: A Star Wars Story",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 2,
      "release_date": "2018-05-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg",
      "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Family",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 383498,
      "title": "Deadpool 2",
      "tagline": "Prepare for the Second Coming.",
      "vote_average": 0,
      "vote_count": 1,
      "release_date": "2018-05-16",
      "poster_path": "https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg",
      "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Comedy",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 299536,
      "title": "Avengers: Infinity War",
      "tagline": "An entire universe. Once and for all.",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-25",
      "poster_path": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "budget": 500000000,
      "revenue": 0,
      "genres": [
        "Adventure",
        "Science Fiction",
        "Fantasy",
        "Action"
      ],
      "runtime": 156
    },
    {
      "id": 505177,
      "title": "10x10",
      "tagline": "There are some secrets we cannot escape",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-13",
      "poster_path": "https://image.tmdb.org/t/p/w500/egMETBYual2JtfFGigXTA0tGkME.jpg",
      "overview": "Lewis is an outwardly ordinary guy, but in reality he is hiding an obsession - revenge - against Cathy. Lewis kidnaps Cathy in broad daylight and takes her to his home, where he locks her in a soundproof cell and attempt to extract a dark secret from her past.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Thriller"
      ],
      "runtime": 86
    },
    {
      "id": 460019,
      "title": "Truth or Dare",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg",
      "overview": "A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Thriller",
        "Horror"
      ],
      "runtime": null
    },
    {
      "id": 427641,
      "title": "Rampage",
      "tagline": "Big meets bigger",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/30oXQKwibh0uANGMs0Sytw3uN22.jpg",
      "overview": "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Science Fiction"
      ],
      "runtime": null
    },
    {
      "id": 467867,
      "title": "Paterno",
      "tagline": "The greater the legend, the harder the fall.",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg",
      "overview": "After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "TV Movie",
        "Drama"
      ],
      "runtime": 105
    },
    {
      "id": 497802,
      "title": "Pandas",
      "tagline": "WILD AT HEART",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-06",
      "poster_path": "https://image.tmdb.org/t/p/w500/8z96ZqkF8w4yA2xO92HnNNEcNxI.jpg",
      "overview": "In the mountains of Sichuan, China, a researcher forms a bond with Qian Qian, a panda who is about to experience nature for the first time.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Documentary"
      ],
      "runtime": null
    },
    {
      "id": 447332,
      "title": "A Quiet Place",
      "tagline": "A Quiet Place",
      "vote_average": 6.5,
      "vote_count": 19,
      "release_date": "2018-04-05",
      "poster_path": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
      "overview": "A Quiet Place is a 2018 American horror film directed by John Krasinski, who also stars in the film with Emily Blunt, his wife in real life. The screenplay was written by Krasinski, Bryan Woods, and Scott Beck based on a story by Woods and Beck. The plot follows a family of four who must live life in silence while hiding from creatures that hunt by sound.",
      "budget": 17000000,
      "revenue": 0,
      "genres": [
        "Drama",
        "Horror",
        "Thriller"
      ],
      "runtime": 95
    },
    {
      "id": 512291,
      "title": "Parole",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-05",
      "poster_path": "https://image.tmdb.org/t/p/w500/AipFO5zJIZWs9K7TSLczQkiq90U.jpg",
      "overview": "Alex is all set to return back to his home town on Parole for his son.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Family"
      ],
      "runtime": null
    },
    {
      "id": 412059,
      "title": "Mobile Homes",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 1,
      "release_date": "2018-04-04",
      "poster_path": "https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg",
      "overview": "In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 105
    },
    {
      "id": 469052,
      "title": "Gaston Lagaffe",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-04",
      "poster_path": "https://image.tmdb.org/t/p/w500/kic42Lz8foU8hsbG4Wsk6uCdBtL.jpg",
      "overview": "",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy"
      ],
      "runtime": null
    },
    {
      "id": 424585,
      "title": "Mademoiselle Paradis",
      "tagline": "",
      "vote_average": 6,
      "vote_count": 2,
      "release_date": "2018-04-04",
      "poster_path": "https://image.tmdb.org/t/p/w500/k93b9hE30fdYG63atluVP5aDm2V.jpg",
      "overview": "18th century Vienna. The true story of Maria Theresia von Paradis, a gifted piano player and close friend of Mozart’s, who lost her eye-sight as a child. Desperate to cure their talented daughter, the Paradis entrust Maria to Dr. Mesmer, a forward-thinking-physician who gives her the care and attention that she requires. With the doctor’s innovative techniques of magnetism, Maria slowly recovers her sight. But this miracle comes at a price as the woman progressively starts to lose her gift for music. Faced with a heavy dilemma, Mademoiselle Paradis will have to choose: an ordinary life in the light or an extraordinary life in darkness, as a virtuoso.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "History",
        "Drama"
      ],
      "runtime": 97
    },
    {
      "id": 443009,
      "title": "Don’t Worry, He Won’t Get Far on Foot",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 1,
      "release_date": "2018-04-04",
      "poster_path": "https://image.tmdb.org/t/p/w500/y6E5tgqdhvW3mr3dGo8NenWHRCg.jpg",
      "overview": "A man becomes paralyzed after a car accident and discovers drawing as a therapy.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy",
        "Drama"
      ],
      "runtime": 113
    },
    {
      "id": 509885,
      "title": "Le Portrait",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-03",
      "poster_path": "https://image.tmdb.org/t/p/w500/ns3l4pPOORrlSgdCLSEXJDn8hvB.jpg",
      "overview": "",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Mystery",
        "Fantasy",
        "History"
      ],
      "runtime": null
    },
    {
      "id": 513285,
      "title": "Trouble Is My Business",
      "tagline": "Passion, Murder, and Betrayal. Just Another Day at the Office.",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-03",
      "poster_path": "https://image.tmdb.org/t/p/w500/4dw0z5Uh2NbabdGk2u6wdyJvMg7.jpg",
      "overview": "Private eye Roland Drake cracks cases and romances femme fatales in 1940's Los Angeles while corrupt cop Det Barry Tate rules the city. A tale told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed.",
      "budget": 200000,
      "revenue": 0,
      "genres": [
        "Thriller",
        "Mystery",
        "Adventure",
        "Crime",
        "Romance"
      ],
      "runtime": 116
    },
    {
      "id": 498299,
      "title": "Can I Recognize Your Soul",
      "tagline": "when physical appearance is the least what you need",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-03",
      "poster_path": "https://image.tmdb.org/t/p/w500/luz35TmazOgRbJboWt24owoB5Eg.jpg",
      "overview": "As Christine tries to find a relief after her brother's death, she meets Alonzo at the neighborhood basketball court. After finding out that he lost his father 2 years prior, they became close, and felt that if they stuck together, it would be easier to cope. Now Christine is trying to find a way to encounter her brother's soul as her relationship with Alonzo develops.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Mystery",
        "Drama",
        "Music"
      ],
      "runtime": null
    },
    {
      "id": 499953,
      "title": "Fly on the Wall",
      "tagline": "Always Be Watching",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-03",
      "poster_path": "https://image.tmdb.org/t/p/w500/qPtQPxj7xEfa5PpZxti05PCchO5.jpg",
      "overview": "A young man uses a bug camera to spy on his ex-girlfriend, then witnesses her abduction.",
      "budget": 0,
      "revenue": 0,
      "genres": [],
      "runtime": 89
    },
    {
      "id": 511115,
      "title": "Marillion: All One Tonight - Live At The Royal Albert Hall",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-02",
      "poster_path": "https://image.tmdb.org/t/p/w500/wSqwIZM40N3trdESVJkntCiOUao.jpg",
      "overview": "Captured at their sold-out engagement and first performance at the Royal Albert Hall. In two parts, All One Tonight firstly showcases the band’s acclaimed 2016 studio album F E A R in full. Accompanied by an awe-inspiring light show and films, Marillion perform their incisive and era-defining zeitgeist with unparalleled passion and power. The second half introduces In Praise Of Folly and guests, a string quartet with flute and French horn that throughout the rest of the show inject an extra depth and emotion to some of Marillion’s best-loved live material.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Music"
      ],
      "runtime": null
    },
    {
      "id": 512686,
      "title": "Het is gezien",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-02",
      "poster_path": "https://image.tmdb.org/t/p/w500/u77tpnVFhgjxS1hQRawZQ6EckBS.jpg",
      "overview": "An documentary on the freedom of art in the Netherlands by Gerard Reves. Reve sets out to defend the freedom of art against angry constituents.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Documentary"
      ],
      "runtime": null
    },
    {
      "id": 485548,
      "title": "Parallel Love: The Story of a Band Called Luxury",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 0,
      "release_date": "2018-04-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/qCvae8HztqvWANAD5UOs9GBWPxG.jpg",
      "overview": "In the 1990s, alt-rock band Luxury is skyrocketing toward national fame until a life-threatening tour bus wreck shakes each band member to his core. Today, Luxury is led by three orthodox priests--and they're still rocking.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Documentary"
      ],
      "runtime": null
    },
    {
      "id": 513296,
      "title": "Home by Spring",
      "tagline": "",
      "vote_average": 6,
      "vote_count": 1,
      "release_date": "2018-03-31",
      "poster_path": "https://image.tmdb.org/t/p/w500/ZB37DKQYY2CZggITv66RZ9DfqM.jpg",
      "overview": "When an ambitious event planner gets an opportunity she can’t refuse, she goes undercover as her boss and returns to her rural hometown. With the help of her family and the man she left behind, she pulls off the perfect spring retreat, but will she discover home is where her heart is?",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Romance"
      ],
      "runtime": 90
    },
    {
      "id": 426251,
      "title": "Love After Love",
      "tagline": "",
      "vote_average": 0,
      "vote_count": 1,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/rvPAfO18Kk4C9jcOvlJao70jSCj.jpg",
      "overview": "A sixty-something mother and her two adult sons cope and move onward following the death of their larger-than-life father/husband.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 93
    },
    {
      "id": 421044,
      "title": "Best F(r)iends",
      "tagline": "Friendship before money",
      "vote_average": 3.3,
      "vote_count": 9,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/5Knp0sBWb4hLTc49qaiDjZ4DYV8.jpg",
      "overview": "When a drifter befriends a quirky mortician, an unlikely business partnership is formed. Paranoia soon develops, however, and both men are forced to come to terms with the fragility of friendship and loyalty.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy",
        "Drama",
        "Thriller"
      ],
      "runtime": 108
    },
    {
      "id": 496316,
      "title": "Baaghi 2",
      "tagline": "Rebel for Love",
      "vote_average": 7.7,
      "vote_count": 3,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/gwX6mKjfxBYbq46CoIpcxIAmIMx.jpg",
      "overview": "A battle-hardened army officer goes in search of his ex-lover's child who is mysteriously kidnapped. Neha reaches out to the only person who can help her with her plight, Ronnie. He goes deep into the underbelly of Goa, facing off against drug lords, menacing Russian henchmen, and blood thirsty animals. Daring stunts, chase sequences, air strikes, bomb blasts and other large-scale action sequences will be done with a bona-fide, larger than life approach, truly making it a spectacle.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Romance",
        "Thriller"
      ],
      "runtime": 145
    },
    {
      "id": 437557,
      "title": "Blockers",
      "tagline": "Teens out to have fun. Parents out to stop it.",
      "vote_average": 5.8,
      "vote_count": 13,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/9qKMYfiJTcUQbuBl82yxrmLSCX5.jpg",
      "overview": "When three parents discover their daughters’ pact to lose their virginity at prom, they launch a covert one-night operation to stop the teens from sealing the deal.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy"
      ],
      "runtime": 102
    },
    {
      "id": 474753,
      "title": "The China Hustle",
      "tagline": "There are no good guys in this story.",
      "vote_average": 6.5,
      "vote_count": 5,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/3k6a2ZshjaFdN23bUm3kRdxr5Ny.jpg",
      "overview": "An unsettling and eye-opening Wall Street horror story about Chinese companies, the American stock market, and the opportunistic greed behind the biggest heist you've never heard of.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Documentary"
      ],
      "runtime": 82
    },
    {
      "id": 464502,
      "title": "Acrimony",
      "tagline": "You always hurt the ones you love.",
      "vote_average": 8.1,
      "vote_count": 10,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/9QA8rjbMqPcJXdHWEZE4Nxvktgx.jpg",
      "overview": "A faithful wife takes action when it becomes clear to her that her devious husband has betrayed her.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 120
    },
    {
      "id": 412302,
      "title": "Gemini",
      "tagline": "",
      "vote_average": 10,
      "vote_count": 3,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg",
      "overview": "A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Mystery",
        "Thriller"
      ],
      "runtime": 92
    },
    {
      "id": 472805,
      "title": "Outside In",
      "tagline": "Things are never the same on the outside.",
      "vote_average": 0,
      "vote_count": 2,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/o8mGEiiEmR7yyoDqk9iSAeokYVZ.jpg",
      "overview": "An ex-con struggling to readjust to life in his small town forms an intense bond with his former high-school teacher.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 109
    },
    {
      "id": 476926,
      "title": "The Titan",
      "tagline": "",
      "vote_average": 5.8,
      "vote_count": 93,
      "release_date": "2018-03-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/FBfA7V41ezvP1UTx9BTUS2BLsq.jpg",
      "overview": "Hotshot Air Force pilot, Rick Janssen is chosen for a military experiment that will create a human being capable of surviving the harsh environments of one of Saturn's moons, Titan. The experiment is successful, turning Rick into a super-human, but it also creates deadly side-effects which threatens the life of Rick, his wife and his family – and possibly humanity itself.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Science Fiction"
      ],
      "runtime": 97
    },
    {
      "id": 333339,
      "title": "Ready Player One",
      "tagline": "A better reality awaits.",
      "vote_average": 8.1,
      "vote_count": 617,
      "release_date": "2018-03-28",
      "poster_path": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
      "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
      "budget": 175000000,
      "revenue": 0,
      "genres": [
        "Adventure",
        "Science Fiction",
        "Action"
      ],
      "runtime": 140
    },
    {
      "id": 487242,
      "title": "Suicide Squad: Hell to Pay",
      "tagline": "When the world needs the best, they call on the worst",
      "vote_average": 6.9,
      "vote_count": 17,
      "release_date": "2018-03-27",
      "poster_path": "https://image.tmdb.org/t/p/w500/va1IgsZeWBbKLsZcFwz3CM1MkMu.jpg",
      "overview": "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Animation"
      ],
      "runtime": 86
    },
    {
      "id": 501689,
      "title": "Royal Matchmaker",
      "tagline": "",
      "vote_average": 6.3,
      "vote_count": 3,
      "release_date": "2018-03-24",
      "poster_path": "https://image.tmdb.org/t/p/w500/q8sJ91p1RIAGI7rffWOth8MhSQS.jpg",
      "overview": "A struggling NYC matchmaker is hired by a king to find his son a suitable wife in time for a national celebration. As the clock ticks towards her deadline, the matchmaker finds him the perfect wife -- only to realize that she’s fallen in love with him!",
      "budget": 0,
      "revenue": 0,
      "genres": [],
      "runtime": 90
    },
    {
      "id": 399174,
      "title": "Isle of Dogs",
      "tagline": "",
      "vote_average": 7.6,
      "vote_count": 45,
      "release_date": "2018-03-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg",
      "overview": "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. The outcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
      "budget": 0,
      "revenue": 1615269,
      "genres": [
        "Adventure",
        "Comedy",
        "Animation"
      ],
      "runtime": 101
    },
    {
      "id": 476968,
      "title": "Paul, Apostle of Christ",
      "tagline": "Where sin abounds... grace abounds more",
      "vote_average": 6.8,
      "vote_count": 3,
      "release_date": "2018-03-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/bGsfNIvhnbGS75e2MXrti6dMzcy.jpg",
      "overview": "Risking his life, Luke ventures to Rome to visit Paul -- the apostle who's bound in chains and held captive in Nero's darkest and bleakest prison cell. Haunted by the shadows of his past misdeeds, Paul wonders if he's been forgotten as he awaits his grisly execution. Before Paul's death, Luke resolves to write another book that details the birth of what will come to be known as the church.",
      "budget": 5000000,
      "revenue": 0,
      "genres": [
        "History",
        "Drama"
      ],
      "runtime": 106
    },
    {
      "id": 467660,
      "title": "Unsane",
      "tagline": "Is she or isn't she?",
      "vote_average": 6.1,
      "vote_count": 34,
      "release_date": "2018-03-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/jvDBfavZASdKsJunu9VCAtXjLS2.jpg",
      "overview": "A woman is involuntarily committed to a mental institution amid uncertainty as to whether her greatest fear is real or delusional.",
      "budget": 1500000,
      "revenue": 0,
      "genres": [
        "Horror",
        "Thriller"
      ],
      "runtime": 98
    },
    {
      "id": 456750,
      "title": "Game Over, Man!",
      "tagline": "",
      "vote_average": 5.9,
      "vote_count": 120,
      "release_date": "2018-03-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/58BnnYeQOTzdMBghZIH1tSH0REx.jpg",
      "overview": "Three friends are on the verge of getting their video game financed when their benefactor is taken hostage by terrorists.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Comedy"
      ],
      "runtime": 100
    },
    {
      "id": 419478,
      "title": "Midnight Sun",
      "tagline": "Love will light the way.",
      "vote_average": 7.8,
      "vote_count": 87,
      "release_date": "2018-03-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/AchOrDSCMCAGiiY4QdBnNgvmWHq.jpg",
      "overview": "Katie, a 17-year-old, has been sheltered since childhood and confined to her house during the day by a rare disease that makes even the smallest amount of sunlight deadly. Fate intervenes when she meets Charlie and they embark on a summer romance.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Romance",
        "Drama"
      ],
      "runtime": 93
    },
    {
      "id": 511679,
      "title": "Héctor El Father: Conocerás la verdad",
      "tagline": "",
      "vote_average": 8.8,
      "vote_count": 5,
      "release_date": "2018-03-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/jwJoURyfm4XxtnYRtIOS2pYR9Np.jpg",
      "overview": "",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 90
    },
    {
      "id": 268896,
      "title": "Pacific Rim: Uprising",
      "tagline": "Rise Up",
      "vote_average": 6,
      "vote_count": 318,
      "release_date": "2018-03-21",
      "poster_path": "https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
      "overview": "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
      "budget": 150000000,
      "revenue": 150613316,
      "genres": [
        "Action",
        "Fantasy",
        "Science Fiction",
        "Adventure"
      ],
      "runtime": 111
    },
    {
      "id": 413852,
      "title": "Welcome the Stranger",
      "tagline": "",
      "vote_average": 5.9,
      "vote_count": 14,
      "release_date": "2018-03-20",
      "poster_path": "https://image.tmdb.org/t/p/w500/fZch4FhfexA18gUUQjHXKnLmkjh.jpg",
      "overview": "Alice arrives unannounced at her estranged brother Ethan's house in an attempt to reconcile, but bizarre visions, the return of his strange girlfriend and Alice's paranoia and suspicion force the siblings to cling onto reality amidst mysterious circumstances.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Mystery",
        "Thriller"
      ],
      "runtime": null
    },
    {
      "id": 449176,
      "title": "Love, Simon",
      "tagline": "He's done keeping his story straight.",
      "vote_average": 8.4,
      "vote_count": 82,
      "release_date": "2018-03-16",
      "poster_path": "https://image.tmdb.org/t/p/w500/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
      "overview": "Everyone deserves a great love story. But for seventeen-year old Simon Spier it’s a little more complicated: he’s yet to tell his family or friends he’s gay and he doesn’t actually know the identity of the anonymous classmate he’s fallen for online.",
      "budget": 17000000,
      "revenue": 11800000,
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ],
      "runtime": 110
    },
    {
      "id": 407439,
      "title": "Mary Magdalene",
      "tagline": "",
      "vote_average": 6.5,
      "vote_count": 42,
      "release_date": "2018-03-15",
      "poster_path": "https://image.tmdb.org/t/p/w500/5eyPpqvkH6OsXpohfHPk2FM8MVu.jpg",
      "overview": "Set in the Holy Land in the first century C.E., a young woman leaves her small fishing village and traditional family behind to join a radical new social movement. At its head is a charismatic leader, Jesus of Nazareth, who promises that the world is changing. Mary is searching for a new way of living, and an authenticity that is denied her by the rigid hierarchies of the day. As the notoriety of the group spread and more are drawn to follow Jesus’ inspirational message, Mary’s spiritual journey places her at the heart of a story that will lead to the capital city of Jerusalem, where she must confront the reality of Jesus’ destiny and her own place within it.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 120
    },
    {
      "id": 370567,
      "title": "Sherlock Gnomes",
      "tagline": "",
      "vote_average": 4.4,
      "vote_count": 12,
      "release_date": "2018-03-15",
      "poster_path": "https://image.tmdb.org/t/p/w500/xHdf2wRgCSp9MrZRryikiZIH6jB.jpg",
      "overview": "Garden gnomes, Gnomeo & Juliet, recruit renown detective, Sherlock Gnomes, to investigate the mysterious disappearance of other garden ornaments.",
      "budget": 59000000,
      "revenue": 0,
      "genres": [
        "Romance",
        "Animation",
        "Comedy",
        "Family",
        "Fantasy",
        "Mystery"
      ],
      "runtime": 86
    },
    {
      "id": 340022,
      "title": "Gringo",
      "tagline": "An American corporation, the Mexican cartel, chances are this won't end well.",
      "vote_average": 6.5,
      "vote_count": 27,
      "release_date": "2018-03-09",
      "poster_path": "https://image.tmdb.org/t/p/w500/dxeVPklFwng2IowqRPNI4od6aXv.jpg",
      "overview": "An American businessman with a stake in a pharmaceutical company that's about to go public finds his life is thrown into turmoil by an incident in Mexico.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy",
        "Drama",
        "Action"
      ],
      "runtime": 110
    },
    {
      "id": 199928,
      "title": "The Outsider",
      "tagline": "",
      "vote_average": 6.4,
      "vote_count": 87,
      "release_date": "2018-03-09",
      "poster_path": "https://image.tmdb.org/t/p/w500/m2riQcEzjVrkP8wKHDXwC5EQpHQ.jpg",
      "overview": "A former American G.I. joins a yakuza family after his release from prison in post-World War II Osaka.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Crime",
        "Drama",
        "Mystery"
      ],
      "runtime": 120
    },
    {
      "id": 338970,
      "title": "Tomb Raider",
      "tagline": "Her legend begins",
      "vote_average": 6.2,
      "vote_count": 817,
      "release_date": "2018-03-08",
      "poster_path": "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
      "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      "budget": 94000000,
      "revenue": 126025000,
      "genres": [
        "Action",
        "Adventure"
      ],
      "runtime": 118
    },
    {
      "id": 407451,
      "title": "A Wrinkle in Time",
      "tagline": "Be a warrior",
      "vote_average": 5.2,
      "vote_count": 192,
      "release_date": "2018-03-08",
      "poster_path": "https://image.tmdb.org/t/p/w500/yAcb58vipewa1BfNit2RjE6boXA.jpg",
      "overview": "After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him.",
      "budget": 103000000,
      "revenue": 71700000,
      "genres": [
        "Adventure",
        "Science Fiction",
        "Family",
        "Fantasy"
      ],
      "runtime": 109
    },
    {
      "id": 470878,
      "title": "I Can Only Imagine",
      "tagline": "",
      "vote_average": 7.4,
      "vote_count": 12,
      "release_date": "2018-03-08",
      "poster_path": "https://image.tmdb.org/t/p/w500/veZszwMZu8d3WMU6TJX9sV5w1Y4.jpg",
      "overview": "Growing up in Texas, Bart Millard suffers physical and emotional abuse at the hands of his father. His childhood and relationship with his dad inspires him to write the hit song \"I Can Only Imagine\" as singer of the Christian band MercyMe.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Family"
      ],
      "runtime": 110
    },
    {
      "id": 371608,
      "title": "The Strangers: Prey at Night",
      "tagline": "Never underestimate the kindness of strangers.",
      "vote_average": 5,
      "vote_count": 29,
      "release_date": "2018-03-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/wo3gu56JKRwZ2TpKt8mPjXLQK23.jpg",
      "overview": "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
      "budget": 12500000,
      "revenue": 18752052,
      "genres": [
        "Horror",
        "Thriller"
      ],
      "runtime": 85
    },
    {
      "id": 395990,
      "title": "Death Wish",
      "tagline": "",
      "vote_average": 4.6,
      "vote_count": 167,
      "release_date": "2018-03-02",
      "poster_path": "https://image.tmdb.org/t/p/w500/wamM5AyPAeNPNPfjWRI9WD8dweQ.jpg",
      "overview": "A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Crime",
        "Drama",
        "Thriller"
      ],
      "runtime": 108
    },
    {
      "id": 401981,
      "title": "Red Sparrow",
      "tagline": "Seduce. Deceive. Repeat.",
      "vote_average": 6.3,
      "vote_count": 564,
      "release_date": "2018-03-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/fyufzd2S1lLxMxkTHTnmr6VJfe5.jpg",
      "overview": "Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Egorova emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, Dominika meets a CIA agent who tries to convince her that he is the only person she can trust.",
      "budget": 69000000,
      "revenue": 83607124,
      "genres": [
        "Mystery",
        "Thriller"
      ],
      "runtime": 139
    },
    {
      "id": 500168,
      "title": "The Princess and the Matchmaker",
      "tagline": "",
      "vote_average": 7,
      "vote_count": 2,
      "release_date": "2018-02-28",
      "poster_path": "https://image.tmdb.org/t/p/w500/r9fGyJgzQ5KIEfDzk4diVRI3kQq.jpg",
      "overview": "The film will follow Princess Songhwa, who refuses her fate to marry one of four suitors. While Seo Do-yoon, skilled at interpreting marital harmony signs is selected as the person to ascertain her best match.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Comedy",
        "Romance"
      ],
      "runtime": 110
    },
    {
      "id": 401371,
      "title": "Mute",
      "tagline": "He doesn’t need words.",
      "vote_average": 5.6,
      "vote_count": 239,
      "release_date": "2018-02-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/ihGg1xndLl3MW34Km332pNkyLH7.jpg",
      "overview": "A mute man with a violent past is forced to take on the teeming underworld of a near-future Berlin as he searches for his missing girlfriend.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Mystery",
        "Science Fiction",
        "Thriller"
      ],
      "runtime": 126
    },
    {
      "id": 507111,
      "title": "Kutram Nadanthathu Enna",
      "tagline": "",
      "vote_average": 2,
      "vote_count": 1,
      "release_date": "2018-02-23",
      "poster_path": "https://image.tmdb.org/t/p/w500/lsR3fXAVrJ8GSEtOS9MfmWhUYlm.jpg",
      "overview": "Tamil movie",
      "budget": 0,
      "revenue": 0,
      "genres": [],
      "runtime": null
    },
    {
      "id": 300668,
      "title": "Annihilation",
      "tagline": "Fear What's Inside.",
      "vote_average": 6.4,
      "vote_count": 1291,
      "release_date": "2018-02-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
      "overview": "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
      "budget": 40000000,
      "revenue": 13258603,
      "genres": [
        "Mystery",
        "Science Fiction",
        "Drama"
      ],
      "runtime": 115
    },
    {
      "id": 445571,
      "title": "Game Night",
      "tagline": "This is not a game.",
      "vote_average": 7.3,
      "vote_count": 193,
      "release_date": "2018-02-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/1wS89vns6cseCn4UHSqj97xKEKW.jpg",
      "overview": "Max and Annie's weekly game night gets kicked up a notch when Max's brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, it's all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.",
      "budget": 37000000,
      "revenue": 25910712,
      "genres": [
        "Mystery",
        "Comedy",
        "Crime",
        "Thriller"
      ],
      "runtime": 100
    },
    {
      "id": 437375,
      "title": "Looking Glass",
      "tagline": "Seeing is deceiving",
      "vote_average": 4.9,
      "vote_count": 19,
      "release_date": "2018-02-16",
      "poster_path": "https://image.tmdb.org/t/p/w500/6zSzaUmoUCwII2pGTqX1jaX8F0p.jpg",
      "overview": "A psycho- sexual thriller following a couple that buys an old motel in the desert looking for a new beginning, but what seemed at first as an escape is soon a thrilling ride through a mysterious world when Ray discovers a two way mirror and witnesses a horrifying murder. In a twisted game of cat and mouse, Ray must race to save his wife and himself from a gruesome secret connected to the motel and the strange people who visit there.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Thriller"
      ],
      "runtime": 103
    },
    {
      "id": 460555,
      "title": "Operation Red Sea",
      "tagline": "",
      "vote_average": 6.8,
      "vote_count": 10,
      "release_date": "2018-02-16",
      "poster_path": "https://image.tmdb.org/t/p/w500/9tK68ZVPhpdABnW8DmtOsQ9avhZ.jpg",
      "overview": "The film is loosely based on the evacuation of the 225 foreign nationals and almost 600 Chinese citizens from Yemen's southern port of Aden during the 2015 Yemeni Civil War.",
      "budget": 0,
      "revenue": 378942213,
      "genres": [
        "Action",
        "Adventure"
      ],
      "runtime": 142
    },
    {
      "id": 437543,
      "title": "The Monkey King 3: Kingdom of Women",
      "tagline": "",
      "vote_average": 4.8,
      "vote_count": 9,
      "release_date": "2018-02-16",
      "poster_path": "https://image.tmdb.org/t/p/w500/zMYnxPIkUVaRIuTpS77B8hLGkBB.jpg",
      "overview": "The third installment of the blockbuster fantasy series sees the return of the Monkey King (Aaron Kwok) in his most action-packed adventure yet! While continuing their epic journey to the West, the Monkey King and his companions are taken captive by the Queen of an all-female land, who believes them to be part of an ancient prophecy heralding the fall of her kingdom. With a lot of sorcery and a little bit of charm, the travelers devise a plan to escape. But when their trickery angers the mighty River God, they realize they might just bring about the foretold destruction - unless they can find a way to quell her wrath.",
      "budget": 73000000,
      "revenue": 0,
      "genres": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "runtime": 114
    },
    {
      "id": 504997,
      "title": "Lego DC Comics Super Heroes: The Flash",
      "tagline": "",
      "vote_average": 7.6,
      "vote_count": 13,
      "release_date": "2018-02-13",
      "poster_path": "https://image.tmdb.org/t/p/w500/u27j3CiMEtNdDRleYwnruQ5Ktkm.jpg",
      "overview": "In LEGO DC Super Heroes: The Flash, Reverse-Flash manipulates the Speed Force to put the Flash into a time loop that forces him to relive the same day over and over again—with progressively disastrous results, including losing his powers and being fired by the Justice League. The Flash must find a way to restore time to its original path and finally apprehend his worst enemy before all is lost for the Flash…and the world!",
      "budget": 10000000,
      "revenue": 0,
      "genres": [
        "Adventure",
        "Animation",
        "Comedy",
        "Family",
        "Science Fiction"
      ],
      "runtime": 78
    },
    {
      "id": 284054,
      "title": "Black Panther",
      "tagline": "Long live the king",
      "vote_average": 7.3,
      "vote_count": 3788,
      "release_date": "2018-02-13",
      "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      "budget": 200000000,
      "revenue": 1245257672,
      "genres": [
        "Action",
        "Adventure",
        "Fantasy",
        "Science Fiction"
      ],
      "runtime": 134
    },
    {
      "id": 433310,
      "title": "When We First Met",
      "tagline": "All he needs is a second chance... to be her first choice.",
      "vote_average": 6.7,
      "vote_count": 503,
      "release_date": "2018-02-09",
      "poster_path": "https://image.tmdb.org/t/p/w500/pscQKoikkSJxAu8O5LKtjgGJEt1.jpg",
      "overview": "Noah spends the perfect first night with the girl of his dreams Avery but gets relegated to the friend zone. He spends the next three years wondering what went wrong - until he gets the unexpected chance to travel back in time and alter that night, and his fate, over and over again.",
      "budget": 10000000,
      "revenue": 0,
      "genres": [
        "Comedy",
        "Romance",
        "Fantasy"
      ],
      "runtime": 97
    },
    {
      "id": 337167,
      "title": "Fifty Shades Freed",
      "tagline": "Don't miss the climax",
      "vote_average": 6.1,
      "vote_count": 1195,
      "release_date": "2018-02-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
      "budget": 55000000,
      "revenue": 136906000,
      "genres": [
        "Drama",
        "Romance"
      ],
      "runtime": 106
    },
    {
      "id": 381719,
      "title": "Peter Rabbit",
      "tagline": "Rascal. Rebel. Rabbit.",
      "vote_average": 6.3,
      "vote_count": 73,
      "release_date": "2018-02-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/2yjSvEDuM3rLDng40erLsWkQRfn.jpg",
      "overview": "Feature adaptation of Beatrix Potter's classic tale of a rebellious rabbit trying to sneak into a farmer's vegetable garden.",
      "budget": 50000000,
      "revenue": 0,
      "genres": [
        "Animation",
        "Adventure",
        "Family"
      ],
      "runtime": 93
    },
    {
      "id": 499772,
      "title": "Meet Me In St. Gallen",
      "tagline": "",
      "vote_average": 4.9,
      "vote_count": 20,
      "release_date": "2018-02-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/uGntNjUx6YAzbVy7RDgxWnWsdet.jpg",
      "overview": "The story of Jesse and Celeste who meets at an unexpected time in their lives. They then realize their names are the same as the characters in the popular break-up romantic comedy, Celeste and Jesse Forever.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Romance"
      ],
      "runtime": null
    },
    {
      "id": 455236,
      "title": "Accident Man",
      "tagline": "Accidents happen. He can guarantee it.",
      "vote_average": 4.5,
      "vote_count": 99,
      "release_date": "2018-02-06",
      "poster_path": "https://image.tmdb.org/t/p/w500/bHFKej3Dbr8kGRSRHpkoFHq9TJQ.jpg",
      "overview": "Mike Fallon, the Accident Man, is a stone cold killer.  When a loved one is murdered by his own crew, Fallon is forced to avenge the one person who actually meant something to him.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Crime",
        "Thriller"
      ],
      "runtime": 101
    },
    {
      "id": 384521,
      "title": "The Cloverfield Paradox",
      "tagline": "The future unleashed every thing",
      "vote_average": 5.7,
      "vote_count": 842,
      "release_date": "2018-02-04",
      "poster_path": "https://image.tmdb.org/t/p/w500/gfxPTyeG9HescyS3EAcMM0VxNg6.jpg",
      "overview": "Orbiting above a planet on the brink of war, scientists test a device to solve an energy crisis and end up face-to-face with a dark alternate reality.",
      "budget": 10000000,
      "revenue": 0,
      "genres": [
        "Mystery",
        "Thriller",
        "Horror",
        "Science Fiction"
      ],
      "runtime": 102
    },
    {
      "id": 416234,
      "title": "Winchester",
      "tagline": "Terror is building",
      "vote_average": 6,
      "vote_count": 121,
      "release_date": "2018-02-02",
      "poster_path": "https://image.tmdb.org/t/p/w500/tHDtskokZeO9B3JBdR1dSH0uqad.jpg",
      "overview": "Firearm heiress Sarah Winchester is convinced that she is haunted by the souls killed at the hands of the Winchester repeating rifle. After the sudden deaths of her husband and child, she throws herself into the construction of an enormous mansion designed to keep the evil spirits at bay. But when skeptical San Francisco psychiatrist Eric Price is dispatched to the estate to evaluate her state of mind, he discovers that her obsession may not be so insane after all.",
      "budget": 0,
      "revenue": 19312713,
      "genres": [
        "Fantasy",
        "Horror",
        "Mystery",
        "Thriller"
      ],
      "runtime": 99
    },
    {
      "id": 459910,
      "title": "Braven",
      "tagline": "",
      "vote_average": 6.1,
      "vote_count": 83,
      "release_date": "2018-02-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/253Bw5I3Zj3e2thCThjO7byEUCL.jpg",
      "overview": "A logger defends his family from a group of dangerous drug runners.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Action"
      ],
      "runtime": 94
    },
    {
      "id": 430040,
      "title": "The Hurricane Heist",
      "tagline": "The ultimate storm for the perfect heist.",
      "vote_average": 5.4,
      "vote_count": 34,
      "release_date": "2018-02-01",
      "poster_path": "https://image.tmdb.org/t/p/w500/wh1f7peigW0qUXXwynwVAt7axZd.jpg",
      "overview": "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
      "budget": 35000000,
      "revenue": 5400000,
      "genres": [
        "Action",
        "Crime",
        "Thriller"
      ],
      "runtime": 100
    },
    {
      "id": 401478,
      "title": "Death Race 4: Beyond Anarchy",
      "tagline": "",
      "vote_average": 5.1,
      "vote_count": 14,
      "release_date": "2018-01-30",
      "poster_path": "https://image.tmdb.org/t/p/w500/h4CrVSJO8G2xRFgkxjPX8LCLzCk.jpg",
      "overview": "Danny Trejo returns as the ruthless bookie, Goldberg, in the wildest, bloodiest, Death Race ever. After a failed attack on inmate and legendary driver, Frankenstein, Black Ops specialist Connor Gibson (McGowan) infiltrates a super-maximum federal prison with one goal - enter the immoral and illegal Death Race and take Frankenstein down. Connor enlists the help of Baltimore Bob (Glover) and Lists (Koehler), and unexpectedly falls in love with bartending beauty, Jane (Marzano). Connor will have to fight for more than his life in this brutal world of no guards, no rules, no track, and no fear.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action"
      ],
      "runtime": 111
    },
    {
      "id": 432527,
      "title": "Padmaavat",
      "tagline": "",
      "vote_average": 6.9,
      "vote_count": 44,
      "release_date": "2018-01-25",
      "poster_path": "https://image.tmdb.org/t/p/w500/dtIceHDioZP4oHAmhHlWmDuZEM9.jpg",
      "overview": "Rani Padmavati - the wife of Maharawal Ratan Singh, is known for her beauty and valour in 13th century India. She captures the fancy of the reigning Sultan of Delhi, the tyrant Alauddin Khilji, who becomes obsessed with her and goes to great lengths to fulfill his greed.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama"
      ],
      "runtime": 164
    },
    {
      "id": 391710,
      "title": "A Futile and Stupid Gesture",
      "tagline": "If You Don't Watch This Movie, We'll Kill Will Forte.",
      "vote_average": 6.8,
      "vote_count": 72,
      "release_date": "2018-01-24",
      "poster_path": "https://image.tmdb.org/t/p/w500/kyHBeRgbbhs7kVrZYblVj9u2Xbd.jpg",
      "overview": "The National Lampoon name became globally recognized after the monumental success of Animal House—but before the glory days, it was a scrappy yet divinely subversive magazine and radio show that introduced the world to comedic geniuses like Bill Murray, Chevy Chase, John Belushi, and Gilda Radner. The driving force behind National Lampoon was Doug Kenney (Will Forte), and his truly wild and crazy story unfolds in A Futile and Stupid Gesture from Harvard to Hollywood to Caddyshack and beyond.",
      "budget": 10000000,
      "revenue": 0,
      "genres": [
        "Comedy"
      ],
      "runtime": 101
    },
    {
      "id": 419831,
      "title": "I Kill Giants",
      "tagline": "",
      "vote_average": 6,
      "vote_count": 63,
      "release_date": "2018-01-21",
      "poster_path": "https://image.tmdb.org/t/p/w500/cvit6HDbXHE6W5kGPd47jd0wthQ.jpg",
      "overview": "Barbara Thorson struggles through life by escaping into a fantasy life of magic and monsters.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Thriller",
        "Drama",
        "Fantasy"
      ],
      "runtime": 106
    },
    {
      "id": 412000,
      "title": "Small Town Crime",
      "tagline": "Doing the right thing the wrong way.",
      "vote_average": 6.8,
      "vote_count": 33,
      "release_date": "2018-01-19",
      "poster_path": "https://image.tmdb.org/t/p/w500/rugVJBckJmJtHQaamcxeLWbp98E.jpg",
      "overview": "An alcoholic ex-cop finds the body of a young woman and, through an act of self-redemption, becomes hell-bent on finding the killer but unwittingly puts his family in danger and gets caught up with several dark characters along the way.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Thriller",
        "Crime",
        "Mystery"
      ],
      "runtime": 91
    },
    {
      "id": 409582,
      "title": "Guardians of the Tomb",
      "tagline": "Unearth the legend. Unleash the curse.",
      "vote_average": 5.6,
      "vote_count": 18,
      "release_date": "2018-01-19",
      "poster_path": "https://image.tmdb.org/t/p/w500/nbqxQ5vTTbmxrPsNnpd4Lz5fcJ9.jpg",
      "overview": "An innocent discovery of a well-preserved mummified Emperor from 200 BC China unearths a 2000 year old nightmare - a secret that should have remained buried.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Horror",
        "Action",
        "Adventure"
      ],
      "runtime": 90
    },
    {
      "id": 429351,
      "title": "12 Strong",
      "tagline": "The declassified true story of the horse soldiers",
      "vote_average": 4.9,
      "vote_count": 242,
      "release_date": "2018-01-18",
      "poster_path": "https://image.tmdb.org/t/p/w500/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg",
      "overview": "A team of CIA agents and special forces head into Afghanistan in the aftermath of the September 11th attacks in an attempt to dismantle the Taliban.",
      "budget": 0,
      "revenue": 47965355,
      "genres": [
        "War",
        "Drama",
        "History"
      ],
      "runtime": 130
    },
    {
      "id": 449443,
      "title": "Den of Thieves",
      "tagline": "You’re not the bad guys. We are.",
      "vote_average": 6.1,
      "vote_count": 176,
      "release_date": "2018-01-18",
      "poster_path": "https://image.tmdb.org/t/p/w500/onnxOne4EVdpqtuTpEBtD1I8tdJ.jpg",
      "overview": "While planning a bank heist, a thief gets trapped between two sets of criminals.",
      "budget": 30000000,
      "revenue": 46460961,
      "genres": [
        "Action",
        "Thriller",
        "Crime"
      ],
      "runtime": 140
    },
    {
      "id": 336843,
      "title": "Maze Runner: The Death Cure",
      "tagline": "The end will be WCKD",
      "vote_average": 7.2,
      "vote_count": 1139,
      "release_date": "2018-01-17",
      "poster_path": "https://image.tmdb.org/t/p/w500/7GgZ6DGezkh3szFdvskH5XD4V0t.jpg",
      "overview": "Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.",
      "budget": 62000000,
      "revenue": 259854591,
      "genres": [
        "Action",
        "Mystery",
        "Science Fiction",
        "Thriller",
        "Adventure",
        "Fantasy"
      ],
      "runtime": 142
    },
    {
      "id": 442064,
      "title": "Proud Mary",
      "tagline": "",
      "vote_average": 5.4,
      "vote_count": 113,
      "release_date": "2018-01-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/5luceoVMU2FzWuyty7mZFcSY5ZW.jpg",
      "overview": "A hit woman kills a drug boss only to learn that she has left a boy orphaned. A year later, she saves the boy from a dangerous life on the street but finds herself unable to give the boy or herself a fresh start.",
      "budget": 14000000,
      "revenue": 19766319,
      "genres": [
        "Thriller",
        "Action",
        "Crime"
      ],
      "runtime": 88
    },
    {
      "id": 471474,
      "title": "Batman: Gotham by Gaslight",
      "tagline": "As the Ripper stalks Gotham City, the Dark Knight reveals the face of terror.",
      "vote_average": 6.6,
      "vote_count": 103,
      "release_date": "2018-01-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/7souLi5zqQCnpZVghaXv0Wowi0y.jpg",
      "overview": "In an alternative Victorian Age Gotham City, Batman begins his war on crime while he investigates a new series of murders by Jack the Ripper.",
      "budget": 10000000,
      "revenue": 0,
      "genres": [
        "Thriller",
        "Action",
        "Animation",
        "Science Fiction"
      ],
      "runtime": 78
    },
    {
      "id": 479040,
      "title": "Acts of Violence",
      "tagline": "Protect what's yours.",
      "vote_average": 5.5,
      "vote_count": 38,
      "release_date": "2018-01-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/pK9CugRd3DIP0THBH8WlGrvk5vy.jpg",
      "overview": "When his fiancee is kidnapped by human traffickers, Roman and his ex-military brothers set out to track her down and save her before it is too late. Along the way, Roman teams up with Avery, a cop investigating human trafficking and fighting the corrupt bureaucracy that has harmful intentions.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Drama"
      ],
      "runtime": 86
    },
    {
      "id": 399035,
      "title": "The Commuter",
      "tagline": "Lives are on the line",
      "vote_average": 5.8,
      "vote_count": 655,
      "release_date": "2018-01-11",
      "poster_path": "https://image.tmdb.org/t/p/w500/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
      "overview": "A businessman on his daily commute home gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.",
      "budget": 30000000,
      "revenue": 105652788,
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "runtime": 104
    },
    {
      "id": 494466,
      "title": "Last Scene Alive: An Aurora Teagarden Mystery",
      "tagline": "",
      "vote_average": 6.6,
      "vote_count": 7,
      "release_date": "2018-01-07",
      "poster_path": "https://image.tmdb.org/t/p/w500/tgvdZ03jrMIMPx1gtSCfUxlzlGR.jpg",
      "overview": "There is excitement in the air when a Hollywood crew comes to Lawrenceton to film a movie about the town’s sleuthy librarian, Aurora Teagarden. However, when the film’s leading lady is found murdered in her dressing room, Aurora enlists her Real Murders Club members to help gather clues. At the same time, she experiences mounting concern that Aida is becoming attracted to the film’s director who, like everyone else working on the set that day, is considered a suspect. And this time around Martin is especially worried about Aurora’s safety after learning that the film’s screenwriter, who has a romantic history with her, emerges as the prime suspect.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Mystery",
        "TV Movie"
      ],
      "runtime": 85
    },
    {
      "id": 485415,
      "title": "Day of the Dead: Bloodline",
      "tagline": "Join the undying war.",
      "vote_average": 3.9,
      "vote_count": 74,
      "release_date": "2018-01-04",
      "poster_path": "https://image.tmdb.org/t/p/w500/3jM4C1wJxHLWlF4tcSyyv6fnJPR.jpg",
      "overview": "In a world overrun by zombies, military personnel and survivalists live in an underground bunker while they seek a cure.",
      "budget": 8000000,
      "revenue": 0,
      "genres": [
        "Action",
        "Horror"
      ],
      "runtime": 90
    },
    {
      "id": 406563,
      "title": "Insidious: The Last Key",
      "tagline": "Fear comes home.",
      "vote_average": 6,
      "vote_count": 501,
      "release_date": "2018-01-03",
      "poster_path": "https://image.tmdb.org/t/p/w500/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg",
      "overview": "Parapsychologist Elise Rainier and her team travel to Five Keys, N.M., to investigate a man's claim of a haunting. Terror soon strikes when Rainier realizes that the house he lives in was her family's old home.",
      "budget": 10000000,
      "revenue": 165242521,
      "genres": [
        "Mystery",
        "Horror",
        "Thriller"
      ],
      "runtime": 118
    },
    {
      "id": 400617,
      "title": "Phantom Thread",
      "tagline": "",
      "vote_average": 7.3,
      "vote_count": 637,
      "release_date": "2017-12-25",
      "poster_path": "https://image.tmdb.org/t/p/w500/6jsqmMgR75VYC9AM6eToMJh3RxF.jpg",
      "overview": "In the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock and his sister Cyril are at the center of British fashion. Women come and go through Woodcock’s life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma, who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
      "budget": 35000000,
      "revenue": 34283740,
      "genres": [
        "Drama",
        "Romance"
      ],
      "runtime": 130
    },
    {
      "id": 458741,
      "title": "Mayaanadhi",
      "tagline": "",
      "vote_average": 6,
      "vote_count": 3,
      "release_date": "2017-12-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/mNxAgWdHPWOAUVcI4kEuXvpo97j.jpg",
      "overview": "A shady money deal goes wrong and in the aftermath Mathan  ends up killing a police officer. Meanwhile in Kochi, his old flame Aparna  an aspiring actress is struggling to prop up her career. Mathan meets up with Aparna and tries to rekindle the past, even as the police hunt for him gets intense.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Drama",
        "Romance"
      ],
      "runtime": 135
    },
    {
      "id": 460648,
      "title": "Bleeding Steel",
      "tagline": "",
      "vote_average": 6.2,
      "vote_count": 24,
      "release_date": "2017-12-22",
      "poster_path": "https://image.tmdb.org/t/p/w500/x8kbeiqXFJc5RIAShyZMYAv8VCq.jpg",
      "overview": "Jackie Chan stars as a hardened special forces agent who fights to protect a young woman from a sinister criminal gang. At the same time he with feels a special connection to the young woman, like they met in a different life.",
      "budget": 0,
      "revenue": 0,
      "genres": [
        "Action",
        "Comedy",
        "Science Fiction"
      ],
      "runtime": null
    }
  ],
  "total": 3000,
  "offset": 0,
  "limit": 100
};

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function MyRound10(val) {
  return Math.round(val / 10) * 10;
};

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(
      '<html><head><body><form action="/message" method="POST"><input type="text" name="message"><button submit="message">Click me</button></form></body></head></html>'
    );
    return res.end();
  }
  if (url === "/message" && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // fs.writeFile('test.txt', message, (err) => {
      //   res.statusCode = 302;
      //   res.setHeader('Location', '/');
      //   return res.end();
      // });
      const updatedData = data.data.map(item => {
        item.availability = randomInteger(1, 10) > 3;
        item.price = MyRound10(randomInteger(20, 100))
        return item;
      });
      data.data.forEach(item => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const element = item[key];
            if (typeof element === 'number') {
              item[key] = element.toString();
            }

          }
        }
      })
      console.log(data.data.length)
      fs.writeFile('data.json', JSON.stringify(updatedData), (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.write(
    '<html><head><body>Hello from another side</body></head></html>'
  );
  res.end();
};

exports.handler = requestHandler;
