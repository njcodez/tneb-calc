export interface Slab {
  upTo: number;
  rate: number;
  display: string;
}

export interface TariffCategory {
  below500: Slab[];
  above500: Slab[];
}

export const tariffs: {
  old: TariffCategory;
  new: TariffCategory;
} = {
  /* OLD CM */

  old: {
    /*
      BELOW 500 UNITS
    */

    below500: [
      {
        upTo: 100,
        rate: 0,
        display: "0 - 100 : Free",
      },

      {
        upTo: 200,
        rate: 2.35,
        display: "101 - 200 : ₹2.35 / unit",
      },

      {
        upTo: 400,
        rate: 4.7,
        display: "201 - 400 : ₹4.70 / unit",
      },

      {
        upTo: 500,
        rate: 6.3,
        display: "401 - 500 : ₹6.30 / unit",
      },
    ],

    /*
      ABOVE 500 UNITS
    */

    above500: [
      {
        upTo: 100,
        rate: 0,
        display: "0 - 100 : Free",
      },

      {
        upTo: 400,
        rate: 4.7,
        display: "101 - 400 : ₹4.70 / unit",
      },

      {
        upTo: 500,
        rate: 6.3,
        display: "401 - 500 : ₹6.30 / unit",
      },

      {
        upTo: 600,
        rate: 8.4,
        display: "501 - 600 : ₹8.40 / unit",
      },

      {
        upTo: 800,
        rate: 9.45,
        display: "601 - 800 : ₹9.45 / unit",
      },

      {
        upTo: 1000,
        rate: 10.5,
        display: "801 - 1000 : ₹10.50 / unit",
      },

      {
        upTo: Infinity,
        rate: 11.55,
        display: "1000+ : ₹11.55 / unit",
      },
    ],
  },

  /* NEW CM */

  new: {
    /*
      BELOW 500 UNITS
      0-200 FREE
    */

    below500: [
      {
        upTo: 200,
        rate: 0,
        display: "0 - 200 : Free",
      },

      {
        upTo: 400,
        rate: 4.7,
        display: "201 - 400 : ₹4.70 / unit",
      },

      {
        upTo: 500,
        rate: 6.3,
        display: "401 - 500 : ₹6.30 / unit",
      },
    ],

    /*
      ABOVE 500 UNITS
      SAME AS OLD
    */

    above500: [
      {
        upTo: 100,
        rate: 0,
        display: "0 - 100 : Free",
      },

      {
        upTo: 400,
        rate: 4.7,
        display: "101 - 400 : ₹4.70 / unit",
      },

      {
        upTo: 500,
        rate: 6.3,
        display: "401 - 500 : ₹6.30 / unit",
      },

      {
        upTo: 600,
        rate: 8.4,
        display: "501 - 600 : ₹8.40 / unit",
      },

      {
        upTo: 800,
        rate: 9.45,
        display: "601 - 800 : ₹9.45 / unit",
      },

      {
        upTo: 1000,
        rate: 10.5,
        display: "801 - 1000 : ₹10.50 / unit",
      },

      {
        upTo: Infinity,
        rate: 11.55,
        display: "1000+ : ₹11.55 / unit",
      },
    ],
  },
};