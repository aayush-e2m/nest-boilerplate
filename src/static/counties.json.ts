const countriesJSON = [
  {
    name: 'Afghanistan',
    phonecode: '93',
    sortname: 'AF',
  },
  {
    name: 'Aland Islands',
    phonecode: '358',
    sortname: 'AX',
  },
  {
    name: 'Albania',
    phonecode: '355',
    sortname: 'AL',
  },
  {
    name: 'Algeria',
    phonecode: '213',
    sortname: 'DZ',
  },
  {
    name: 'AmericanSamoa',
    phonecode: '1684',
    sortname: 'AS',
  },
  {
    name: 'Andorra',
    phonecode: '376',
    sortname: 'AD',
  },
  {
    name: 'Angola',
    phonecode: '244',
    sortname: 'AO',
  },
  {
    name: 'Anguilla',
    phonecode: '1264',
    sortname: 'AI',
  },
  {
    name: 'Antarctica',
    phonecode: '672',
    sortname: 'AQ',
  },
  {
    name: 'Antigua and Barbuda',
    phonecode: '1268',
    sortname: 'AG',
  },
  {
    name: 'Argentina',
    phonecode: '54',
    sortname: 'AR',
  },
  {
    name: 'Armenia',
    phonecode: '374',
    sortname: 'AM',
  },
  {
    name: 'Aruba',
    phonecode: '297',
    sortname: 'AW',
  },
  {
    name: 'Australia',
    phonecode: '61',
    sortname: 'AU',
  },
  {
    name: 'Austria',
    phonecode: '43',
    sortname: 'AT',
  },
  {
    name: 'Azerbaijan',
    phonecode: '994',
    sortname: 'AZ',
  },
  {
    name: 'Bahamas',
    phonecode: '1242',
    sortname: 'BS',
  },
  {
    name: 'Bahrain',
    phonecode: '973',
    sortname: 'BH',
  },
  {
    name: 'Bangladesh',
    phonecode: '880',
    sortname: 'BD',
  },
  {
    name: 'Barbados',
    phonecode: '1246',
    sortname: 'BB',
  },
  {
    name: 'Belarus',
    phonecode: '375',
    sortname: 'BY',
  },
  {
    name: 'Belgium',
    phonecode: '32',
    sortname: 'BE',
  },
  {
    name: 'Belize',
    phonecode: '501',
    sortname: 'BZ',
  },
  {
    name: 'Benin',
    phonecode: '229',
    sortname: 'BJ',
  },
  {
    name: 'Bermuda',
    phonecode: '1441',
    sortname: 'BM',
  },
  {
    name: 'Bhutan',
    phonecode: '975',
    sortname: 'BT',
  },
  {
    name: 'Bolivia, Plurinational State of',
    phonecode: '591',
    sortname: 'BO',
  },
  {
    name: 'Bosnia and Herzegovina',
    phonecode: '387',
    sortname: 'BA',
  },
  {
    name: 'Botswana',
    phonecode: '267',
    sortname: 'BW',
  },
  {
    name: 'Brazil',
    phonecode: '55',
    sortname: 'BR',
  },
  {
    name: 'British Indian Ocean Territory',
    phonecode: '246',
    sortname: 'IO',
  },
  {
    name: 'Brunei Darussalam',
    phonecode: '673',
    sortname: 'BN',
  },
  {
    name: 'Bulgaria',
    phonecode: '359',
    sortname: 'BG',
  },
  {
    name: 'Burkina Faso',
    phonecode: '226',
    sortname: 'BF',
  },
  {
    name: 'Burundi',
    phonecode: '257',
    sortname: 'BI',
  },
  {
    name: 'Cambodia',
    phonecode: '855',
    sortname: 'KH',
  },
  {
    name: 'Cameroon',
    phonecode: '237',
    sortname: 'CM',
  },
  {
    name: 'Canada',
    phonecode: '1',
    sortname: 'CA',
  },
  {
    name: 'Cape Verde',
    phonecode: '238',
    sortname: 'CV',
  },
  {
    name: 'Cayman Islands',
    phonecode: ' 345',
    sortname: 'KY',
  },
  {
    name: 'Central African Republic',
    phonecode: '236',
    sortname: 'CF',
  },
  {
    name: 'Chad',
    phonecode: '235',
    sortname: 'TD',
  },
  {
    name: 'Chile',
    phonecode: '56',
    sortname: 'CL',
  },
  {
    name: 'China',
    phonecode: '86',
    sortname: 'CN',
  },
  {
    name: 'Christmas Island',
    phonecode: '61',
    sortname: 'CX',
  },
  {
    name: 'Cocos (Keeling) Islands',
    phonecode: '61',
    sortname: 'CC',
  },
  {
    name: 'Colombia',
    phonecode: '57',
    sortname: 'CO',
  },
  {
    name: 'Comoros',
    phonecode: '269',
    sortname: 'KM',
  },
  {
    name: 'Congo',
    phonecode: '242',
    sortname: 'CG',
  },
  {
    name: 'Congo, The Democratic Republic of the Congo',
    phonecode: '243',
    sortname: 'CD',
  },
  {
    name: 'Cook Islands',
    phonecode: '682',
    sortname: 'CK',
  },
  {
    name: 'Costa Rica',
    phonecode: '506',
    sortname: 'CR',
  },
  {
    name: "Cote d'Ivoire",
    phonecode: '225',
    sortname: 'CI',
  },
  {
    name: 'Croatia',
    phonecode: '385',
    sortname: 'HR',
  },
  {
    name: 'Cuba',
    phonecode: '53',
    sortname: 'CU',
  },
  {
    name: 'Cyprus',
    phonecode: '357',
    sortname: 'CY',
  },
  {
    name: 'Czech Republic',
    phonecode: '420',
    sortname: 'CZ',
  },
  {
    name: 'Denmark',
    phonecode: '45',
    sortname: 'DK',
  },
  {
    name: 'Djibouti',
    phonecode: '253',
    sortname: 'DJ',
  },
  {
    name: 'Dominica',
    phonecode: '1767',
    sortname: 'DM',
  },
  {
    name: 'Dominican Republic',
    phonecode: '1849',
    sortname: 'DO',
  },
  {
    name: 'Ecuador',
    phonecode: '593',
    sortname: 'EC',
  },
  {
    name: 'Egypt',
    phonecode: '20',
    sortname: 'EG',
  },
  {
    name: 'El Salvador',
    phonecode: '503',
    sortname: 'SV',
  },
  {
    name: 'Equatorial Guinea',
    phonecode: '240',
    sortname: 'GQ',
  },
  {
    name: 'Eritrea',
    phonecode: '291',
    sortname: 'ER',
  },
  {
    name: 'Estonia',
    phonecode: '372',
    sortname: 'EE',
  },
  {
    name: 'Ethiopia',
    phonecode: '251',
    sortname: 'ET',
  },
  {
    name: 'Falkland Islands (Malvinas)',
    phonecode: '500',
    sortname: 'FK',
  },
  {
    name: 'Faroe Islands',
    phonecode: '298',
    sortname: 'FO',
  },
  {
    name: 'Fiji',
    phonecode: '679',
    sortname: 'FJ',
  },
  {
    name: 'Finland',
    phonecode: '358',
    sortname: 'FI',
  },
  {
    name: 'France',
    phonecode: '33',
    sortname: 'FR',
  },
  {
    name: 'French Guiana',
    phonecode: '594',
    sortname: 'GF',
  },
  {
    name: 'French Polynesia',
    phonecode: '689',
    sortname: 'PF',
  },
  {
    name: 'Gabon',
    phonecode: '241',
    sortname: 'GA',
  },
  {
    name: 'Gambia',
    phonecode: '220',
    sortname: 'GM',
  },
  {
    name: 'Georgia',
    phonecode: '995',
    sortname: 'GE',
  },
  {
    name: 'Germany',
    phonecode: '49',
    sortname: 'DE',
  },
  {
    name: 'Ghana',
    phonecode: '233',
    sortname: 'GH',
  },
  {
    name: 'Gibraltar',
    phonecode: '350',
    sortname: 'GI',
  },
  {
    name: 'Greece',
    phonecode: '30',
    sortname: 'GR',
  },
  {
    name: 'Greenland',
    phonecode: '299',
    sortname: 'GL',
  },
  {
    name: 'Grenada',
    phonecode: '1473',
    sortname: 'GD',
  },
  {
    name: 'Guadeloupe',
    phonecode: '590',
    sortname: 'GP',
  },
  {
    name: 'Guam',
    phonecode: '1671',
    sortname: 'GU',
  },
  {
    name: 'Guatemala',
    phonecode: '502',
    sortname: 'GT',
  },
  {
    name: 'Guernsey',
    phonecode: '44',
    sortname: 'GG',
  },
  {
    name: 'Guinea',
    phonecode: '224',
    sortname: 'GN',
  },
  {
    name: 'Guinea-Bissau',
    phonecode: '245',
    sortname: 'GW',
  },
  {
    name: 'Guyana',
    phonecode: '595',
    sortname: 'GY',
  },
  {
    name: 'Haiti',
    phonecode: '509',
    sortname: 'HT',
  },
  {
    name: 'Holy See (Vatican City State)',
    phonecode: '379',
    sortname: 'VA',
  },
  {
    name: 'Honduras',
    phonecode: '504',
    sortname: 'HN',
  },
  {
    name: 'Hong Kong',
    phonecode: '852',
    sortname: 'HK',
  },
  {
    name: 'Hungary',
    phonecode: '36',
    sortname: 'HU',
  },
  {
    name: 'Iceland',
    phonecode: '354',
    sortname: 'IS',
  },
  {
    name: 'India',
    phonecode: '91',
    sortname: 'IN',
  },
  {
    name: 'Indonesia',
    phonecode: '62',
    sortname: 'ID',
  },
  {
    name: 'Iran, Islamic Republic of Persian Gulf',
    phonecode: '98',
    sortname: 'IR',
  },
  {
    name: 'Iraq',
    phonecode: '964',
    sortname: 'IQ',
  },
  {
    name: 'Ireland',
    phonecode: '353',
    sortname: 'IE',
  },
  {
    name: 'Isle of Man',
    phonecode: '44',
    sortname: 'IM',
  },
  {
    name: 'Israel',
    phonecode: '972',
    sortname: 'IL',
  },
  {
    name: 'Italy',
    phonecode: '39',
    sortname: 'IT',
  },
  {
    name: 'Jamaica',
    phonecode: '1876',
    sortname: 'JM',
  },
  {
    name: 'Japan',
    phonecode: '81',
    sortname: 'JP',
  },
  {
    name: 'Jersey',
    phonecode: '44',
    sortname: 'JE',
  },
  {
    name: 'Jordan',
    phonecode: '962',
    sortname: 'JO',
  },
  {
    name: 'Kazakhstan',
    phonecode: '77',
    sortname: 'KZ',
  },
  {
    name: 'Kenya',
    phonecode: '254',
    sortname: 'KE',
  },
  {
    name: 'Kiribati',
    phonecode: '686',
    sortname: 'KI',
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    phonecode: '850',
    sortname: 'KP',
  },
  {
    name: 'Korea, Republic of South Korea',
    phonecode: '82',
    sortname: 'KR',
  },
  {
    name: 'Kuwait',
    phonecode: '965',
    sortname: 'KW',
  },
  {
    name: 'Kyrgyzstan',
    phonecode: '996',
    sortname: 'KG',
  },
  {
    name: 'Laos',
    phonecode: '856',
    sortname: 'LA',
  },
  {
    name: 'Latvia',
    phonecode: '371',
    sortname: 'LV',
  },
  {
    name: 'Lebanon',
    phonecode: '961',
    sortname: 'LB',
  },
  {
    name: 'Lesotho',
    phonecode: '266',
    sortname: 'LS',
  },
  {
    name: 'Liberia',
    phonecode: '231',
    sortname: 'LR',
  },
  {
    name: 'Libyan Arab Jamahiriya',
    phonecode: '218',
    sortname: 'LY',
  },
  {
    name: 'Liechtenstein',
    phonecode: '423',
    sortname: 'LI',
  },
  {
    name: 'Lithuania',
    phonecode: '370',
    sortname: 'LT',
  },
  {
    name: 'Luxembourg',
    phonecode: '352',
    sortname: 'LU',
  },
  {
    name: 'Macao',
    phonecode: '853',
    sortname: 'MO',
  },
  {
    name: 'Macedonia',
    phonecode: '389',
    sortname: 'MK',
  },
  {
    name: 'Madagascar',
    phonecode: '261',
    sortname: 'MG',
  },
  {
    name: 'Malawi',
    phonecode: '265',
    sortname: 'MW',
  },
  {
    name: 'Malaysia',
    phonecode: '60',
    sortname: 'MY',
  },
  {
    name: 'Maldives',
    phonecode: '960',
    sortname: 'MV',
  },
  {
    name: 'Mali',
    phonecode: '223',
    sortname: 'ML',
  },
  {
    name: 'Malta',
    phonecode: '356',
    sortname: 'MT',
  },
  {
    name: 'Marshall Islands',
    phonecode: '692',
    sortname: 'MH',
  },
  {
    name: 'Martinique',
    phonecode: '596',
    sortname: 'MQ',
  },
  {
    name: 'Mauritania',
    phonecode: '222',
    sortname: 'MR',
  },
  {
    name: 'Mauritius',
    phonecode: '230',
    sortname: 'MU',
  },
  {
    name: 'Mayotte',
    phonecode: '262',
    sortname: 'YT',
  },
  {
    name: 'Mexico',
    phonecode: '52',
    sortname: 'MX',
  },
  {
    name: 'Micronesia, Federated States of Micronesia',
    phonecode: '691',
    sortname: 'FM',
  },
  {
    name: 'Moldova',
    phonecode: '373',
    sortname: 'MD',
  },
  {
    name: 'Monaco',
    phonecode: '377',
    sortname: 'MC',
  },
  {
    name: 'Mongolia',
    phonecode: '976',
    sortname: 'MN',
  },
  {
    name: 'Montenegro',
    phonecode: '382',
    sortname: 'ME',
  },
  {
    name: 'Montserrat',
    phonecode: '1664',
    sortname: 'MS',
  },
  {
    name: 'Morocco',
    phonecode: '212',
    sortname: 'MA',
  },
  {
    name: 'Mozambique',
    phonecode: '258',
    sortname: 'MZ',
  },
  {
    name: 'Myanmar',
    phonecode: '95',
    sortname: 'MM',
  },
  {
    name: 'Namibia',
    phonecode: '264',
    sortname: 'NA',
  },
  {
    name: 'Nauru',
    phonecode: '674',
    sortname: 'NR',
  },
  {
    name: 'Nepal',
    phonecode: '977',
    sortname: 'NP',
  },
  {
    name: 'Netherlands',
    phonecode: '31',
    sortname: 'NL',
  },
  {
    name: 'Netherlands Antilles',
    phonecode: '599',
    sortname: 'AN',
  },
  {
    name: 'New Caledonia',
    phonecode: '687',
    sortname: 'NC',
  },
  {
    name: 'New Zealand',
    phonecode: '64',
    sortname: 'NZ',
  },
  {
    name: 'Nicaragua',
    phonecode: '505',
    sortname: 'NI',
  },
  {
    name: 'Niger',
    phonecode: '227',
    sortname: 'NE',
  },
  {
    name: 'Nigeria',
    phonecode: '234',
    sortname: 'NG',
  },
  {
    name: 'Niue',
    phonecode: '683',
    sortname: 'NU',
  },
  {
    name: 'Norfolk Island',
    phonecode: '672',
    sortname: 'NF',
  },
  {
    name: 'Northern Mariana Islands',
    phonecode: '1670',
    sortname: 'MP',
  },
  {
    name: 'Norway',
    phonecode: '47',
    sortname: 'NO',
  },
  {
    name: 'Oman',
    phonecode: '968',
    sortname: 'OM',
  },
  {
    name: 'Pakistan',
    phonecode: '92',
    sortname: 'PK',
  },
  {
    name: 'Palau',
    phonecode: '680',
    sortname: 'PW',
  },
  {
    name: 'Palestinian Territory, Occupied',
    phonecode: '970',
    sortname: 'PS',
  },
  {
    name: 'Panama',
    phonecode: '507',
    sortname: 'PA',
  },
  {
    name: 'Papua New Guinea',
    phonecode: '675',
    sortname: 'PG',
  },
  {
    name: 'Paraguay',
    phonecode: '595',
    sortname: 'PY',
  },
  {
    name: 'Peru',
    phonecode: '51',
    sortname: 'PE',
  },
  {
    name: 'Philippines',
    phonecode: '63',
    sortname: 'PH',
  },
  {
    name: 'Pitcairn',
    phonecode: '872',
    sortname: 'PN',
  },
  {
    name: 'Poland',
    phonecode: '48',
    sortname: 'PL',
  },
  {
    name: 'Portugal',
    phonecode: '351',
    sortname: 'PT',
  },
  {
    name: 'Puerto Rico',
    phonecode: '1939',
    sortname: 'PR',
  },
  {
    name: 'Qatar',
    phonecode: '974',
    sortname: 'QA',
  },
  {
    name: 'Romania',
    phonecode: '40',
    sortname: 'RO',
  },
  {
    name: 'Russia',
    phonecode: '7',
    sortname: 'RU',
  },
  {
    name: 'Rwanda',
    phonecode: '250',
    sortname: 'RW',
  },
  {
    name: 'Reunion',
    phonecode: '262',
    sortname: 'RE',
  },
  {
    name: 'Saint Barthelemy',
    phonecode: '590',
    sortname: 'BL',
  },
  {
    name: 'Saint Helena, Ascension and Tristan Da Cunha',
    phonecode: '290',
    sortname: 'SH',
  },
  {
    name: 'Saint Kitts and Nevis',
    phonecode: '1869',
    sortname: 'KN',
  },
  {
    name: 'Saint Lucia',
    phonecode: '1758',
    sortname: 'LC',
  },
  {
    name: 'Saint Martin',
    phonecode: '590',
    sortname: 'MF',
  },
  {
    name: 'Saint Pierre and Miquelon',
    phonecode: '508',
    sortname: 'PM',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    phonecode: '1784',
    sortname: 'VC',
  },
  {
    name: 'Samoa',
    phonecode: '685',
    sortname: 'WS',
  },
  {
    name: 'San Marino',
    phonecode: '378',
    sortname: 'SM',
  },
  {
    name: 'Sao Tome and Principe',
    phonecode: '239',
    sortname: 'ST',
  },
  {
    name: 'Saudi Arabia',
    phonecode: '966',
    sortname: 'SA',
  },
  {
    name: 'Senegal',
    phonecode: '221',
    sortname: 'SN',
  },
  {
    name: 'Serbia',
    phonecode: '381',
    sortname: 'RS',
  },
  {
    name: 'Seychelles',
    phonecode: '248',
    sortname: 'SC',
  },
  {
    name: 'Sierra Leone',
    phonecode: '232',
    sortname: 'SL',
  },
  {
    name: 'Singapore',
    phonecode: '65',
    sortname: 'SG',
  },
  {
    name: 'Slovakia',
    phonecode: '421',
    sortname: 'SK',
  },
  {
    name: 'Slovenia',
    phonecode: '386',
    sortname: 'SI',
  },
  {
    name: 'Solomon Islands',
    phonecode: '677',
    sortname: 'SB',
  },
  {
    name: 'Somalia',
    phonecode: '252',
    sortname: 'SO',
  },
  {
    name: 'South Africa',
    phonecode: '27',
    sortname: 'ZA',
  },
  {
    name: 'South Sudan',
    phonecode: '211',
    sortname: 'SS',
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    phonecode: '500',
    sortname: 'GS',
  },
  {
    name: 'Spain',
    phonecode: '34',
    sortname: 'ES',
  },
  {
    name: 'Sri Lanka',
    phonecode: '94',
    sortname: 'LK',
  },
  {
    name: 'Sudan',
    phonecode: '249',
    sortname: 'SD',
  },
  {
    name: 'Suriname',
    phonecode: '597',
    sortname: 'SR',
  },
  {
    name: 'Svalbard and Jan Mayen',
    phonecode: '47',
    sortname: 'SJ',
  },
  {
    name: 'Swaziland',
    phonecode: '268',
    sortname: 'SZ',
  },
  {
    name: 'Sweden',
    phonecode: '46',
    sortname: 'SE',
  },
  {
    name: 'Switzerland',
    phonecode: '41',
    sortname: 'CH',
  },
  {
    name: 'Syrian Arab Republic',
    phonecode: '963',
    sortname: 'SY',
  },
  {
    name: 'Taiwan',
    phonecode: '886',
    sortname: 'TW',
  },
  {
    name: 'Tajikistan',
    phonecode: '992',
    sortname: 'TJ',
  },
  {
    name: 'Tanzania, United Republic of Tanzania',
    phonecode: '255',
    sortname: 'TZ',
  },
  {
    name: 'Thailand',
    phonecode: '66',
    sortname: 'TH',
  },
  {
    name: 'Timor-Leste',
    phonecode: '670',
    sortname: 'TL',
  },
  {
    name: 'Togo',
    phonecode: '228',
    sortname: 'TG',
  },
  {
    name: 'Tokelau',
    phonecode: '690',
    sortname: 'TK',
  },
  {
    name: 'Tonga',
    phonecode: '676',
    sortname: 'TO',
  },
  {
    name: 'Trinidad and Tobago',
    phonecode: '1868',
    sortname: 'TT',
  },
  {
    name: 'Tunisia',
    phonecode: '216',
    sortname: 'TN',
  },
  {
    name: 'Turkey',
    phonecode: '90',
    sortname: 'TR',
  },
  {
    name: 'Turkmenistan',
    phonecode: '993',
    sortname: 'TM',
  },
  {
    name: 'Turks and Caicos Islands',
    phonecode: '1649',
    sortname: 'TC',
  },
  {
    name: 'Tuvalu',
    phonecode: '688',
    sortname: 'TV',
  },
  {
    name: 'Uganda',
    phonecode: '256',
    sortname: 'UG',
  },
  {
    name: 'Ukraine',
    phonecode: '380',
    sortname: 'UA',
  },
  {
    name: 'United Arab Emirates',
    phonecode: '971',
    sortname: 'AE',
  },
  {
    name: 'United Kingdom',
    phonecode: '44',
    sortname: 'GB',
  },
  {
    name: 'United States',
    phonecode: '1',
    sortname: 'US',
  },
  {
    name: 'Uruguay',
    phonecode: '598',
    sortname: 'UY',
  },
  {
    name: 'Uzbekistan',
    phonecode: '998',
    sortname: 'UZ',
  },
  {
    name: 'Vanuatu',
    phonecode: '678',
    sortname: 'VU',
  },
  {
    name: 'Venezuela, Bolivarian Republic of Venezuela',
    phonecode: '58',
    sortname: 'VE',
  },
  {
    name: 'Vietnam',
    phonecode: '84',
    sortname: 'VN',
  },
  {
    name: 'Virgin Islands, British',
    phonecode: '1284',
    sortname: 'VG',
  },
  {
    name: 'Virgin Islands, U.S.',
    phonecode: '1340',
    sortname: 'VI',
  },
  {
    name: 'Wallis and Futuna',
    phonecode: '681',
    sortname: 'WF',
  },
  {
    name: 'Yemen',
    phonecode: '967',
    sortname: 'YE',
  },
  {
    name: 'Zambia',
    phonecode: '260',
    sortname: 'ZM',
  },
  {
    name: 'Zimbabwe',
    phonecode: '263',
    sortname: 'ZW',
  },
];

export default countriesJSON;
