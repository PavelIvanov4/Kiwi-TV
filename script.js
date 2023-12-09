let randomize = document.getElementById('randomize');
let go = document.getElementById('go');
let show = document.getElementById('show');
let desc = document.getElementById('desc');
let count = 0;

randomize.addEventListener('click', () => {
	let num = Math.floor(Math.random() * 200 + 1);
	switch (num) {
		case 1 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UQgcBiAztjs');
		desc.innerHTML = "Expedia. Frankfurt Travel Guide";
		break;
		case 2 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=45ETZ1xvHS0');
		desc.innerHTML = "Expedia. London Travel Guide";
		break;
		case 3 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dfwnt3kojG8');
		desc.innerHTML = "New York City 4K Drone";
		break;
		case 4 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=i-285FbVKpc');
		desc.innerHTML = "Cologne 4K Drone";
		break;		
		case 5 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=wz3BGn--UIA');
		desc.innerHTML = "Neuschwanstein 4K Video";
		break;
		case 6 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=EDfWLui5Xhg');
		desc.innerHTML = "HD France From Above";
		break;	
		case 7 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Qctb90Udisk');
		desc.innerHTML = "HD Germany From Above";
		break;	
		case 8 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DamsZG2Jr9s');
		desc.innerHTML = "Arriving In Berlin";
		break;	
		case 9 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ACkmg3Y64_s');
		desc.innerHTML = "Miniatur Wunderland Official Video";
		break;	
		case 10 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=PVT7uXzIJWc');
		desc.innerHTML = "Top 5 Trippy Motion Art Exhibits";
		break;	
		case 11 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=p3QEzXKQuTk');
		desc.innerHTML = "Top 5 Unusual Buildings";
		break;	
		case 12 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=zUuChLByUWs');
		desc.innerHTML = "15 Strangest Things Found By Deep Sea Divers";
		break;
		case 13 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=wq4H0ODK0TQ');
		desc.innerHTML = "Top Incredible Frozen Things";
		break;		
		case 14 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=hssSf2x2cRg');
		desc.innerHTML = "Top 10 Interesting Facts About Jupiter";
		break;				
		case 15 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=cuNGJvTZ79o');
		desc.innerHTML = "Trees For Life. Restoring The Caledonian Forest";
		break;				
		case 16 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4WB55Vl2XR4');
		desc.innerHTML = "The Ultimate Pool List";
		break;				
		case 17 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=75gCFlRY15E');
		desc.innerHTML = "8 Outlandish Tree Houses";
		break;				
		case 18 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=zV2ICC2h74s');
		desc.innerHTML = "Movie Theater Formats";
		break;					
		case 19 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ZgvO--dGLjY');
		desc.innerHTML = "Tea Around The World";
		break;				
		case 20 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=L0_xrFtnWv8');
		desc.innerHTML = "London Hot Chocolate";
		break;				
		case 21 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=d8Uap_bb7vI');
		desc.innerHTML = "Cheesecake On A Stick";
		break;				
		case 22 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=h9pzwKJx3_E');
		desc.innerHTML = "Famous Paintings From Old Keyboards";
		break;				
		case 23 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=kDHDeoMM82g');
		desc.innerHTML = "7 Incredible Kinetic Sculptures";
		break;					
		case 24 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TOSFmKy2fKA');
		desc.innerHTML = "Spray Paint To Fake Neon Signs";
		break;				
		case 25 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ju3LWnOkgcs');
		desc.innerHTML = "Cologne Plane Spotting";
		break;				
		case 26 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=eqnfjRb9Li8');
		desc.innerHTML = "Toronto University Student Residence";
		break;				
		case 27 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=7rMgpExA4kM');
		desc.innerHTML = "How Airplanes Are Made";
		break;				
		case 28 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=I-EIVlHvHRM');
		desc.innerHTML = "A. I. Art Creation";
		break;					
		case 29 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=zR3Igc3Rhfg');
		desc.innerHTML = "To Scale. The Solar System";
		break;				
		case 30 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=V29-HvFLOzQ');
		desc.innerHTML = "Behind The Scenes Of Our Planet. Narwhal";
		break;				
		case 31 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dDATY3av_48');
		desc.innerHTML = "Green Sustainable Buildings Explained";
		break;				
		case 32 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=XY3yndaXsUU');
		desc.innerHTML = "Urbanism, Architecture & Biodiversity";
		break;				
		case 33 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=LtoBzOMwlRQ');
		desc.innerHTML = "Amazing Science Toys/Gadgets/Inventions";
		break;					
		case 34 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xYe4-7I5ot0');
		desc.innerHTML = "Amazing Optical Illusions";
		break;				
		case 35 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_mdu3ghaNXQ');
		desc.innerHTML = "Top 4 NYC Art Museums";
		break;				
		case 36 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=enpkJE-7Dkc');
		desc.innerHTML = "How To Grow Coral";
		break;				
		case 37 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=T5DuYSXRqGc');
		desc.innerHTML = "Vancouver 31st Ave House Tour";
		break;				
		case 38 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ToUmmVvqKHo');
		desc.innerHTML = "40 Creative Photography Ideas";
		break;					
		case 39 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=cXUWYZXru6o');
		desc.innerHTML = "JavaScript Variables Explained Using Imagery";
		break;				
		case 40 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=libKVRa01L8');
		desc.innerHTML = "Solar System 101 Video";
		break;				
		case 41 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=epZdZaEQhS0');
		desc.innerHTML = "Saturn 101 Video";
		break;				
		case 42 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ddq8YLwcscA');
		desc.innerHTML = "The First American Lighthouse";
		break;				
		case 43 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=PL2j9MbvgH8');
		desc.innerHTML = "Ford vs. Ferrari";
		break;					
		case 44 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=gj6frb_mHzQ');
		desc.innerHTML = "Aquarius Undersea Laboratory Tour";
		break;				
		case 45 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sBoVGqiSzr4');
		desc.innerHTML = "Calligraphy & Hand Lettering Tutorial";
		break;				
		case 46 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=6RkWqu3aHHI');
		desc.innerHTML = "How Was It Made? Micromosaics";
		break;				
		case 47 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=lOSaU6mzmOc');
		desc.innerHTML = "The Golden Autumn";
		break;				
		case 48 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=iZMj0v9uEfU');
		desc.innerHTML = "ABQ Balloon Fiesta";
		break;					
		case 49 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=RFcGvmFtR-s');
		desc.innerHTML = "Rise Lantern Festival";
		break;				
		case 50 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=d77p2Cg1q1Y');
		desc.innerHTML = "NYC Subway Saxophone Band";
		break;				
		case 51 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=g5Sh0IZgs8I');
		desc.innerHTML = "Berlin Thomas Kruger Classic Piano Medley";
		break;				
		case 52 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4rgSzQwe5DQ');
		desc.innerHTML = "Vivaldi : The Four Seasons";
		break;				
		case 53 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fqcdVziCynM');
		desc.innerHTML = "Walter Mitty. Bike On Iceland";
		break;					
		case 54 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Blb9la-SE1k');
		desc.innerHTML = "Easy Chocolate Lace Lollipops";
		break;				
		case 55 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ydZedLblpFY');
		desc.innerHTML = "Easy Healthy Snack Ideas";
		break;				
		case 56 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=4Ca6x4QbpoM');
		desc.innerHTML = "Space X – Falcon Heavy. Flight Animation";
		break;				
		case 57 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=SL_E2q3RSLE');
		desc.innerHTML = "BMW – M8 Convertible";
		break;				
		case 58 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=a_4hVIWaa_8');
		desc.innerHTML = "Elevators : Raising The Roof Since 1854";
		break;					
		case 59 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=D-4-8IcoZBk');
		desc.innerHTML = "Pavillion Le Corbusier";
		break;				
		case 60 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UO3N_PRIgX0');
		desc.innerHTML = "The Magic Of Making Sound";
		break;				
		case 61 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sZdE-jDiNb0');
		desc.innerHTML = "Answers To 5 Whys";
		break;				
		case 62 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YThelfB2fvg');
		desc.innerHTML = "Mouse Cursor History";
		break;				
		case 63 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ww12lImOJ38');
		desc.innerHTML = "Image File Formats";
		break;					
		case 64 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=oQ0mp4wLBMg');
		desc.innerHTML = "7 Ways To Increase Intelligence";
		break;				
		case 65 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=a4N4yQB_B4c');
		desc.innerHTML = "Where Two Oceans Meet";
		break;				
		case 66 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=o1zNIm8GVPY');
		desc.innerHTML = "I'm Not A Robot";
		break;				
		case 67 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1jfNIBtfWDY');
		desc.innerHTML = "How Does An Escalator Work?";
		break;				
		case 68 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=oLrOnEmy_GA');
		desc.innerHTML = "How Does The ISS Work?";
		break;					
		case 69 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sKT80lPjQ8Y');
		desc.innerHTML = "Dream Home Music Studio";
		break;				
		case 70 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ancuYECRGN8');
		desc.innerHTML = "Every State In The US";
		break;				
		case 71 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=iRK694NA6Cc');
		desc.innerHTML = "5 German Words Absent In English";
		break;				
		case 72 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ie5NdWCXK3A');
		desc.innerHTML = "DIY Clay Cup";
		break;				
		case 73 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=X-hUBsd9f1w');
		desc.innerHTML = "Ceramic Plates At Home";
		break;					
		case 74 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ad7GJwn9kAg');
		desc.innerHTML = "Orange Pound Cake";
		break;				
		case 75 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=EJMxaDdgbFA');
		desc.innerHTML = "Steamboat Willie Animation Compilation";
		break;				
		case 76 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=LAFqAbrPKxQ');
		desc.innerHTML = "All's Fair At The Fair";
		break;
		case 77 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xGEoK8kRNoQ');
		desc.innerHTML = "Plant Cell Explainer Animation";
		break;				
		case 78 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=MK5E_7hOi-k');
		desc.innerHTML = "Solar System Sizes";
		break;					
		case 79 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=OgcXCcz1WZc');
		desc.innerHTML = "Ernestine & Ernestina";
		break;				
		case 80 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=D0ta4NtBCJo');
		desc.innerHTML = "Back To School DIY Notebooks";
		break;				
		case 81 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DfrtdSGmgBU');
		desc.innerHTML = "High School Success Tips";
		break;				
		case 82 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=KeR0S0jUucU');
		desc.innerHTML = "Model Trains. N Scale";		
		break;				
		case 83 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=vxqHHJRUkpU');
		desc.innerHTML = "Kids And Friendship";
		break;				
		case 84 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YhGrMvFCpnE');
		desc.innerHTML = "World Record Kids";
		break;					
		case 85 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=52nFMHtxhc8');
		desc.innerHTML = "Mr. Rogers Neighborhood. Be Yourself";
		break;				
		case 86 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Pz-euQxy_f4');
		desc.innerHTML = "Stretched Picture Trick";
		break;				
		case 87 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=GxenX7xq63M');
		desc.innerHTML = "Science Max. Building With Food";
		break;				
		case 88 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=RtU8nBnpFVE');
		desc.innerHTML = "Wings Animated Movie";
		break;				
		case 89 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-9ADLZv7jms');
		desc.innerHTML = "A Day In Forest School";
		break;					
		case 90 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=uLp0NhNszQU');
		desc.innerHTML = "Chemical Experiments Fun";
		break;				
		case 91 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fMxYfsLepPk');
		desc.innerHTML = "CGI Animation. Starry Skies";
		break;				
		case 92 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=QNsibN4D36A');
		desc.innerHTML = "Minions Funny Video";
		break;				
		case 93 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=3EOKqEXZLR8');
		desc.innerHTML = "Toy Trains Galore";
		break;				
		case 94 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ad3CMri3hOs');
		desc.innerHTML = "Morris Lessmore";
		break;					
		case 95 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Y1JtuJTHSZs');
		desc.innerHTML = "Hidden Explorer";
		break;				
		case 96 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=K6DSMZ8b3LE');
		desc.innerHTML = "Seven Continents Song";
		break;				
		case 97 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=djPgd1m6IMY');
		desc.innerHTML = "Easy Origami Fish";
		break;				
		case 98 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=SwefYNKH87Y');
		desc.innerHTML = "Autumn Miller Back Walkover";
		break;				
		case 99 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2odi5nszWKc');
		desc.innerHTML = "Chain Reaction Tricks";
		break;					
		case 100 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=3LPYTh8CIIg');
		desc.innerHTML = "Road Trip Hacks";
		break;				
		case 101 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UXsomnDkntI');
		desc.innerHTML = "Dr. Binocs Show. How The Internet Works?";
		break;				
		case 102 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=fhYxT1tcR4Q');
		desc.innerHTML = "Tulip Emoji Drawing";
		break;				
		case 103 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Jn3JRn4cHLk');
		desc.innerHTML = "Belgium Sea Life Aquarium";
		break;				
		case 104 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_WA30cC9gy0');
		desc.innerHTML = "Growing Soap Experiment";
		break;					
		case 105 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2JyGBG9dUmw');
		desc.innerHTML = "Spring Cartoon";
		break;				
		case 106 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=FkzudF6QmrU');
		desc.innerHTML = "Mr. Rogers' Neighborhood. Going Away And Coming Back";
		break;				
		case 107 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Af6ppUlb3vA');
		desc.innerHTML = "Word World. Castles In The Sea";
		break;				
		case 108 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YhGrMvFCpnE');
		desc.innerHTML = "How To Set A World Record";
		break;				
		case 109 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=J-BkNUMh_jI');
		desc.innerHTML = "Artzooka";
		break;					
		case 110 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ffTw333yfm8');
		desc.innerHTML = "Educated Fish";
		break;				
		case 111 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=x7k7CeWDtWs');
		desc.innerHTML = "Know Your Globe";
		break;				
		case 112 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=S_zd-HxMq0k');
		desc.innerHTML = "Gift Hacks For Every Occasion";
		break;				
		case 113 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=-TrGp7p4YF0');
		desc.innerHTML = "Who Teaches Teachers?";
		break;				
		case 114 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=AHMZvBt7gQU');
		desc.innerHTML = "Word World. Rocket To The Moon";
		break;					
		case 115 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1BrZzDHgx6g');
		desc.innerHTML = "How To Draw A Cat";
		break;				
		case 116 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xMnx_3BC7EM');
		desc.innerHTML = "Fishing With Sam. Animated Short Film";
		break;				
		case 117 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=QlRx428qOYo');
		desc.innerHTML = "DIY School Supplies";
		break;				
		case 118 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=gbL9sN_QD7Q');
		desc.innerHTML = "Kids Meet A Magician";
		break;				
		case 119 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1vc1HxNpB6I');
		desc.innerHTML = "Mr. Rogers' Neighborhood";
		break;					
		case 120 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=VxNid3CZPl8');
		desc.innerHTML = "Family Weekend Vlog";
		break;				
		case 121 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=8yuiUvi568I');
		desc.innerHTML = "Learn Spanish For Kids";
		break;				
		case 122 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=iSEkI3Urmd4');
		desc.innerHTML = "Harry Potter Homecoming Assembly";
		break;				
		case 123 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Wat7k0oHgAM');
		desc.innerHTML = "Curious George Goes Exploring";
		break;				
		case 124 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=eKd1itxL83M');
		desc.innerHTML = "Curious George Drives A Race Car";
		break;					
		case 125 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=alJed4Dadu8');
		desc.innerHTML = "Talking Tom & Friends Becca Special";
		break;				
		case 126 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=nv8_APYXVnc');
		desc.innerHTML = "BBC Studios – Finding The Panamanian Golden Frog";
		break;				
		case 127 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=FVdE06aBNOI');
		desc.innerHTML = "BBC Studios – Life-changing Rare Bird Encounter";
		break;				
		case 128 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=nOMoaLOZbII');
		desc.innerHTML = "BBC Studios – Vincent van Gogh Visits the Gallery";
		break;				
		case 129 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1n8S13_Kjf4');
		desc.innerHTML = "Fall Bake With Me + Q&A";
		break;					
		case 130 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=IVCyDiAUdr4');
		desc.innerHTML = "French or American Public School?";
		break;				
		case 131 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Ve6jXaHMS0k');
		desc.innerHTML = "Tallest Building in the World Comparison 3D";
		break;				
		case 132 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=O-17kqjsiFc');
		desc.innerHTML = "Most Popular Websites 1996-2023";
		break;				
		case 133 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=XqIYOAoOAes');
		desc.innerHTML = "In The Clouds";
		break;					
		case 134 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=YhUPi6-MQNE');
		desc.innerHTML = "The Drive";
		break;				
		case 135 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=dkiZuu79N_I');
		desc.innerHTML = "Gene Wilder – Taming the Fox";
		break;				
		case 136 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=kmpzDfrqliU');
		desc.innerHTML = "How to make a seashell – Just add water!";
		break;				
		case 137 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=S1jCOJcW8js');
		desc.innerHTML = "Crayon Factory Experience";
		break;				
		case 138 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=d8FFssmKsPQ');
		desc.innerHTML = "Art Class Experiment In School";
		break;					
		case 139 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=mYhy7eaazIk');
		desc.innerHTML = "Crash Course Astronomy – Telescopes";
		break;				
		case 140 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=L-Wtlev6suc');
		desc.innerHTML = "Crash Course Astronomy – Observations";
		break;				
		case 141 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=lmiRjmbnn8Q');
		desc.innerHTML = "How Crayons Are Made";
		break;				
		case 142 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_asrhvc4dPg');
		desc.innerHTML = "How Balloons Are Made";
		break;				
		case 143 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TnupP-MSEHI');
		desc.innerHTML = "School Junior Year Vlog";
		break;					
		case 144 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UvaQOWYhsOw');
		desc.innerHTML = "School Vlog";
		break;				
		case 145 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=t6o3CODTGB8');
		desc.innerHTML = "Room Tour";
		break;				
		case 146 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=_WLLcGBoQeI');
		desc.innerHTML = "Finals Week School Morning Routine";
		break;				
		case 147 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=qzABM3FA0Vg');
		desc.innerHTML = "When You\'re Bored At Home";
		break;				
		case 148 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=cTGmXz--mmo');
		desc.innerHTML = "Making Aesthetic Stickers";
		break;					
		case 149 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=hUtnW3hpcWA');
		desc.innerHTML = "Snapchat Response Songwriting";
		break;				
		case 150 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=bhseoSl3nLY');
		desc.innerHTML = "American School Field Trip";
		break;				
		case 151 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=9H3Qsvlw2Vw');
		desc.innerHTML = "Musical Cast Guesses Disney Movies";
		break;				
		case 152 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Pc9dLYra43o');
		desc.innerHTML = "Hand Sewing Tutorial";
		break;				
		case 153 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=DIUjtlARVTw');
		desc.innerHTML = "DIY Octopus Plushie";
		break;					
		case 154 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=I3QNdSt1LUU');
		desc.innerHTML = "Simply Sofia – School Week";
		break;				
		case 155 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=UhB0U6OUPIM');
		desc.innerHTML = "What Is Cubism? Tate Kids";
		break;				
		case 156 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=1YE_Zas-A5A');
		desc.innerHTML = "What Is Surrealism? Tate Kids";
		break;				
		case 157 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=k1gy1r5H7Go');
		desc.innerHTML = "Homemade Instruments";
		break;				
		case 158 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=rKLk0JUS4TE');
		desc.innerHTML = "Funny Video Compilation";
		break;					
		case 159 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=2vYI2NcVsXY');
		desc.innerHTML = "Introduction to Physics";
		break;				
		case 160 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=ftj23FRS2LI');
	    desc.innerHTML = "How Do Energy Convert?";
		break;
	 	case 161:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=HFd2lVfrwL8');
	 	desc.innerHTML = "Dayglow – Deep End";
	 	break;	 	
	 	case 162:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=ArBD_VHIY8Q');
	 	desc.innerHTML = "Dayglow – Stops Making Sense";
	 	break;	 	
	 	case 163:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=O7S21zudhtY');
	 	desc.innerHTML = "Zedd feat. Ryan Tedder – Lost At Sea";
	 	break;	 	
	 	case 164:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=9bX97Hgb6IY');
	 	desc.innerHTML = "Ed Sheeran – The City";
	 	break;	 	
	 	case 165:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=-8YV5xhENt8');
	 	desc.innerHTML = "Dua Lipa – Homesick";
	 	break;	 	
	 	case 166:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=m7Bc3pLyij0');
	 	desc.innerHTML = "Marshmello ft. Bastille – Happier";
	 	break;	 	
	 	case 167:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=kiDlwknFOrI');
	 	desc.innerHTML = "Surfaces – Shine On Top";
	 	break;	 	
	 	case 168:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=oJH1Cdw-Plw');
	 	desc.innerHTML = "Surfaces – Take It Easy";
	 	break;	 	
	 	case 169:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=uSNHveS_GZw');
	 	desc.innerHTML = "VINAI - On N On (feat. Leony)";
	 	break;	 	
	 	case 170:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=JA2TPK0NeFI');
	 	desc.innerHTML = "Italobrothers – Stamp On The Ground";
	 	break;	 	
	 	case 171:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=Y4QGPWLY-EM');
	 	desc.innerHTML = "Eiffel 65 – Blue";
	 	break;	 	
	 	case 172:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=to5Sg2KeEnU');
	 	desc.innerHTML = "Maroon 5 – Sunday Morning";
	 	break;	 	
	 	case 173:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=jifUJrYPZQQ');
	 	desc.innerHTML = "Wednesday Dance (Tik Tok Speed Up)";
	 	break;	 		 	
	 	case 174:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=B7xai5u_tnk');
	 	desc.innerHTML = "TheFatRat – Monody (feat. Laura Brehm)";
	 	break;	 	
	 	case 175:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=krcaX7RL0OI');
	 	desc.innerHTML = "Lastep – Come To Life";
	 	break;	 	
	 	case 176:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=YJ5fRzTJvS4');
	 	desc.innerHTML = "Lemonade Mouth – Somebody";
	 	break;	 	
	 	case 177:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=tBU-F_lSTac');
	 	desc.innerHTML = "Calvin Harris – Neon Rocks";
	 	break;	 	
	 	case 178:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=jofNR_WkoCE');
	 	desc.innerHTML = "Ylvis – The Fox (What Does The Fox Say?)";
	 	break;	 	
	 	case 179:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=mk48xRzuNvA');
	 	desc.innerHTML = "The Script – Hall Of Fame";
	 	break;	 	
	 	case 180:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=qP-7GNoDJ5c');
	 	desc.innerHTML = "Nathan Evans – Wellerman";
	 	break;	 	
	 	case 181:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=0dcbw4IEY5w');
	 	desc.innerHTML = "ABBA – Thank You For The Music";
	 	break;	 	
	 	case 182:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=dDI7x1nwTUw');
	 	desc.innerHTML = "ABBA – Eagle";
	 	break;	 	
	 	case 183:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=TbksX8Pnw_c');
	 	desc.innerHTML = "Herreys – Diggi-Loo, Diggi-Ley (English Version)";
	 	break;	 	
	 	case 184:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=B2z7Iy2NCgQ');
	 	desc.innerHTML = "Perry Como – The Colors Of My Life";
	 	break;	 	
	 	case 185:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=VCYQ8V1kHUc');
	 	desc.innerHTML = "Magnus Bokn – Over The Sea";
	 	break;	 	
	 	case 186:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=ra68T96ONNU');
	 	desc.innerHTML = "4 Strings – Forever Young";
	 	break;	 	
	 	case 187:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=9fbxTFevdAE');
	 	desc.innerHTML = "Aloe Blacc – Green Lights";
	 	break;	 	
	 	case 188:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=pIkK4uYLP9A');
	 	desc.innerHTML = "Janji – Shine";
	 	break;	 	
	 	case 189:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=bIfGCnbFuF8');
	 	desc.innerHTML = "Obie Hans – Opaque Silhouettes";
	 	break;	 		 	
	 	case 190:
	 	go.setAttribute('href', 'https://www.youtube.com/watch?v=pAWFbaY1hUA');
	 	desc.innerHTML = "Obie Hans – Midnight Motif";
	 	break;	 							
		case 191 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=G8dsvclf3Tk');
		desc.innerHTML = "ELO – Mr. Blue Sky (Animated Video)";
		break;				
		case 192 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Tprdribab0w');
		desc.innerHTML = "Tempo – Everybody Get Up";
		break;				
		case 193 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=x6WFa3r1tNo');
		desc.innerHTML = "Bambee – Let The Sun Shine In";
		break;					
		case 194 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=TtPBRjyLUSA');
		desc.innerHTML = "A-Teens – Firefly";
		break;				
		case 195 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=sySlY1XKlhM');
		desc.innerHTML = "B. J. Thomas – Raindrops Keep Falling On My Head";
		break;				
		case 196 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=i66p0_wZ9F0');
		desc.innerHTML = "Moana – How Far I\'ll Go";
		break;				
		case 197 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=vU05Eksc_iM');
		desc.innerHTML = "Oasis – Wonderwall";
		break;				
		case 198 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=xsWhjSkIgxw');
		desc.innerHTML = "Nick Jonas – Believe";
		break;					
		case 199 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=OGXD61SapUM');
		desc.innerHTML = "The Wanted – Chasing The Sun";
		break;				
		case 200 :
		go.setAttribute('href', 'https://www.youtube.com/watch?v=Lm12gDg0D8c');
		desc.innerHTML = "Ace of Base – Never Gonna Say I'm Sorry";
		break;								
	}
})

show.addEventListener('click', () => {
	desc.classList.toggle('desc_hidden');
})