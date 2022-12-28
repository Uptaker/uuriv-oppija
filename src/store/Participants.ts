export interface Participant {
  name: string,
  role: {
    et: string,
    en: string,
  }
}

export const participants: Participant[] = [
  {name: 'Merike Saar', role: {et: 'Juhendaja', en: 'Instructor'}},
  {name: 'Anu Tammeleht', role: {et: 'Juhendaja', en: 'Instructor'}},
  {name: 'Laivi Hallasoo', role: {et: 'Infoteadus', en: 'Information Science'}},
  {name: 'Meelika Kiil', role: {et: 'Eesti filoloogia', en: 'Estonian'}},
  {name: 'Kristi Malk', role: {et: 'Tervisejuhtimine', en: 'Health Management'}},
  {name: 'Meelika Meenov', role: {et: 'IT-juhtimine', en: 'IT Management'}},
  {name: 'Ken Pikanõmme', role: {et: 'Informaatika', en: 'Computer Studies'}},
  {name: 'Hanna Anett Peiel', role: {et: 'Eripedagoogika', en: 'Special Education'}},
  {name: 'Marilii Saar', role: {et: 'Informaatika', en: 'Computer Studies'}},
  {name: 'Terje Tamm', role: {et: 'Psühholoogia', en: 'Psychology'}},
  {name: 'Markus Tammeoja', role: {et: 'Informaatika', en: 'Computer Studies'}},
  {name: 'Ingel Iris Tofert', role: {et: 'Matemaatika', en: 'Mathematics'}},
  {name: 'Anne-Ly Vips', role: {et: 'Klassiõpetaja', en: 'Classroom Teacher'}},
  {name: 'Grete Väljaots', role: {et: 'Aasia uuringud', en: 'Asian Studies'}}
]