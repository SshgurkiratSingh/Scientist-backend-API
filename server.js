const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const e={
  "scientists": [
    {
      "first_name": "Marie",
      "last_name": "Curie",
      "photo_link": "https://en.wikipedia.org/wiki/Marie_Curie#/media/File:Marie_Curie_c1920.jpg",
      "country": "Poland",
      "short_name": "MC",
      "field": "Physics and Chemistry",
      "work": "Discovery of radioactivity and two new elements, polonium and radium"
    },
    {
      "first_name": "Albert",
      "last_name": "Einstein",
      "photo_link": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Albert_Einstein_Head.jpg",
      "country": "Germany",
      "short_name": "AE",
      "field": "Physics",
      "work": "Theory of relativity, explanation of the photoelectric effect, and prediction of the deflection of light by gravity"
    },
    {
      "first_name": "Isaac",
      "last_name": "Newton",
      "photo_link": "https://en.wikipedia.org/wiki/Isaac_Newton#/media/File:Isaac_Newton_portrait.jpg",
      "country": "England",
      "short_name": "IN",
      "field": "Physics, Mathematics, and Astronomy",
      "work": "Laws of motion, universal gravitation, and the development of calculus"
    },
    {
      "first_name": "Galileo",
      "last_name": "Galilei",
      "photo_link": "https://en.wikipedia.org/wiki/Galileo_Galilei#/media/File:Galileo_Galilei_portrait.jpg",
      "country": "Italy",
      "short_name": "GG",
      "field": "Physics, Mathematics, and Astronomy",
      "work": "Heliocentric model of the solar system, laws of motion, and telescope observations"
    },
    {
      "first_name": "Neil",
      "last_name": "Armstrong",
      "photo_link": "https://en.wikipedia.org/wiki/Neil_Armstrong#/media/File:Neil_Armstrong_VL.jpg",
      "country": "United States",
      "short_name": "NA",
      "field": "Aeronautics",
      "work": "First person to walk on the Moon"
    },
    {
      "first_name": "Stephen",
      "last_name": "Hawking",
      "photo_link": "https://en.wikipedia.org/wiki/Stephen_Hawking#/media/File:Stephen_Hawking_2007.jpg",
      "country": "England",
      "short_name": "SH",
      "field": "Theoretical Physics",
      "work": "Theoretical prediction of black hole radiation, contributions to the field of cosmology"
    },
    {
      "first_name": "Dian Fossey",
      "last_name": "",
      "photo_link": "https://en.wikipedia.org/wiki/Dian_Fossey#/media/File:Dian_Fossey_1985.jpg",
      "country": "United States",
      "short_name": "DF",
      "field": "Primatology",
      "work": "Studied and fought for the protection of gorillas in Rwanda"
    },
    {
      "first_name": "Sally",
      "last_name": "Ride",
      "photo_link": "https://en.wikipedia.org/wiki/Sally_Ride#/media/File:Sally_Ride_official_NASA_photo.jpg",
      "country": "United States",
      "short_name": "SR",
      "field": "Aeronautics",
      "work": "First American woman in space"
    },
    {
      "first_name": "Jane",
      "last_name": "Goodall",
      "photo_link": "https://en.wikipedia.org/wiki/Jane_Goodall#/media/File:Jane_Goodall_2006.jpg",
      "country": "England",
      "short_name": "JG",
      "field": "Primatology",
      "work": "Studied the behavior and social interactions of chimpanzees"
    }
    ,
    {
      "first_name": "Rosalind",
      "last_name": "Franklin",
      "photo_link": "https://en.wikipedia.org/wiki/Rosalind_Franklin#/media/File:Rosalind_Franklin.jpg",
      "country": "England",
      "short_name": "RF",
      "field": "Chemistry and Physics",
      "work": "Contributed to the discovery of the structure of DNA through her work on X-ray crystallography"
    },
    {
      "first_name": "Grace",
      "last_name": "Hopper",
      "photo_link": "https://en.wikipedia.org/wiki/Grace_Hopper#/media/File:Grace_Hopper,_artist's_portrait,_1944.jpg",
      "country": "United States",
      "short_name": "GH",
      "field": "Computer Science",
      "work": "Developed the first compiler for a computer programming language and popularized the term 'debugging'"
    },
    {
      "first_name": "Carl",
      "last_name": "Sagan",
      "photo_link": "https://en.wikipedia.org/wiki/Carl_Sagan#/media/File:Carl_Sagan_1988.jpg",
      "country": "United States",
      "short_name": "CS",
      "field": "Astronomy and Astrophysics",
      "work": "Contributed to the scientific search for extraterrestrial life and popularized science through his writing and public lectures"
    }
    ,
    {
      "first_name": "Linus",
      "last_name": "Pauling",
      "photo_link": "https://en.wikipedia.org/wiki/Linus_Pauling#/media/File:Linus_Pauling_1966.jpg",
      "country": "United States",
      "short_name": "LP",
      "field": "Chemistry and Peace",
      "work": "Developed the concept of the chemical bond and worked on the campaign to ban nuclear weapons testing"
    },
    {
      "first_name": "Werner",
      "last_name": "Heisenberg",
      "photo_link": "https://en.wikipedia.org/wiki/Werner_Heisenberg#/media/File:Werner_Heisenberg_1928.jpg",
      "country": "Germany",
      "short_name": "WH",
      "field": "Physics",
      "work": "Developed the uncertainty principle and made contributions to the development of quantum mechanics"
    },
    {
      "first_name": "Erwin",
      "last_name": "Schrödinger",
      "photo_link": "https://en.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger#/media/File:Erwin_Schrodinger_1933.jpg",
      "country": "Austria",
      "short_name": "ES",
      "field": "Physics",
      "work": "Developed the Schrödinger equation and made contributions to the development of quantum mechanics"
    }
,
{
  "first_name": "Sigmund",
  "last_name": "Freud",
  "photo_link": "https://en.wikipedia.org/wiki/Sigmund_Freud#/media/File:Sigmund_Freud_LIFE.jpg",
  "country": "Austria",
  "short_name": "SF",
  "field": "Psychology",
  "work": "Founded the field of psychoanalysis and developed theories on the unconscious mind and personality"
},
{
  "first_name": "Charles",
  "last_name": "Darwin",
  "photo_link": "https://en.wikipedia.org/wiki/Charles_Darwin#/media/File:Charles_Darwin_seated_crop.jpg",
  "country": "England",
  "short_name": "CD",
  "field": "Biology",
  "work": "Developed the theory of evolution through natural selection"
},
{
  "first_name": "Alexander",
  "last_name": "Fleming",
  "photo_link": "https://en.wikipedia.org/wiki/Alexander_Fleming#/media/File:Alexander_Fleming,_portrait_cropped.jpg",
  "country": "Scotland",
  "short_name": "AF",
  "field": "Microbiology",
  "work": "Discovered penicillin and made contributions to the field of antibiotics"
}
,
{
  "first_name": "Johannes",
  "last_name": "Kepler",
  "photo_link": "https://en.wikipedia.org/wiki/Johannes_Kepler#/media/File:Johannes_Kepler_2.jpg",
  "country": "Germany",
  "short_name": "JK",
  "field": "Astronomy and Mathematics",
  "work": "Developed laws of planetary motion and made contributions to the development of calculus"
},
{
  "first_name": "Blaise",
  "last_name": "Pascal",
  "photo_link": "https://en.wikipedia.org/wiki/Blaise_Pascal#/media/File:Blaise_Pascal_by_Robert_Nanteuil.jpg",
  "country": "France",
  "short_name": "BP",
  "field": "Mathematics and Physics",
  "work": "Developed the concept of the Pascal's Triangle and made contributions to the development of probability theory and hydrostatics"
},
{
  "first_name": "Nikola",
  "last_name": "Tesla",
  "photo_link": "https://en.wikipedia.org/wiki/Nikola_Tesla#/media/File:Nikola_Tesla_by_Napoleon_Sarony.jpg",
  "country": "Croatia",
  "short_name": "NT",
  "field": "Electrical Engineering",
  "work": "Made contributions to the development of alternating current and wireless communication"
}
,
{
  "first_name": "Alfred",
  "last_name": "Nobel",
  "photo_link": "https://en.wikipedia.org/wiki/Alfred_Nobel#/media/File:Alfred_Nobel.jpg",
  "country": "Sweden",
  "short_name": "AN",
  "field": "Chemistry and Physics",
  "work": "Invented dynamite and established the Nobel Prizes"
},
{
  "first_name": "Gregor",
  "last_name": "Mendel",
  "photo_link": "https://en.wikipedia.org/wiki/Gregor_Mendel#/media/File:Gregor_Mendel_1884.jpg",
  "country": "Czech Republic",
  "short_name": "GM",
  "field": "Genetics",
  "work": "Established the laws of inheritance through his experiments with pea plants"
},
{
  "first_name": "Thomas",
  "last_name": "Edison",
  "photo_link": "https://en.wikipedia.org/wiki/Thomas_Edison#/media/File:Thomas-Edison.jpg",
  "country": "United States",
  "short_name": "TE",
  "field": "Inventing",
  "work": "Invented the phonograph, motion picture camera, and incandescent light bulb"
}
,
{
  "first_name": "Louis",
  "last_name": "Pasteur",
  "photo_link": "https://en.wikipedia.org/wiki/Louis_Pasteur#/media/File:Louis_Pasteur_1885.jpg",
  "country": "France",
  "short_name": "LP",
  "field": "Microbiology",
  "work": "Discovered the principles of vaccination, microbial fermentation, and pasteurization"
},
{
  "first_name": "Alexander",
  "last_name": "Graham Bell",
  "photo_link": "https://en.wikipedia.org/wiki/Alexander_Graham_Bell#/media/File:Alexander_Graham_Bell.jpg",
  "country": "Scotland",
  "short_name": "AGB",
  "field": "Telecommunications",
  "work": "Invented the telephone"
},
{
  "first_name": "John",
  "last_name": "Dalton",
  "photo_link": "https://en.wikipedia.org/wiki/John_Dalton#/media/File:John_Dalton_by_John_Linnell.jpg",
  "country": "England",
  "short_name": "JD",
  "field": "Chemistry and Physics",
  "work": "Developed the modern atomic theory and made contributions to the understanding of color blindness"
},
{
  "first_name": "Marie",
  "last_name": "Javon",
  "photo_link": "https://en.wikipedia.org/wiki/Marie_Javon#/media/File:Marie_Javon_portrait.jpg",
  "country": "France",
  "short_name": "MJ",
  "field": "Biology",
  "work": "Discovered the role of mitochondria in the production of energy in cells"
},
{
  "first_name": "Jules",
  "last_name": "Verne",
  "photo_link": "https://en.wikipedia.org/wiki/Jules_Verne#/media/File:Jules_Verne_by_Gustave_Gaubert.jpg",
  "country": "France",
  "short_name": "JV",
  "field": "Science Fiction",
  "work": "Wrote pioneering science fiction novels including Around the World in Eighty Days and Twenty Thousand Leagues Under the Sea"
}
,{
  "first_name": "Isaac",
  "last_name": "Asimov",
  "photo_link": "https://en.wikipedia.org/wiki/Isaac_Asimov#/media/File:Isaac_Asimov_1987-09-20.jpg",
  "country": "Russia",
  "short_name": "IA",
  "field": "Chemistry and Science Fiction",
  "work": "Wrote popular science books and science fiction stories, and made contributions to the field of biochemistry"
},
{
  "first_name": "Stephen",
  "last_name": "Jay Gould",
  "photo_link": "https://en.wikipedia.org/wiki/Stephen_Jay_Gould#/media/File:Stephen_Jay_Gould.jpg",
  "country": "United States",
  "short_name": "SJG",
  "field": "Paleontology and Evolution",
  "work": "Wrote popular science books and made contributions to the fields of paleontology and evolutionary biology"
},
{
  "first_name": "Richard",
  "last_name": "Feynman",
  "photo_link": "https://en.wikipedia.org/wiki/Richard_Feynman#/media/File:Richard_Feynman_Nobel.jpg",
  "country": "United States",
  "short_name": "RF",
  "field": "Physics",
  "work": "Made contributions to the development of quantum electrodynamics and won the Nobel Prize in Physics"
}

  ]};
app.get('/',(req,res)=>{
   res.send(e[0])
})
app.get('/e',(req,res)=>{
    res.send(e.fields);
})
app.get('/api/:id/:type',(req,res)=>{
  const id=req.params.id;
  const type=req.params.type;
  const q=req.query.sort;
  res.send(`id: ${id} , type: ${q}`);
})
app.get('/s/:id',(req,res)=>{
  const id=req.params.id;
  const sci=e.scientists.find(c=>c.short_name===req.params.id.toUpperCase());
  console.log(sci);
  if (sci){
    res.send(sci);
  }
  else {
    res.send('Can\'t Find any scientist with this id');
  }
})


app.listen(port, () => {
  // Code.....
})