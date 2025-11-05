const covidData = {
    "male": {
        "<20": 0.00001,
        "20-29": 0.00007,
        "30-39": 0.0003,
        "40-49": 0.0006,
        "50-59": 0.002,
        "60-69": 0.01,
        "70-79": 0.029,
        "80+": 0.132,
        "overall": 0.006
    },
    "female": {
        "<20": 0.00001,
        "20-29": 0.00007,
        "30-39": 0.0001,
        "40-49": 0.0004,
        "50-59": 0.002,
        "60-69": 0.006,
        "70-79": 0.017,
        "80+": 0.054,
        "overall": 0.004
    },
    "overall": {
        "<20": 0.00001,
        "20-29": 0.00007,
        "30-39": 0.0002,
        "40-49": 0.0005,
        "50-59": 0.002,
        "60-69": 0.008,
        "70-79": 0.022,
        "80+": 0.083,
        "overall": 0.005
    }
};

const microDataRaw = {
    "Activity": {
        "1": "the first day of life in the UK",
        "2": "army in France",
        "3": "murders in France",
        "4": "murders in the USA",
        "5": "scuba diving",
        "6": "skiing",
        "7": "skydiving",
        "8": "marathon",
        "9": "base-jumping",
        "10": "Mt. Everest",
        "11": "ecstasy",
        "12": "babies",
        "13": "motorbike",
        "14": "walk",
        "15": "bicycle",
        "16": "car",
        "17": "plane",
        "18": "train",
        "19": "wine",
        "20": "tobacco",
        "21": "living with a smoker",
        "22": "charcoal-broiled beef",
        "23": "Russian roulette"
    },
    "Micromorts": {
        "1": "430",
        "2": "205.9",
        "3": "12.3",
        "4": "48",
        "5": "5",
        "6": "0.7",
        "7": "8",
        "8": "7",
        "9": "430",
        "10": "39427",
        "11": "6",
        "12": "120",
        "13": "0.1030927835",
        "14": "0.03703703704",
        "15": "0.0625",
        "16": "0.002702702703",
        "17": "0.000625",
        "18": "0.0001035625518",
        "19": "1",
        "20": "0.7142857143",
        "21": "0.5",
        "22": "0.01",
        "23": "166666"
    },
    "unit": {
        "1": "days",
        "2": "years",
        "3": "years",
        "4": "years",
        "5": "dives",
        "6": "days",
        "7": "jumps",
        "8": "runs",
        "9": "jumps",
        "10": "ascents",
        "11": "tablets",
        "12": "deliveries",
        "13": "km",
        "14": "km",
        "15": "km",
        "16": "km",
        "17": "km",
        "18": "km",
        "19": "liters",
        "20": "cigarettes",
        "21": "month",
        "22": "steaks",
        "23": "rounds"
    },
    "probas": {
        "1": 0.00043,
        "2": 0.0002059,
        "3": 0.0000123,
        "4": 0.000048,
        "5": 0.000005,
        "6": 0.0000007,
        "7": 0.000008,
        "8": 0.000007,
        "9": 0.00043,
        "10": 0.039427,
        "11": 0.000006,
        "12": 0.00012,
        "13": 0.0000001031,
        "14": 0.000000037,
        "15": 0.0000000625,
        "16": 0.0000000027,
        "17": 0.0000000006,
        "18": 0.0000000001,
        "19": 0.000001,
        "20": 0.0000007143,
        "21": 0.0000005,
        "22": 0.00000001,
        "23": 0.166666
    }
};

const microData = Object.keys(microDataRaw.Activity).map(key => ({
    Activity: microDataRaw.Activity[key],
    Micromorts: parseFloat(microDataRaw.Micromorts[key]),
    unit: microDataRaw.unit[key],
    probas: microDataRaw.probas[key]
}));


function formatPercent(x, at_least = 2) {
    let precision = at_least;
    if (x > 0) {
        precision = Math.max(at_least, Math.floor(-Math.log10(x)) - 1);
    }
    return (x * 100).toFixed(precision) + '%';
}

function genResultList(age, sex) {
    const covid_p = covidData[sex][age];

    const microDataWithRatio = microData.map(d => ({
        ...d,
        ratio: covid_p / d.probas
    }));
    microDataWithRatio.sort((a, b) => a.probas - b.probas);

    const res_list = microDataWithRatio.map(row => {
        let ratioStr;
        if (row.ratio > 10) {
            ratioStr = Math.round(row.ratio).toLocaleString();
        } else {
            ratioStr = row.ratio.toPrecision(2);
        }
        return `${ratioStr} ${row.unit} of ${row.Activity}`;
    });

    const proba = formatPercent(covid_p, 2);
    return {
        res_list,
        proba
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const ageSelect = document.getElementById('age_select');
    const sexSelect = document.getElementById('sex_select');
    const form = document.getElementById('calc-form');
    const resultsDiv = document.getElementById('results');

    const ages = Object.keys(covidData.male);
    const sexes = Object.keys(covidData);

    ages.forEach(age => {
        const option = document.createElement('option');
        option.value = age;
        option.textContent = age;
        ageSelect.appendChild(option);
    });

    sexes.forEach(sex => {
        const option = document.createElement('option');
        option.value = sex;
        option.textContent = sex;
        sexSelect.appendChild(option);
    });

    function calculateAndShowResults() {
        const age = ageSelect.value;
        const sex = sexSelect.value;

        if (!age || !sex) {
            resultsDiv.style.display = 'none';
            return;
        }

        const {
            res_list,
            proba
        } = genResultList(age, sex);

        resultsDiv.innerHTML = `
            <b>Infection fatality rate (IFR) for ${age}, ${sex}</b>:

            <div class="banner">If you get infected, your probability of dying is <b>${proba}</b>.
            </div>

            <b>This is roughly as bad as:</b>
            ${res_list.map(a_res => `<p>${a_res}</p>`).join('')}

            <div class="container">
                <b>Data sources</b>
                <p>
                    Covid-19 from <a href="https://hal-pasteur.archives-ouvertes.fr/pasteur-02548181">Pasteur Institute</a>.
                    <a href="./static/covid_json.json"> Data</a>.
                </p>
                <p>
                    Other activities from <a href="https://en.wikipedia.org/wiki/Micromort">wikipedia</a>. <a href="./static/micro_json.json"> Data</a>.
                </p>
            </div>

            <div class="container">
                <b>Notes</b>

                <p>Goal: estimate risk levels to make post-lockdown decisions. For instance if someone is fine with skydiving on a monthly basis, will he be fine going to a music festival where there are chances to get infected?
                </p>

                <p>Disclaimer: the risk of hospitalisation in intensive care should be considered for covid-19.</p>

                <p>Disclaimer: infection fatality rate (the probability of death after an infection) is hard to estimate.</p>

                <p>Studies rely on limited data, make assumptions, and give different results. Pasteur Institute provides an age/sex breakdown and gives "typical" IFRs. Estimations from other studies can be as much as 3 times larger or lower. See
                    <a href="https://docs.google.com/spreadsheets/u/0/d/16onEUBWIV5IqN1RCvTlad1jnQZ9W7p_P_yS-0D6j1-8">here</a> and
                    <a href="https://docs.google.com/spreadsheets/d/1zC3kW1sMu0sjnT_vP1sh4zL0tF6fIHbA6fcG5RQdqSc/edit?fbclid=IwAR23hDbmyNd2k4wIsZ3AUl4LQxb6ZmDrknz3ZInWMBx7YovtiYeH8p4On38#gid=0">there</a> for other studies.
                </p>

                <p>Disclaimer: probabilities are relevant to the entire demographic group. But individual situations will vary a lot within a group. For instance presence or absence of comorbidity could have a 10x/0.1x impact.
                </p>
            </div>
        `;
        resultsDiv.style.display = 'block';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateAndShowResults();
    });

    // Also calculate on change
    ageSelect.addEventListener('change', calculateAndShowResults);
    sexSelect.addEventListener('change', calculateAndShowResults);
});
