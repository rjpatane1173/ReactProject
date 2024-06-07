import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState('+1'); // Initial country code
  const [showCountryNames, setShowCountryNames] = useState(false); // State to manage visibility of country names
  const [contact, setContact] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
    // Hide country names when a country code is selected
    setShowCountryNames(false);
  };

  const toggleCountryNames = () => {
    setShowCountryNames(true); // Toggle visibility of country names
  };

  const handleChange = (e) => {
    let input = e.target.value;
    // Remove non-numeric characters
    input = input.replace(/\D/g, '');
    // Limit input to 10 characters
    if (input.length <= 10) {
      setContact(input);
    }
  };

  const filteredCountries = searchTerm
    ? countries.filter(
        (country) =>
          country.code.includes(searchTerm) || country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  return (
    <div className="contact-form-container">
      <h2>Get actionable insights and expert advice to increase your revenue, contact us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <div className="contact-input-container">
            <select
              id="countryCode"
              name="countryCode"
              value={countryCode}
              onChange={handleCountryCodeChange}
              onClick={toggleCountryNames} // Toggle visibility of country names on click
              onBlur={() => setShowCountryNames(false)} // Hide country names when focus is lost
              onFocus={() => setShowCountryNames(true)} // Show country names when focused
              size={1} // it is preventing from more options to chose
              style={{ width: "80px" }}
            >
              {filteredCountries.map((country) => (
                <option key={country.code} value={country.code}>
                   {country.code} {showCountryNames && country.name}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={contact}
              onChange={handleChange}
              maxLength="10" // Max length is 10
              required
            />
            {showCountryNames && (
              <div className="country-dropdown">
                <ul>
                  {filteredCountries.map((country) => (
                    <li key={country.code} onClick={() => setCountryCode(country.code)}>
                      {country.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="form-group submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
const countries = [
    { code: '+93', name: 'Afghanistan' },
    { code: '+355', name: 'Albania' },
    { code: '+213', name: 'Algeria' },
    { code: '+1-684', name: 'American Samoa' },
    { code: '+376', name: 'Andorra' },
    { code: '+244', name: 'Angola' },
    { code: '+1-264', name: 'Anguilla' },
    { code: '+672', name: 'Antarctica' },
    { code: '+1-268', name: 'Antigua and Barbuda' },
    { code: '+54', name: 'Argentina' },
    { code: '+374', name: 'Armenia' },
    { code: '+297', name: 'Aruba' },
    { code: '+61', name: 'Australia' },
    { code: '+43', name: 'Austria' },
    { code: '+994', name: 'Azerbaijan' },
    { code: '+1-242', name: 'Bahamas' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+1-246', name: 'Barbados' },
    { code: '+375', name: 'Belarus' },
    { code: '+32', name: 'Belgium' },
    { code: '+501', name: 'Belize' },
    { code: '+229', name: 'Benin' },
    { code: '+1-441', name: 'Bermuda' },
    { code: '+975', name: 'Bhutan' },
    { code: '+591', name: 'Bolivia' },
    { code: '+387', name: 'Bosnia and Herzegovina' },
    { code: '+267', name: 'Botswana' },
    { code: '+55', name: 'Brazil' },
    { code: '+246', name: 'British Indian Ocean Territory' },
    { code: '+1-284', name: 'British Virgin Islands' },
    { code: '+673', name: 'Brunei' },
    { code: '+359', name: 'Bulgaria' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+257', name: 'Burundi' },
    { code: '+855', name: 'Cambodia' },
    { code: '+237', name: 'Cameroon' },
    { code: '+1', name: 'Canada' },
    { code: '+238', name: 'Cape Verde' },
    { code: '+1-345', name: 'Cayman Islands' },
    { code: '+236', name: 'Central African Republic' },
    { code: '+235', name: 'Chad' },
    { code: '+56', name: 'Chile' },
    { code: '+86', name: 'China' },
    { code: '+61', name: 'Christmas Island' },
    { code: '+61', name: 'Cocos Islands' },
    { code: '+57', name: 'Colombia' },
    { code: '+269', name: 'Comoros' },
    { code: '+682', name: 'Cook Islands' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+385', name: 'Croatia' },
    { code: '+53', name: 'Cuba' },
    { code: '+599', name: 'Curacao' },
    { code: '+357', name: 'Cyprus' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+243', name: 'Democratic Republic of the Congo' },
    { code: '+45', name: 'Denmark' },
    { code: '+253', name: 'Djibouti' },
    { code: '+1-767', name: 'Dominica' },
    { code: '+1-809', name: 'Dominican Republic' },
    { code: '+670', name: 'East Timor' },
    { code: '+593', name: 'Ecuador' },
    { code: '+20', name: 'Egypt' },
    { code: '+503', name: 'El Salvador' },
    { code: '+240', name: 'Equatorial Guinea' },
    { code: '+291', name: 'Eritrea' },
    { code: '+372', name: 'Estonia' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+500', name: 'Falkland Islands' },
    { code: '+298', name: 'Faroe Islands' },
    { code: '+679', name: 'Fiji' },
    { code: '+358', name: 'Finland' },
    { code: '+33', name: 'France' },
    { code: '+689', name: 'French Polynesia' },
    { code: '+241', name: 'Gabon' },
    { code: '+220', name: 'Gambia' },
    { code: '+995', name: 'Georgia' },
    { code: '+49', name: 'Germany' },
    { code: '+233', name: 'Ghana' },
    { code: '+350', name: 'Gibraltar' },
    { code: '+30', name: 'Greece' },
    { code: '+299', name: 'Greenland' },
    { code: '+1-473', name: 'Grenada' },
    { code: '+1-671', name: 'Guam' },
    { code: '+502', name: 'Guatemala' },
    { code: '+44-1481', name: 'Guernsey' },
    { code: '+224', name: 'Guinea' },
    { code: '+245', name: 'Guinea-Bissau' },
    { code: '+592', name: 'Guyana' },
    { code: '+509', name: 'Haiti' },
    { code: '+504', name: 'Honduras' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+36', name: 'Hungary' },
    { code: '+354', name: 'Iceland' },
    { code: '+91', name: 'India' },
    { code: '+62', name: 'Indonesia' },
    { code: '+98', name: 'Iran' },
    { code: '+964', name: 'Iraq' },
    { code: '+353', name: 'Ireland' },
    { code: '+44-1624', name: 'Isle of Man' },
    { code: '+972', name: 'Israel' },
    { code: '+39', name: 'Italy' },
    { code: '+225', name: 'Ivory Coast' },
    { code: '+1-876', name: 'Jamaica' },
    { code: '+81', name: 'Japan' },
    { code: '+44-1534', name: 'Jersey' },
    { code: '+962', name: 'Jordan' },
    { code: '+7', name: 'Kazakhstan' },
    { code: '+254', name: 'Kenya' },
    { code: '+686', name: 'Kiribati' },
    { code: '+383', name: 'Kosovo' },
    { code: '+965', name: 'Kuwait' },
    { code: '+996', name: 'Kyrgyzstan' },
    { code: '+856', name: 'Laos' },
    { code: '+371', name: 'Latvia' },
    { code: '+961', name: 'Lebanon' },
    { code: '+266', name: 'Lesotho' },
    { code: '+231', name: 'Liberia' },
    { code: '+218', name: 'Libya' },
    { code: '+423', name: 'Liechtenstein' },
    { code: '+370', name: 'Lithuania' },
    { code: '+352', name: 'Luxembourg' },
    { code: '+853', name: 'Macao' },
    { code: '+389', name: 'Macedonia' },
    { code: '+261', name: 'Madagascar' },
    { code: '+265', name: 'Malawi' },
    { code: '+60', name: 'Malaysia' },
    { code: '+960', name: 'Maldives' },
    { code: '+223', name: 'Mali' },
    { code: '+356', name: 'Malta' },
    { code: '+692', name: 'Marshall Islands' },
    { code: '+222', name: 'Mauritania' },
    { code: '+230', name: 'Mauritius' },
    { code: '+262', name: 'Mayotte' },
    { code: '+52', name: 'Mexico' },
    { code: '+691', name: 'Micronesia' },
    { code: '+373', name: 'Moldova' },
    { code: '+377', name: 'Monaco' },
    { code: '+976', name: 'Mongolia' },
    { code: '+382', name: 'Montenegro' },
    { code: '+1-664', name: 'Montserrat' },
    { code: '+212', name: 'Morocco' },
    { code: '+258', name: 'Mozambique' },
    { code: '+95', name: 'Myanmar' },
    { code: '+264', name: 'Namibia' },
    { code: '+674', name: 'Nauru' },
    { code: '+977', name: 'Nepal' },
    { code: '+31', name: 'Netherlands' },
    { code: '+599', name: 'Netherlands Antilles' },
    { code: '+687', name: 'New Caledonia' },
    { code: '+64', name: 'New Zealand' },
    { code: '+505', name: 'Nicaragua' },
    { code: '+227', name: 'Niger' },
    { code: '+234', name: 'Nigeria' },
    { code: '+683', name: 'Niue' },
    { code: '+850', name: 'North Korea' },
    { code: '+1-670', name: 'Northern Mariana Islands' },
    { code: '+47', name: 'Norway' },
    { code: '+968', name: 'Oman' },
    { code: '+92', name: 'Pakistan' },
    { code: '+680', name: 'Palau' },
    { code: '+970', name: 'Palestine' },
    { code: '+507', name: 'Panama' },
    { code: '+675', name: 'Papua New Guinea' },
    { code: '+595', name: 'Paraguay' },
    { code: '+51', name: 'Peru' },
    { code: '+63', name: 'Philippines' },
    { code: '+64', name: 'Pitcairn' },
    { code: '+48', name: 'Poland' },
    { code: '+351', name: 'Portugal' },
    { code: '+1-787', name: 'Puerto Rico' },
    { code: '+1-939', name: 'Puerto Rico' },
    { code: '+974', name: 'Qatar' },
    { code: '+242', name: 'Republic of the Congo' },
    { code: '+262', name: 'Reunion' },
    { code: '+40', name: 'Romania' },
    { code: '+7', name: 'Russia' },
    { code: '+250', name: 'Rwanda' },
    { code: '+590', name: 'Saint Barthelemy' },
    { code: '+290', name: 'Saint Helena' },
    { code: '+1-869', name: 'Saint Kitts and Nevis' },
    { code: '+1-758', name: 'Saint Lucia' },
    { code: '+590', name: 'Saint Martin' },
    { code: '+508', name: 'Saint Pierre and Miquelon' },
    { code: '+1-784', name: 'Saint Vincent and the Grenadines' },
    { code: '+685', name: 'Samoa' },
    { code: '+378', name: 'San Marino' },
    { code: '+239', name: 'Sao Tome and Principe' },
    { code: '+966', name: 'Saudi Arabia' },
    { code: '+221', name: 'Senegal' },
    { code: '+381', name: 'Serbia' },
    { code: '+248', name: 'Seychelles' },
    { code: '+232', name: 'Sierra Leone' },
    { code: '+65', name: 'Singapore' },
    { code: '+599', name: 'Sint Maarten' },
    { code: '+421', name: 'Slovakia' },
    { code: '+386', name: 'Slovenia' },
    { code: '+677', name: 'Solomon Islands' },
    { code: '+252', name: 'Somalia' },
    { code: '+27', name: 'South Africa' },
    { code: '+82', name: 'South Korea' },
    { code: '+211', name: 'South Sudan' },
    { code: '+34', name: 'Spain' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+249', name: 'Sudan' },
    { code: '+597', name: 'Suriname' },
    { code: '+47', name: 'Svalbard and Jan Mayen' },
    { code: '+268', name: 'Swaziland' },
    { code: '+46', name: 'Sweden' },
    { code: '+41', name: 'Switzerland' },
    { code: '+963', name: 'Syria' },
    { code: '+886', name: 'Taiwan' },
    { code: '+992', name: 'Tajikistan' },
    { code: '+255', name: 'Tanzania' },
    { code: '+66', name: 'Thailand' },
    { code: '+670', name: 'Timor-Leste' },
    { code: '+228', name: 'Togo' },
    { code: '+690', name: 'Tokelau' },
    { code: '+676', name: 'Tonga' },
    { code: '+1-868', name: 'Trinidad and Tobago' },
    { code: '+216', name: 'Tunisia' },
    { code: '+90', name: 'Turkey' },
    { code: '+993', name: 'Turkmenistan' },
    { code: '+1-649', name: 'Turks and Caicos Islands' },
    { code: '+688', name: 'Tuvalu' },
    { code: '+1-340', name: 'U.S. Virgin Islands' },
    { code: '+256', name: 'Uganda' },
    { code: '+380', name: 'Ukraine' },
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+1', name: 'United States' },
    { code: '+598', name: 'Uruguay' },
    { code: '+998', name: 'Uzbekistan' },
    { code: '+678', name: 'Vanuatu' },
    { code: '+379', name: 'Vatican' },
    { code: '+58', name: 'Venezuela' },
    { code: '+84', name: 'Vietnam' },
    { code: '+681', name: 'Wallis and Futuna' },
    { code: '+212', name: 'Western Sahara' },
    { code: '+967', name: 'Yemen' },
    { code: '+260', name: 'Zambia' },
    { code: '+263', name: 'Zimbabwe' }
  ];
  