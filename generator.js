const nab = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const greet = () => {
  if (Math.random() > 0.5) {
    const adjective = ['an awesome', 'a fantastic', 'a super']
    const day = ['Monday', 'weekend', 'day']
    return `Hope you're having ${nab(adjective)} ${nab(day)}!`
  }
  return nab(['So awesome to e-meet you!', 'Super-pumped to meet you!'])
}

const intro = () => {
  const comp = nab(['company', 'employer', 'startup'])
  const namePt1 = nab([
    'Box', 'Waste', 'Garbage', 'Xyz', 'Deep', 'Atom', 'Square'
  ])
  const namePt2 = nab([
    '.ai', 'Cube', 'Box', 'able'
  ])
  const adj = nab([
    'blockchain-enabled',
    'deep learning-powered',
    'de-centralized',
    'scalable',
    'AI-infused',
    'sharing economy-inspired'
  ])
  const co = nab([
    'Enron',
    'Juicero',
    'Theranos',
    'Zenefits',
    'Pets.com',
    'Lehman Brothers'
  ])
  const amt = nab([
    '$10M in our series F',
    '$1M in our seed round',
    'millions',
    '50 gold doubloons',
    '103 DogeCoin',
    '$50M in our series C',
    '$600k on KickStarter',
    '660 $100 Amazon gift cards'
  ])
  const change = nab([
    'smart watches',
    'day spas',
    'meditation retreats',
    'EDM festivals',
    'hangover cures',
    'maritime piracy',
    'down jackets',
    'succulent gardens'
  ])
  const impact = nab([
    'to change the world of',
    'to design the future of',
    'to re-design the boundaries of',
    'to push the limits of'
  ])
  return `My ${comp} ${namePt1 + namePt2}, a ${adj} ${co}, has just raised ${amt} ` +
     `${impact} ${change}.`
}

const flatter = () => {
  const perhapsWith = nab([
    'Given your extensive experience in',
    'Based on your impressive skills with',
    'With your considerable talents in',
    'Amazed by your knowledge of'
  ])
  const skillOne = nab([
    'PHP',
    'the Microsoft Office suite',
    'MS Paint',
    'Notepad',
    'SEO',
    'beatmaking',
    'jQuery',
    'data mining',
    'A/B testing'
  ])
  const skillTwo = nab([
    'viral marketing',
    'growth hacking',
    'hypergrowth',
    'copy-editing',
    'user interface design',
    'user research'
  ])
  const role = nab([
    'Head of East Coast Operations',
    'VP of Growth Science',
    'Head of Unicorn Husbandry',
    'Head of APAC Growth',
    'In-House Tea Specialist'
  ])
  const suggest = nab([
    'let\'s discuss your potential future as our',
    'I think you\'d be a great fit for our',
    'we think you should join our stellar team as its',
    'I think you\'d make an incredible addition to our team as its'
  ])
   return `\n\n${perhapsWith} ${skillOne} and ${skillTwo}, ${suggest} ${role}.`
}

const dip = () => {
  const suggest = nab([
    'Let\'s',
    'How about we',
  ])
  const way = nab([
    'hop on the phone',
    'grab coffee',
  ])
  const toChat = nab([
    'to discuss',
    'and chat some more',
    'and talk further'
  ])
  const time = nab([
    'how\'s',
    'would you have time on '
  ])
  const day = nab([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ])
  return `${suggest} ${way} ${toChat}&#8212;${time} ${day}?`
}

const clown = () => {
  const signature = nab([
    'Regards,',
    'Best,',
    'Cheers,',
    'Have a good one!'
  ])
  const name = nab([
    'Todd',
    'Noah',
    'Drew',
    'Matt',
    'Brian'
  ])
  return `\n\n${signature}\n${name}`
}

const hello = (name) => {
  const salutation = nab([
    'Hi ',
    'Hello ',
    'Hey ',
    '',
  ])
  return `${salutation}${name},\n\n`
}

const generateMsg = (name = '') => {
  if (name.length > 1) {
    return [hello(name), greet(), intro(), flatter(), dip(), clown()].join(' ')
  }
  return [greet(), intro(), flatter(), dip(), clown()].join(' ')
}
