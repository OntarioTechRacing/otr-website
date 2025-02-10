export const pageInfoData = [
  {
    title: {
      titleName: "OTR F24",
      titleImage: "../images/carImages/2024/OTR-24-car-image.png",
      //get tag line
      tagLine: "placed 52nd",
    },
    titleSpecs: {
      Frame: "Tubular Spaced Frame",
      BodyMaterial: "4130 Steel",
      Motor: "Emrax 208 HV",
      TopSpeed: "164km/h",
      PeakPower: "86kW",
      Acceleration: "0 - 100km/h in ~4 sec",
    },
    background: {
      //get background info
      backgroundInfo: `
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece ofclassical Latin literature from 45 BC, making
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes fro10.32`,
      backgroundImage: "../images/carImages/2024/background-image.jpg",
    },
    //get team members
    team: [
      ["Omar Ibrahim", "Vehicle Dynamics/Suspension "],
      ["Fiona Kirby", "Aerodynamics"],
      ["Maya Edison", "Business & Operations"],
      ["Joseph Caruana", "Embedded Software"],
      ["Israel Ogunmola", "Aerodynamics"],
      ["Fayez Ahmed", "Embedded Software"],
      ["Alvin Huynh", "Embedded Software"],
      ["Anthony Martin ", "Electric Drivetrain"],
      ["Deep Mistry", "Electric Drivetrain/Braking"],
      ["Timothy Down", "Electric Drivetrain"],
      ["Luz Yanguez", "Electric Drivetrain"],
      ["Ethan Richardson", "Electric Drivetrain"],
      ["Aysha Mohmand", "Hardware and Electronics"],
      ["Kaushik Krishnakumar Raman", "Hardware and Electronics"],
      ["Maria Peregoudov", "Manufacturing"],
      ["Mihai Marian", "Suspension"],
    ],
    Competition: {
      competitionName: "Formula SAE Electric",
      competitionLocation: "Michigan Int'l Speedway in Brooklyn, Michigan",
      competitionDate: "June 12 - 15 2024",
      competitionImage: "../images/carImages/2024/comp-image.png",
      placement: "52nd",
    },
    //get specs
    // specifications: [
    //   {
    //     spec: "Motor",
    //     value: "Emrax 208",
    //     image: "../images/spec-images/2022/ermax1-nobg.png",
    //   },
    //   { spec: "Power", value: "Peak 80kW" },
    //   { spec: "Torque", value: "Peak 140Nm" },
    // ],
    specs: [
      {
        name: "Accumulator Battery",
        desc: "X Samsung 40T Li-Ion 21700 cells",
        image: "../images/spec-images/2024/otr-batteries.png",
      },
      {
        name: "Battery Management System",
        desc: "Energus TinyBMS s516 v2.1 Telemetry",
        image: "../images/spec-images/2024/bms.png",
      },
      {
        name: "Chassis",
        desc: "4130 Steel Tubular Spaced Frame",
        image: "../images/spec-images/2024/otr-chassis.png",
      },
      {
        name: "Damper",
        desc: "Ohlins TTX25 MkII",
        image: "../images/spec-images/2024/otr-damper.png",
      },
      {
        name: "Differential",
        desc: "Drexler FS2010 LSD",
        image: "../images/spec-images/2024/otr-differential.png",
      },
      {
        name: "Electronic Control Unit",
        desc: "Dana TM4 Neuro 200",
        image: "../images/spec-images/2024/ECU-dana.png",
      },
      {
        name: "Motor Controller",
        desc: "Rinehart PM100DX",
        image: "../images/spec-images/2024/otr-motorcontroller.png",
      },
      {
        name: "Tires",
        desc: "18 x 6.0-10 Hoosier R25B",
        image: "../images/spec-images/2024/otrtire.png",
      },
    ],
    slideshow: [
      "../images/carImages/2024/slideshow-6.jpg",
      "../images/carImages/2024/slideshow-1.jpg",
      "../images/carImages/2024/slideshow-2.png",
      "../images/carImages/2024/slideshow-3.png",
      "../images/carImages/2024/slideshow-4.png",
      "../images/carImages/2024/slideshow-5.jpg",
      "../images/carImages/2024/slideshow-7.jpg",
    ],
  },
  {
    title: {
      titleName: "OTR F2022",
      titleImage: "../images/carImages/2022/titleimage.png",
      tagLine: "'Zippy' LEGACY VEHICLE",
    },
    background: {
      backgroundInfo: `
      Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece ofclassical Latin literature from 45 BC, making
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes fro10.32`,
      backgroundImage: "../images/carImages/2022/background-image.jpg",
    },
    team: [
      ["member", "Dep1"],
      ["member", "Dep1"],
      ["member", "Dep1"],
      ["member", "Dep1"],
    ],
    Competition: {
      competitionName: "Formula SAE Electric",
      competitionLocation: "Michigan Int'l Speedway in Brooklyn, Michigan",
      competitionDate: "June 15 - 18, 2024",
      competitionImage: "../images/carImages/2022/comp-image.jpg",
      placement: "31st",
    },
    specifications: [
      {
        spec: "Motor",
        value: "Emrax 208",
        image: "../images/spec-images/2022/ermax1-nobg.png",
      },
      { spec: "Power", value: "Peak 80kW" },
      { spec: "Torque", value: "Peak 140Nm" },
    ],
    slideshow: [
      "../images/carImages/2022/slideshow-1.jpg",
      "../images/carImages/2022/slideshow-2.jpg",
      "../images/carImages/2022/slideshow-3.jpg",
      "../images/carImages/2022/slideshow-4.jpg",
      "../images/carImages/2022/slideshow-5.jpg",
      "../images/carImages/2022/slideshow-6.jpg",
      "../images/carImages/2022/slideshow-7.jpg",
    ],
  },
];
