
export const locationData = [
  { id: 1, location: "Ambattur" },
  { id: 2, location: "Vadapalani" },
  { id: 3, location: "Kodambakkam" },
  { id: 4, location: "Mylapore" },
  { id: 5, location: "Navallur" },
];

export const theatersData = [
  {
    id: 1,
    theaterName: "RohiniCinemas",
    location: "Mylapore",
    movies: ["kanguava", "Jailer", "Pushpa2"],
  },
  {
    id: 2,
    theaterName: "KasiTheater",
    location: "kodambakkam",
    movies: ["Amaran", "kanguava"],
  },
  {
    id: 3,
    theaterName: "Murugan",
    location: "Ambattur",
    movies: ["Animal", "Jailer"],
  },
  {
    id: 4,
    theaterName: "Inox",
    location: "Vadapalani",
    movies: ["Pushpa2", "Amaran"],
  },
  {
    id: 5,
    theaterName: "PVR",
    location: "Navallur",
    movies: ["Animal", "Pushpa2"],
  },
];

export const moviesData = [
  { id: 1, moviename: "Amaran", theaters: ["KasiTheater", "Inox"] },
  { id: 2, moviename: "kanguava", theaters: ["RohiniCinemas", "KasiTheater"] },
  { id: 3, moviename: "Jailer", theaters: ["RohiniCinemas", "Murugan"] },
  { id: 4, moviename: "Pushpa2", theaters: ["RohiniCinemas", "Inox", "PVR"] },
  { id: 5, moviename: "Animal", theaters: ["Murugan", "PVR"] },
  { id: 6, moviename: "Pushpa2", theaters: ["RohiniCinemas", "Inox", "PVR"] },
];

export const seats = [
  { id: 1, number: "A1", available: true },
  { id: 2, number: "A2", available: true },
  { id: 3, number: "A3", available: true },
  { id: 4, number: "B1", available: true },
  { id: 5, number: "B2", available: true },
  { id: 6, number: "B3", available: true },
  { id: 7, number: "C1", available: true },
  { id: 8, number: "C2", available: true },
  { id: 9, number: "C3", available: true },
  { id: 10, number: "D1", available: false },
  { id: 11, number: "D2", available: false },
  { id: 12, number: "D3", available: false },
];
