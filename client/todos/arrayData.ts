export interface IArrayData {
  name: string
}
export const arrayState = [
  {
    "name": "Совпадений не найденно"
  }
]
const arrayData = [
  {
    "name": "Turkey"
  },
  {
    "name": "Colombia"
  },
  {
    "name": "Fiji"
  },
  {
    "name": "Viet Nam"
  },
  {
    "name": "Cocos (Keeling Islands)"
  },
  {
    "name": "Nepal"
  },
  {
    "name": "Estonia"
  },
  {
    "name": "Denmark"
  },
  {
    "name": "Romania"
  },
  {
    "name": "Korea (North)"
  },
  {
    "name": "Thailand"
  },
  {
    "name": "Belarus"
  },
  {
    "name": "Bermuda"
  },
  {
    "name": "Vanuatu"
  },
  {
    "name": "Nicaragua"
  },
  {
    "name": "Brazil"
  },
  {
    "name": "Macedonia"
  },
  {
    "name": "Lithuania"
  },
  {
    "name": "Nauru"
  },
  {
    "name": "Panama"
  },
  {
    "name": "Myanmar"
  },
  {
    "name": "Western Sahara"
  },
  {
    "name": "Vatican City State (Holy See)"
  },
  {
    "name": "Algeria"
  },
  {
    "name": "Japan"
  },
  {
    "name": "Hong Kong"
  },
  {
    "name": "Pakistan"
  },
  {
    "name": "Sao Tome and Principe"
  },
  {
    "name": "Congo"
  },
  {
    "name": "Gibraltar"
  },
  {
    "name": "Guyana"
  },
  {
    "name": "Sweden"
  },
  {
    "name": "Niue"
  },
  {
    "name": "France, Metropolitan"
  },
  {
    "name": "Bosnia and Herzegovina"
  },
  {
    "name": "Nigeria"
  },
  {
    "name": "Russian Federation"
  },
  {
    "name": "Ecuador"
  },
  {
    "name": "Guinea"
  },
  {
    "name": "Cameroon"
  },
  {
    "name": "Samoa"
  },
  {
    "name": "Puerto Rico"
  },
  {
    "name": "Zambia"
  },
  {
    "name": "Grenada"
  },
  {
    "name": "Swaziland"
  },
  {
    "name": "Falkland Islands (Malvinas)"
  },
  {
    "name": "Papua New Guinea"
  },
  {
    "name": "Monaco"
  },
  {
    "name": "Togo"
  },
  {
    "name": "Austria"
  },
  {
    "name": "Zaire"
  },
  {
    "name": "Anguilla"
  },
  {
    "name": "Maldives"
  },
  {
    "name": "Cayman Islands"
  },
  {
    "name": "S. Georgia and S. Sandwich Isls."
  },
  {
    "name": "Norfolk Island"
  },
  {
    "name": "Philippines"
  },
  {
    "name": "American Samoa"
  },
  {
    "name": "Brunei Darussalam"
  },
  {
    "name": "Paraguay"
  },
  {
    "name": "Tanzania"
  },
  {
    "name": "Czech Republic"
  },
  {
    "name": "Madagascar"
  },
  {
    "name": "Armenia"
  },
  {
    "name": "Seychelles"
  },
  {
    "name": "Saint Kitts and Nevis"
  },
  {
    "name": "British Indian Ocean Territory"
  },
  {
    "name": "Solomon Islands"
  },
  {
    "name": "Malawi"
  },
  {
    "name": "Peru"
  }
]

function sort(a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
}
let a, b;
arrayData.sort(sort);
export {arrayData};