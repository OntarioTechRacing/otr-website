const sponsors = {
    Diamond:
    [
        {
            name: "Otu", 
            website: "https://ontariotechu.ca/", 
            img: "../images/sponsersLogos/otu-logo.png"
        },

        { 
            name: 'Ace', 
            website: 'https://ontariotechu.ca/about/campus-buildings/north-oshawa/ace.php', 
            img: '../images/sponsersLogos/ACE_logo.png'
        },
    ], 

    Platinum:
    [
        {
            name: 'Multimatic', 
            website: 'https://www.multimatic.com/', 
            img: '../images/sponsersLogos/multimatic_Logo.PNG'

        },
        {
            name: 'Source PMM', 
            website: 'https://www.sourcepmm.com/', 
            img: '../images/sponsersLogos/source_pmm.png'
        }
    ], 

    Gold: 
    [
        {
            name: 'Batemo', 
            website: 'https://www.batemo.com/', 
            img: '../images/sponsersLogos/batemo_Logo.png'

        }, 
        {
            name: 'Cadence', 
            website: 'https://www.cadence.com/en_US/home.html', 
            img: '../images/sponsersLogos/cadence_Logo.png'

        }, 
        {
            name: 'Lemo', 
            website: ' https://www.lemo.com/en', 
            img: '../images/sponsersLogos/lemo_Logo.png'

        }, 
        {
            name: 'Michigan Scientific Corp', 
            website: ' https://www.michsci.com/', 
            img: '../images/sponsersLogos/Michiganwhite.png'

        }, 
        {
            name: 'ESAB', 
            website: 'https://esab.com/ca/nam_en/', 
            img: '../images/sponsersLogos/esab.png'

        }, 

        {
            name: 'Mach 2 Waterjet Cutting Services', 
            website: 'https://www.mach2waterjet.ca/', 
            img: '../images/sponsersLogos/Mach2_Logo.png'

        }, 

    ],

    Silver:
    [
        {
            name: 'VI-Grade', 
            website: 'https://www.vi-grade.com/', 
            img: '../images/sponsersLogos/vi-grade_Logo.png'

        }, 
        {
            name: 'Sunstone', 
            website: 'https://www.sunstonewelders.com/', 
            img: '../images/sponsersLogos/Sunstone_Logo.png'
        }, 
        {
            name: 'Gene Haas Foundation', 
            website: 'https://www.ghaasfoundation.org', 
            img: '../images/sponsersLogos/Genehas.png'
        }, 

        {
            name: 'Tasking', 
            website: 'https://www.tasking.com/', 
            img: '../images/sponsersLogos/tasking_Logo.png'

        }, 
        {
            name: 'Swagelok', 
            website: 'https://www.swagelok.com/en', 
            img: '../images/sponsersLogos/swagelok_Logo.png'

        }, 
        {
            name: 'Tailscale', 
            website: 'https://tailscale.com/', 
            img: '../images/sponsersLogos/tailscale-logo.png'

        }, 

    ], 
    Bronze:
    [
        {
            name: 'MTB Transit Solutions', 
            website: 'https://mtbtransitsolutions.com/', 
            img: '../images/sponsersLogos/MTB_Transit_Solutions_Logo.png'
        }, 
        {
            name: 'Kvaser', 
            website: 'https://kvaser.com/', 
            img: '../images/sponsersLogos/kvaser_Logo.png'
        }, 

        {
            name: 'Rapid Harness', 
            website: 'https://rapidharness.com/', 
            img: '../images/sponsersLogos/rapidHarness_Logo.png'
        }, 
        {
            name: 'FibreGlass Unlimited', 
            website: 'https://www.fiberglassunlimited.ca/', 
            img: '../images/sponsersLogos/fiberglass_Unlimited_Logo.png'
        }, 
        {
            name: 'PCBLibraries', 
            website: 'https://www.pcblibraries.com/', 
            img: '../images/sponsersLogos/PCB_Libraries_Logo.png'
        }, 
        {
            name: 'Bender', 
            website: 'https://www.bender.de/en/', 
            img: '../images/sponsersLogos/bender_Logo.png'
        }, 
        {
            name: 'Marple', 
            website: 'https://www.marpledata.com/', 
            img: '../images/sponsersLogos/marple_Logo.png'
        }, 
        {
            name: 'Guyaki - Yerba Mate', 
            website: 'https://guayaki.com/', 
            img: '../images/sponsersLogos/guyaki_Logo.png'
        }, 
        {
            name: 'Altiar', 
            website: 'https://altair.com/', 
            img: '../images/sponsersLogos/altair_logo.png'
        }, 

        {
            name: 'DANA TM4', 
            website: 'https://www.danatm4.com/', 
            img: '../images/dana.png'
        }, 
        
        {
            name: 'Ontario Tech Steer', 
            website: 'https://engineering.ontariotechu.ca/steer/index.php', 
            img: '../images/sponsersLogos/steer_group.png'
        }, 
    ], 
    General:
    [
        {
            name: 'United Eastern Central Ontario Welders association', 
            website: 'https://www.ualocal401.ca/', 
            img: "../images/sponsersLogos/united401_Logo.png"
        }, 
        {
            name: 'Digikey', 
            website: 'https://www.digikey.ca/', 
            img: '../images/sponsersLogos/digikey.png'
        }
    ]
}

const createLogo=(sponsors)=>
    `
    <div class="sponsor-logos"> 
        <a class="diamond logos" href="${sponsors.website}" target="_blank" rel="noopener noreferrer" > 
        <img src="${sponsors.img}" alt="${sponsors.name} logo">
        </a>
    </div>`
;


const createLogoSection = (tier, sponsors)=>{
    return `
         <h2 class="sponsers-logo-text">${tier} Sponsors</h2>
         <div class="${tier}-divider"></div>
        <div class="sponsorship">
            ${sponsors.map(createLogo).join("")}
        </div>
    `
}

const sponsorsContainer = document.getElementById("sponsors")
for (const[tier, sponsorArray] of Object.entries(sponsors)){
    sponsorsContainer.innerHTML+=createLogoSection(tier, sponsorArray);
}
