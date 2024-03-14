import axios from "axios";
import { useEffect, useState } from "react";
// import HijriDatePicker from 'hijri-date-picker';

const arabLeagueCountries = [
  { countryCode: "DZ", city: "الجزائر" }, // Algiers (al-Jazā'ir)
  { countryCode: "BH", city: "المنامة" }, // Manama (al-Manāmah)
  { countryCode: "KM", city: "موروني" }, // Moroni (Mūrūnī)
  { countryCode: "DJ", city: "جيبوتي" }, // Djibouti City (Madīnat Jībūtī)
  { countryCode: "EG", city: "القاهرة" }, // Cairo (al-Qāhirah)
  { countryCode: "IQ", city: "بغداد" }, // Baghdad (Baghdād)
  { countryCode: "JO", city: "عمان" }, // Amman (Ammān)
  { countryCode: "KW", city: "مدينة الكويت" }, // Kuwait City (Madīnat al-Kuwayt)
  { countryCode: "LB", city: "بيروت" }, // Beirut (Bayrūt)
  { countryCode: "LY", city: "طرابلس" }, // Tripoli (Ṭrābulus)
  { countryCode: "MR", city: "نواكشوط" }, // Nouakchott (Nawākshūṭ)
  { countryCode: "MA", city: "الرباط" }, // Rabat (ar-Rabāṭ)
  { countryCode: "OM", city: "مسقط" }, // Muscat (Masqaṭ)
  { countryCode: "PS", city: "القدس" }, // East Jerusalem (al-Quds ash-Sharqiyyah (al-ʿĀṣimah al-Muṭālaba bihā))
  { countryCode: "QA", city: "الدوحة" }, // Doha (ad-Dawḥah)
  { countryCode: "SA", city: "الرياض" }, // Riyadh (ar-Riyāḍ)
  { countryCode: "SO", city: "مقديشو" }, // Mogadishu (Muqdisho)
  { countryCode: "SD", city: "الخرطوم" }, // Khartoum (al-Khartūm)
  //   { countryCode: "SY", city: "دمشق" }, // Damascus (Dimashq)
  { countryCode: "TN", city: "تونس" }, // Tun   is (Tūnis)
  { countryCode: "AE", city: "أبوظبي" }, // Abu Dhabi (Abū Ḍhabī)
  { countryCode: "YE", city: "صنعاء" }, // Sanaa (Ṣanʿāʾ)
];

interface PrayerTimings {
  Imsak: string;
  Fajr: string;
  Maghrib: string;
}
function Table() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimings[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add state for loading

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setIsLoading(true);
      try {
        const timingsData = await Promise.all(
          arabLeagueCountries.map(async (capital) => {
            const url = `https://api.aladhan.com/v1/timingsByCity?country=${capital.countryCode}&city=${capital.city}`;
            const response = await axios.get(url);
            return response.data.data.timings;
          })
        );
        setPrayerTimes(timingsData);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  return (
    <div className="mt-5 ">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin w-[100px] h-[100px]"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="none" height="156" width="156" />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="128"
              x2="128"
              y1="32"
              y2="64"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="195.9"
              x2="173.3"
              y1="60.1"
              y2="82.7"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="224"
              x2="192"
              y1="128"
              y2="128"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="195.9"
              x2="173.3"
              y1="195.9"
              y2="173.3"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="128"
              x2="128"
              y1="224"
              y2="192"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              color="whit"
              x1="60.1"
              x2="82.7"
              y1="195.9"
              y2="173.3"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="32"
              x2="64"
              y1="128"
              y2="128"
            />
            <line
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              x1="60.1"
              x2="82.7"
              y1="60.1"
              y2="82.7"
            />
          </svg>
        </div>
      ) : (
        <>
          <div>
            <p className=" text-xl">
              مواعيد أذان الفجر والمغرب في الوطن العربي
            </p>
            {/* <HijriDatePicker
              inputName="hijri_date"
              className="form-control"
              selectedDate="1439/08/02"
              dateFormat="iYYYY/iMM/iDD"
            /> */}
          </div>
          <table className="w-full  table-auto bg-transparent mt-3  ">
            <thead>
              <tr className="border border-gray">
                <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                  المدينة
                </th>
                <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                  امساك
                </th>
                <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                  الفجر
                </th>
                <th className="py-1 px-3  lg:p-3 border border-gray tracking-wider ">
                  المغرب
                </th>
              </tr>
            </thead>
            <tbody>
              {prayerTimes.map((timings, index) => (
                <tr key={index} className="border border-gray">
                  <td className="py-1 px-3 lg:p-3 border whitespace-nowrap lg:whitespace-normal hover:text-font border-gray tracking-wider text-dark">
                    {arabLeagueCountries[index].city}
                  </td>
                  <td className="py-1 px-3 lg:p-3 border whitespace-nowrap lg:whitespace-normal hover:text-font border-gray tracking-wider text-dark">
                    {timings.Imsak}
                  </td>
                  <td className="py-1 px-3 lg:p-3 border whitespace-nowrap lg:whitespace-normal hover:text-font border-gray tracking-wider text-dark">
                    {timings.Fajr}
                  </td>
                  <td className="py-1 px-3 lg:p-3 border whitespace-nowrap lg:whitespace-normal hover:text-font border-gray tracking-wider text-dark">
                    {timings.Maghrib}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Table;
